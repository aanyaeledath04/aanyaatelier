/* ==========================================================================
   Aanya's Artelier — gallery rendering + filtering
   Reads ARTWORKS and MEDIUM_ORDER from data.js. Nothing here needs to
   change when new art is added — only data.js does.
   ========================================================================== */

(function () {
  const state = {
    medium: "all",
    year: "all",
    sort: "newest"
  };

  const grid = document.getElementById("gallery-grid");
  const tabsWrap = document.getElementById("medium-tabs");
  const yearSelect = document.getElementById("year-filter");
  const sortSelect = document.getElementById("sort-filter");
  const resultCount = document.getElementById("result-count");
  const featuredScroll = document.getElementById("featured-scroll");

  if (!grid) return; // not on the gallery page

  /* ---------- build filter controls from data ---------- */

  function buildMediumTabs() {
    const counts = {};
    ARTWORKS.forEach(a => { counts[a.medium] = (counts[a.medium] || 0) + 1; });

    const all = document.createElement("button");
    all.className = "medium-tab active";
    all.textContent = `All (${ARTWORKS.length})`;
    all.dataset.medium = "all";
    tabsWrap.appendChild(all);

    MEDIUM_ORDER.forEach(m => {
      const count = counts[m.key] || 0;
      if (!count) return; // skip empty mediums until they have work
      const btn = document.createElement("button");
      btn.className = "medium-tab";
      btn.textContent = `${m.label} (${count})`;
      btn.dataset.medium = m.key;
      tabsWrap.appendChild(btn);
    });

    tabsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".medium-tab");
      if (!btn) return;
      state.medium = btn.dataset.medium;
      [...tabsWrap.children].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      render();
    });
  }

  function buildYearFilter() {
    const years = [...new Set(ARTWORKS.map(a => a.year).filter(y => y !== null))]
      .sort((a, b) => b - a);
    years.forEach(y => {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    });
    yearSelect.addEventListener("change", () => {
      state.year = yearSelect.value;
      render();
    });
  }

  function bindSort() {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      render();
    });
  }

  /* ---------- render ---------- */

  /* ---------- date sorting ----------
     year is just the calendar year, so "newest" sorting on its own
     can't tell June 2026 apart from January 2026. yearLabel carries
     the month when known ("Jun 2026"), so sortValue reads it out and
     builds a proper year*12+month key. A year with no month (e.g.
     plain "2026") sorts as if it were January of that year -- earlier
     than any dated month in the same year. Undated pieces sort last. */

  const MONTHS = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };

  function sortValue(art) {
    if (!art.year) return -Infinity;
    const match = /^([A-Za-z]{3})\s+\d{4}$/.exec(art.yearLabel || "");
    const month = match ? (MONTHS[match[1]] || 0) : 0;
    return art.year * 12 + month;
  }

  function getFiltered() {
    let list = ARTWORKS.filter(a => {
      if (state.medium !== "all" && a.medium !== state.medium) return false;
      if (state.year !== "all" && String(a.year) !== state.year) return false;
      return true;
    });

    list = list.slice().sort((a, b) => {
      if (state.sort === "newest") return sortValue(b) - sortValue(a);
      if (state.sort === "oldest") return sortValue(a) - sortValue(b);
      if (state.sort === "az") return a.title.localeCompare(b.title);
      return 0;
    });

    return list;
  }

  function cardHTML(art) {
    return `
      <div class="art-card" data-title="${escapeAttr(art.title)}">
        <div class="frame">
          <div class="frame-img">
            <img src="images/${art.image}" alt="${escapeAttr(art.title)}" loading="lazy">
          </div>
          <div class="plaque">
            ${art.title ? `<p class="plaque-title">${art.title}</p>` : ""}
            <p class="plaque-meta">${art.mediumLabel} · ${art.yearLabel}</p>
          </div>
        </div>
      </div>`;
  }

  function render() {
    const list = getFiltered();
    resultCount.textContent = `${list.length} piece${list.length === 1 ? "" : "s"}`;

    if (!list.length) {
      grid.innerHTML = `<div class="empty-state">No pieces match these filters yet.</div>`;
      return;
    }

    grid.innerHTML = list.map(cardHTML).join("");

    [...grid.querySelectorAll(".art-card")].forEach((el, i) => {
      el.addEventListener("click", () => openLightbox(list, i));
    });

    layoutMasonryGrid(list);
  }

  /* ---------- masonry layout (dense, gap-free, newest-first) ----------
     Each artwork's ratio (height/width) is already known from data.js,
     so the row span is computed the instant the card exists -- using
     the card's rendered column WIDTH (available immediately from CSS
     Grid layout, no image load required) times its known ratio to get
     the expected image height, then converting that to a row span. */

  const ROW_UNIT = 4;   // px, must match grid-auto-rows in CSS
  const ROW_GAP = 36;   // px, desired visual gap between stacked cards
  const PLAQUE_H = 68;  // px, approx. height of the title/medium label under the image
  const FRAME_PAD = 20; // px, approx. combined top/side padding of the frame

  function layoutMasonryGrid(list) {
    const cards = [...grid.querySelectorAll(".art-card")];
    cards.forEach((card, i) => {
      const art = list[i];
      const colWidth = card.getBoundingClientRect().width;
      const imgHeight = (colWidth - FRAME_PAD) * art.ratio;
      const totalHeight = imgHeight + PLAQUE_H + FRAME_PAD + ROW_GAP;
      const span = Math.ceil(totalHeight / ROW_UNIT);
      card.style.gridRowEnd = `span ${span}`;
    });
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => layoutMasonryGrid(getFiltered()), 150);
  });

  function renderFeatured() {
    if (!featuredScroll) return;
    const featured = ARTWORKS.filter(a => a.featured);
    if (!featured.length) {
      featuredScroll.closest(".featured-section")?.remove();
      return;
    }
    featuredScroll.innerHTML = featured.map(art => `
      <div class="featured-card" data-title="${escapeAttr(art.title)}">
        <div class="frame">
          <img src="images/${art.image}" alt="${escapeAttr(art.title)}" loading="lazy">
        </div>
        ${art.title ? `<p class="label">${art.title}</p>` : ""}
      </div>`).join("");

    [...featuredScroll.querySelectorAll(".featured-card")].forEach((el, i) => {
      el.addEventListener("click", () => openLightbox(featured, i));
    });
  }

  /* ---------- lightbox ---------- */

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxMeta = document.getElementById("lightbox-meta");
  const lightboxBlurb = document.getElementById("lightbox-blurb");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  let lightboxList = [];
  let lightboxIndex = -1;

  function openLightbox(list, index) {
    lightboxList = list;
    lightboxIndex = index;
    showLightboxItem();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function showLightboxItem() {
    const art = lightboxList[lightboxIndex];
    lightboxImg.src = `images/${art.image}`;
    lightboxImg.alt = art.title;
    lightboxTitle.textContent = art.title;
    lightboxTitle.style.display = art.title ? "block" : "none";
    lightboxMeta.textContent = `${art.mediumLabel} · ${art.yearLabel}`;
    lightboxBlurb.textContent = art.blurb || "";
    lightboxBlurb.style.display = art.blurb ? "block" : "none";
  }

  function showNext() {
    if (!lightboxList.length) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxList.length;
    showLightboxItem();
  }

  function showPrev() {
    if (!lightboxList.length) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    showLightboxItem();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
    lightboxPrev.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    });

    /* touch swipe: left = next, right = previous */
    let touchStartX = null;
    const SWIPE_THRESHOLD = 40;

    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX < 0) showNext();
        else showPrev();
      }
      touchStartX = null;
    });
  }

  /* ---------- utils ---------- */

  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  /* ---------- init ---------- */

  buildMediumTabs();
  buildYearFilter();
  bindSort();
  renderFeatured();
  render();
})();

(function () {
  function placeLanguageSelector() {
    const trigger = document.getElementById("localization-select-trigger");
    const search = document.getElementById("search-bar-entry");
    const right = document.querySelector(".topbar-right-container");
    if (!trigger || !search || !right) {
      return;
    }

    const wrapper = trigger.parentElement;
    const searchWrap = search.parentElement;
    if (!wrapper || !searchWrap) {
      return;
    }

    if (wrapper.parentElement === right && wrapper.nextElementSibling === searchWrap) {
      return;
    }

    wrapper.classList.add("taliup-lang-select");
    right.insertBefore(wrapper, searchWrap);
  }

  function schedule() {
    requestAnimationFrame(placeLanguageSelector);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule);
  } else {
    schedule();
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

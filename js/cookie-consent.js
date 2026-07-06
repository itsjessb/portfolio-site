(function () {
  "use strict";

  var STORAGE_KEY = "cookie-consent";

  var banner = document.getElementById("cookie-banner");
  var acceptBtn = document.getElementById("cookie-accept");
  var rejectBtn = document.getElementById("cookie-reject");
  var reopenBtns = document.querySelectorAll(".open-cookie-preferences");

  function getConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // localStorage unavailable (private browsing, blocked storage, etc.).
      // The choice just won't persist, so the banner reappears next visit.
    }
  }

  function showBanner() {
    if (banner) banner.hidden = false;
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  var existing = getConsent();

  if (existing === "accepted" || existing === "rejected") {
    hideBanner();
  } else if (navigator.globalPrivacyControl === true) {
    // California CPRA: a detected Global Privacy Control signal is a valid,
    // standing opt-out request. Honor it without prompting.
    setConsent("rejected");
    hideBanner();
  } else {
    showBanner();
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      setConsent("accepted");
      hideBanner();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      setConsent("rejected");
      hideBanner();
    });
  }

  for (var i = 0; i < reopenBtns.length; i++) {
    reopenBtns[i].addEventListener("click", function () {
      showBanner();
    });
  }

  // Exposed for the future Google Analytics snippet: load gtag only when
  // this returns true, and re-check it after Accept/Reject is clicked.
  window.hasAnalyticsConsent = function () {
    return getConsent() === "accepted";
  };
})();

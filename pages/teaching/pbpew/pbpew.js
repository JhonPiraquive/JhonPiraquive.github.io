(function () {
  "use strict";

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
      fontFamily: "Poppins, sans-serif",
    });
    var diagrams = document.querySelectorAll(".mermaid");
    if (diagrams.length) {
      mermaid.run({ querySelector: ".mermaid" });
    }
  }

  if (typeof hljs !== "undefined") {
    document.querySelectorAll("pre code").forEach(function (block) {
      hljs.highlightElement(block);
    });
  }
})();


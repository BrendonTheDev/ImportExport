(() => {
  "use strict";
  document.body.appendChild(
    (function () {
      const e = document.createElement("div");
      return (e.textContent = "Hi! My name is " + "Brendon"), e;
    })()
  );
})();

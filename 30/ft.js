// https://codepen.io/shannonmoeller/pen/ZRdEZz?editors=1010

const SELECTOR_FOCUSABLE = `
    a[href],
    area[href],
    button:not([disabled]):not([aria-hidden]),
    input:not([disabled]):not([aria-hidden]):not([type="hidden"]),
    select:not([disabled]):not([aria-hidden]),
    textarea:not([disabled]):not([aria-hidden]),
    embed,
    iframe,
    object,
    [contenteditable],
    [tabindex]:not([tabindex^="-"])
`;

class FocusTrapElement extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("focusout", this.onFocusOut);
    this.addEventListener("keydown", this.onKeyDown);
  }

  connectedCallback() {
    this.setAttribute("tabindex", "0");
  }

  onFocusOut() {
    // Reclaim focus if it's lost for some reason.
    requestAnimationFrame(() => {
      const isVisible = Boolean(this.offsetParent);
      const isTrapped = Boolean(document.activeElement.closest("focus-trap"));

      if (isVisible && !isTrapped) {
        this.focus();
      }
    });
  }

  onKeyDown(event) {
    if (event.key !== "Tab") {
      return;
    }

    const { activeElement } = document;
    const elements = this.querySelectorAll(SELECTOR_FOCUSABLE);
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    // Cycle focus of child elements.
    if (event.shiftKey) {
      if (this === activeElement || firstElement === activeElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (lastElement === activeElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
}

customElements.define("focus-trap", FocusTrapElement);

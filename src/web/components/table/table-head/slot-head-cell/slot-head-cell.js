var Template = require("./slot-head-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class SlotHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.width) {
      this.setWidth(this.initialOptions.width);
    }
  }

  addSlot(slotElement) {
    this._el.appendChild(slotElement);
  }

  setWidth(width) {
    this.el.style.width = this._frToPercentage(width);
  }
}

SlotHeadCell._interface =
  Interface["components"]["Table"]["partials"]["TableHead"]["partials"][
    "SlotHeadCell"
  ];
SlotHeadCell._defaults = {
  slot: "",
  width: ""
};

module.exports = SlotHeadCell;

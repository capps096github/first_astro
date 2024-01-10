// Page Class
class Page {
  constructor(href, label, otherUrls = []) {
    this.href = href;
    this.label = label;
    this.otherUrls = otherUrls.concat(href);
  }
}
// define data types js constructors
// check if list contains a given item
// add script tags to astro pages
// PWAs in astro
export const pages = [
  new Page("/", "Food", ["/food", ""]),
  new Page("/coffee", "Coffee Shop"),
  new Page("/bar", "Bar Menu"),
  new Page("/rooms", "Rooms"),
];

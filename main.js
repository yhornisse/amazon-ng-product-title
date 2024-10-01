const regexpList = [/.*ジュニア文庫.*/]
const tag = document.getElementById("productTitle");
if (tag) {
  const title = tag.innerHTML;
  for (let r of regexpList) {
    if (title.match(r)) {
        const e = document.createElement("div");
        e.innerHTML = "NGワードを含んでます";
        e.style =
        "position: fixed; left: 0.5rem; top: 0.5rem; z-index: 255; " +
        "opacity: 0.8; width: 15rem; height: 1.5rem; " +
        "background-color: lightgrey; color: red; font-weight: bold" +
        "text-align: center;";
        document.body.appendChild(e);
    }
  }
}

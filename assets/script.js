document.addEventListener("DOMContentLoaded", function() {
  const searchBox = document.getElementById("searchBox");
  const app = document.getElementById("app");

  searchBox.addEventListener("input", function() {
    const searchTerm = searchBox.value.toLowerCase(); // 将搜索关键词转换为小写
    const elements = app.children;

    // 遍历 #app 中的元素
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elementText = element.textContent.toLowerCase(); // 将元素文本内容转换为小写

      if (searchTerm === "") {
        element.classList.remove("hidden");
        element.classList.remove("highlight");
      } else if (elementText.includes(searchTerm)) {
        element.classList.remove("hidden");
        element.classList.add("highlight"); // 高亮显示搜索结果
      } else {
        element.classList.add("hidden");
        element.classList.remove("highlight");
      }
    }
  });
});

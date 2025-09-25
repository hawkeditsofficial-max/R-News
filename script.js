function addNews() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Please enter both title and content.");
    return;
  }

  const newsContainer = document.getElementById("news-container");
  const newsItem = document.createElement("div");
  newsItem.className = "news";
  newsItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  
  newsContainer.prepend(newsItem);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

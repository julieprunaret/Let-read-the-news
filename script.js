const API_KEY = "039a6308d88f4abb97f9c37ac8b661cf";
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
const articlesBox = document.getElementById("articlesBox");

const fetchMoviesJSON = async () => {
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
};

fetchMoviesJSON().then((articles) => {
  articles = articles.articles;
  console.log(articles); // fetched artciles
  articles.slice(0, 10).map((article) => {
    theArticle = document.createElement("li");
    articlesBox.appendChild(theArticle);

    theArticle.innerText = article.title;
  });
});

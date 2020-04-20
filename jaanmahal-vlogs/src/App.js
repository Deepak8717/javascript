import React from "react";

const App = () => {
  let key = process.env.REACT_APP_KEY;
  let jmVlogsId = "UUS2BV5DWHxW86xykeiO9emw";
  let mVlogsId = "UUVQeCeKArXApyD-RtYv2Wmw";
  let playlistId = jmVlogsId;
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet&maxResults=10`;

  let featuredVideoSection = document.querySelector(".section");
  let mainSection = document.querySelector(".main");

  function buttonClick() {
    let links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        link.parentNode.querySelector(".active").classList.remove("active");
        event.currentTarget.classList.add("active");
        playlistId = event.currentTarget.classList.contains("link-m")
          ? mVlogsId
          : jmVlogsId;
        url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet&maxResults=10`;
        featuredVideoSection.textContent = "";
        mainSection.textContent = "";
        getVideos(url);
      });
    });
  }

  function getVideos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let id = data.items[0].snippet.resourceId.videoId;
        getFeaturedVideo(id);
        getAllVideos(data);
      })
      .catch((err) => {
        mainSection.innerHTML =
          "<p class='error'>This is a free application. We have reached limit of 3,000,000 units for the day. Please try again tomorrow.</p>";
      });
  }

  function getFeaturedVideo(id) {
    featuredVideoSection.innerHTML = `<iframe class="section__banner" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  function createVideo(
    videoId,
    articleThumbnail,
    articleTitle,
    articleSummary
  ) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let content = document.createElement("div");
    let heading = document.createElement("h2");
    let summary = document.createElement("p");
    let headingContent = document.createTextNode(articleTitle);
    let summaryContent = document.createTextNode(articleSummary);
    article.classList.add("article");
    article.setAttribute("data-key", videoId);
    image.classList.add("article__thumbnail");
    image.setAttribute("alt", "Thumbnail of the video");
    image.setAttribute("src", articleThumbnail);
    content.classList.add("article__content");
    heading.classList.add("article__title");
    summary.appendChild(summaryContent);
    heading.appendChild(headingContent);
    content.appendChild(heading);
    content.appendChild(summary);
    article.appendChild(image);
    article.appendChild(content);
    mainSection.appendChild(article);
  }

  function getAllVideos(data) {
    data.items.forEach((item) => {
      let videoId = item.snippet.resourceId.videoId;
      let articleThumbnail =
        item.snippet.thumbnails.maxres === undefined
          ? item.snippet.thumbnails.medium.url
          : item.snippet.thumbnails.maxres.url;
      let articleTitle = item.snippet.title.toLowerCase();
      let articleSummary = item.snippet.description.substring(0, 100);
      createVideo(videoId, articleThumbnail, articleTitle, articleSummary);
    });

    let articles = document.querySelectorAll(".article");
    articles.forEach((article) => {
      article.addEventListener("click", (event) => {
        getFeaturedVideo(event.currentTarget.getAttribute("data-key"));
        window.scrollTo(0, 0);
      });
    });
  }

  getVideos(url);
  buttonClick();

  return <></>;
};

export default App;

import { getPostId } from "../api/api.js";

let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("postId");
console.log(postId);
let token = sessionStorage.getItem("token");
const printPost = async () => {
  let postDetail = await getPostId(postId, token);

  let { imgSrc, user, date, name, tags, postBody } = postDetail.data.posts;

  console.log(postDetail);
  document.querySelector("#post-image").setAttribute("src", imgSrc);

  let authors = document.querySelectorAll(".author");

  authors.forEach((element) => {
    element.textContent = user;
  });

  document.querySelector("#post-date").textContent = `${moment(date).format(
    "MMM Do"
  )} (${moment(date).startOf("day").fromNow()})`;

  document.querySelector("#post-title").textContent = name;

  let ulTages = document.querySelector("#list-tags");

  let liArray = tags;

  liArray.forEach((element) => {
    let liTag = document.createElement("li");
    liTag.textContent = `#${element}`;
    ulTages.append(liTag);
  });

  document.querySelector("#post-content").textContent = postBody;

  let editButton = document.querySelector("#btn-edit");

  editButton.addEventListener("click", () =>
    window.open(`/views/updatePost.html?postId=${postId}`, "_self")
  );
};

printPost();

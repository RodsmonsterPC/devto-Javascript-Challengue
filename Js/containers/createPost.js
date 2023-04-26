import { createPost,getpayloadFromToken,getUserId,getPostId } from "../api/api.js";

let btn = document.getElementById("add-button");
//obtener el token del localstorage
let token = sessionStorage.getItem("token");

let inputTag = document.getElementById("key-tag");
let tagList = document.getElementById("tag-list");
let textareaContent = document.getElementById("key-content");
let inputTitle = document.getElementById("key-title");
let inputImage = document.getElementById("key-image");
let inputRelevant = document.getElementById("key-relevant");
let Tags = [];
let user = getpayloadFromToken(token);
let userId = await getUserId(user);
let userName = userId.data.userss.name;

let postInfo = {};
const createForm = () => {
  let TagArrays = Object.values(Tags);
  let relevant =
    inputRelevant.type === "checkbox"
      ? inputRelevant.checked
      : inputRelevant.value;
  postInfo = {
    name: inputTitle.value,
    userName: userName,
    date: new Date().getTime(),
    imgSrc: inputImage.value,
    postBody: textareaContent.value,
    tags: TagArrays,
    user: getpayloadFromToken(token),
    relevant:  relevant,
  };
  console.log(postInfo);
  createPost(postInfo);
};
  console.log(token);

const createTag = () => {
  tagList.innerHTML = "";
  Tags.forEach((tag) => {
    let li = document.createElement("li");
    li.classList.add("tag-item");
    let span = document.createElement("span");
    span.textContent = `#${tag}`;
    let close = document.createElement("span");
    close.setAttribute("class", "close");
    close.innerHTML = "&times;";
    li.append(span, close);

    tagList.appendChild(li);
    console.log(tag);
  });
  removeTag();
};

// //remove tag
const removeTag = () => {
  let close = document.querySelectorAll(".close");
  close.forEach((item, index) => {
    item.addEventListener("click", () => {
      Tags.splice(index, 1);
      createTag();
    });
  });
};

const addTag = (e) => {
  if (e.key === "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !Tags.includes(tag)) {
      if (Tags.length >= 4) {
        let tagAlert = document.querySelector(".tag-alert");
        tagAlert.style.display = "block";
        setTimeout(() => {
          tagAlert.style.display = "none";
        }, 5000);
        return;
      }
      tag.split(",").forEach((tag) => {
        Tags.push(tag);
        createTag();
      });
    }
    e.target.value = "";
  }
};

inputTag.addEventListener("keyup", addTag);

btn.addEventListener("click", () => {
  createForm();
  // window.open("../../views/home.html", "_self");
});

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

let leaveBtn = document.getElementById("leave-btn");

leaveBtn.addEventListener("click", () => {
  window.open("../../views/home.html", "_self");
});

let preview = document.getElementById("id-preview");
let edit = document.getElementById("id-edit");

edit.addEventListener("click", () => {
  document.getElementById("preview").style.display = "none";
  document.getElementById("list-input").style.display = "block";
});

let previewTitle = document.getElementById("preview-title");
let previewImage = document.getElementById("preview-image");
let previewAuthor = document.getElementById("preview-author");
let previewTagList = document.getElementById("preview-tag-list");
let previewContent = document.getElementById("preview-content");
let previewRelevant = document.getElementById("preview-relevant");

preview.addEventListener("click", () => {
  document.getElementById("list-input").style.display = "none";
  document.getElementById("preview").style.display = "block";



  let TagArrays = Object.values(Tags);

  let relevants =
    inputRelevant.type === "checkbox"
      ? inputRelevant.checked
      : inputRelevant.value;
  postInfo = {
    name: inputTitle.value,
    userName: userName,
    date: new Date().getTime(),
    imgSrc: inputImage.value,
    postBody: textareaContent.value,
    tags: TagArrays,
    user: getpayloadFromToken(token),
    relevant: relevants,

  };
  let { name, imgSrc, tags, postBody, relevant } = postInfo;
  previewTitle.innerHTML = name;
  previewImage.innerHTML = imgSrc;
  previewImage.setAttribute("style", "width: 100%; height: 100%");
  previewContent.innerHTML = postBody;
  previewTagList.innerHTML = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.classList.add("tag-item");
    let span = document.createElement("span");
    span.textContent = `#${tag}`;
    li.append(span);
    previewTagList.appendChild(li);
  }
  );

});


// const editPost = () => {
//   let TagArrays = Object.values(Tags);
//   let relevants =
//     inputRelevant.type === "checkbox"
//       ? inputRelevant.checked
//       : inputRelevant.value;
//   postInfo = {
//     name: inputTitle.value,
//     userName: userName,
//     date: new Date().getTime(),
//     imgSrc: inputImage.value,
//     postBody: textareaContent.value,
//     tags: TagArrays,
//     user: getpayloadFromToken(token),
//     relevant: relevants,
//   };
//   console.log(postInfo);
//   createPost(postInfo);
// }

// let editBtn = document.getElementById("edit-btn");
// editBtn.addEventListener("click", () => {
//   editPost();
//   window.open("../../views/home.html", "_self");
// }
// );
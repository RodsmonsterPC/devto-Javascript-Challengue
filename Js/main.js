import { getPost } from "./api/api.js";

import { postPrint } from "./component/modulePost.js";

const printCard = async () => {
  let wrapper = document.getElementById("container-wrapper");
  let post = await getPost();
  let dataPost = post.data;

  for (let key in dataPost) {
    let { Tag, author, comment, content, date, image, relevant, title } =
      dataPost[key];

    let col = document.createElement("div");
    col.appendChild(postPrint(author, date, title, Tag, key));
    wrapper.append(col);
  }
};

printCard();

//Login
// let buttonLogin = document.querySelectorAll(".btn-login");

// buttonLogin.forEach((element) => {
//   element.addEventListener("click", () =>
//     window.open("../views/login.html", "_self")
//   );
// });

// const signUp = () => {
//   localStorage.getItem("token")
//     ? window.open("../views/home.html", "_self")
//     : window.open("../index.html", "_self");
// };

// let signOut = document.querySelector("#btn-signOut");

// signOut.addEventListener("click", () => {
//   localStorage.removeItem("token");
//   signUp();
// });

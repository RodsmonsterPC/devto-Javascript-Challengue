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

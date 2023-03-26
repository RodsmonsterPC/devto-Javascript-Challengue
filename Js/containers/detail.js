import { getPostId } from "../api/api.js";

let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get("postId");

const printPost = async () => {
  let response = await getPostId(postId);
};

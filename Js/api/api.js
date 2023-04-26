const URL_BASE = "http://localhost:8081";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDc0M2E1MzQxNTAzYjMyODk2MzAzNiIsImlhdCI6MTY4MjM5MjE4NCwiZXhwIjoxNjgyNDc4NTg0fQ.LcJiH7D7cGVeS4N7rSQSEBz9898AHvOsPF3LFRbPWP0";

const token = sessionStorage.setItem("token", authToken);

const getPost = async () => {
  try {
    let response = await fetch(`${URL_BASE}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPostId = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (postInfo) => {
  try {
    let response = await fetch(`${URL_BASE}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postInfo),
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    let response = await fetch(`${URL_BASE}/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (id, updateData) => {
  try {
    let response = await fetch(`${URL_BASE}/posts/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
  } catch (error) {
    console.log(error);
  }
};

//Fire Base

// const getPostId = async (id) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/.json`
//   );

//   let data = response.json();

//   return data;
// };

// const createComment = async (commentInfo, id) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/comments/.json`,
//     { method: "POST", body: JSON.stringify(commentInfo) }
//   );
//   let data = response.json();
//   return data;
// };

// const getComment = async (id) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/comments/.json`
//   );
//   let data = response.json();
//   return data;
// };

// const deleteComment = async (id, key) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/comments/${key}/.json`,
//     { method: "DELETE" }
//   );
//   let data = response.json();
//   return data;
// };

// const createPost = async (postInfo) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/.json`,
//     { method: "POST", body: JSON.stringify(postInfo) }
//   );
//   let data = response.json();
//   return data;
// };

// const deletePost = async (id) => {
//   let response = await fetch(
//     `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/.json`,
//     { method: "DELETE" }
//   );

//   let data = response.json();
//   return data;
// };

export {
  getPost,
  getPostId,
  createPost,
  deletePost,
  updatePost,
  createComment,
  getComment,
  deleteComment,
};

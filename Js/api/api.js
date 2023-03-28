const getPost = async () => {
  let response = await fetch(
    `https://devto-9f944-default-rtdb.firebaseio.com/.json`
  );

  let data = response.json();

  return data;
};

const getPostId = async (id) => {
  let response = await fetch(
    `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/.json`
  );

  let data = response.json();

  return data;
};

const createPost = async (postInfo) => {
  let response = await fetch(
    `https://devto-9f944-default-rtdb.firebaseio.com/data/.json`,
    { method: "POST", body: JSON.stringify(postInfo) }
  );

  let data = response.json();
  return data;
};

const deletePost = async (id) => {
  let response = await fetch(
    `https://devto-9f944-default-rtdb.firebaseio.com/${id}/.json`,
    { method: "DELETE" }
  );

  let data = response.json();
  return data;
};

export { getPost, getPostId };

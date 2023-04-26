const URL_BASE = "http://localhost:8081";
const authToken = sessionStorage.getItem("token");
const token = sessionStorage.getItem("token", authToken);

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


const getpayloadFromToken = (token)=>{
  const [header, payload, secretKey] = token.split(".")
  const decodePayload = atob(payload)
  const jsonPayload = JSON.parse(decodePayload)

  return jsonPayload.id
}


const getPostId = async (id) => {
  try {
    let response = await fetch(
      `${URL_BASE}/posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }


};
const createPost = async (postInfo) => {
  try
  {
    let response = await fetch(`${URL_BASE}/posts/`, {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(message.error);
  }
};


const getUserId = async (id) => {
  try {
    let response = await fetch(
      `${URL_BASE}/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async(userData) =>{
  try {
    let response = await fetch(`${URL_BASE}/users/`,{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    let data = await response.json();
    return data
    
  } catch (error) {
    console.log(error)
    
  }
}

const loginUser = async(userData) => {
  try {
    let response = await fetch(`${URL_BASE}/auth/login/`,{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    let data = await response.json();
    return data
    
  } catch (error) {
    console.log(error)
    
  }
}

const createComment = async (commentInfo) => {
  try {
    let response = await fetch(`${URL_BASE}/comments/`, {
      method: "POST",
      body: JSON.stringify(commentInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(message.error);
  }
};
const getComment = async (id) => {
  try {
    let response = await fetch(
      `${URL_BASE}/comments/?post=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    let response = await fetch(
      `${URL_BASE}/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};



//Fire Base



const deleteComment = async (id, key) => {
  let response = await fetch(
    `https://devto-9f944-default-rtdb.firebaseio.com/data/${id}/comments/${key}/.json`,
    { method: "DELETE" }
  );
  let data = response.json();
  return data;
};





export {
  getPost,
  getPostId,
  createPost,
  deletePost,
  createComment,
  getComment,
  deleteComment,
  getpayloadFromToken,
  getUserId,
  createUser,
  loginUser
};

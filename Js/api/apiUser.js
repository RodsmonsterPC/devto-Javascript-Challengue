const URL_BASE = "http://localhost:8081";

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDc0M2E1MzQxNTAzYjMyODk2MzAzNiIsImlhdCI6MTY4MjM5MjE4NCwiZXhwIjoxNjgyNDc4NTg0fQ.LcJiH7D7cGVeS4N7rSQSEBz9898AHvOsPF3LFRbPWP0";

const token = sessionStorage.setItem("token", authToken);

const getUser = async () => {
  try {
    let response = await fetch(`${URL_BASE}/posts`, {
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

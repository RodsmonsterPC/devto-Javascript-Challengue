const URL_BASE = "http://localhost:8081";

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDc0M2E1MzQxNTAzYjMyODk2MzAzNiIsImlhdCI6MTY4MjQ3NzQ1OCwiZXhwIjoxNjgyNTYzODU4fQ.VPKgbZkSstAhfGUm8JvtGqrNtC5h5z13pXmLkBdFI04";

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

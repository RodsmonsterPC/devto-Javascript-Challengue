import { createComment, getComment} from '../api/api.js';
let urlParams = new URLSearchParams(window.location.search);
let key = urlParams.get("postId");
console.log(key);
let btn = document.getElementById('comment-btn');
let comment = document.getElementById('text-comment');
let userName = document.getElementById('name-comment');
let wrapper = document.getElementById('comment-wrapper');
let commentLen = document.getElementById('comment-length');
wrapper.innerHTML = '';
const getCommentList = async () => {
    wrapper.innerHTML = '';
    let commentList = await getComment(key);
    let newArray =  Object.values(commentList);
    let counter = newArray.length;
  

    newArray.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <div class="card-comment">
        <div class="d-flex">
          <img
            class="rounded-circle border object-fit-cover me-3"
            src="https://i.pravatar.cc/"
            style="width: 40px; height: 40px"
          />
          <div class="card w-100 p-3">

            <div class="d-flex justify-content-between">
            <h5 class=" fs-6 fw-bold">
                ${item.name}
              <span class="fs-6 fw-light"> ${moment(item.date).fromNow()}
              </span>
            </h5>
            <div class="dropdown">
              <button
                class="btn btn-sm btn-outline dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../assets/ellipsis.svg"
                  alt="ellipsis"
                  class="iconellipsis"
                  width="24"
                  height="24"
                />
              </button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">Edit</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
            <p class="card-text">
                ${item.comment}
            </p>
          </div>
        </div>

        <div class="ms-5 ps-2 mb-4 d-flex">
          <span>
            <img
              src="../assets/heart-icon.svg"
              alt="like"
              class="iconlike"
              width="24"
              height="24"
            />
            1 like
          </span>
          <span class="ms-3">
            <img
              src="../assets/comment-icon.svg"
              alt="dislike"
              class="icondislike"
              width="24"
              height="24"
            />
            1 comment
          </span>
        </div>
      </div>
        `
        wrapper.appendChild(div);
    })
    commentLen.textContent = `(${counter})`
    
}

getCommentList();

const createCommetForm = () => {
    let commentArray = {
        date: new Date().getTime(),
        name: userName.value,
        comment: comment.value,
    }
    createComment(commentArray, key)
}

btn.addEventListener('click', () => {
  
    createCommetForm();
    getCommentList();
    wrapper.innerHTML = '';
    comment.value = '';
    userName.value = '';
}
)



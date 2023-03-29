import { createComment, getComment} from '../api/api.js';
import {createCommentCard} from './modulePost.js';

let urlParams = new URLSearchParams(window.location.search);
let key = urlParams.get("postId");

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
       let {name,comment,date} = item
       wrapper.appendChild(createCommentCard(name,comment,date))

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



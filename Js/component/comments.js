import { createComment, getComment,deleteComment, getpayloadFromToken,getUserId} from '../api/api.js';
import {createCommentCard} from './modulePost.js';

let urlParams = new URLSearchParams(window.location.search);
let postIds = urlParams.get("postId");

//OBTENER TOKEN SESSION STORAGE
let token = sessionStorage.getItem("token");

let btn = document.getElementById('comment-btn');
let comment = document.getElementById('text-comment');
let wrapper = document.getElementById('comment-wrapper');
let commentLen = document.getElementById('comment-length');
wrapper.innerHTML = '';
let user = getpayloadFromToken(token);
let userId = await getUserId(user);
let userName = userId.data.userss.name;



const getCommentList = async () => {
    wrapper.innerHTML = '';
    let commentList = await getComment(postIds);
    let comentListArray = commentList.data.comment;
    console.log(comentListArray);
    let newArray = Object.values(comentListArray);
    let counter = newArray.length;

    for(let key in comentListArray){
        let{comment,name,date} = comentListArray[key];
        wrapper.appendChild(createCommentCard(name,comment,date,postIds,key,deleteComment))
    }
    commentLen.textContent = `(${counter})`
    
}

getCommentList();

const createCommetForm = () => {
    let commentArray = {
        name: userName,
        comment: comment.value,
        date: new Date().getTime(),
        user: getpayloadFromToken(token),
        post: postIds

    }
    createComment(commentArray);
}

btn.addEventListener('click', () => {
  
    createCommetForm();
    getCommentList();
    wrapper.innerHTML = '';
    comment.value = '';
}
)



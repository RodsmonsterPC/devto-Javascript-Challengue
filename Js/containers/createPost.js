import {createPost} from "../api/api.js"

let btn = document.getElementById('add-button');

    let inputTag = document.getElementById('key-tag')
    let tagList= document.getElementById('tag-list')
    let textareaContent = document.getElementById('key-content')
    let inputTitle = document.getElementById('key-title')
    let inputAuthor = document.getElementById('key-author')
    let inputImage = document.getElementById('key-image')
    let inputRelevant = document.getElementById('key-relevant')
    let tags = []


const createForm = ()=>{
    let TagArray = Object.values(tags)
    let relevant = inputRelevant.type === 'checkbox' ? inputRelevant.checked : inputRelevant.value
    let postInfo = {
        title: inputTitle.value,
        image: inputImage.value,
        author: inputAuthor.value,
        Tag: TagArray,
        content: textareaContent.value,
        relevant: relevant,
        date: new Date().getTime()/1000
        }

    createPost(postInfo)
} 



const createTag = () =>{
    tagList.innerHTML = ''
    tags.forEach(tag => {
        let li = document.createElement('li')
        li.classList.add('tag-item')
        let span = document.createElement('span')
        span.textContent = tag
        let close = document.createElement('span')
        close.setAttribute('class', 'close')
        close.innerHTML = '&times;'
        li.append(span, close)

        tagList.appendChild(li)
        console.log(tag)
    })
    removeTag()
}







// //remove tag
const removeTag = () =>{
    let close = document.querySelectorAll('.close')
    close.forEach((item, index) => {
        item.addEventListener('click', () =>{
            tags.splice(index, 1)
            createTag()
        })
    })
}



const addTag = (e) =>{
    if(e.key === 'Enter'){
        let tag = e.target.value.replace(/\s+/g, ' ')
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length >= 4){
                let tagAlert = document.querySelector('.tag-alert')
                tagAlert.style.display = 'block'
                setTimeout(() => {
                    tagAlert.style.display = 'none'
                }, 5000);
                return
            }
            tag.split(',').forEach(tag => {
                tags.push(tag)
                createTag()
            })
        }
        e.target.value = ''
    }
}

inputTag.addEventListener('keyup', addTag)

btn.addEventListener('click', createForm)


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

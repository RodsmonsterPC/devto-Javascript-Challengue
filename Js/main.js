import { getPost} from "./api/api.js";

import { postPrint } from "./component/modulePost.js";


let wrapper = document.getElementById("container-wrapper")

const printCard = async (filterBy) => {
    let filter = input.value.toUpperCase()
    let post = await getPost()
    let dataPost = post.data
  
    if (filterBy == 'latest'){
        let dataArray = Object.values(dataPost)
        let sortedPosts = []
        
        dataArray.forEach(post => {
            if (post.date) 
                sortedPosts.push(post)
        })

        sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        dataPost = Object.assign({}, sortedPosts)    
    }
   

    for (let key in dataPost){
        let {Tag, author, comment, content, date, image, relevant, title}  = dataPost[key] 
        let col;

        if (filterBy == 'relevant'){  
            if (dataPost[key].relevant) {
                let {Tag, author, date, title} = dataPost[key]
                col = postPrint(author, date, title, Tag, key, dataPost)
            }
             
        } else {
            col = postPrint(author, date, title, Tag,key,dataPost)
        }
        
        
        // let newText = document.createElement("h3")
        // newText.innerText = 'No se encontro'
        if(title.toUpperCase().indexOf(filter) > -1){
            col != null ? wrapper.append(col) : null
        }
    }
}

let relevantWrapper = document.getElementById('relevant')
relevantWrapper.addEventListener("click", (event) => {
    relevantWrapper.classList.add('active')
    latestWrapper.classList.remove('active')
    wrapper.innerHTML = '' // ????
    printCard('relevant')
})

let latestWrapper = document.getElementById('latest')
latestWrapper.addEventListener("click", (event) => {
    latestWrapper.classList.add('active')
    relevantWrapper.classList.remove('active')
    wrapper.innerHTML = '' 
    printCard('latest')
})

let input = document.getElementById('search-input')
input.addEventListener('keyup', (event) => {
    wrapper.innerHTML = ''
    printCard()
})




printCard()





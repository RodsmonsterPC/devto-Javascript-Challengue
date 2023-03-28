import { getPost} from "./api/api.js";

import { postPrint } from "./component/modulePost.js";


let wrapper = document.getElementById("container-wrapper")


const printCard = async () => {
    let filter = input.value.toUpperCase()
    let post = await getPost()
    let dataPost = post.data
    for (let key in dataPost){
        console.log (key)
        let {Tag, author, comment, content, date, image, relevant, title}  = dataPost[key]   
        let col = postPrint(author, date, title, Tag,key,dataPost)
        let newText = document.createElement("h3")
        newText.innerText = 'No se encontro'
        if(title.toUpperCase().indexOf(filter) > -1){
            wrapper.append(col)
        }
       

    }

}



let input = document.getElementById('search-input')
input.addEventListener('keyup', (event) => {
    wrapper.innerHTML = ''
    printCard()
})

printCard()
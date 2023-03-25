import { getPost} from "./api/api.js";

import { postPrint } from "./component/modulePost.js";




const printCard = async () => {
    let wrapper = document.getElementById("container-wrapper")
    let post = await getPost()
    let dataPost = post.data
    console.log (dataPost)
    for (let key in dataPost){
        console.log (dataPost[key])
        let {Tag, author, comment, content, date, image, relevant, title}  = dataPost[key]
        let col = document.createElement("div");
        col.appendChild(postPrint(image, author, date, title, Tag.Tag1 ))
        wrapper.append(col)
    
        
    }

}

printCard()
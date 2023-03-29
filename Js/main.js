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
//Login
let buttonLogin = document.querySelectorAll(".btn-login");

buttonLogin.forEach((element) => {
  element.addEventListener("click", () =>
    window.open("../views/login.html", "_self")
  );
});

const signUp = () => {
  localStorage.getItem("token")
    ? window.open("../views/home.html", "_self")
    : window.open("../index.html", "_self");
};

let signOut = document.querySelector("#btn-signOut");

signOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  signUp();
});
//end-rodo


const formWrapper=document.querySelector(".form-wrapper")
const form=document.querySelector("#form")
const searchInput=document.querySelector("#searchInput")
const buttonWrapper=document.querySelector(".button-wrapper")
const searchButton=document.querySelector("#searchButton")

const clearButton=document.querySelector("#clearButton")

const imageListWrapper=document.querySelector(".imagelist-wrapper")








runEventListeners();

function runEventListeners(){
    form.addEventListener("submit",search);
    clearButton.addEventListener("click",clear)
}
function clear(){
    searchInput.value="";
// Array.from(imageListWrapper.children).forEach((child)=>{
//     child.remove()
// })
imageListWrapper.innerHTML=""
}

// async function search(e){
// const value=searchInput.value.trim()
// const url=(`https://api.unsplash.com/photos?query=${value}`,{method:"GET",headers:{
//     Authorization : "Client-ID SK60bJt53mZcF40Btw1vtPNQcRq11ApV9MxllUv-y50"
// }})
// const res= await fetch(url)
// const data=await res.json()
// console.log();

// e.preventDefault()

// }
// async function search(e) {
//     e.preventDefault();
//     try {
//         const value = searchInput.value.trim();
//         const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
//             method: "GET",
//             headers: {
//                 Authorization: "Client-ID SK60bJt53mZcF40Btw1vtPNQcRq11ApV9MxllUv-y50",
//             },
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//        Array.from(data.results).forEach((image)=>{
//         //console.log(image.urls.small);
//         addImageToUrl(image.urls.small)
        
//        })
        
        
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
async function search(e) {
    e.preventDefault();

    const value = searchInput.value.trim();
    if (!value) {
        console.error("Search input is empty. No request made.");
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID SK60bJt53mZcF40Btw1vtPNQcRq11ApV9MxllUv-y50",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        Array.from(data.results).forEach((image)=>{
            addImageToUrl(image.urls.small)
        })
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function addImageToUrl(url){
    const div=document.createElement("div")
    div.className="card"
    const img=document.createElement("img")
    img.setAttribute("src",url)
    img.width="400"
    img.height="400"
    div.appendChild(img)
    imageListWrapper.appendChild(div)
}
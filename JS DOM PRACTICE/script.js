const input = document.querySelector(".inp")
const btn = document.querySelector(".btn")
let ul = document.querySelector(".ul")



// let allInp = [];
btn.addEventListener("click", function(){
    // allInp.push(input.value);
    renderli()
    input.value = " "
    
})

function renderli(){
    let list = ""
    list = "<li>" + input.value + "</li>"
    ul.innerHTML += list
    // let list = ""
    // for(i=0; i<allInp.length; i++){

    //     list += "<li>" + allInp[i] + "</li>"

    // }
    // ul.innerHTML = list
}
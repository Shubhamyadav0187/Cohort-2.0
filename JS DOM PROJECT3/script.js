let main = document.querySelector(".main")

window.addEventListener("mousemove", function(e){
    console.log(e.clientX, e.clientY);
    main.style.left = e.clientX + "px";
    main.style.top = e.clientY + "px";

});

// main.addEventListener("mouseover", function(){
//     main.style.backgroundColor = "yellow";
// })

let select = document.querySelector("select")
let h1 = document.querySelector("h1")

select.addEventListener("change", handleChange)

function handleChange(e){
    console.log(e.target.value);
    h1.textContent = `${e.target.value} selected`
}








                                        










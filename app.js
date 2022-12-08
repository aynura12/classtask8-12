// let count = 0;
// let sum = 0;
// let avg=0;
// Array.prototype.Avg= function () {

//     for (i = 0; i <this.length; i++) {
//         sum += this[i];
//         count++;
//     }
//     avg=sum/count;
//     console.log(avg);
// }  
// let array = [1, 2, 3,2];
// array.Avg()


const text = document.querySelector("#message-content");
const duration = document.querySelector("#duration");
const cancel = document.querySelector("#cancelable");
const toasts = document.querySelector("#toasts")
const addtost = document.querySelector("#add-button");
const clear = document.querySelector("#clear-button");
const errorbutton = document.querySelector("#error");
const successbutton = document.querySelector("#success");





addtost.addEventListener("click", () => {
    const toast = document.createElement("div")
    toast.classList.add("toast")
    const texts = document.createElement("p")
    const iscancel = document.createElement("button")
    iscancel.style.background = "black";
    iscancel.style.width = "20px";
    iscancel.style.height = "20px";
    iscancel.style.color = "white";
    iscancel.style.display = "flex";
    iscancel.style.alignItems = "center";
    iscancel.style.justifyContent = "center";
    // neye append edirsen neyi
    toast.append(texts);
    toasts.append(toast);


    // text.addEventListener("keyup", () => {
    //     console.log(text.innerText);
    //      = "";
    // })

    if (successbutton.checked) {
        toast.classList.add("success-toast")
        texts.innerText = "succes";
    }
    else {
        toast.classList.add("error-toast")
        texts.innerText = "error";

    }
    if (text.value != "") {
        texts.innerText = text.value;
    }
    let a;
    a = setTimeout(() => { toast.remove() }, duration.value)
    if (cancel.checked) {
        clearTimeout(a);
        iscancel.addEventListener("click", () => {
            toast.remove()
        })
        toast.append(iscancel);
        iscancel.innerText = "x";
    }

    clear.addEventListener("click", () => {
        toast.remove()
    })
})
addtost.addEventListener("click", () => {
    
})

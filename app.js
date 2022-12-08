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
const toast = document.querySelector("#toasts")
const addtost = document.querySelector("#add-button");
const clear = document.querySelector("#clear-button");
const error = document.querySelector("#error-toast");
const success = document.querySelector("#success-toast");
const errorbutton = document.querySelector("#error");
const successbutton = document.querySelector("#succes");
const toastext = document.querySelector(".toast error-toast");
const iscancel= document.querySelector(".cancel-botton");



addtost.addEventListener("click", () => {
const toast=document.createElement("div")
toast.classList.add("toast")
const texts=document.createElement("p")
})

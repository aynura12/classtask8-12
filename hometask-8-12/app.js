const password = document.querySelector("#password");
const section = document.querySelector("#main-wrapper");
const sumbit = document.querySelector("#button");
const mybar=document.querySelector(".progress-bar");
const border=document.querySelector(".border-box")
let number = ".*[0-9].*";
let lowercase = ".*[a-z].*";
let uppercase = ".*[A-Z].*";
let symbol = ".*[!,@,#,$,%,^,&,*,?,_,~,-,(,)].*";
// let a=symbol;
// a=false;

sumbit.addEventListener("click", (e) => {
    if (password.value.length < 5 && password.value.match(number) && password.value.match(symbol)) {
        section.style = "filter:blur(1px)";
        mybar.style="width: 35%"
    }
    if (password.value.length >=5 && password.value.match(number) && password.value.match(lowercase) &&password.value.match(uppercase) ) {
        section.style = "filter:blur(3px)"
        mybar.style="width: 65%";
    }
    if (password.value.length >= 8 && password.value.match(number) && password.value.match(lowercase) &&password.value.match(uppercase) && password.value.match(symbol) ) {
        section.style = "filter:blur(60px)"
        mybar.style="width: 100%"
        mybarstyle.color="red"
    }

      
})




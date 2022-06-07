const background = document.querySelector(".background");
const text = document.querySelector(".text");
const text_start = document.querySelector(".text_start");
const playBTN = document.querySelector(".play");
const pauseBTN = document.querySelector(".pause");
const popUp = document.querySelector(".pop-up");
const popUpContent = document.querySelector(".pop-up-content");
const popConfirm = document.querySelector("#confirm");
const popCancel = document.querySelector("#cancel");
const form = document.querySelector(".form");
const gun = document.querySelector(".dd");
const ay = document.querySelector(".mm");
const yil = document.querySelector(".year");
const iFrame = document.querySelector(".video");
const closex = document.querySelector("#close");

closex.style.display="none";
iFrame.style.display="none";
let load = 0;
let blurr = 30;
var audio = new Audio("/bulanik-yukleme-ekrani/official-call-of-duty-black-ops-3-multiplayer-music-ignition.mp3");

let int = setInterval(() => {
    load++;
    
    if(load==100){clearInterval(int)}
    text.textContent = `${load}%`;
}
,20);

let int2 = setInterval(()=> {
    blurr--;
    background.style.filter = `blur(${blurr}px)`
    console.log(blurr);
    if(blurr==0){
        clearTimeout(int2);
        let buttonTime = setTimeout(() => {
            text.textContent = "";
            text_start.textContent = "WATCH TRAILER";
        },2000)
    
    }
}
,60);

playBTN.addEventListener("click",() => {
    audio.play();
})

pauseBTN.addEventListener("click",() => {
    audio.pause();
})

text_start.addEventListener("click",() => {
    text_start.style.display="none";
    closex.style.display="none";
    popUp.style.display="flex";
    popUpContent.style.display="flex";
    iFrame.style.display="none";
})

popCancel.addEventListener("click",() => {
    text_start.style.display="flex";
    popUp.style.display="none";
})

// popConfirm.addEventListener("click",() => {
//     text_start.style.display="flex";
//     popUp.style.display="none";
// })


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    iFrame.style.display="none";

    let newDate = new Date();
    let bDay = new Date(yil.value,ay.value,gun.value);
    let age = newDate - bDay;
    console.log(age);
    if (age>568036800000){
        popUpContent.style.display="none";
        iFrame.style.display="flex";
        closex.style.display="flex";
        closex.addEventListener("click",() => {
            text_start.style.display="flex";
            popUp.style.display="none";
        })
        
    }else if(yil.value==null || ay.value==null || gun.value==null){
        console.log("eeeaaa");
    }


})



// ===============================
// ЛЕТАЮЩИЕ СЕРДЕЧКИ
// ===============================


const heartsContainer = document.querySelector(".hearts");


function createHeart(){


    const heart = document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random() * 100 + "%";


    heart.style.fontSize =
    Math.random() * 25 + 10 + "px";


    heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";


    heartsContainer.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);


}



setInterval(createHeart,500);







// ===============================
// КНОПКА "ОТКРЫТЬ МОЕ СЕРДЦЕ"
// ===============================


const button =
document.querySelector(".open-heart");


button.addEventListener("click",()=>{


    document.body.style.transition =
    "2s";


    window.scrollTo({

        top:
        window.innerHeight,

        behavior:
        "smooth"

    });


    button.innerHTML =
    "❤️ Я люблю тебя, Арина ❤️";


});







// ===============================
// ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ
// ===============================


const sections =
document.querySelectorAll("section");



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}



});


},
{

threshold:0.15

});




sections.forEach(section=>{


section.style.opacity="0";


section.style.transform=
"translateY(60px)";


section.style.transition=
"1.2s ease";


observer.observe(section);


});







// ===============================
// ЭФФЕКТ ДВИЖЕНИЯ ФОНА
// ===============================


document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX / window.innerWidth - 0.5)
* 20;


const y =
(e.clientY / window.innerHeight - 0.5)
* 20;



document.querySelector(".stars")
.style.transform =

`translate(${x}px, ${y}px)`;


});







// ===============================
// ПЕЧАТЬ ТЕКСТА
// ===============================


const message =

"Моя маленькая... Ты мое солнышко. Спасибо тебе за то, что ты есть в моей жизни ❤️";



let index = 0;



function typing(){


const title =
document.querySelector(".small-title");


if(!title)
return;



if(index < message.length){


title.innerHTML +=
message.charAt(index);


index++;


setTimeout(
typing,
80
);


}


}




window.addEventListener(
"load",
()=>{


setTimeout(()=>{


titleClear();


typing();


},2000);


});



function titleClear(){


const title =
document.querySelector(".small-title");


if(title){

title.innerHTML="";

}


}

// ===============================
// СЧЕТЧИК ОТНОШЕНИЙ
// ===============================


// ВПИШИ СЮДА ВАШУ ДАТУ

const startDate = new Date(
"2024-04-13"
);



function updateTimer(){


const now = new Date();


const diff =
now - startDate;



const days =
Math.floor(
diff /
(1000*60*60*24)
);



const hours =
Math.floor(
(diff /
(1000*60*60))
%24
);



const minutes =
Math.floor(
(diff /
(1000*60))
%60
);



const seconds =
Math.floor(
(diff /
1000)
%60
);



document.querySelector("#days")
.innerHTML =
days;



document.querySelector("#hours")
.innerHTML =
hours;



document.querySelector("#minutes")
.innerHTML =
minutes;



document.querySelector("#seconds")
.innerHTML =
seconds;


}


setInterval(
updateTimer,
1000
);


updateTimer();






// ===============================
// МУЗЫКА
// ===============================


const music =
new Audio(
"music.mp3"
);


music.loop=true;



const musicButton =
document.querySelector(".music-button");



let playing=false;



musicButton.onclick=()=>{


if(!playing){


music.play();


musicButton.innerHTML=
"❤️ Музыка играет";


playing=true;


}

else{


music.pause();


musicButton.innerHTML=
"🎵 Включить музыку";


playing=false;


}


};

// ===============================
// ЗАГРУЗКА САЙТА
// ===============================


window.addEventListener(
"load",
()=>{


setTimeout(()=>{


document.querySelector(".preloader")
.style.opacity="0";


setTimeout(()=>{


document.querySelector(".preloader")
.style.display="none";


},1000);



},2500);



});





// ===============================
// ОТКРЫТИЕ ПИСЬМА
// ===============================


const letter =
document.querySelector("#loveLetter");


if(letter){


letter.addEventListener(
"click",
()=>{


letter.classList.add("open");


}

);


}





// ===============================
// СЮРПРИЗ СЕРДЦА
// ===============================


function loveExplosion(){


for(let i=0;i<50;i++){


let heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left="50%";

heart.style.top="50%";


heart.style.fontSize=
Math.random()*30+20+"px";


heart.style.transition="2s";


document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform=

`
translate(
${Math.random()*600-300}px,
${Math.random()*600-300}px
)
rotate(360deg)
`;

heart.style.opacity=0;


},50);



setTimeout(()=>{

heart.remove();

},2500);



}


}
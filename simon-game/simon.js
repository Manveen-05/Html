// let gamesq = [];
// let usersq = [];
// let btns=["yellow","red","green","blue"];
// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2")

// document.addEventListener("keypress" , function(){
//     if(started==false){
//         console.log("gamestarted");
//         started = true;
//         levelup();
//     }
// });
// function btnFlsh(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     }, 250);
// }
// function userFlsh(btn){
//     btn.classList.add("usrflash");
//     setTimeout(function(){
//         btn.classList.remove("usrflash");
//     }, 250);
// }
// function levelup(){
//     usersq = [];
//     level++;
//     h2.innerText = `Level ${level}`;
//     let random = Math.floor(Math.random()*4);
//     let randomclr = btns[random];
//     let randombtn = document.querySelector(`.${randomclr}`);
//     btnFlsh(randombtn);
// //     console.log(random);
// //     console.log(randomclr);
// //     console.log(randombtn);
//     gamesq.push(randomclr);
//     console.log(gamesq);
    
    
// }
// function check(){
//     //console.log("curr level: " , level);
//     let idx = level-1;

//     if(usersq[idx] == gamesq[idx]){
//         //console.log("correct");
//         if(usersq.length == gamesq.length){
//             levelup();
//             //setTimeout(levelup,100);
//         }
//     }
//     else{
//         h2.innerText = 'Game over! press any key to start';
//         //reset();
//     }
// }
    
// function btnpress(){
//     let btn = this;
//     userFlsh(btn); 
//     usercolor = btn.getAttribute("id");
//     //console.log(usercolor);
//     usersq.push(usercolor);
//     check(usersq.length-1);

// }
// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click" , btnpress);
// }
// function reset(){
//     started = false;
//     level = 0;
//     gamesq = 0;
//     usersq = 0;
// }

let gamesq = [];
let usersq = [];
let btns=["yellow","red","green","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("gamestarted");
        started = true;
        levelup();
    }
});
function btnFlsh(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlsh(btn){
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash");
    }, 250);
}
function levelup(){
    usersq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random()*4);
    let randomclr = btns[random];
    let randombtn = document.querySelector(`.${randomclr}`);
    btnFlsh(randombtn);
    gamesq.push(randomclr);
    console.log(gamesq);
}
function check(){
    let idx = usersq.length-1;
    if(usersq[idx] == gamesq[idx]){
        if(usersq.length == gamesq.length){
            //levelup();
            setTimeout(levelup,500);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userFlsh(btn); 
    let usercolor = btn.getAttribute("id");
    usersq.push(usercolor);
    check();
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnpress);
}
function reset(){
    started = false;
    level = 0;
    gamesq = [];
    usersq = [];
}

// const prompt=require("prompt-sync")({sigint:true});

// const { encodeBase58 } = require("ethers");

// let a = prompt("what is your name : ")

// console.log("your name is " + a)


// Asynchoronous 
// console.log("start")

// function dothis() {
//     setTimeout(function() {
//         console.log("hi how are you")
//     }, 3000)
// }

// dothis()

// console.log("end")

//Callbacks
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC : " + src)
        callback(null, src)
        // if passing some arguments then
        // callback(arg)
    }

    script.onerror = function () {
        console.log("Error loading script wiht SRC : " + src)
        callback(new Error("src got some error"), src)
    }
    document.body.appendChild(script)
}

function hello(error, src) {
    if(error){
        console.log(error);
        return ;
    }
    console.log("Hello Adi, script is loading " + src);
}

function end(error, src){
    if(error){
        console.log(error)
        return 
    }
    alert ("you are about to end " + src)
}

loadScript("https://google.com", end)

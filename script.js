const led = document.querySelectorAll("p");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

const delaySlider = document.getElementById("delaySlider"); 
const sliderValue = document.getElementById("sliderValue");

let currentDelay = 1000;

delaySlider.addEventListener("input", function() {
  currentDelay = parseInt(this.value); 
  sliderValue.textContent = currentDelay + " ms"; 
});

function storeText() {
    var inputElement = document.getElementById("txt");
    var stocoloText = inputElement.value;
    text = stocoloText.split('');
}
  
async function call() {
  await delay(1000);
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (ledFunctions[char]) {
      ledFunctions[char](); 
      await delay(1000);    
    }
  }
}

async function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    const scrollTargetElement = document.getElementById('scrollTarget');
    scrollTargetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

document.getElementById('btn').addEventListener('click', () => {
    storeText(); 
    call(); 
    scrollToBottom();
});

txt.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

////////////////////////////////////////////

function All() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}

function hFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function lFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}

function oFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}

function Blank() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function yFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function yfunc2() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}

function dFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "black";
}

function eFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}

function fFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function gFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}


function nFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function nFunc2() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function nFunc3() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function kFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function kFunc1() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function kFunc2() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "black";
}

function kFunc3() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}

function mFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function mFunc1() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function qFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";

}

function rFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}


function rFunc1() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}


function sFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function sFunc1() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}

function tFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function vFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";

}
function vFunc1() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";

}

function vFunc2() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";

}

function wFunc() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";

}

function xFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}


function xFunc1() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "black";

}

function xFunc3() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}

function xFunc3() {
    led[0].style.backgroundColor = "black";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "black";
}


function zFunc() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "white";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}



function zFunc1() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}



function zFunc2() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "white";
    led[3].style.backgroundColor = "white";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";

}



function zFunc3() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "white";
    led[5].style.backgroundColor = "white";
    led[6].style.backgroundColor = "black";
    led[7].style.backgroundColor = "white";
}

function zFunc3() {
    led[0].style.backgroundColor = "white";
    led[1].style.backgroundColor = "black";
    led[2].style.backgroundColor = "black";
    led[3].style.backgroundColor = "black";
    led[4].style.backgroundColor = "black";
    led[5].style.backgroundColor = "black";
    led[6].style.backgroundColor = "white";
    led[7].style.backgroundColor = "white";
}

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function A() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    All();
}

async function B() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    All();
}

async function C() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    oFunc();
}

async function D() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    dFunc();
}

async function E() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    eFunc();
}

async function F() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
}


async function G() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    gFunc();
    await delay(currentDelay);
    gFunc();
}

async function H() {

    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    hFunc();
    await delay(currentDelay);
    hFunc();
    await delay(currentDelay);
    hFunc();
    await delay(currentDelay);
    All();
}

async function I() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    ALL();
    await delay(currentDelay);
    ALl();
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    Blank();
}

async function J() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
}

async function K() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    kFunc();
    await delay(currentDelay);
    kFunc1();
    await delay(currentDelay);
    kFunc2();
    await delay(currentDelay);
    kFunc3();
    await delay(currentDelay);
    kFunc3();
}

async function L() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
}

async function M() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    mFunc();
    await delay(currentDelay);
    mFunc1();
    await delay(currentDelay);
    mFunc();
    await delay(currentDelay);
    All();
}

async function N() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    nFunc();
    await delay(currentDelay);
    nFunc2();
    await delay(currentDelay);
    nFunc3();
    await delay(currentDelay);
    All();

}

async function O() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    oFunc();
    await delay(currentDelay);
    All();
}

async function P() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
}

async function Q() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    qFunc();
    await delay(currentDelay);
    qFunc();
    await delay(currentDelay);
    qFunc();
    await delay(currentDelay);
    All();
}

async function R() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    rFunc();
    await delay(currentDelay);
    rFunc1();
}

async function S() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    sFunc();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    eFunc();
    await delay(currentDelay);
    sFunc1();
}

async function T() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    fFunc();
    await delay(currentDelay);
    fFunc();
}

async function U() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    lFunc();
    await delay(currentDelay);
    All();
}

async function V() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    vFunc();
    await delay(currentDelay);
    vFunc1();
    await delay(currentDelay);
    vFunc2();
    await delay(currentDelay);
    vFunc1();
    await delay(currentDelay);
    vFunc();
}

async function W() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    wFunc();
    await delay(currentDelay);
    All();
    await delay(currentDelay);
    wFunc();
    await delay(currentDelay);
    All();
}

async function X() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    xFunc();
    await delay(currentDelay);
    xFunc1();
    await delay(currentDelay);
    xFunc3();
    await delay(currentDelay);
    xFunc1();
    await delay(currentDelay);
    xFunc();

}

async function Y() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    yFunc();
    await delay(currentDelay);
    yFunc();
    await delay(currentDelay);
    yfunc2();
    await delay(currentDelay);
    yFunc();
    await delay(currentDelay);
    yFunc();
}


async function Z() {
    await delay(currentDelay);
    Blank();
    await delay(currentDelay);
    zFunc();
    await delay(currentDelay);
    zFunc1();
    await delay(currentDelay);
    zFunc2();
    await delay(currentDelay);
    zFunc3();
    await delay(currentDelay);
    zFunc3();
}

const ledFunctions = {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
    F: F,
    G: G,
    H: H,
    I: I,
    J: J,
    K: K,
    L: L,
    M: M,
    N: N,
    O: O,
    P: P,
    Q: Q,
    R: R,
    S: S,
    T: T,
    U: U,
    V: V,
    W: W,
    X: X,
    Y: Y,
    Z: Z,
};

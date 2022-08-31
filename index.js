let homeCount=0;
let guestCount=0;
let homeEl = document.getElementById("home-el") 
let guestEl = document.getElementById("guest-el")

function homeIncrementOne(){
    homeCount +=1
    homeEl.textContent = homeCount 
}

function homeIncrementTwo(){
    homeCount +=2
    homeEl.textContent = homeCount
}

function homeIncrementThree(){
    homeCount +=3
    homeEl.textContent = homeCount
}

function guestIncrementOne(){
    guestCount +=1
    guestEl.textContent = guestCount
}

function guestIncrementTwo(){
    guestCount +=2
    guestEl.textContent = guestCount
}

function guestIncrementThree(){
    guestCount +=3
    guestEl.textContent = guestCount
}

function reset(){
    homeEl.textContent = 0
    guestEl.textContent = 0
    homecount = 0
    guestcount = 0
}
let brys = [];
let todaysBrys = 0;
function preload() {
for(let i = 0; i < 7; i++) {
brys[i] = loadImage("brys" + i + ".jpg");
}
}


function setup() {
createCanvas(windowWidth, windowWidth>windowHeight? windowWidth:windowHeight);
textAlign(CENTER, CENTER);
imageMode(CENTER);
for(let i = 0; i < 7; i++) {
brys[i].resize(int(windowWidth/2,469090909090909), 0);
}
todaysBrys = todaysNum(6);
}


function draw() {
background(0);
fill(0, 30, 255);
textSize(S(40));
text("sniff sniff", X(250), Y(25));
textSize(S(20));
text("the brysio that wanted to show you his nose today is:", X(250), Y(70));
brys[todaysBrys].resize(int(windowWidth/2,469090909090909), 0);
image(brys[todaysBrys], X(250), Y(250));
}

function todaysNum(max) {
let now = new Date();
let dateString = now.getYear() + nf(now.getMonth(), 2)+nf(now.getDate(), 2);
randomSeed(int(dateString));
for(let i = 0; i < 50; i++) {
random();
}
return floor(random(0, max+1));
}

function X(input) {
return(int(map(input, 0, 500, 0, windowWidth)))
}
function Y(input) {
return(int(map(input, 0, 500, 0, windowWidth)))
}

function S(size) {
return(int(map(size, 0, 500, 0, windowWidth)));
}

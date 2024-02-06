// const random=Math.trunc(Math.random() *20) +1;
// console.log(random)
// document.querySelector('.number').textContent=random;
// const guess=document.querySelector('.guess').value;
// console.log(guess);
// function moghayese (random , guess) {
//     if (random > guess) {
//         console.log("to low")
//     }
//     else if( random <guess){
//         console.log("to hieght")
//     }
//     else{
//         console.log("Correct")
//     }
// }



let random = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = random;
console.log(random)
let score=20;
let high_score=0;
function moghayese(random) {
    let guess = document.querySelector('.guess').value;
    if (guess >20) {
        alert("please choose number berween 1_20")
    }
    if (guess <1) {
        alert("please choose number berween 1_20")
    }
    else{
    if (random > guess) {
        console.log("too low");
        document.querySelector('.message').textContent="too low";
        document.body.style.backgroundColor="red"
        score--;
        document.querySelector('.score').textContent=score
    } else if (random < guess) {
        console.log("too high");
        document.querySelector('.message').textContent="too high";
        document.body.style.backgroundColor="red"
        score--;
        document.querySelector('.score').textContent=score
    } else {
        console.log("Correct");
        document.querySelector('.number').textContent = random;
        document.querySelector('.message').textContent="correct";
        document.body.style.backgroundColor="green"
        document.querySelector('.score').textContent=score;
        if (score > high_score) {
            document.querySelector('.highscore').textContent=score;
            high_score=score;
        }
    }
}
}
    
function again() {
    score=20
    document.querySelector('.score').textContent=score;
     const random2 = Math.trunc(Math.random() * 20) + 1;
     console.log(random2)
     random=random2;
    document.body.style.background="black"
    document.querySelector('.number').textContent="?"
    document.querySelector('.message').textContent="Start guessing...";
}


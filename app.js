let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");



const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"]
    const randId = Math.floor(Math.random() * 3);
    return option[randId];
};
const playgame = (userchoice) => {
    console.log("user choice: ", userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice: ", compchoice);
    if (userchoice === compchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};
choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked", userchoice)
        playgame(userchoice);
    });
});
const draw = () => {
    console.log("The Game is Draw!!");
    msg.innerText = "The Game is Draw!!";
    msg.style.backgroundColor = "#081b31"
    msgcontainer.classList.remove("hide");
}
const showWinner = (userwin) => {
    if (userwin === true) {
        userscore++;
        uscore.innerText = userscore;
        console.log("You Are the Winner!!🥳");
        msg.innerText = "You Are the Winner!!🥳";
        msg.style.backgroundColor = "green";
        }
    else {
        compscore++
        cscore.innerText = compscore;
        console.log("Computer is the Winner💀")
        msg.innerText = "Computer is the Winner💀";
        msg.style.backgroundColor = "red";
        }
}



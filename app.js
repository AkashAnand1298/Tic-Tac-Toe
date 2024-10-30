let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let rstbtn = document.querySelector(".reset-button");
let newGame = document.querySelector(".new-button");
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congo!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const showNoWinner = () => {
    msg.innerText = `Damm No One Won`;
    msgContainer.classList.remove("hide");
};

let checkWinner = () => {
    let flag = true;
    for(let box of boxes)
    {
        if(box.innerText == "")
        {
            flag = false;
            break;
        }
    }
    if(flag)
    {
        showNoWinner();
        disableAllBoxes();  
        return;
    }
    else
    {
        for (let pattern of winPattern) {
            let idx1 = boxes[pattern[0]].innerText;
            let idx2 = boxes[pattern[1]].innerText;
            let idx3 = boxes[pattern[2]].innerText;
            if (idx1 !== "" && idx1 === idx2 && idx2 === idx3) {
                console.log("Winner is " + idx1);
                showWinner(idx1);
                disableAllBoxes();  
                return;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

const resetGame = () => {
    // boxes.forEach((box) => {
    //     box.innerText = "";
    //     box.disabled = false;
    // });
    // msgContainer.classList.add("hide");
    // msg.innerText = "Winner";
    // turn0 = true;


    trun0 = true;
    msg.innerText = "Winner";
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
};

rstbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

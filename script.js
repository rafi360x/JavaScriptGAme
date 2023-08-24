
let winner_img = document.querySelector('.img_1')
let loser_img = document.querySelector('.img_2')
let winner_interface = document.querySelector('.winner_div')
let loser_interface = document.querySelector('.Losser_Interface')
let winner_btn = document.querySelector('.button-33')
let loser_btn = document.querySelector('.button-77')
let from = document.querySelector(".myForm")
let text_filed = document.getElementById("text_filed")

let filed_value = ""

from.addEventListener("submit", ProvideData)

let low = 1;
let high = 10;


let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
// alert(correct_ans)
let attempts = 3;
let userWin = false;
let arr = []
let user_guess = parseInt(text_filed.value)

function ProvideData(e) {
    e.preventDefault()
    value = text_filed.value
    arr.push(parseInt(value))
    console.log(arr)

    switch (arr.length) {
        case 1:
            if (arr[0] < correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is greater!"

            } else if (arr[0] > correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is smaller!"

            } else {
                document.querySelector(".str_span").textContent = "You Win"
                userWin = true;
                text_filed.value = ""
                text_filed.disabled = true
                winner_img.style.visibility = "visible",
                    winner_interface.style.visibility = "visible",
                    winner_btn.style.visibility = "visible",

                    loser_img.style.visibility = "hidden",
                    loser_interface.style.visibility = "hidden",
                    loser_btn.style.visibility = "hidden"
                break;
            }
            break;
        case 2:
            if (arr[1] < correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is greater!"

            } else if (arr[1] > correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is smaller!"

            } else {
                document.querySelector(".str_span").textContent = "You Win"
                userWin = true;
                text_filed.value = ""
                text_filed.disabled = true
                winner_img.style.visibility = "visible",
                    winner_interface.style.visibility = "visible",
                    winner_btn.style.visibility = "visible",

                    loser_img.style.visibility = "hidden",
                    loser_interface.style.visibility = "hidden",
                    loser_btn.style.visibility = "hidden"
                break;
            }

            break;
        case 3:

            if (arr[2] < correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is greater!"

            } else if (arr[2] > correct_ans) {

                document.querySelector(".str_span").textContent = "Correct answer is smaller!"

            } else {
                document.querySelector(".str_span").textContent = "You Win"
                userWin = true;
                text_filed.value = ""
                text_filed.disabled = true
                winner_img.style.visibility = "visible",
                    winner_interface.style.visibility = "visible",
                    winner_btn.style.visibility = "visible",

                    loser_img.style.visibility = "hidden",
                    loser_interface.style.visibility = "hidden",
                    loser_btn.style.visibility = "hidden"
                break;
            }

            break;
        default:

            arr = [];

            if (!userWin) {
                document.querySelector(".ans-span").textContent = correct_ans
                text_filed.value = ""
                text_filed.disabled = true
                winner_img.style.visibility = "hidden",
                    winner_interface.style.visibility = "hidden",
                    winner_btn.style.visibility = "hidden",

                    loser_img.style.visibility = "visible",
                    loser_interface.style.visibility = "visible",
                    loser_btn.style.visibility = "visible"

            }
    }
}

function refreshPage() {
    location.reload();
}
 
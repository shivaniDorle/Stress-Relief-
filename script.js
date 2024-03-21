// function stars(){
//     let e = document.createElement('div');
//     e.setAttribute('class', 'star');
//     document.body.appendChild(e);
//     e.style.left = math.random() * + innerWidth + 'px';
//     let size = Math.random() * 12;

//     e.style.fontSize = 12 + size + 'px';

//     setTimeout(function(){
//         document.body.removeChild(e);
//     }, 5000)
// }

// setInterval(function(){
//     stars()
// },100)


function stars() {
    let e = document.createElement('div');
    e.setAttribute('class', 'star');
    document.body.appendChild(e);
    e.style.top = Math.random() * window.innerHeight + 'px'; // Use window.innerHeight
    e.style.left = Math.random() * window.innerWidth + 'px'; // Use window.innerWidth
    let size = Math.random() * 12;

    e.style.fontSize = 12 + size + 'px';

    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function () {
    stars();
}, 100);


document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const msg = document.getElementById('msg');

    textInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            msg.classList.add('fade-out');

            setTimeout(function () {
                msg.remove()
                  
            }, 20000);
        }
    });
});

const positiveMessages = [
    "You are capable of amazing things.",
    "Every day is a new beginning, take a deep breath and start again.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You are unique and special, just as you are.",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The best way to predict the future is to create it.",
    "Every day may not be good, but there is something good in every day.",
    "You are enough just as you are."
];

// let index = 0;
// const positiveMessageElement = document.getElementById('positiveMessage');

// // Function to show the positive message
// function showPositiveMessage() {
//     positiveMessageElement.textContent = positiveMessages[index];
//     positiveMessageElement.classList.add('show');
//     setTimeout(() => {
//         positiveMessageElement.classList.remove('show');
//         index = (index + 1) % positiveMessages.length;
//     }, 2000);
// }

// // Listen for keypress events on the document
// document.addEventListener('keydown', (event) => {
//     // Check if the key pressed is Enter (key code 13)
//     if (event.keyCode === 13) {
//         showPositiveMessage();
//     }
// });

let index = 0;
const positiveMessageElement = document.getElementById('positiveMessage');

// Function to show the positive message
function showPositiveMessage() {
    positiveMessageElement.textContent = positiveMessages[index];
    positiveMessageElement.classList.add('show');
    setTimeout(() => {
        positiveMessageElement.classList.remove('show');
        index = (index + 1) % positiveMessages.length;
    });
}

// Automatically change the positive message every 2 seconds
setInterval(() => {
    showPositiveMessage();
}, 5000);

// Listen for keypress events on the document
document.addEventListener('keydown', (event) => {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        showPositiveMessage();
    }
});
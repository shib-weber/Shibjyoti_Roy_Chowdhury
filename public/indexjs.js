document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', function() {
        window.scrollTo(0, 0) ;
      });
});

document.addEventListener('DOMContentLoaded', () => {
    window.requestAnimationFrame(() => {
        document.getElementById('input').focus();
    });
});

const predefinedAnswers = {
    'HELP': 'Available commands: \nFEEDBACK: Accepts Feedback\nCREATOR: Shows the Creator\nVERSION: Shows current version\nTIME: Shows time\nEXIT: Resets Termial',
    'CREATOR':'My creator is Shibjyoti Roy Chowdhury',
    'VERSION': 'SHIBDOS version 1.0.0',
    'TIME': new Date().toLocaleTimeString(),
    'EXIT': 'Goodbye!'
};

const feedbackQuestions = [
    "What is your name?",
    "Rate this website (0-5) -- Your feedback is important ?",
    "What did you like the most in this website?",
    "What can we improve?",
    "Any additional comments?"
];

let currentQuestionIndex = 0;
let feedbackData = {};
let inFeedbackSession = false;

function handleCommand(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        const userInput = input.value.trim().toUpperCase();

        
        output.innerHTML += `$:\\> ${userInput}\n`;

        if (inFeedbackSession) {
            handleFeedbackSession(userInput, output);
        } else {
            handleOtherCommands(userInput, output);
        }

        input.value = '';
        output.scrollTop = output.scrollHeight;
    }
}

function handleFeedbackSession(userInput, output) {
    if (currentQuestionIndex < feedbackQuestions.length) {
        if(currentQuestionIndex<3 && userInput==''){
            output.innerHTML +='This field is required\n'
        }
        else if(currentQuestionIndex==1 && Number.isNaN(Number(userInput))){
            output.innerHTML +='A number is required\n'
        }
        else if(currentQuestionIndex==1 && (userInput<0 || userInput>5)){
            output.innerHTML +='A number within range of 0 to 5 is required\n'
        }
        else{
        feedbackData[`answer${currentQuestionIndex + 1}`] = userInput;
        
        currentQuestionIndex++;

        if (currentQuestionIndex < feedbackQuestions.length) {
            output.innerHTML += `${feedbackQuestions[currentQuestionIndex]}\n`;
        } else {
            sub();
            feedbackData = {};
            currentQuestionIndex = 0;
            inFeedbackSession = false;
        }
    }
}       
}

function sub(){
    const output = document.querySelector('.output');
    fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    .then(data => {
        output.innerHTML += 'Thank you for your feedback!\nRefresh the page to see your feedback\n\n';
        output.scrollTop = output.scrollHeight;
    })
    .catch(error => {
        output.innerHTML += `Error submitting feedback: ${error.message}\n\n`;
    });
}

function handleOtherCommands(userInput, output) {
    if (userInput === 'FEEDBACK') {
        inFeedbackSession = true;
        output.innerHTML += `Entering feedback mode...\n${feedbackQuestions[currentQuestionIndex]}\n`;
    } 
    else if (userInput === 'EXIT') {
        setTimeout(() => output.innerHTML='Type "Help" \n', 1000);
    }
    else if (predefinedAnswers[userInput]) {
        output.innerHTML += `${predefinedAnswers[userInput]}\n\n`;
    } else {
        output.innerHTML += 'Unknown command\n\n';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('output').innerHTML += 'Type "Help" \n';
});


const stpsh=document.querySelector('#stpsh')
const stp=document.querySelector('.stp')
stpsh.addEventListener('click',()=>{
    stp.classList.toggle('visibilitys')
})

const stpch=document.querySelector('#stpch')
const chat=document.querySelector('.Chat')
stpch.addEventListener('click',()=>{
    chat.classList.toggle('visibilityc')
})

const stpgh=document.querySelector('#stpgh')
const gov=document.querySelector('.gov')
stpgh.addEventListener('click',()=>{
    gov.classList.toggle('visibilityg')
})

const stpbt=document.querySelector('#stpbt')
const chatbt=document.querySelector('#chatbt')
const govbt=document.querySelector('#govbt')

stpbt.addEventListener('click',()=>{
    location.href='https://shib-weber.github.io/Stone-Paper-Scissor-Game/'
})

chatbt.addEventListener('click',()=>{
    location.href='https://chatwat.onrender.com'
})

govbt.addEventListener('click',()=>{
    location.href='https://shib-weber.github.io/PublicWelfare/'
})

document.addEventListener('DOMContentLoaded', function () {
    const starRatings = document.querySelectorAll('.star-rating');

    starRatings.forEach(starRating => {
        const ratingValue = parseFloat(starRating.querySelector('.rating-value').textContent);
        const stars = starRating.querySelectorAll('.star');
        const fullStars = Math.floor(ratingValue);
        const halfStar = (ratingValue % 1 >= 0.5);

        stars.forEach((star, index) => {
            if (index < fullStars) {
                star.classList.add('filled');
            } else if (halfStar && index === fullStars) {
                star.classList.add('half-filled');
            } else {
                star.classList.remove('filled', 'half-filled');
            }
        });
    });
});



const fdlt=document.querySelector('#fdlt')
const fdrt=document.querySelector('#fdrt')

    fdlt.addEventListener('click',()=>{
        document.querySelector('.feeds').scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    })

    fdrt.addEventListener('click',()=>{
        document.querySelector('.feeds').scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    })

    const slider=document.querySelector('.slider')
    document.addEventListener('DOMContentLoaded', function () {
        const animatedImages = document.querySelectorAll('.item');
    
        animatedImages.forEach(image => {
            image.addEventListener('click', () => {
                
                slider.style.animation = 'none';

                slider.style.animation = 'autoRun2 2s ease';
    
                setTimeout(() => {
                    slider.style.animation = 'autoRun 20s linear infinite';
                }, 2000);
            });
        });
    });
    
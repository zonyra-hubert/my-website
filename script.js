function hamburg(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(0px)"

}

function cancel(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(-500px)"

}

//Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT",
]

let speed = 100;
const texElements = document.querySelector(".typewriter-text");

let textIndex  = 0;
let characterIndex = 0;
function typewriter(){
    if (characterIndex < texts[textIndex].length){
        texElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed)
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(texElements.innerHTML.length > 0){
        texElements.innerHTML = texElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500)
    }
}

window.onload =typewriter



    (function() {
        emailjs.init("yzVSv3QCn_1SJuhoA");  // Replace with your EmailJS User ID
    })();

    document.getElementById('hireForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send email via EmailJS
        emailjs.sendForm('service_k07sji8', 'template_w20uf3p', this)
            .then(function() {
                document.getElementById('statusMessage').innerText = 'Message sent successfully!';
            }, function(error) {
                document.getElementById('statusMessage').innerText = 'Failed to send the message, please try again.';
                console.log('Failed...', error);
            });
    });

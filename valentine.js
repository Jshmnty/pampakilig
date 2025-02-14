
const noImages = ["mocha_bear.gif", "teddy-bear.webp", "milk-and-mocha.gif", "milk-and-mocha.webp","sad.gif", "cute-adorable.gif"];
const messages = ["Are you sure?", "Ayaw mo talaga?", "hindi na ba magbabago isip mo?", "tunay na ba yan?","ako na to oh","Last chance!"];
let noIndex = 0;


const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const imageElement = document.getElementById("image");
const heading = document.querySelector("h1");


noButton.addEventListener("click", function () {
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    
    
    let newSize = parseFloat(currentSize) + 50 + "px";

    
    yesButton.style.fontSize = newSize;
    
    
    
    
    noIndex = (noIndex + 1) % noImages.length;
    imageElement.src = noImages[noIndex];


    heading.innerText = messages[noIndex];


    let i = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    let j = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.left = i + "px";
    noButton.style.top = j + "px";
});

// Event listener para sa "Yes" button
yesButton.addEventListener("click", function () {
    
    // Palitan ang image 
    imageElement.src = "milk.webp";

    // Magpakita ng sweet message
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <h1>Yaaay!</h1>
                <p>ikaw ha lab mo pala ako! Iloveyou! hahahahahaa.</p>
                <img src="milk.webp" width="200">
            </div>
        `;
    },); 
});

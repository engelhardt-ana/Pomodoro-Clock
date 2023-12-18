const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const workPanel = document.getElementById('work');
const breakPanel = document.getElementById('break');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

// Background toggles
let workBackgroundToggle = false;
let breakBackgroundToggle = false;

// Initial time settings
let intervalID;
let workTime = 25;
let breakTime = 5;
let isWorkTime = true; // flag to track if it's work time or break time

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function preloadImages(...images) {
    images.forEach((image) => {
        const img = new Image(); // Creates a new HTMLImageElement instance
        img.src = image;         // Sets the source path which starts loading the image
    });
}

// Call this function with the paths to your images
preloadImages(
    'work_background_1.jpg',
    'work_background_2.jpg',
    'break_background_1.jpg',
    'break_background_2.jpg'
);


function updateBackground() {
    // Clear previous background classes
    document.body.classList.remove('work-time-1', 'work-time-2', 'break-time-1', 'break-time-2');

    // Determine the new background class based on the toggle state
    const newClass = isWorkTime
        ? (workBackgroundToggle ? 'work-time-2' : 'work-time-1')
        : (breakBackgroundToggle ? 'break-time-2' : 'break-time-1');

    // Add the new class
    document.body.classList.add(newClass);

    // Toggle the state for next time
    if (isWorkTime) {
        workBackgroundToggle = !workBackgroundToggle;
    } else {
        breakBackgroundToggle = !breakBackgroundToggle;
    }
}


function startTimer() {
    const endTime = Date.now() + (isWorkTime ? workTime : breakTime) * 60000; // End time in milliseconds

    updateSessionIndicator();
    startButton.style.display = "none";
    resetButton.style.display = "block";

    intervalID = setInterval(() => {
        const currentTime = Date.now();
        const timeLeft = endTime - currentTime; // Time left in milliseconds

        if (timeLeft <= 0) {
            clearInterval(intervalID);
            isWorkTime = !isWorkTime; // Toggle between work and break time
            updateBackground(); // Update background before starting the next session
            startTimer(); // Automatically start the next session
            return;
        }

        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);

        updateDisplay(minutes, seconds);
    }, 1000);
    updateBackground();
}



// Function to update the session indicator
function updateSessionIndicator() {
    if (isWorkTime) {
        workPanel.classList.add('active-session');
        breakPanel.classList.remove('active-session');
    } else {
        breakPanel.classList.add('active-session');
        workPanel.classList.remove('active-session');
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(intervalID);

    isWorkTime = true;
    updateDisplay(workTime, 0);


    startButton.style.display = "block"; // Show the start button
    resetButton.style.display = "none"; // Hide the reset button
    updateBackground();
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    resetTimer();
});


window.onload = function () {
    preloadImages(
        'work_background_1.jpg',
        'work_background_2.jpg',
        'break_background_1.jpg',
        'break_background_2.jpg'
    );

    resetTimer();
};

# Pomodoro Timer

## Description
This Pomodoro Timer is a productivity app designed to help users implement the Pomodoro Technique for time management. The app cycles through predetermined work and break periods, promoting focus and rest in a balanced manner. Featuring a sleek and user-friendly interface, users can easily track their work sessions and break times with visual and textual cues.

![image](https://github.com/engelhardt-ana/Pomodoro-Clock/assets/84565524/19c0661b-b245-4f95-8469-4d66029b8688)



## Features
- **Customizable Timer**: Set your preferred work and break intervals to suit your productivity style.
- **Automatic Session Cycling**: After a work session ends, the app automatically starts the break timer, and vice versa.
- **Visual Indicators**: The UI changes colors to indicate whether the user is in a work or break period.
- **Dynamic Backgrounds**: Background images with a subtle blur effect change between work and break sessions, providing a refreshing visual context.
- **Responsive Design**: Works on various devices, adapting to different screen sizes for desktop and mobile use.
- **Pause/Resume Capability**: Users can pause the timer if needed and resume where they left off.

  ![image](https://github.com/engelhardt-ana/Pomodoro-Clock/assets/84565524/7ac3e365-e513-494b-9e81-374808e48603)


## Technologies Used
- HTML
- CSS (with CSS variables for themes and blur effects)
- JavaScript (for timer logic and DOM manipulations)
  
![break](https://github.com/engelhardt-ana/Pomodoro-Clock/assets/84565524/87e13f68-c42a-43ce-ac2c-f22cc6a567c4)


## Setup
To run this project locally:
1. Clone the repository using `git clone https://github.com/engelhardt-ana/Pomodoro-Clock.git`.
2. Open `index.html` in your web browser.
3. Optionally, you can run a local server and navigate to `http://localhost:5500/` to view the app.

## How to Use
1. Click the "Start" button to begin the Pomodoro Timer.
2. Work until the timer rings after the preset work duration.
3. Enjoy a break once the work session ends, as the timer automatically switches to break mode.
4. The timer resets to the next work session after the break.
5. Use the "Reset" button to restart the timer cycle at any time.

## Project Structure
- `index.html`: The entry HTML file that contains the structure of the Pomodoro Timer.
- `style.css`: The styling sheet that includes all the visual designs and media queries for responsiveness.
- `script.js`: The JavaScript file that contains all the logic for timer functionality and UI updates.

## Customization
Users can customize the duration of work and break periods by modifying the `workTime` and `breakTime` variables in `script.js`.

## Contributions
Contributions are welcome, and any feedback or suggestions are greatly appreciated. Please feel free to fork the repository, make changes, and create a pull request.


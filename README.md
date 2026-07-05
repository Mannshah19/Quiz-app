# Quiz — Know It or Show It

A clean and minimal web-based quiz app built with HTML, CSS and vanilla JavaScript. No frameworks, no libraries — just pure front-end code.

---

## Demo

### Screenshot

![Quiz App Screenshot](./assets/screenshot.png)

### Video Walkthrough

https://github.com/your-username/quiz-app/assets/your-id/your-video.mp4

> Replace the screenshot path and video link above with your actual files after uploading them.

---

## What It Does

- Shows 10 Web Development questions one by one
- Each question has a 10 second countdown timer with an animated ring
- You pick one of 4 options — it highlights green if correct, red if wrong
- Progress dots at the bottom show where you are in the quiz
- At the end it shows your final score with a result message
- You can restart and play again anytime

---

## How To Run

No setup needed. Just open the file in your browser.

1. Download or clone this project
2. Open `index.html` in any browser
3. That's it — the quiz starts automatically

---

## Project Structure

```
Quiz app/
├── index.html       — page structure and layout
├── style.css        — all the styling and animations
└── script.js        — all the quiz logic
```

---

## Built With

- HTML5
- CSS3 — custom properties, flexbox, SVG animation
- Vanilla JavaScript — DOM manipulation, setInterval, createElement
- Google Fonts — Fraunces, Inter, JetBrains Mono
- Bootstrap 5 — loaded but layout is mostly custom CSS

---

## How The JS Works

The whole quiz runs through a few simple functions:

- `loadQuestion()` — builds the current question and options on screen
- `createDots()` — draws the progress dots at the bottom
- `startTimer()` — starts the 10 second countdown and animates the ring
- `showResult()` — hides the quiz and shows the final score screen
- `nextBtn` click — checks the answer, highlights correct/wrong, then moves on
- `restartBtn` click — resets everything and starts from question 1

---

## Questions Covered

All 10 questions are about Web Development basics:

1. HTML tags
2. CSS box model
3. Image alt attribute
4. JavaScript keywords
5. CSS display values
6. Viewport meta tag
7. JSON methods
8. CSS Flexbox
9. CSS selectors
10. What DOM stands for

---

## Customising

Want to change the questions? Open `script.js` and edit the `quizData` array at the top. Each question follows this format:

```js
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0
}
```

The `answer` is the index of the correct option — 0 for A, 1 for B, 2 for C, 3 for D.

---

## Author

Made by **Your Name**
Feel free to fork, use or improve it.

# Quiz — Know It or Show It

A simple web-based quiz app built with pure HTML, CSS and vanilla JavaScript. No frameworks, no installs — just open and play.

---

## Demo

### Screenshot

![Quiz App Screenshot](./assets/images/Screenshot%202026-07-05%20144441.png)

### Video Walkthrough

[▶ Watch Demo Video](https://drive.google.com/file/d/1brLZh84XDxdhPMXhcvk2yN3c4DUUCVek/view?usp=sharing)

> Upload your video to Google Drive, set sharing to "Anyone with the link", then replace YOUR_FILE_ID with the actual ID from the link.

---

## What It Does

- Shows 10 Web Development questions one by one
- Each question has a 10 second countdown timer with an animated SVG ring
- Pick one of 4 options — turns green if correct, red if wrong
- Progress dots at the bottom track where you are
- Final score screen at the end with a result message
- Play again button resets everything from question 1

---

## How To Run

No setup needed at all.

1. Download or clone this project
2. Open `index.html` in any browser
3. Quiz starts automatically

---

## Project Structure

```
Quiz app/
├── index.html
└── assets/
    ├── css/
    │   └── style.css       — all styling and animations
    ├── js/
    │   └── script.js       — all quiz logic
    └── images/
        └── screenshot.png  — preview image
```

---

## Built With

- HTML5
- CSS3 — custom properties, flexbox, SVG ring animation
- Vanilla JavaScript — DOM manipulation, setInterval, createElement
- Google Fonts — Fraunces, Inter, JetBrains Mono
- Bootstrap 5 — linked but layout is mostly custom CSS

---

## How The JS Works

- `loadQuestion()` — builds the current question and option buttons on screen
- `createDots()` — draws the progress dots and marks done/current
- `startTimer()` — runs the 10s countdown and animates the SVG ring
- `showResult()` — hides the quiz card and shows the final score
- `nextBtn` click — checks answer, highlights correct/wrong, moves to next
- `restartBtn` click — resets score and question index, starts over

---

## Questions Covered

All 10 questions are Web Development basics:

1. HTML script tag
2. CSS padding vs margin
3. Image alt attribute
4. JavaScript const keyword
5. CSS display none
6. Viewport meta tag
7. JSON.parse method
8. CSS Flexbox justify-content
9. CSS first-child selector
10. What DOM stands for

---

## Customising

Open `assets/js/script.js` and edit the `quizData` array at the top:

```js
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0
}
```

`answer` is the index of the correct option — 0 for A, 1 for B, 2 for C, 3 for D.

---

## Author

Made by **Mann Shah**
Feel free to fork, use or improve it.

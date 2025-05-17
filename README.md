# 🎉 Greeting Card

A simple React + Vite + Tailwind app to generate personalized greeting cards, live preview, and download as image.  
Submission for Frontend Developer Test.

---

## ✨ Features

- Upload or use default card background
- Fill recipient, message (auto-wrap, max 150 chars), and sender
- Live card preview
- Download as PNG
- Input validation (cannot preview if field required is empty)
- Modular component structure
- Unit tested with Vitest
- Responsive & clean design

---

## 🚀 Getting Started

### 1. **Clone this repository**

```bash
git clone https://github.com/your-username/greeting-card.git
cd greeting-card
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run the application (development)**

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## 🧪 Running Unit Tests

This project uses Vitest + React Testing Library.

```bash
npx vitest
```

or, for interactive UI:

```bash
npx vitest --ui
```

## 📦 Build for Production

```bash
npm run build
```

The compiled files will be in the `dist/` folder.

## 🛠️ Project Structure

```
src/
  components/
    GreetingCardForm.jsx   // Input form & validation
    CardPreview.jsx        // Card preview & download
  assets/                  // Card image asset(s)
  GreetingCardGenerator.jsx // Main logic/state
  App.jsx
  main.jsx
  index.css                // Tailwind base
...
tailwind.config.js
vitest.config.js
README.md
```

## 📝 Notes

- To run successfully, make sure you have Node.js v16+ and npm v7+.
- If you use a custom background card, use image with aspect ratio 4:5 (e.g., 400x500 px) for best result.
- If you edit or add new .jsx components, always add `import React from "react";` at the top to ensure test compatibility.

## 👤 Author

Ahmad Naufal Muzakki

## 📄 License

MIT
EOF

# 🌸 MyMoodToday — Minimalist Mood Tracker

![React Native](https://img.shields.io/badge/React_Native-CLI-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**MyMoodToday** is an aesthetic and intuitive mobile application designed for daily emotional reflection. Built with a focus on clean architecture, seamless navigation, and privacy-first local data persistence.

---

## 📱 App Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/home.png" width="30%" alt="Home Screen" />
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/calendar.png" width="30%" alt="Calendar Screen" />
</p>

---

## ✨ Key Features

* **🎭 18 Unique Moods** — A comprehensive range of emojis to accurately capture your daily state.
* **📅 Interactive Calendar** — Visualize your emotional journey with a custom-rendered calendar.
* **💾 Local Data Persistence** — Privacy focused. Your data stays on your device using `AsyncStorage`.
* **🎨 Soft UI Design** — Gentle color palette, subtle shadows, and a clean minimalist interface.
* **📱 Smooth Navigation** — Efficient screen switching using React Navigation Bottom Tabs.

---

## 🛠 Technology Stack

| Technology | Usage |
| **React Native (CLI)** | Core cross-platform framework |
| **TypeScript** | Static typing for maintainable code |
| **AsyncStorage** | Persistent key-value storage system |
| **React Navigation** | App routing and Tab navigation |
| **RN Calendars** | Customized calendar implementation |

---

## 🧪 Technical Challenges & Solutions

Developing this app was a great learning experience. Here are some challenges I solved:

1. **Cross-Screen Data Sync:** I used the `useIsFocused` hook to trigger data re-fetching in the Calendar screen. This ensures that when a user logs a mood on the Home screen and switches tabs, the calendar updates instantly.
2. **Calendar Customization:** Overrode the default rendering using the `dayComponent` prop. This allowed me to inject custom emoji logic directly into the calendar's date cells.
3. **Environment & Build Issues:** Successfully debugged and resolved Android build issues related to port 8081 conflicts and Gradle dependency mismatches on Windows.

---

## 📂 Project Architecture

```text
src/
├── constants/    # Static assets (MOODS array)
├── screens/      # Main UI screens (Home, Calendar)
├── utils/        # Data layer & Storage logic
└── components/   # Reusable UI elements
```

---

## 📥 Download APK

You can test the application by downloading the pre-built APK:

[👉 **Click here to download MyMoodToday.apk** 👈](https://github.com/IhorFlowZenith/MyMoodToday/releases/latest)

---

📫 **Contact:** [Your Telegram or Email here]
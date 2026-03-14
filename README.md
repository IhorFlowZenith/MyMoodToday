# 🌸 MyMoodToday — Minimalist Mood Tracker

![React Native](https://img.shields.io/badge/React_Native-CLI-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**MyMoodToday** is an aesthetic and intuitive mobile application designed for daily emotional reflection. Built with a focus on clean architecture, seamless navigation, and privacy-first local data persistence.

---

## 📱 App Screenshots

<p align="center">
  <img src="./assets/screenshots/home.png" width="30%" alt="Home Screen" />
  <img src="./assets/screenshots/calendar.png" width="30%" alt="Calendar Screen" />
</p>

---

## ✨ Features

* **🎭 18 Unique Moods** — A comprehensive range of emojis to accurately capture your state.
* **📅 Interactive Calendar** — Visualize your emotional journey directly within a customized calendar view.
* **💾 Local Data Persistence** — Your data never leaves your device, secured by `AsyncStorage`.
* **🎨 Soft UI Design** — Gentle color palette, subtle shadows, and a clean interface for a premium user experience.
* **📱 Smooth Navigation** — Effortless switching between screens using Bottom Tabs.

---

## 🛠 Technology Stack

| Technology | Usage |
| :--- | :--- |
| **React Native (CLI)** | Core cross-platform mobile framework |
| **TypeScript** | Static typing for robust and maintainable code |
| **AsyncStorage** | Asynchronous, persistent, key-value storage system |
| **React Navigation** | App routing and navigation implementation |
| **RN Calendars** | Highly customized calendar component implementation |

---

## 📂 Project Architecture

The project follows a modular and scalable structure:

```text
src/
├── constants/    # Static assets and data (e.g., MOODS array)
├── screens/      # UI components for main screens (Home, Calendar)
├── utils/        # Business logic and data layer (Storage API)
└── components/   # Reusable UI components

<p align="center">
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/home.png" width="28%" alt="Home Screen" />
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/calendar.png" width="28%" alt="Calendar Screen" />
</p>

<h1 align="center">MyMoodToday</h1>

<p align="center">
  <em>Minimalist Mood Tracker · Reflect daily, live mindfully.</em>
  <br />
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#build">Build</a> •
  <a href="#tests">Tests</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.84-61DAFB?style=flat-square&logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Kotlin-2.1-7F52FF?style=flat-square&logo=kotlin" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Swift-5-F05138?style=flat-square&logo=swift" alt="Swift" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
</p>

---

**MyMoodToday** is a cross-platform mobile application for daily emotional reflection. Pick an emoji that matches your mood, save it, and watch your emotional landscape unfold on an interactive calendar. No accounts, no cloud — your data stays on your device.

---

## Features

- **18 Moods** — From Excited to Stressed, capture every shade of your day.
- **Interactive Calendar** — A custom-rendered calendar that visualises your mood history at a glance.
- **100 % Offline** — All data persisted locally via AsyncStorage. Privacy-first by design.
- **Soft UI** — Gentle pink palette, rounded corners, clean typography.
- **Smooth Navigation** — Bottom tab navigator with instant screen switching.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.84 (CLI) |
| Language | TypeScript 5.8 |
| Navigation | React Navigation 7 (Bottom Tabs) |
| Storage | @react-native-async-storage/async-storage |
| Calendar | react-native-calendars |
| Testing | Jest + react-test-renderer |
| Linting | ESLint + Prettier |
| Bundler | Metro |
| Android | Kotlin 2.1, Gradle 9, Hermes |
| iOS | Swift, CocoaPods |

---

## Project Structure

```
src/
├── constants/    # Mood definitions (18 emojis with labels)
├── screens/      # HomeScreen · CalendarScreen
└── utils/        # AsyncStorage CRUD operations
```

---

## Getting Started

### Prerequisites

- Node.js >= 22.11.0
- React Native CLI environment ([setup guide](https://reactnative.dev/docs/environment-setup))
- **Android:** JDK 17+, Android SDK 36
- **iOS:** Xcode 16+, CocoaPods (`gem install cocoapods`)

### Install

```bash
npm install

# iOS only – install Pods
cd ios && bundle exec pod install && cd ..
```

### Run

```bash
npm start              # Metro bundler
npm run android        # Launch on Android
npm run ios            # Launch on iOS simulator
```

---

## Tests

```bash
npm test
```

Renders the full component tree and verifies it matches the expected snapshot.

---

## Build

### Android (APK / AAB)

```bash
cd android
./gradlew assembleRelease   # APK
./gradlew bundleRelease     # AAB (Google Play)
```

The signed artifact will be at `android/app/build/outputs/`.

### iOS (IPA)

Open `ios/MyMoodToday.xcworkspace` in Xcode, select **Product → Archive**, then distribute via App Store Connect or export as an IPA.

---

## Technical Highlights

- **Cross-screen sync** — The calendar re-fetches mood data on tab focus via `useIsFocused`, so newly logged moods appear instantly.
- **Custom calendar cells** — `react-native-calendars` `dayComponent` prop allows embedding emoji markers directly into date cells.
- **New Architecture** — The Android build targets the React Native New Architecture with Hermes enabled for improved performance.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with React Native
</p>

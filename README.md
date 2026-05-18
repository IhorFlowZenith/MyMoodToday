
<p align="center">
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/home.png" width="28%" alt="Home Screen" />
  <img src="https://raw.githubusercontent.com/IhorFlowZenith/MyMoodToday/refs/heads/main/src/assets/screenshots/calendar.png" width="28%" alt="Calendar Screen" />
</p>

<div align="center">

# 🌸 MyMoodToday

**Minimalist Mood Tracker** — *Reflect daily. Live mindfully.*

[![React Native](https://img.shields.io/badge/React_Native-0.84-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.1-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)](https://kotlinlang.org)
[![Swift](https://img.shields.io/badge/Swift-5-F05138?style=for-the-badge&logo=swift&logoColor=white)](https://www.swift.org)
[![Jest](https://img.shields.io/badge/Jest-29-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br />

[Features](#features) •
[Moods](#-the-18-moods) •
[Tech Stack](#-tech-stack) •
[Architecture](#-project-architecture) •
[Getting Started](#-getting-started) •
[Build](#-build) •
[Tests](#-tests) •
[Technical Deep Dive](#-technical-deep-dive)

</div>

---

## 📖 About

**MyMoodToday** is a cross-platform mobile application built with **React Native** that lets you log your daily emotional state with a single tap. Pick from **18 carefully curated emojis** — from 🤩 Excited to 🤯 Stressed — and watch your emotional journey unfold on a beautifully rendered interactive calendar.

```
┌─────────────────────────────────────┐
│         No accounts. No cloud.      │
│     Your data stays on your phone.  │
└─────────────────────────────────────┘
```

All mood entries are persisted **locally** via `AsyncStorage`. There are no servers, no sign-ups, no telemetry — just you and your feelings.

---

## ✨ Features

| # | Feature | Details |
|:--:|---------|---------|
| 🎭 | **18 Moods** | 6 positive · 6 neutral · 6 negative — every shade of your day |
| 📅 | **Interactive Calendar** | Custom `dayComponent` renders emoji markers on each date |
| 🔒 | **100% Offline** | `AsyncStorage` persistence — zero network requests |
| 🎨 | **Soft UI Design** | Lavender background (`#fae9fe`), pink accents (`#FF758F`), rounded cards |
| 📱 | **Smooth Navigation** | React Navigation bottom tabs with custom styling |
| ⚡ | **New Architecture** | Hermes engine + Fabric renderer on Android |
| 🧪 | **Type-Safe** | Full TypeScript coverage across the entire codebase |

---

## 🎭 The 18 Moods

<div align="center">

### 😊 Positive

| | | | | | |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 🤩 | 😊 | 🥰 | 🥳 | 😎 | 😇 |
| Excited | Happy | Loved | Party | Cool | Blessed |

### 😐 Neutral

| | | | | | |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 😐 | 😌 | 🤔 | 😴 | 🥱 | 🫠 |
| Neutral | Calm | Thinking | Tired | Bored | Melting |

### 😔 Negative

| | | | | | |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 😔 | 😤 | 😰 | 🤮 | 🤯 | 🫠 |
| Sad | Angry | Anxious | Sick | Stressed | Done |

</div>

---

## 🛠 Tech Stack

### Frontend & Core

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React Native (CLI) | `0.84.1` | Cross-platform mobile framework |
| **Language** | TypeScript | `5.8.3` | Static typing & developer experience |
| **UI Library** | React | `19.2.3` | Component-based UI architecture |
| **Navigation** | @react-navigation/native | `7.1.33` | Screen routing & lifecycle |
| **Bottom Tabs** | @react-navigation/bottom-tabs | `7.15.5` | Tab-based navigation |
| **Calendar** | react-native-calendars | `1.1314.0` | Customisable calendar widget |
| **Storage** | @react-native-async-storage/async-storage | `1.21.0` | Persistent key-value local storage |
| **Safe Area** | react-native-safe-area-context | `5.7.0` | Notch/island-safe rendering |
| **Screen Mgmt** | react-native-screens | `4.24.0` | Native screen containers |

### Tooling & Quality

| Tool | Version | Purpose |
|------|---------|---------|
| **Bundler** | Metro (`0.84.1`) | JavaScript bundle & asset pipeline |
| **Testing** | Jest `29.6.3` + react-test-renderer | Component & snapshot testing |
| **Linting** | ESLint 8 ( `@react-native/eslint-config` ) | Code quality & consistency |
| **Formatting** | Prettier `2.8.8` | Opinionated code formatting |
| **Babel** | `@react-native/babel-preset` `0.84.1` | JSX & modern JS transpilation |

### Android Build

| Component | Version |
|-----------|---------|
| **Language** | Kotlin `2.1.20` |
| **Build Tool** | Gradle `9.0` via wrapper |
| **SDK** | compileSdk 36, minSdk 24, targetSdk 36 |
| **JS Engine** | Hermes (enabled) |
| **App ID** | `com.mymoodtoday` |

### iOS Build

| Component | Version |
|-----------|---------|
| **Language** | Swift 5 |
| **Dependency Mgmt** | CocoaPods via Bundler |
| **Entry Point** | `AppDelegate.swift` (RCTReactNativeFactory) |

---

## 📂 Project Architecture

```
MyMoodToday/
│
├── __tests__/
│   └── App.test.tsx                  # Snapshot test
│
├── android/                          # Native Android project (Kotlin + Gradle)
│   ├── app/
│   │   ├── build.gradle              # App-level config (SDK, signing, Hermes)
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/mymoodtoday/
│   │       │   ├── MainActivity.kt
│   │       │   └── MainApplication.kt
│   │       └── res/                  # App icons, strings, styles
│   ├── build.gradle                  # Root Gradle config
│   └── gradle/wrapper/              # Gradle 9.0 distribution
│
├── ios/                              # Native iOS project (Swift + CocoaPods)
│   ├── MyMoodToday/
│   │   ├── AppDelegate.swift
│   │   ├── Info.plist
│   │   ├── LaunchScreen.storyboard
│   │   └── Images.xcassets/          # App icon assets
│   └── Podfile
│
├── src/
│   ├── assets/
│   │   └── screenshots/
│   │       ├── home.png
│   │       └── calendar.png
│   │
│   ├── constants/
│   │   └── moods.ts                  # 🎯 18 mood definitions
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx            # 🏠 Mood selection grid
│   │   └── CalendarScreen.tsx        # 📅 Mood history calendar
│   │
│   └── utils/
│       └── storage.ts                # 💾 AsyncStorage CRUD
│
├── App.tsx                           # 🚀 Root component (NavigationContainer)
├── index.js                          # Entry point (AppRegistry)
│
├── package.json
├── tsconfig.json
├── metro.config.js
├── babel.config.js
├── jest.config.js
├── .eslintrc.js
├── .prettierrc.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version | Check |
|-------------|---------|-------|
| **Node.js** | `>= 22.11.0` | `node --version` |
| **npm** | (bundled) | `npm --version` |
| **Java** (Android) | `>= 17` | `java --version` |
| **Android SDK** | `API 36` | `sdkmanager --list` |
| **Xcode** (iOS) | `>= 16` | `xcodebuild --version` |
| **CocoaPods** (iOS) | `>= 1.13` | `pod --version` |

> 💡 New to React Native? Follow the [official environment setup guide](https://reactnative.dev/docs/environment-setup).

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/IhorFlowZenith/MyMoodToday.git
cd MyMoodToday

# 2. Install JS dependencies
npm install

# 3. iOS only — install CocoaPods
cd ios && bundle exec pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler (keep this running)
npm start

# In a separate terminal:
npm run android     # Run on Android emulator / device
npm run ios         # Run on iOS simulator
```

---

## 📋 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm start` | `react-native start` | Start Metro development server |
| `npm run android` | `react-native run-android` | Build & launch on Android |
| `npm run ios` | `react-native run-ios` | Build & launch on iOS simulator |
| `npm test` | `jest` | Run the test suite |
| `npm run lint` | `eslint .` | Lint all source files |

---

## 🧪 Tests

```bash
npm test

# Watch mode (for development)
npm test -- --watch
```

The test suite renders the full component tree with `react-test-renderer` under `ReactTestRenderer.act()`, verifying the application mounts without errors.

```
 PASS  __tests__/App.test.tsx
  ✓ renders correctly (42 ms)

Tests:    1 passed, 1 total
Snapshots: 0 total
Time:     1.234 s
```

---

## 🔧 Build

### Android — Release APK

```bash
cd android

# Debug APK (quick test)
./gradlew assembleDebug

# Release APK (signed)
./gradlew assembleRelease

# Android App Bundle (for Google Play)
./gradlew bundleRelease
```

Artifacts are output to:
```
android/app/build/outputs/apk/release/app-release.apk
android/app/build/outputs/bundle/release/app-release.aab
```

> ⚠️ Before building a release APK, generate your own keystore:
> ```bash
> keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
> ```

### iOS — Release IPA

1. Open `ios/MyMoodToday.xcworkspace` in **Xcode**
2. Select **Product → Archive**
3. In the Organizer window, choose **Distribute App**
4. Select distribution method (App Store / Enterprise / Development)

---

## 🔬 Technical Deep Dive

### Data Flow

```
┌──────────────┐     tap emoji     ┌──────────────┐     read/write     ┌──────────────┐
│  HomeScreen  │ ────────────────> │  storage.ts  │ ─────────────────> │ AsyncStorage │
│  (mood grid) │ <──────────────── │  (CRUD)      │ <───────────────── │ (JSON blob)  │
└──────────────┘    Alert(success) └──────────────┘                   └──────────────┘
                                                       │
                                                       │ getAllMoods()
                                                       ▼
                                               ┌──────────────┐
                                               │CalendarScreen│
                                               │ useIsFocused │
                                               └──────────────┘
```

### Storage Schema

```typescript
// Key in AsyncStorage
'@mood_data'

// Value — flat JSON object
{
  "2026-05-18": "🤩",
  "2026-05-17": "😊",
  "2026-05-16": "😴"
}
```

### Key Patterns

| Pattern | Implementation | Benefit |
|---------|---------------|---------|
| **Cross-screen sync** | `useIsFocused()` hook refetches mood data on tab switch | Calendar always shows latest entry |
| **Custom calendar cells** | `dayComponent` prop overrides default date rendering | Emoji markers directly in date cells |
| **Immutable state merge** | Spread existing data before writing (`{...moods, [date]: emoji}`) | No data loss on concurrent writes |
| **Safe area rendering** | `SafeAreaView` wraps every screen | Correct padding on notched devices |
| **Flex grid layout** | `flexWrap: 'wrap'` with 3-column cards | Responsive layout across screen sizes |

### Styling Constants

```typescript
// Primary palette
background: '#fae9fe'   // Soft lavender
accent:     '#FF758F'    // Pink (active tab, arrows)
secondary:  '#6485bc'    // Muted blue (greeting, titles)
text:       '#4a4a4a'    // Dark gray (body text)
card:       '#FFFFFF'    // White (mood cards, calendar)
```

### Navigation Configuration

```typescript
Tab.Navigator({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 90,
    elevation: 10,
    shadowOpacity: 0.1,
  },
  tabBarActiveTintColor: '#FF758F',
})
```

---

## 🏗 Android Build Details

| Property | Value |
|----------|-------|
| **namespace / applicationId** | `com.mymoodtoday` |
| **compileSdk** | `36` (Android 16) |
| **minSdk** | `24` (Android 7.0) |
| **targetSdk** | `36` |
| **versionCode** | `1` |
| **versionName** | `1.0` |
| **NDK Version** | `27.0.12077973` |
| **Build Tools** | `35.0.0` |
| **Kotlin** | `2.1.20` |
| **AGP** | `8.7.3` |
| **New Architecture** | ✅ Enabled |
| **Hermes** | ✅ Enabled |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Make your changes
4. ✅ Run tests (`npm test`) and lint (`npm run lint`)
5. 📝 Commit (`git commit -m 'feat: add amazing feature'`)
6. 🚀 Push (`git push origin feature/amazing-feature`)
7. 🔄 Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

```
MIT License

Copyright (c) 2026 IhorFlowZenith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

<p align="center">
  <sub>Built with ❤️ using React Native · TypeScript · Kotlin · Swift</sub>
  <br />
  <sub>© 2026 IhorFlowZenith</sub>
</p>

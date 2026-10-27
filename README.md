# African Recipes App

> African cooking made simple. Spice up your routine with hundreds of rich, heritage-rich dishes from across the continent.

[![React Native](https://shields.io)](https://reactnative.dev)
[![Expo](https://shields.io)](https://expo.dev/)
[![TypeScript](https://shields.io)](https://typescriptlang.org)

---

## 📱 Features

- **Feature 1:** Spring Animation (e.g., React Native Reanimated animates rings on the welcome page withspring to welcome the user)
- **Feature 1:** Short description (e.g., File-based routing with Expo Router)
- **Feature 2:** Short description (e.g., Cross-platform iOS & Android support)
- **Feature 3:** Short description (e.g., Dark mode & theme support)
- **Feature 4:** Short description (e.g., State management with Zustand/Redux)

---

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev) via [Expo](https://expo.dev/)
- **Routing:** [Expo Router](https://expo.dev) (File-based navigation)
- **Language:** [TypeScript](https://typescriptlang.org)
- **Styling:** (e.g., NativeWind / StyleSheet / Tailwind)
- **State / API:** (e.g., TanStack Query, Zustand, Axios)

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.io) / [bun](https://bun.sh)
- **Expo Go** app installed on your physical iOS or Android device, or an iOS Simulator / Android Emulator configured.

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   `npx expo start`
4. **Run the app:**
   - Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).
   - Press `i` in the terminal to open the **iOS Simulator**.
   - Press `a` in the terminal to open the **Android Emulator**.
   - Press `w` to open in a **Web browser**.

---

## 📁 Project Structure

```text
├── app/                  # File-based routing & screens (Expo Router)
│   ├── _layout.tsx       # Root layout & navigation providers
│   ├── index.tsx         # Home/Landing screen
│   └── tabs/             # Bottom tab navigator screens
├── assets/               # Images, fonts, icons, and splash screens
├── components/           # Reusable UI components
├── constants/            # Theme, colors, and global constants
├── hooks/                # Custom React hooks
├── types/                # TypeScript interfaces and types
├── app.json              # Expo app configuration & native metadata
├── package.json          # Project scripts and dependencies
└── tsconfig.json         # TypeScript compiler configuration
```

---

---

## Libraries

**react-native-heroicons** [heroicons](https://www.npmjs.com/package/react-native-heroicons)

---

## 📦 Building for Production (EAS Build)

This project uses [EAS Build](https://expo.dev) for compiling native iOS and Android binaries.

1. **Install EAS CLI:**

   ```bash
   npm install -g eas-cli
   ```

2. **Log in to your Expo account:**

   ```bash
   eas login
   ```

3. **Configure EAS Build:**

   ```bash
   eas build:configure
   ```

4. **Build the app:**
   - **Android (APK / AAB):**
     ```bash
     eas build --platform android --profile production
     ```
   - **iOS (IPA):**
     ```bash
     eas build --platform ios --profile production
     ```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```

<FollowUp>
If you want to customize this further, tell me:
* What **backend or database** your app connects to (e.g., Supabase, Firebase, Node.js)?
* What **state management or UI libraries** you are using?
</FollowUp>
```

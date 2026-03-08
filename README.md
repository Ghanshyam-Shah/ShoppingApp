# Shopping App (React Native + Expo)

## Project Overview

This is a production-ready React Native shopping application built with Expo.

## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation
- Redux Toolkit
- i18next (Multi-language support)

## Installation

Clone the repository

git clone <repo-url>

Go to project folder

cd ShoppingApp

Install dependencies

npm install

Start the project

npx expo start

## Environment Variables

Create a `.env` file in the root folder and add:

EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=
EXPO_PUBLIC_RAZORPAY_KEY_ID=
EXPO_PUBLIC_APP_ENV=development

## Folder Structure

src/
app/
features/
shared/
navigation/
utils/
config/

## Dependencies

===============================
NAVIGATION
===============================
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
@react-navigation/drawer
react-native-screens
react-native-safe-area-context
react-native-gesture-handler
react-native-reanimated

Purpose:
Screen navigation, stack navigation, bottom tabs,
drawer menu, gestures and navigation animations.

===============================
STATE MANAGEMENT
===============================
@reduxjs/toolkit
react-redux
redux-persist

Purpose:
Global state management and app state persistence.

===============================
LOCAL STORAGE
===============================
@react-native-async-storage/async-storage

Purpose:
Store data locally on the device
(tokens, settings, cart etc).

===============================
INTERNATIONALIZATION (i18n)
===============================
i18next
react-i18next
expo-localization

Purpose:
Multi-language support and device language detection.

===============================
EXPO DEVICE FEATURES
===============================
expo-image
expo-image-picker
expo-notifications
expo-constants
expo-linking
expo-splash-screen
expo-font

Purpose:
Image handling, camera/gallery access,
push notifications, deep linking,
splash screen and custom fonts.

===============================
FORMS & VALIDATION
===============================
react-hook-form
zod
@hookform/resolvers

Purpose:
Handle forms and validate user input.

===============================
UI UTILITIES
===============================
react-native-flash-message
date-fns

Purpose:
Show toast messages and handle date formatting.

===============================
CODE QUALITY
===============================
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
eslint-plugin-react
eslint-plugin-react-native
eslint-plugin-react-hooks
prettier

Purpose:
Code linting, React rules,
hooks validation and automatic formatting.

===============================
TESTING
===============================
jest
jest-expo
@testing-library/react-native
@testing-library/jest-native
@types/jest

Purpose:
Unit testing and component testing for React Native apps.

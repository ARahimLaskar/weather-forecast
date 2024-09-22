# Weather Forecast App

## Overview

This Weather Forecast App is built with **ReactJS** and provides accurate weather forecasts based on the user's location. It features both **light** and **dark mode** themes and allows users to search for weather updates by location. The app can either use **geolocation** (with permission) or fallback to the **IP address** to determine the user's location for providing weather forecasts. Users can toggle between **Celsius** and **Fahrenheit** for temperature units, and it provides forecasts for the next 5 days.

## Features

- **Theme Toggle**: Users can switch between **light mode** and **dark mode**.
- **Location Detection**:
  - If the user grants location permission, the app will use their **longitude** and **latitude** to fetch weather data.
  - If the user denies permission, the app uses the **IP address** to get the weather forecast for the user's location.
- **Search Bar**: Users can type a location to search for its weather forecast.
- **Temperature Unit Toggle**: Users can switch between **Celsius** and **Fahrenheit**.
- **5-Day Forecast**: The app provides the weather forecast for the next 5 days.
- **Preference Storage**: The app saves the user's theme and temperature unit preferences in **localStorage**.

## Tech Stack

- **ReactJS**: The primary library used to build the app.
- **React Redux Toolkit**: For managing the global state of the app.
- **RTK Query**: To handle API calls for fetching weather data efficiently.
- **API Used**: http://api.weatherapi.com/v1.
- **Material-UI**: Used for building and styling the app's components.
- **localStorage**: To store the user's theme mode and temperature unit preferences.
- **GitHub**: For version control and collaboration.
- **Netlify**: Platform used to deploy the application.

## How It Works

1. **Geolocation & IP Fallback**:
   - The app requests the user's **location permission**. If granted, it fetches weather data based on the user's **geographical coordinates**.
   - If the user declines, the app falls back to the **IP address** to get a general forecast for the location.
2. **Search Functionality**:
   - Users can search for any location in the search bar to get weather details.
3. **Temperature & Theme Toggle**:
   - Users can toggle between **Celsius** and **Fahrenheit** scales for the temperature.
   - They can also toggle between **light** and **dark** mode, and these preferences are stored locally.
4. **5-Day Forecast**:
   - The app displays a detailed weather forecast for the next **5 days**.

## Setup & Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/ARahimLaskar/weather-forecast.git

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app
   ```bash
   npm run dev
   ```

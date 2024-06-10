# Weather App

## Description
The Weather App is an Angular-based application that provides weather information based on the user's geolocation. It uses IP-based geolocation to fetch the user's location and then retrieves the weather data for that location.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Key Angular Features](#key-angular-features)
- [License](#license)

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/MR-VVick/weather-app.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd weather-app
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage
1. **Start the development server:**
    ```bash
    ng serve
    ```
2. **Open a web browser and navigate to:**
    ```
    http://localhost:4200
    ```

## Architecture
The application follows a standard Angular project structure:

- **src/app**: Contains the core application code.
  - **home**: Contains components related to the home page.
    - **home.component.ts**: The main component for displaying weather information.
    - **home.component.html**: The template for the home component.
    - **home.component.scss**: The styles for the home component.
  - **interfaces**: Defines TypeScript interfaces for the data models used in the application.
    - **currentWeather.ts**: Interface for current weather data.
    - **forecastWeather.ts**: Interface for forecast weather data.
  - **services**: Contains service classes that handle data fetching and business logic.
    - **geolocation.service.ts**: Service for fetching geolocation data based on the user's IP.
    - **home.service.ts**: Service for fetching weather data from the API.
    - **date-helper.service.ts**: Service for date-related utility functions.
- **public**: Contains static assets for the application.

## Key Angular Features
- **Components**: The application is built using Angular components, each responsible for a specific part of the UI. For example, `home.component.ts` is responsible for displaying weather information on the home page.
- **Services**: Angular services are used to handle business logic and data fetching. The `GeolocationService` fetches the user's location, and the `HomeService` fetches weather data.
- **Dependency Injection**: Services are injected into components and other services using Angular's dependency injection system.
- **Observables**: The application uses RxJS Observables for asynchronous data streams. For example, the `getLocationByIP` method in `GeolocationService` returns an `Observable` that emits the user's location data.
- **HTTP Client**: The Angular `HttpClient` module is used to make HTTP requests to external APIs.

## License
This project is licensed under the MIT License.

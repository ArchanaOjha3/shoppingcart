# Product Imagery Description Challenge

This repository contains a React application that implements a product imagery display with responsive behavior, dynamic sizing, and carousel functionality. The challenge involves creating a user interface that showcases product images, allows users to select sizes, and provides a mobile-friendly image carousel with slide indicators.

## Features

- Display product imagery in an immersive format to aid users in their decision-making process.
- Implement responsive design for both desktop and mobile views.
- Allow users to select sizes for the product.
- Provide a mobile-friendly image carousel for browsing images.
- Display slide indicators to show the current position in the carousel.

## Project Structure

The project is structured as follows:

- `src/`
  - `components/`
    - `Header.js` - The header component containing the application title and navigation icons.
    - `ProductInfo.js` - Display the selected size and product information.
    - `CarouselMobile.js` - Mobile image carousel with swipe functionality and slide indicators.
    - `Tab.js` - Dynamic tab component to display different product details.
    - `ImagesLayout.js` - Display images in a responsive layout based on the image count.
  - `redux/`
    - `actions.js` - Redux actions for setting the selected size.
    - `reducers.js` - Redux reducer to manage selected size state.
    - `sagas.js` - Redux saga to save selected size to local storage.
    - `selectors.js` - Redux selectors to access selected size state.
  - `App.js` - Main application component that integrates other components.
  - `index.js` - Entry point of the application.

## Technologies Used

- React for building the user interface.
- Redux for state management of the selected size.
- Redux Saga for managing side effects, such as storing the selected size in cookie.
- `react-responsive-carousel` for implementing the mobile-friendly image carousel.
- Tailwind CSS for styling and responsive layout.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Evaluation Criteria

The solution will be evaluated based on the following criteria:

- Correct implementation of product imagery display, responsive behavior, and carousel functionality.
- Project structure and architectural aspects.
- Code quality, simplicity, and readability.
- Responsive/fluid layout knowledge and CSS architecture principles.
- Meaningful Git commits and version control.
- Minimal documentation to guide other developers to run the solution successfully.

## Sandbox Application

https://qfyrht.csb.app/

## Credits

This project was created as a response to a coding challenge and is provided as an example implementation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

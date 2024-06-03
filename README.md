# Event Page UI with Next.js and Tailwind CSS

## Overview

This project is a frontend user interface (UI) designed to display event data with filtering options, created using Next.js, TypeScript, and Tailwind CSS. The UI design is inspired by the current UI of [proelevate.in](https://proelevate.in), focusing on simplicity, clarity, and a clean aesthetic.

The application consists of three main pages:
1. **Event Form Page**: A form to input event details such as event name, description, and submission deadline.
2. **Event List Page**: A page that lists all events with a search bar and filter options.
3. **Event Detail Page**: A page displaying detailed information about a selected event.

Additionally, the UI supports both light and dark themes.

## Live Demo

Check out the live demo: [proelevate-task-ten.vercel.app](https://proelevate-task-ten.vercel.app/)

## Features

- **Responsive Design**: Ensures compatibility with various screen sizes and devices using Tailwind CSS utility classes.
- **Light and Dark Themes**: Provides a toggle between light and dark modes for better user experience.
- **Search Functionality**: Includes a search bar to quickly find events.
- **Animations and Transitions**: Enhances the UI with smooth animations and transitions.
- **Tooltips and Hover Effects**: Provides additional context and interactivity.

## Pages

### 1. Event Form Page

A simple form to collect event details:
- **Event Name**
- **Event Description**
- **Submission Deadline**

### 2. Event List Page

Displays a list of all events with:
- **Search Bar**: To search events by name or description.

### 3. Event Detail Page

Shows detailed information of a selected event, including:
- **Event Name**
- **Event Description**
- **Submission Deadline**

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **TypeScript**: For type-safe JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vercel**: For deployment and hosting.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>= 12.x)
- npm or yarn

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Dharam-IN/proelevate-task
    cd proelevate-task
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `components/`: Reusable UI components.
- `pages/`: Next.js pages.
- `styles/`: Global and component-specific styles using Tailwind CSS.
- `public/`: Static assets.

## Deployment

This project is deployed using Vercel. Follow these steps to deploy your own instance:
1. **Create a Vercel account**: [Vercel](https://vercel.com/)
2. **Link your GitHub repository**: Follow the instructions on Vercel to link your GitHub repository.
3. **Deploy**: Once linked, Vercel will automatically deploy your project on every push to the main branch.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

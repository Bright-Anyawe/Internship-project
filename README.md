### Skill Test Dashboard
A Next.js application for managing and analyzing skill test scores. This project leverages React's Context API for global state management, Tailwind CSS for responsive styling, and Chart.js for dynamic data visualization.

# Table of Contents
- Overview
- Features
- Getting Started
- Prerequisites
- Installation
- Running the Project
- Project Structure
- Technologies Used
- Contributing
- License


## Overview
Skill Test Dashboard is a web application that enables users to update their scores and view real-time statistics and analysis. The application includes interactive UI components such as score update forms, quick statistics displays, comparison graphs, and question analysis charts. A global context is used to share form data seamlessly between components, making the application maintainable and scalable.

# Features

* Score Update Form: Update your skill test scores with live validation.

* Global State Management: Use React Context API to share form data across components.
* Interactive Visualizations: Dynamic charts and progress bars rendered with Chart.js.
* Responsive Design: Fully responsive UI built with Tailwind CSS for optimal experience on mobile, tablet, and desktop.
* User Feedback: Success messages with a visual progress bar after form submission.


### Getting Started
Prerequisites
Node.js (version 14 or higher)
npm or yarn package manager
Installation
Clone the repository:

bash
git clone git@github.com:Bright-Anyawe/Skill_test_dashboard/my-internship-project.

git
Navigate to the project directory:

bash
Copy
Edit
cd my-internship-project
Install dependencies:

Using npm:

bash

npm install
or using yarn:

# bash


yarn install
Running the Project
Start the development server:

Using npm:

# bash

npm run dev
or using yarn:

# bash

yarn dev
Then open your browser and navigate to http://localhost:3000.

Project Structure

my-internship-project/
├── public/                  # Static assets
├── src/
│   ├── components/
        │   ├── ui      # Reusable UI components
│   │   ├── ScoreUpdater.tsx # Modal & success message with progress bar
│   │   ├── updateScoresModal.tsx
│   │   ├── QuickStatistics.tsx
│   │   ├── QuestionAnalysis.tsx
│   │   ├── ComparisonGraph.tsx
│   │   └── ...              # Additional components
│   ├── context/             # Global state management
│   │   └── formDataContext.tsx
│   ├── pages/ or app/        # Next.js pages and routing
│   └── styles/              # Global styles (if any)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md


## Technologies Used
- Next.js: React framework for server-side rendering and routing.
- React: For building interactive user interfaces.
- Tailwind CSS: Utility-first CSS framework for responsive design.
- Chart.js & react-chartjs-2: For rendering dynamic charts.
- TypeScript: For type safety and enhanced developer experience.

# Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. Ensure your code follows the existing style and add tests for any new features.

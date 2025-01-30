
# Quiz Application with Gamification

## Table of Contents
- [Quiz Application with Gamification](#quiz-application-with-gamification)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [Demo](#demo)
    - [1. **Home Page**](#1-home-page)
    - [2. **Answering Questions**](#2-answering-questions)
    - [3. **Results Page**](#3-results-page)
    - [5. **Error Page**](#5-error-page)
    - [6. **Demo Video**](#6-demo-video)
  - [2. Technologies Used](#2-technologies-used)
  - [3. Features](#3-features)
  - [4. Installation](#4-installation)
    - [Prerequisites](#prerequisites)
    - [Steps to Set Up](#steps-to-set-up)
  - [5. Usage](#5-usage)
  - [6. File Structure](#6-file-structure)
  - [7. API Endpoints](#7-api-endpoints)
    - [GET /api](#get-api)
  - [8. Conclusion](#8-conclusion)

## 1. Introduction

This **Quiz Application** is a web-based tool designed to provide an engaging quiz experience. It fetches quiz data dynamically from an API and includes several gamification features such as score tracking, mistake counting, and progress indicators.

The user interface is designed for ease of use, ensuring that users can navigate through questions seamlessly. The application provides an interactive experience where users can answer questions, track their progress, and receive a final score at the end of the quiz.

## Demo

### 1. **Home Page**

- When the user first visits the quiz page, they will see a welcome screen and a list of available questions. The progress bar displays how many questions are left.
  
  **Screenshot:**
  ![Home Page](https://github.com/Zaid-deve/quizApp/blob/master/public/preview/home.png)

### 2. **Answering Questions**

- The user selects answers to questions using radio buttons. Once the answer is selected, the user can click the **Next Question** button to move to the next question.
- If the user has not selected an option, an error message will prompt them to select one.
  
  **Screenshot:**
  ![Question Page](https://github.com/Zaid-deve/quizApp/blob/master/public/preview/quiz.png)


### 3. **Results Page**

- Once all the questions have been answered, the user is redirected to the results page, where their score is shown along with the number of mistakes. Emojis and summary details are displayed to provide a gamified experience.

  **Screenshot:**
  ![Results Page](https://github.com/Zaid-deve/quizApp/blob/master/public/preview/result.png)

### 5. **Error Page**

- If there is an issue (like no internet connection or API failure), an error page is shown to the user with a "Try Again" button. It also includes a Wi-Fi icon to indicate the issue.
  
  **Screenshot:**
  ![Error Page](https://github.com/Zaid-deve/quizApp/blob/master/public/preview/error.png)

### 6. **Demo Video**

- Watch the demo video to see the application in action:
  
  [Watch the Demo Video](https://github.com/Zaid-deve/quizApp/src/preview/quizApp-working.mp4)


## 2. Technologies Used

- **Frontend**:
  - **React**: Used for building the interactive UI and managing the state of the application.
  - **TailwindCSS**: For styling the application and ensuring responsiveness across devices.
  - **React Router**: For handling page navigation within the application.

- **Tools**:
  - **Postman**: For API testing.
  - **Git**: For version control.

## 3. Features

1. **Dynamic Quiz Loading**: The quiz data is fetched from an API, ensuring dynamic content.
2. **Question Navigation**: Users can answer questions one by one, and their progress is tracked.
3. **Score Calculation**: Scores are calculated based on correct answers and mistakes.
4. **Mistake Tracking**: Incorrect answers are counted and displayed at the end of the quiz.
5. **Detailed Question Descriptions**: Option to show detailed descriptions for each question.
6. **Gamification**: Includes progress bar, score display, and interaction to increase engagement.
7. **Responsive Design**: Fully responsive layout for both desktop and mobile devices.

## 4. Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** and **npm** (Node Package Manager)
- **Git** (for version control)

### Steps to Set Up

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Zaid-deve/quizApp
    ```

2. **Install dependencies**:
    Navigate to the project directory:
    ```bash
    cd quiz-application
    ```
    Then run:
    ```bash
    npm install
    ```

3. **Run the development server**:
    To start the application locally:
    ```bash
    npm start
    ```
    This will start the React development server and open the application in your default browser.

4. **Backend Setup** (if applicable):
    If you're also using a backend server, navigate to the backend directory and follow these steps:
    ```bash
    cd backend
    npm install
    npm start
    ```
    The API will be hosted at `http://localhost:5173` (or any other port if configured).

## 5. Usage

1. Start the Quiz:
    Once you open the quiz application, you will be directed to the homepage.
    The page will load and display a Start Quiz button.
    Upon clicking the Start Quiz button, you will begin the quiz.

2. Quiz Page
    Navigation through Questions:
    
    You will see the first question on the quiz page.
    The question will have a description and multiple choice options (radio buttons).
    Select one of the options to proceed.
    Options and Answer Selection:
    
    You can select one option per question.
    If the question is mandatory, you must select an option before proceeding to the next     question. If you try to move forward without selecting an answer, an error message     will appear prompting you to select an answer.
    Each option will be visually highlighted when selected.
    Viewing the Detailed Solution:
    
    You can toggle a button to show or hide the detailed solution for the current question.
    If you choose to view it, a detailed explanation will be displayed.
    Progress and Score:
    
    At the top, you will see your progress (current question out of total questions) and     your score.
    If the question has been answered correctly, your score will increase according to the     marks assigned to the correct answer.
    Incorrect answers will deduct points based on the negative marks assigned to that     question.
    Next Question / Submit Quiz:
    
    After selecting an answer, click the Next Question button to move to the next question.
    If you're at the last question, the button will change to Submit Quiz. Clicking this     will submit the quiz and take you to the result page.
    Cancelling the Quiz:
    
    You can cancel the quiz anytime by clicking the Cancel Quiz button. This will directly     submit the quiz and take you to the result page.
3. Result Page
   Summary of Your Results:
   
   The result page will display your total score out of the maximum possible score.
   You will also see how many mistakes you made during the quiz.
   Visual Summary:
   
   A beautiful layout will present a summary with emoji icons and numbers for each    section:
   The question count, your score, and the overall result will each be displayed in    individual boxes.
   Each section will have an emoji at the top, representing the status (for example, a    checkmark for correct answers, a warning emoji for mistakes).
   Feedback and Recommendations:
   
   Based on your performance, feedback will be displayed, such as:
   A congratulations message if you scored high.
   A try again message if your score is low.
   Retry the Quiz:
   
   If you wish to retake the quiz, you will have the option to click a Try Again button.
   4. Error Handling
   Error Pages:
   If any error occurs (e.g., no internet connection or failed API request), an error    page will be displayed.
   The error page will show a Wi-Fi checked icon to indicate connection issues.
   A Try Again button will be available to retry the operation.


## 6. File Structure

The project follows a clean and organized directory structure:

```
quiz-application/
├── quizApp/               # React.js application
│   ├── public/             # Static assets (images, fonts)
│   ├── src/                # Source code
│   │   ├── components/     # Reusable React components (Quiz, Result, etc.)
│   │   ├── tailwind.css/   # importing tilwind
│   │   └── App.jsx         # Main app component
│   ├── package.json        # Dependencies and scripts
└── README.md               # Project documentation
```

## 7. API Endpoints

### GET /api
- **Description**: Fetches quiz data from the server.
- **Response**:
    ```json
    {
        "questions_count": 10,
        "questions": [
            {
                "id": 1,
                "description": "What is 2+2?",
                "options": [
                    { "description": "3", "is_correct": false },
                    { "description": "4", "is_correct": true },
                    { "description": "5", "is_correct": false }
                ],
                "correct_answer_marks": 10,
                "negative_marks": 5
            },
            ...
        ]
    }
    ```

## 8. Conclusion

This quiz application offers a comprehensive, gamified experience with dynamic question handling, detailed result tracking, and a responsive interface. It is built using modern web technologies like React and Node.js, ensuring scalability and responsiveness.

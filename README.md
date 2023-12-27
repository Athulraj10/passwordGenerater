# Password Generator Application

This is a password generator application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to generate secure passwords based on selected criteria like numbers, capital letters, small letters, special characters, and password length.

## Features

- **Password Generation:** Generate secure passwords based on user-selected criteria.
- **Customization:** Select options for numbers, capital letters, small letters, special characters, and length.
- **Display Generated Passwords:** Show the generated password on the user interface.
- **Save Passwords:** Option to save passwords for later use or reference.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (with Mongoose)
- **Frontend:** React.js (with React Hooks)
- **Styling:** CSS for basic styling
- **Other Libraries:** bcrypt for password hashing, etc.

## File Structure
```
password-generator/
│
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ ├── package.json
│ └── ...
│
├── config/
│ ├── keys.js
│ └── ...
│
├── controllers/
│ ├── authController.js
│ ├── passwordGeneratorController.js
│ └── ...
│
├── models/
│ ├── User.js
│ ├── GeneratedPassword.js
│ └── ...
│
├── routes/
│ ├── authRoutes.js
│ ├── passwordGeneratorRoutes.js
│ └── ...
│
├── app.js
├── package.json
└── ...
```
bash


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Athulraj10/password-generator.git
   cd password-generator

    Install dependencies:

    bash

npm install
cd client
npm install

Set up environment variables:

Create a .env file in the root directory with:

env
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Run the application:

bash

npm run dev

Access the application in your browser at: http://localhost:3000

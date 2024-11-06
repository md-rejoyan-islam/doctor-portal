# Doctors Portal

Doctors Portal is a web application designed to streamline the process of booking appointments with doctors. It provides an intuitive interface for patients to view available time slots and book appointments with their preferred doctors.

## Features

- **User Authentication**: Secure login and registration system for patients.
- **Appointment Booking**: Easy-to-use interface for booking appointments with doctors.
- **Available Services**: Display of various medical services offered.
- **Doctor Profiles**: Information about doctors, including their specialties and available time slots.
- **Responsive Design**: Fully responsive web design, ensuring a seamless experience across devices.

## Technologies Used

- **Frontend**:

  - React.js
  - Tailwind CSS for styling
  - DaisyUI for UI components
  - React Router for navigation

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB

- **Authentication**:

  - Firebase Authentication

- **Hosting**:
  - Firebase Hosting

## Setup and Installation

To set up this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/doctors-portal.git
   ```

2. Navigate to the project directory:

   ```
   cd doctors-portal
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration:

   ```
   VITE_REACT_APP_apiKey = your_api_key
   VITE_REACT_APP_authDomain = your_auth_domain
   VITE_REACT_APP_projectId = your_project_id
   VITE_REACT_APP_storageBucket = your_storage_bucket
   VITE_REACT_APP_messagingSenderId = your_messaging_sender_id
   VITE_REACT_APP_appId = your_app_id
   VITE_SERVER_API_URL = your_server_api_url
   VITE_STRIP_PUBLISHABLE_KEY = your_stripe_publishable_key
   VITE_STRIP_SECRET_KEY =  your_stripe_secret_key
   ```

5. Start the development server:

   ```
   npm start
   ```

6. Open `http://localhost:3000` in your browser to view the application.

## Deployment

This project is deployed on Firebase. To deploy your own version:

1. Install the Firebase CLI:

   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```
   firebase login
   ```

3. Initialize your project:

   ```
   firebase init
   ```

4. Build your project:

   ```
   npm run build
   ```

5. Deploy to Firebase:
   ```
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Client Side Link

<a href="https://doctors-portal-f127f.web.app/">Preview</a>

## Server Side Link

<a href="https://doctor-portal-server-vg24.onrender.com">Preview</a>

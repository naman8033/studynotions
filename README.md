



# StudyNotion Online Education Platform (MERN App)

[Website Link](https://studynotion-frontend.vercel.app/)

![Main Page](images/mainpage.png)

## Project Description

StudyNotion is a fully functional ed-tech platform built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. StudyNotion aims to provide:
* A seamless and interactive learning experience for students.
* A platform for instructors to showcase their expertise and connect with learners globally.

### Key Features
1. **System Architecture**: High-level overview and architecture diagrams.
2. **Front-end**: Architecture, UI design, features, functionalities, and tools.
3. **Back-end**: Architecture, features, functionalities, tools, data models, and database schema.
4. **API Design**: API endpoints, functionalities, and sample requests/responses.
5. **Deployment**: Deployment process, hosting environment, infrastructure, scripts, and configuration.
6. **Testing**: Testing process, types, frameworks, and tools.
7. **Future Enhancements**: Potential enhancements, improvement explanations, timeline, and priority.

In summary, StudyNotion is designed to provide an immersive learning experience for students and a platform for instructors to showcase their expertise.

## System Architecture

The StudyNotion platform consists of three main components: the front end, the back end, and the database. It follows a client-server architecture.

### Front-end 

The front end, built using ReactJS, creates dynamic and responsive user interfaces. It communicates with the back end via RESTful API calls.

### Back-end 

The back end, built using NodeJS and ExpressJS, provides APIs for functionalities such as user authentication, course creation, and course consumption. It processes and stores course content and user data.

### Database

The database, built using MongoDB, stores unstructured and semi-structured data, including course content and user data.

### Architecture Diagram

![Architecture](images/architecture.png)

## Front End

The front end includes various pages for students, instructors, and admins:

### For Students:
* **Homepage**: Introduction to the platform and links to course lists and user details.
* **Course List**: List of all available courses with descriptions and ratings.
* **Wishlist**: Display of courses added to the wishlist.
* **Cart Checkout**: Course purchase completion.
* **Course Content**: Course content, including videos and related materials.
* **User Details**: Account details, including name, email, etc.
* **User Edit Details**: Allows editing of account details.

### For Instructors:
* **Dashboard**: Overview of the instructor's courses, ratings, and feedback.
* **Insights**: Detailed insights into course metrics.
* **Course Management Pages**: Creation, update, and deletion of courses, and management of course content and pricing.
* **View and Edit Profile Details**: View and edit account details.

### For Admin (Future Scope):
* **Dashboard**: Overview of platform's courses, instructors, and students.
* **Insights**: Detailed platform metrics.
* **Instructor Management**: Management of instructors, including account details and ratings.
* **Other Relevant Pages**: User and course management pages.

The front end uses frameworks and libraries such as ReactJS, CSS, Tailwind, and Redux for state management.

## Back End

The back end uses a monolithic architecture with Node.js and Express.js, and MongoDB as the primary database.

### Features and Functionalities:
1. **User Authentication and Authorization**: Sign-up, login, OTP verification, and password reset.
2. **Course Management**: CRUD operations for courses and management of course content and media.
3. **Payment Integration**: Razorpay integration for course purchase and enrollment.
4. **Cloud-based Media Management**: Cloudinary for media storage and management.
5. **Markdown Formatting**: Storing course content in Markdown format.

### Frameworks, Libraries, and Tools:
* **Node.js**: Primary framework.
* **MongoDB**: Flexible and scalable data storage.
* **Express.js**: Web application framework.
* **JWT**: Authentication and authorization.
* **Bcrypt**: Password hashing.
* **Mongoose**: ODM library for MongoDB.

### Data Models and Database Schema:
* **Student Schema**: Fields like name, email, password, and course details.
* **Instructor Schema**: Fields like name, email, password, and course details.
* **Course Schema**: Fields like course name, description, instructor details, and media content.

![Database Schema](images/schema.png)

## API Design

The StudyNotion platform's API follows the REST architectural style, using JSON for data exchange and standard HTTP request methods (GET, POST, PUT, DELETE).

### Sample API Endpoints and Functionalities:
1. **/api/auth/signup (POST)**: Create a new user account.
2. **/api/auth/login (POST)**: Log in using existing credentials and generate a JWT token.
3. **/api/auth/verify-otp (POST)**: Verify the OTP sent to the user's email.
4. **/api/auth/forgot-password (POST)**: Send a password reset link.
5. **/api/courses (GET)**: Get a list of all available courses.
6. **/api/courses/:id (GET)**: Get details of a specific course.
7. **/api/courses (POST)**: Create a new course.
8. **/api/courses/:id (PUT)**: Update an existing course.
9. **/api/courses/:id (DELETE)**: Delete a course.
10. **/api/courses/:id/rate (POST)**: Add a rating to a course.

### Sample API Requests and Responses:
* **GET /api/courses**: Get all courses
  * **Response**: List of all courses
* **GET /api/courses/:id**: Get a course by ID
  * **Response**: Course with specified ID
* **POST /api/courses**: Create a new course
  * **Request**: Course details in the request body
  * **Response**: Newly created course
* **PUT /api/courses/:id**: Update an existing course
  * **Request**: Updated course details in the request body
  * **Response**: Updated course
* **DELETE /api/courses/:id**: Delete a course
  * **Response**: Success message

The REST API design ensures seamless communication between the front end and back end, providing a scalable, maintainable, and reliable platform.
 
 

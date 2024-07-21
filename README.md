# Student Registration Platform

This project is a Student Registration Platform built using Node.js, Express.js, EJS, and AWS services such as DynamoDB, API Gateway, and Lambda functions. The platform allows users to add, view, update, delete, and search student entries.

## Features

- **Add Student**: Register a student using their ID, email, and full name.
- **View Students**: Display a list of all registered students.
- **Update Student**: Modify the details of a student using their ID.
- **Delete Student**: Remove a student entry using their ID.
- **Search Student**: Search for a student using their ID.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for rendering HTML pages.
- **DynamoDB**: NoSQL database service for storing student data.
- **API Gateway**: Managed service for creating and managing APIs.
- **Lambda Functions**: Serverless functions to handle API requests.

## Demo

### Add Entry
![img](/static/1.png)

### View Entry
![img](/static/2.png)

### Update Entry
![img](/static/3.png)

### Search By ID
![img](/static/4.png)

### Delete Entry
![img](/static/5.png)

### Database View
![img](/static/6.png)


## Setup Instructions

### Prerequisites

- Node.js and npm installed
- AWS account with DynamoDB, API Gateway, and Lambda setup
- use the Lambda Function attached
- AWS CLI configured with appropriate permissions

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/student-registration-platform.git
   cd student-registration-platform
   ```
2. Install Dependencies:

    ```bash
    npm install
    ```
    
3. Configure AWS Services:
  
    DynamoDB: Create a table named Students with ID as the primary key.
    API Gateway: Set up the endpoints to handle CRUD operations.
    Lambda Functions: use the provided lambda_function.py
    Environment Variables:
    Create a .env file in the root directory and add the following variables:

    ```env
      PORT=your-aws-region
      API_URL=Students
    ```
4. Run the Application:

    ```bash
    npm start
    ```


This project is a backend node.js and mongoose (mongodb) of the Sarahah, allowing users to create accounts, verify their email via OTP, and log in using JWT-based authentication and authorization. It also offers message management, error handling, input validation, and profile link sharing.

### Features:
**User Registration and Authentication**
- Create an account with email verification using OTP.
- Log in with JWT-based authentication and authorization.

**Message Management**
- Retrieve all messages for the user.
- Send anonymous messages to users.
- Delete individual messages.

**Error Handling and Validation**
- Comprehensive error handling and input validation using the Joi schema.

### Endpoints:
**Authentication**
- **Sign Up** (POST /auth/signup): Registers a new user and sends an OTP for email verification.
- **Sign In** (POST /auth/signin): Authenticates the user and returns a JWT token.
- **Verify Email** (PUT /verify/:otp): Verifies the user's email using the provided OTP.

**Messages**
- **Retrieve Messages** (GET /messages): Retrieves all messages for the authenticated user.
- **Send Message** (POST /messages/:id): Sends an anonymous message to the specified user.
- **Delete Message** (DELETE /messages/:id): Deletes a message by its ID.

# NodeJS-Blog

A simple, full-featured blog application built with Node.js, Express, MongoDB, and EJS. This project demonstrates core web development concepts including RESTful APIs, authentication, CRUD operations, and template rendering.

## Features

- **User Authentication**: Secure login system for administrators using JWT and cookies.
- **Blog Posts**: Create, read, update, and delete (CRUD) blog articles.
- **Admin Dashboard**: Manage posts through a protected admin interface.
- **Pagination & Search**: Paginated post listing and keyword search functionality.
- **Responsive Design**: Clean, responsive UI using EJS templates and CSS.
- **MongoDB Integration**: Uses Mongoose ODM for easy MongoDB interaction.
- **Session Management**: Sessions stored securely in MongoDB.
- **Real-Time Ready**: Project architecture ready for real-time features (Socket.io).

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **EJS** (Embedded JavaScript templates)
- **JWT** for authentication
- **bcrypt** for password hashing
- **express-session** and **connect-mongo** for session management
- **dotenv** for environment variable management
- **method-override** for supporting PUT/DELETE in forms

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanjaysaini383/NodeJS-Blog.git
   cd NodeJS-Blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

4. **Run the application:**
   ```bash
   npm start
   ```
   The server will run at [http://localhost:3000](http://localhost:3000).

### Usage

- Visit `/` to browse blog posts.
- Visit `/admin` to log in as an admin (you may need to register a user first).
- Use the dashboard to add, edit, or delete posts.

## Project Structure

```
.
├── index.js                # Application entry point
├── server/
│   ├── config/db.js        # Database connection logic
│   ├── models/Post.js      # Mongoose Post model
│   ├── routes/             # Application routes (main, admin)
├── views/                  # EJS templates
├── public/                 # Static assets (CSS, JS, images)
├── .env                    # Environment variables (not committed)
└── package.json
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

# Green Circle - Server Site

This repository contains the backend server code for the "Green Circle" Gardening Community and Resource Hub. This server handles all the data management, API requests, and business logic for the client-side application.

<div align="center">

[![Live Server URL](https://img.shields.io/badge/Live_API-final--gerdaning--server.vercel.app-blueviolet?style=for-the-badge)](https://final-gerdaning-server.vercel.app/)

</div>

---

### **Server Overview**

This server is built using the Node.js runtime environment and the Express.js framework to provide a robust and scalable RESTful API. It connects to a MongoDB database to perform CRUD (Create, Read, Update, Delete) operations for all application data, including user tips, gardener profiles, and interactions.

---

### **Key Features**

✅ **RESTful API:** Provides a well-structured RESTful API for seamless communication with the client-side application.

✅ **CRUD Operations:** Follows standard CRUD principles for managing all database collections (e.g., creating new tips, reading gardener data, updating posts, etc.).

✅ **Secure Environment:** All sensitive information, such as database connection strings and secret keys, is kept secure using environment variables (`.env`).

✅ **Efficient Routing:** Built with Express.js for clean, efficient, and scalable routing and middleware management.

✅ **NoSQL Database:** Utilizes MongoDB as the database, allowing for flexible, JSON-like document structures to store and manage data effectively.

---

### **API Endpoints**

The server provides several API endpoints to manage the application's data. Here are some examples:

| Method   | Endpoint     | Description                                            |
| :------- | :----------- | :----------------------------------------------------- |
| `GET`    | `/tips`      | Retrieves a list of all public gardening tips.         |
| `GET`    | `/tips/:id`  | Retrieves the details of a specific tip by its ID.     |
| `POST`   | `/tips`      | Creates a new gardening tip (requires authentication). |
| `PATCH`  | `/tips/:id`  | Updates an existing tip.                               |
| `DELETE` | `/tips/:id`  | Deletes a specific tip.                                |
| `GET`    | `/gardeners` | Retrieves a list of all gardeners.                     |
| `POST`   | `/users`     | Creates a new user in the database.                    |

_(This is a sample list. You can expand it with all your actual endpoints.)_

---

### **Technologies Used**

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/CORS-FB6D40?style=for-the-badge" alt="CORS" />
</p>

---

### **Dependencies Used**

The following NPM packages are used in this server:

- Express.js
- cors
- dotenv
- mongodb

---

### **Getting Started Locally**

Follow these steps to run the server on your local machine:

**1. Clone the repository:**

```bash
git clone [https://github.com/your-username/your-server-repository-name.git](https://github.com/your-username/your-server-repository-name.git)
```

**2. Navigate to the project directory:**

```bash
cd your-server-repository-name
```

**3. Install NPM packages:**

```bash
npm install
```

**4. Set up environment variables:**
Create a file named `.env` in the root directory of the project and add your MongoDB connection credentials.

```.env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
```

_(Replace the values above with your own MongoDB Atlas credentials.)_

**5. Run the server:**
To start the server in development mode, run:

```bash
npm run dev
```

The server will start, typically on a local port like `http://localhost:5000`.

---

### **Relevant Links**

- **Live Client Site:** [https://gardening-community-e4aad.web.app/](https://gardening-community-e4aad.web.app/)
- **Client-Side Repository:** [https://github.com/nazmulxdev/gardening-community-client](https://github.com/nazmulxdev/gardening-community-client/)

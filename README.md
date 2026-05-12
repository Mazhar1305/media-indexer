# Omnimate Media Indexer

A production-level Media Indexer API built using Node.js, Express.js, MongoDB, and Multer.

This application allows users to upload media files from their local gallery and automatically extracts metadata such as:

- File Size
- File Type (MIME Type)
- File Source
- File Name
- File Path

The metadata is stored in MongoDB for indexing and management.

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Helmet
- Morgan
- CORS

---

# Features

- Upload media files
- Fetch media metadata
- Store metadata in MongoDB
- REST API architecture
- Production-level folder structure
- Error handling middleware
- Secure Express configuration

---

# Folder Structure

```bash
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
└── app.js

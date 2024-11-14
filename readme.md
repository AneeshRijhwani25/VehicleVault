# Vehicle Vault Project Setup Script

# This script will guide you through setting up the Vehicle Vault project
# on your local machine, including both server (backend) and client (frontend).

# Prerequisites:
# - Node.js installed (v14 or higher)
# - Git installed
# - Cloudinary account for image uploads
# - A MongoDB database URL

# 1. Clone the Repository
git clone <your-git-repo-url>

# 2. Navigate to the Project Directory
cd <project-directory-name>

# --------------------------
# Server Setup Instructions
# --------------------------

# 3. Navigate to the server directory
cd server

# 4. Install the server dependencies
npm install

# 5. Set up the environment variables
# Create a `.env` file in the `server` directory and add the following variables:
# 
# PORT=4000
# DATABASE_URL=<your-mongodb-database-url>
# FRONTEND_REQ_URL=http://localhost:3000
#
# CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
# CLOUDINARY_API_KEY=<your-cloudinary-api-key>
# CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
# CLOUDINARY_FOLDER=<your-cloudinary-folder>

# 6. Start the server
npm run dev
# The server will start running at `http://localhost:4000`

# --------------------------
# Client Setup Instructions
# --------------------------

# 7. Open a new terminal window and navigate to the client directory
cd ../client

# 8. Install the client dependencies
npm install

# 9. Start the client
npm start
# The client will start running at `http://localhost:3000`

# --------------------------
# Usage Information
# --------------------------
# - The client is accessible at: http://localhost:3000
# - The server is accessible at: http://localhost:4000

# Now, you can explore the Vehicle Vault application with the client connecting to the backend server for data management.

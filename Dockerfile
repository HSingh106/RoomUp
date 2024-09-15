# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the backend code to the working directory
COPY backend /app/backend

# Set the working directory to the backend
WORKDIR /app/backend

# Expose the port that the application will run on
EXPOSE 5000

# Define the command to run the application
CMD ["node", "server.js"]
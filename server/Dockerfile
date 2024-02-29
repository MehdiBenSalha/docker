# Use Node.js version 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run your NestJS application
CMD ["npm", "run", "start:prod"]

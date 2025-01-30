# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container (if you're using yarn, replace package-lock.json with yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files into the container
COPY . .

# Build the application (run next build)
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application (run next start)
CMD ["npm", "start"]

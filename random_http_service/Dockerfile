# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the source code into the container.
COPY . .

# Inform Docker that the container listens on the specified network port at runtime.
EXPOSE 3000

# Run the web service on container startup.
CMD [ "node", "app.js" ]

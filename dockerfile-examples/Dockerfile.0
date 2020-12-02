# Base off of node image from Docker Hub
FROM node

# Copy all files from our context
COPY . .
# Perform clean npm dependencies install without modifying the package lock file
RUN npm ci
# Compile our app from TypeScript to JavaScript
RUN npm run build

# Print file list for easier debugging and auditing
RUN find . -path ./node_modules -prune -o -type f

# Set the command that will be run on container start
ENTRYPOINT [ "node", "./dist/index.js" ]

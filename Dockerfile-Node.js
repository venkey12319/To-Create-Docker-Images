# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy your custom configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your static content to the appropriate directory (if needed)
COPY ./static-html-directory /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

# CMD is not required for the official Nginx image, it will run nginx automatically

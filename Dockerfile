# Base image
FROM ubuntu:latest

# Update link
RUN apt-get update

# Install Apache
RUN apt-get install -y apache2 && \
    rm -rf /var/lib/apt/lists/*

# Clone the GitHub repository
RUN apt-get update && apt-get install -y git && \
    git clone https://github.com/cocopeanutz/edo_portfolio.git

# Install Node.js and NPM
RUN apt-get install -y nodejs npm

# Set the working directory to the cloned repo
WORKDIR /edo_portfolio/

# Install dependencies and build the React webpage
RUN npm install && \
    npm run build

# Copy the build webpage to apache folder
RUN rm -rf /var/www/html/* && \
	cp -r build/* /var/www/html
	
# Expose port 80 for Apache
EXPOSE 80

# Start Apache
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
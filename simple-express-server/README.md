# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to use `nodemon` for automatic code updates during development.

## Project Structure

```
simple-express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # Configuration file for npm
├── yarn.lock           # Dependency lock file
├── Dockerfile          # Instructions to build the Docker image
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ktna13z5.git
   cd simple-express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code updates, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.
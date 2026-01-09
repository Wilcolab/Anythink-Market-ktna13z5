# Express Server

This project is a simple Express server scaffolded to listen on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ktna13z5.git
   cd Anythink-Market-ktna13z5/express-server
   ```

2. **Install dependencies**:
   This project uses Yarn for package management. Make sure you have Yarn installed, then run:
   ```
   yarn install
   ```

3. **Run the server**:
   You can start the server using Nodemon with the following command:
   ```
   yarn start
   ```

   The server will be running on `http://localhost:8001`.

## Docker

To run the server in a Docker container, you can build the Docker image and run it with the following commands:

1. **Build the Docker image**:
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.
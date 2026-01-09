# Anythink Market

This project contains two servers for managing a task list:

- A FastAPI server implemented in Python.
- A simple Express server implemented in Node.js.

## Project Structure

- `python-server/src/main.py`: FastAPI server with two routes for adding and retrieving tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package (empty file).
- `python-server/requirements.txt`: Python dependencies for the FastAPI server.
- `python-server/Dockerfile`: Builds the Docker image for the FastAPI server.
- `simple-express-server/src/app.js`: Express server with routes for managing tasks.
- `simple-express-server/package.json`: Node.js dependencies for the Express server.
- `simple-express-server/Dockerfile`: Builds the Docker image for the Express server.
- `docker-compose.yml`: Defines and runs multi-container Docker applications.

## Getting Started

To run the servers using Docker:

```shell
docker compose up
```

This command will build the Docker images and start the containers defined in `docker-compose.yml`.

- The FastAPI server will be available at port `8000`.
- The Express server will be available at port `8001`.

## API Routes

### FastAPI Server (Python)

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

### Express Server (Node.js)

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

---

Feel free to further customize this README as your project evolves.


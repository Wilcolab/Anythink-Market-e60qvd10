# simple-express-server

A minimal Express.js server that listens on port 8001. Uses nodemon for development and is ready to run in Docker.

## Usage

### Install dependencies
```bash
cd simple-express-server
yarn install
```

### Start the server (with nodemon)
```bash
yarn start
```

### Docker
Build and run the server in Docker:
```bash
docker build -t simple-express-server .
docker run -p 8001:8001 simple-express-server
```

The server will be available at http://localhost:8001

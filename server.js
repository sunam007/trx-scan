import express from "express";
import http from "http";
import { Server } from "socket.io";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { serverConfig } from "./config/config";
import blockchainRoute from "./routes/blockchain/blockchainRoute";

//Initialize the express app
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/v1/blockchain", blockchainRoute);

// Start Server
const PORT = serverConfig.port || 5000;
server.listen(PORT, () => {
  // Use server.listen, not app.listen
  console.log(`Server running in ${serverConfig.env} mode on port ${PORT}`);
  console.log("Ip address: ", serverConfig.client_url);
});

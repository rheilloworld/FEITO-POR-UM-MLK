import express from "express";
import { createBareServer } from "@tomphttp/bare-server-node";
import { createServer } from "node:http";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { join } from "node:path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const bare = createBareServer("/bare/");
const app = express();

// Configurações
const publicPath = join(__dirname, "public");
const PORT = process.env.PORT || 8080;

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir arquivos do Ultraviolet
app.use("/uv/", express.static(uvPath));

// Servir arquivos públicos
app.use(express.static(publicPath));

// Rotas principais
app.get("/", (req, res) => {
  res.sendFile(join(publicPath, "index.html"));
});

app.get("/search=:query", (req, res) => {
  const query = req.params.query;
  res.redirect(`/?q=${encodeURIComponent(query)}`);
});

// 404 handler
app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

// Criar servidor HTTP
const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

let addr;

server.on("listening", () => {
  const address = server.address();

  if (typeof address === "string") {
    addr = address;
  } else {
    addr = `http://${address.family === "IPv6" ? `[${address.address}]` : address.address}:${address.port}`;
  }

  console.log(`🚀 Server running at ${addr}`);
  console.log(`📱 Local: http://localhost:${address.port}`);
  console.log(`🌐 Network: http://${hostname()}:${address.port}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("\n🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
}

server.listen({
  port: PORT,
});

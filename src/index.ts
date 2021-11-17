import { app } from "./app";

const PORT = Number(process.env.PORT || 3000);

const server = app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");

  server.close(() => {
    console.debug("HTTP server closed");
  });
});

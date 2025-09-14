const express = require("express");
const initDatabase = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

initDatabase();

app.use(express.json());
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api/books`);
});

import express from "express";
import cors from "cors";
import MahasiswaRoute from "./routes/MahasiswaRoute.js";

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => res.send("Halo, Kelas PBKK C"));
app.use(MahasiswaRoute);

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);

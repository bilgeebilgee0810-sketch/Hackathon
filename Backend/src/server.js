require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sosRoutes = require("./routes/sos.routes");
const staffRoutes = require("./routes/staff.routes");
const crowdRoutes = require("./routes/crowd.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Smart SOS backend is running" });
});

app.use("/api/sos", sosRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/crowd", crowdRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
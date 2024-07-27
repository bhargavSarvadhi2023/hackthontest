import express from "express";
import authRoutes from "./routes/auth";
import tenderRoutes from "./routes/tender";
import bidRoutes from "./routes/bid";
import adminRoutes from "./routes/admin";
import sequelize from "./config/database";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tenders", tenderRoutes);
app.use("/bids", bidRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

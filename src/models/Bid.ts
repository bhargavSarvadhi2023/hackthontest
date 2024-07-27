import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import User from "./User";
import Tender from "./Tender";

class Bid extends Model {
  public id!: number;
  public userId!: number;
  public tenderId!: number;
  public amount!: number;
  public specialServicesOrProduct!: string;
}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Ensure 'Users' is the name of the table in your database
        key: "id",
      },
    },
    tenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Tenders", // Ensure 'Tenders' is the name of the table in your database
        key: "id",
      },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision as needed
      allowNull: false,
    },
    specialServicesOrProduct: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Bid",
  }
);

export default Bid;
Bid.belongsTo(User, { foreignKey: "userId", as: "user" });
Bid.belongsTo(Tender, { foreignKey: "tenderId", as: "tender" });
Tender.hasOne(Bid, { foreignKey: "tenderId", as: "tender" });

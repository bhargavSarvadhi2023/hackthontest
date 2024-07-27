import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Bid from "./Bid";
import User from "./User";

class Tender extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public minAmount!: number;
  public maxAmount!: number;
  public startTime!: Date;
  public endTime!: Date;
  public type!: string;
  public location!: string;
  public winnerId!: number | null;
}

Tender.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    minAmount: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision as needed
      allowNull: true,
    },
    maxAmount: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision as needed
      allowNull: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    winnerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users", // Assuming 'Users' is the table name for the User model
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Tender",
  }
);

export default Tender;
Tender.belongsTo(User, { foreignKey: "winnerId" });

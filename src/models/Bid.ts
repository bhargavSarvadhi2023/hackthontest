import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Bid extends Model {
  public id!: number;
  public price!: number;
  public companyExperience!: number;
}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    companyExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Bid',
  }
);

export default Bid;
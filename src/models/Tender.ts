import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Tender extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public deadline!: Date;
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
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Tender',
  }
);

export default Tender;
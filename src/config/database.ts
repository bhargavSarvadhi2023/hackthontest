

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tender_management', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;

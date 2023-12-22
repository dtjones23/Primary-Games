import sequelize from '../config/connection.js';
import { User, Game } from '../models/index.js';

import * as userData from './userData.json' assert { type: 'json' };
import * as gameData from './gameData.json' assert { type: 'json' };

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    const games = await Game.bulkCreate(gameData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};
seedDatabase();
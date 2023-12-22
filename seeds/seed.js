// seeds/seed.js
import sequelize from '../config/connection.js';
import { User, Game } from '../models/index.js';

import * as userData from './userData.json' assert { type: 'json' };
import * as gameData from './gameData.json' assert { type: 'json' };

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        // Seed users
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        const games = await Game.bulkCreate(gameData, {
            individualHooks: true,
            returning: true,
        });

        process.exit(0);
    } catch (error) {
        console.error('Seed error:', error);
        process.exit(1);
    }
};

seedDatabase();

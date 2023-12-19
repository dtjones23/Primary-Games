import sequelize from '../config/connection.js';
import { DataTypes, Model } from "sequelize";


class Game extends Model {}

Game.init(
    // Used to initialize the model with attributes and configuration
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        released: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews_count: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platforms: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

export default Game;
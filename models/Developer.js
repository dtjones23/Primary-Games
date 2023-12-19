const sequelize = require('../config/connection');
const { DataTypes, Model } = require("sequelize");


class Developer extends Model {}

Developer.init(
    // Used to initialize the model with attributes and configuration
    {
        // Developer's ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // Developer's name
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Developer's unique
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // Developer's games
        games: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'developer',
    }
);

module.exports = Developer;
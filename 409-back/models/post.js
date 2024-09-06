import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    piratesId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'Posts'
})
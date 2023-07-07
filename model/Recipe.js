module.exports = (sequelize, DataTypes) => {

    const Recipe = sequelize.define("recipe", {
        recipe_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        recipe_persons: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        recipe_ingr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_fav: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Recipe
}
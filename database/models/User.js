module.exports = (sequelize, DataType) => {

    const User = sequelize.define('User', {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false,
            },
            password: {
                type: DataType.STRING,
                allowNull: false,
            }
        },
        {tableName: 'user', timestamps: false}
    );

    return User;
};

module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define(
        'Appointment',
        {
            date: DataTypes.DATE
        },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'appointment'
        }
    )

    Appointment.associate = models => {
        Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
        Appointment.belongsTo(models.User, { foreignKey: 'provider_id' })
    }

    return Appointment
}

const { TE, to } = require("../services/util.service");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");
const utilService = require("../services/util.service");

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        "Administrador",
        {
            adminFname: { type: DataTypes.STRING, field: "Admin_FName" },
            adminLname: { type: DataTypes.STRING, field: "Admin_LName" },
            adminEmail: { type: DataTypes.STRING, field: "Admin_Email" },
            password: { type: DataTypes.STRING, field: "password" },

            status: { type: DataTypes.STRING, field: "STATUS" },
        },
        { tableName: "Administrador", timestamps: false }
    );

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return (
            "Utilizador " +
            jwt.sign({ id: this.id, email: this.adminEmail }, CONFIG.jwt_encryption, {
                expiresIn: expiration_time,
            })
        );
    };

    return Model;
};
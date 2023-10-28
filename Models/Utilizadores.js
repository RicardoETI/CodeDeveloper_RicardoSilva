const { TE, to } = require("../services/util.service");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");
const utilService = require("../services/util.service");

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define(
        "Utilizadores",
        {

            userLname: { type: DataTypes.STRING, field: "User_LName" },
            userAdminId: { type: DataTypes.BIGINT(22), field: "Admin_ID" },
            userEmail: { type: DataTypes.STRING, field: "User_Email" },
            userFname: { type: DataTypes.STRING, field: "User_FName" },
            password: { type: DataTypes.STRING, field: "password" },

            status: { type: DataTypes.STRING, field: "STATUS" },
        },
        { tableName: "Users", timestamps: false }
    );

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return (
            "Bearer " +
            jwt.sign({ id: this.id, email: this.userEmail }, CONFIG.jwt_encryption, {
                expiresIn: expiration_time,
            })
        );
    };

    return Model;
};
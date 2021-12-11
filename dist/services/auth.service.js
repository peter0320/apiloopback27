"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");
const config_1 = require("../config/config");
const jwt = require('jsonwebtoken');
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
let AuthService = class AuthService {
    constructor( /* Add @inject to inject parameters */) { }
    //Generacion de claves
    GenerarClave() {
        let clave = generator(8, false);
        return clave;
    }
    CifrarClave(clave) {
        let claveCifrada = cryptoJS.MD5(clave).toString();
        return claveCifrada;
    }
    /*
     * Add service methods here
     */
    //JWT
    GenerarTokenJWT(usuario) {
        let token = jwt.sign({
            data: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre + " " + usuario.apellidos
            }
        }, config_1.config.claveJWT);
        return token;
    }
    validarTokenJWT(token) {
        try {
            let datos = jwt.verify(token, config_1.config.claveJWT);
            return datos;
        }
        catch (error) {
            return false;
        }
    }
    //Autenticacion
    IdentificarPersona(correo, password) {
        try {
            let p = this.usuarioRepository.findOne({ where: { correo: correo, password: password } });
            if (p) {
                return p;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.repository)(repositories_1.UsuarioRepository),
    (0, tslib_1.__metadata)("design:type", repositories_1.UsuarioRepository
    //Generacion de claves
    )
], AuthService.prototype, "usuarioRepository", void 0);
AuthService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
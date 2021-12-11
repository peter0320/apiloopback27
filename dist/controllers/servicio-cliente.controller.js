"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioClienteController = class ServicioClienteController {
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async getCliente(id) {
        return this.servicioRepository.destinoFk(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Servicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioClienteController.prototype, "getCliente", null);
ServicioClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioClienteController);
exports.ServicioClienteController = ServicioClienteController;
//# sourceMappingURL=servicio-cliente.controller.js.map
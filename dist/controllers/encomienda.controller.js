"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomiendaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomiendaController = class EncomiendaController {
    constructor(encomiendaRepository) {
        this.encomiendaRepository = encomiendaRepository;
    }
    async create(encomienda) {
        return this.encomiendaRepository.create(encomienda);
    }
    async count(where) {
        return this.encomiendaRepository.count(where);
    }
    async find(filter) {
        return this.encomiendaRepository.find(filter);
    }
    async updateAll(encomienda, where) {
        return this.encomiendaRepository.updateAll(encomienda, where);
    }
    async findById(id, filter) {
        return this.encomiendaRepository.findById(id, filter);
    }
    async updateById(id, encomienda) {
        await this.encomiendaRepository.updateById(id, encomienda);
    }
    async replaceById(id, encomienda) {
        await this.encomiendaRepository.replaceById(id, encomienda);
    }
    async deleteById(id) {
        await this.encomiendaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, {
                    title: 'NewEncomienda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('//count'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Encomienda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/'),
    (0, rest_1.response)(200, {
        description: 'Array of Encomienda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Encomienda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/'),
    (0, rest_1.response)(200, {
        description: 'Encomienda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Encomienda)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Encomienda, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('//{id}'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Encomienda, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('//{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Encomienda]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('//{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Encomienda]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('//{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EncomiendaController.prototype, "deleteById", null);
EncomiendaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EncomiendaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EncomiendaRepository])
], EncomiendaController);
exports.EncomiendaController = EncomiendaController;
//# sourceMappingURL=encomienda.controller.js.map
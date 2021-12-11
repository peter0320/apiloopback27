"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ServicioRepository = class ServicioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, encomiendaRepositoryGetter) {
        super(models_1.Servicio, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.encomiendaRepositoryGetter = encomiendaRepositoryGetter;
        this.encomiendaFk = this.createBelongsToAccessorFor('encomiendaFk', encomiendaRepositoryGetter);
        this.registerInclusionResolver('encomiendaFk', this.encomiendaFk.inclusionResolver);
        this.destinoFk = this.createBelongsToAccessorFor('destinoFk', clienteRepositoryGetter);
        this.registerInclusionResolver('destinoFk', this.destinoFk.inclusionResolver);
        this.origenFk = this.createBelongsToAccessorFor('origenFk', clienteRepositoryGetter);
        this.registerInclusionResolver('origenFk', this.origenFk.inclusionResolver);
    }
};
ServicioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.Mongo')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('EncomiendaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function, Function])
], ServicioRepository);
exports.ServicioRepository = ServicioRepository;
//# sourceMappingURL=servicio.repository.js.map
import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Servicio, ServicioRelations, Cliente, Encomienda } from '../models';
import { ClienteRepository } from './cliente.repository';
import { EncomiendaRepository } from './encomienda.repository';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected encomiendaRepositoryGetter: Getter<EncomiendaRepository>;
    readonly origenFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;
    readonly destinoFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;
    readonly encomiendaFk: BelongsToAccessor<Encomienda, typeof Servicio.prototype.id>;
    constructor(dataSource: MongoDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, encomiendaRepositoryGetter: Getter<EncomiendaRepository>);
}

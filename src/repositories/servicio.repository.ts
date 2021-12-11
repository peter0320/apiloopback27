import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Servicio, ServicioRelations, Cliente, Encomienda} from '../models';
import {ClienteRepository} from './cliente.repository';
import {EncomiendaRepository} from './encomienda.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly origenFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly destinoFk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly encomiendaFk: BelongsToAccessor<Encomienda, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('EncomiendaRepository') protected encomiendaRepositoryGetter: Getter<EncomiendaRepository>,
  ) {
    super(Servicio, dataSource);
    this.encomiendaFk = this.createBelongsToAccessorFor('encomiendaFk', encomiendaRepositoryGetter,);
    this.registerInclusionResolver('encomiendaFk', this.encomiendaFk.inclusionResolver);
    this.destinoFk = this.createBelongsToAccessorFor('destinoFk', clienteRepositoryGetter,);
    this.registerInclusionResolver('destinoFk', this.destinoFk.inclusionResolver);
    this.origenFk = this.createBelongsToAccessorFor('origenFk', clienteRepositoryGetter,);
    this.registerInclusionResolver('origenFk', this.origenFk.inclusionResolver);
  }
}

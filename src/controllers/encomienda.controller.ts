import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Encomienda} from '../models';
import {EncomiendaRepository} from '../repositories';

export class EncomiendaController {
  constructor(
    @repository(EncomiendaRepository)
    public encomiendaRepository : EncomiendaRepository,
  ) {}

  @post('/')
  @response(200, {
    description: 'Encomienda model instance',
    content: {'application/json': {schema: getModelSchemaRef(Encomienda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomienda, {
            title: 'NewEncomienda',
            exclude: ['id'],
          }),
        },
      },
    })
    encomienda: Omit<Encomienda, 'id'>,
  ): Promise<Encomienda> {
    return this.encomiendaRepository.create(encomienda);
  }

  @get('//count')
  @response(200, {
    description: 'Encomienda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Encomienda) where?: Where<Encomienda>,
  ): Promise<Count> {
    return this.encomiendaRepository.count(where);
  }

  @get('/')
  @response(200, {
    description: 'Array of Encomienda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Encomienda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Encomienda) filter?: Filter<Encomienda>,
  ): Promise<Encomienda[]> {
    return this.encomiendaRepository.find(filter);
  }

  @patch('/')
  @response(200, {
    description: 'Encomienda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomienda, {partial: true}),
        },
      },
    })
    encomienda: Encomienda,
    @param.where(Encomienda) where?: Where<Encomienda>,
  ): Promise<Count> {
    return this.encomiendaRepository.updateAll(encomienda, where);
  }

  @get('//{id}')
  @response(200, {
    description: 'Encomienda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Encomienda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Encomienda, {exclude: 'where'}) filter?: FilterExcludingWhere<Encomienda>
  ): Promise<Encomienda> {
    return this.encomiendaRepository.findById(id, filter);
  }

  @patch('//{id}')
  @response(204, {
    description: 'Encomienda PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encomienda, {partial: true}),
        },
      },
    })
    encomienda: Encomienda,
  ): Promise<void> {
    await this.encomiendaRepository.updateById(id, encomienda);
  }

  @put('//{id}')
  @response(204, {
    description: 'Encomienda PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() encomienda: Encomienda,
  ): Promise<void> {
    await this.encomiendaRepository.replaceById(id, encomienda);
  }

  @del('//{id}')
  @response(204, {
    description: 'Encomienda DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.encomiendaRepository.deleteById(id);
  }
}

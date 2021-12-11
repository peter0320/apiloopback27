import { Servicio, Encomienda } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioEncomiendaController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    getEncomienda(id: typeof Servicio.prototype.id): Promise<Encomienda>;
}

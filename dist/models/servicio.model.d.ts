import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    fecha: string;
    hora: string;
    valor: number;
    origen: string;
    destino: string;
    encomienda: string;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export declare type ServicioWithRelations = Servicio & ServicioRelations;

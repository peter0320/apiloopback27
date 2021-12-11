import { Apiloopback27Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Apiloopback27Application;
    client: Client;
}

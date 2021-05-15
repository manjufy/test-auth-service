import { injectable } from 'inversify';

import HealthService from "./HealthService";
import { HealthDTO } from '../dto/HealthDTO';
@injectable()
export default class HealthServiceImpl implements HealthService {
    public async health(): Promise<HealthDTO> {
        return {
            status: 'OK',
            message: 'All services are OK'
        }
    }
}

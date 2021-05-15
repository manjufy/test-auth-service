import { HealthDTO } from '../dto/HealthDTO';

export default interface HealthService {
    health(): Promise<HealthDTO>;
}
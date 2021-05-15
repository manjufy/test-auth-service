import { inject } from 'inversify';

import { controller, httpGet } from 'inversify-express-utils';
import TYPES from '../../lib/constants/types';
import { HealthDTO } from '../dto/HealthDTO';
import HealthServiceImpl from '../services/HealthServiceImpl';

@controller('/health')
export class HealthController {

  constructor(@inject(TYPES.HealthServiceImpl) private healthService: HealthServiceImpl) { }

  @httpGet('/')
  public get(): Promise<HealthDTO> {
    return this.healthService.health();
  }
}
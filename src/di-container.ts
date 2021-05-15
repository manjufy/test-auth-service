import { Container } from 'inversify';
import ContainerTypes from './lib/constants/types';

// load all services
import HealthServiceImpl from './app/services/HealthServiceImpl';

// load all controllers
import './app/controllers';

// setup the IoC
const container = new Container();
container.bind<HealthServiceImpl>(ContainerTypes.HealthServiceImpl).to(HealthServiceImpl);

export default container;
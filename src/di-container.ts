/**
 * @desc Create and configure DI Container
 * Reference: https://inversify.io/
 */
import { Container } from 'inversify';
import ContainerTypes from './lib/constants/types';

// load all services
import HealthServiceImpl from './app/services/HealthServiceImpl';

// load all controllers
import './app/controllers';

// setup the IoC
const container = new Container();
// Wire all the services into container
container.bind<HealthServiceImpl>(ContainerTypes.HealthServiceImpl).to(HealthServiceImpl);

export default container;
/**
 * @desc Create and configure DI Container
 * Reference: https://inversify.io/
 */

 import 'reflect-metadata';
import { Container } from 'inversify';
import { Repository } from "typeorm";
import { getDbConnection } from "./lib/db";

import ContainerTypes from './lib/constants/types';

// load all services
import HealthServiceImpl from './app/services/HealthServiceImpl';
import UserServiceImpl from './app/services/UserServiceImpl';

// load respositories
import { IUserRepository } from './app/repositories/IUserRepository';
import UserRepository from './app/repositories/UserRepository';

getDbConnection().then();
// load all controllers
import './app/controllers';

// setup the IoC
const container = new Container();
// Wire up all the services into container
container.bind<HealthServiceImpl>(ContainerTypes.HealthServiceImpl).to(HealthServiceImpl);
container.bind<UserServiceImpl>(ContainerTypes.UserServiceImpl).to(UserServiceImpl);

// Wire up all the repos
container.bind<IUserRepository>(ContainerTypes.UserRepository).to(UserRepository);


export default container;
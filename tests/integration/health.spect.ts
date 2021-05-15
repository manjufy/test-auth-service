import 'reflect-metadata';
import HealthServiceImpl from "../../src/app/services/HealthServiceImpl";

describe('Health Service', () => {
    it('should return health', async () => {
        const healthService = new HealthServiceImpl();
        const result = await healthService.health();
        expect(result.status).toBe('OK');
    });
});
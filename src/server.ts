import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import Logger from './lib/Logger';
const app = express();

/**
 * Setup listener port
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    Logger.info(`App is running on port ${PORT}`);
});

export default app;
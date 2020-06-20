import chalk from 'chalk';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import mongoose from 'mongoose';

import { env } from '../env';

let connection: mongoose.Connection;

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;

export const mongoLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const uri = env.mongodb.uri;

    try {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        connection =  mongoose.connection;

        connection.on('connected', async () => {
            console.log(connected('Connected to MongoDB'));
        });

        connection.on('error', () => {
            console.log(error('Error connecting to MongoDB'));
        });

        connection.on('disconnected', () => {
            console.log(disconnected('Mongoose default connection is disconnected'));
        });

        if (settings) {
            settings.setData('connection', connection);
            settings.onShutdown(() => connection.close());
            // settings.onShutdown(() => mongoose.disconnect());
        }

    } catch (error) {
        console.log('MongoDB error...');
        console.error(error.message);
        process.exit();
    }
};

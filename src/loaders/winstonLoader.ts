import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { configure, format, transports } from 'winston';

import { env } from '../env';

export const winstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    configure({
        transports: [
            new transports.Console({
                level: env.log.level,
                handleExceptions: true,
                format: env.node !== 'development'
                    ? format.combine(
                        format.colorize(),
                        format.timestamp(),
                        format.simple()
                    )
                    : format.combine(
                        format.colorize(),
                        format.timestamp(),
                        format.simple()
                    ),
            }),
            new transports.File({
                filename: './logs/log.log',
                format: format.combine(
                    format.timestamp(),
                    format.simple()
                ),
             }),
            //  new transports.File({
            //     filename: './logs/error.log',
            //     level: 'error',
            //     format: format.combine(
            //         format.timestamp(),
            //         format.simple()
            //     ),
            //  }),
        ],
        exitOnError: false,
    });
};

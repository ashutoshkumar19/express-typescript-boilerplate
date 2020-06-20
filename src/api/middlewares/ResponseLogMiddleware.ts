import { Logger, LoggerInterface } from '../../decorators/Logger';

export class ResponseLogMiddleware {

    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public logResponse(_url: string, desc: string, res: any): any {
        try {
            const logData = {
                type: 'Response',
                url: _url,
                description: desc,
                response: res,
            };
            this.log.info(JSON.stringify(logData));

        } catch (error) {
            this.log.error(error);
        }
    }
}

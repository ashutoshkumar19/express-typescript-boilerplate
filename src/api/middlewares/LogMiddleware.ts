import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

import { Logger } from '../../lib/logger';

// import morgan from 'morgan';
// import { env } from '../../env';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {

    private log = new Logger(__dirname);

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        const data = {
            type: 'Request',
            method: req.method,
            url: req.url,
            body: req.body,
        };
        this.log.info(JSON.stringify(data));
        next();
    }

    // public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
    //     return morgan(env.log.output, {
    //         stream: {
    //             write: this.log.info.bind(this.log),
    //         },
    //     })(req, res, next);
    // }

}

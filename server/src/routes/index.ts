import {Router} from 'express';
import {errors} from 'celebrate';


export default () => {
    const app = Router();
    app.use('v1', require('./v1'));
    // Adding celebrate error handling
    app.use(errors());

    return app;
};
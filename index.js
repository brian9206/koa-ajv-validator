/**
 * koa-ajv-validator
 */
const Ajv = require('ajv');
const ajv = new Ajv();

async function middleware(ctx, next) {
    const valid = await ajv.validate(this, ctx.request.body);

    if (!valid) {
        ctx.throw(422, 'body' + ajv.errors[0].dataPath + ' ' + ajv.errors[0].message);
        return;
    }

    await next();
}

module.exports = function body_validator(schema) {
    return middleware.bind(schema);
}

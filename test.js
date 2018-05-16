const Koa = require('koa');
const body = require('koa-body');
const jsonErrorHandler = require('koa-json-error-handler');
const validator = require('./index.js');

// start a simple Koa app
const app = new Koa();

app
    .use(jsonErrorHandler)
    .use(body())
    .use(validator({
        "properties": {
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "age": {
                "description": "Age in years",
                "type": "integer",
                "minimum": 0
            }
        },
        "required": ["firstName", "lastName"]
    }))
    .use(async ctx => {
        ctx.body = 'Your JSON is good'
    })
    .listen(8080);

app.on('error', (err, ctx) => {
    console.log(err);
});

# koa-ajv-validator
Koa middleware for quick ajv json body validation implementation

## Usage
```js
const Koa = require('koa');
const body = require('koa-body');
const body_validator = require('koa-ajv-validator');

const app = new Koa();

app
    .use(body())
    .use(body_validator({
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
```

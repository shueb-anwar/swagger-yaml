/* ....*/
const swaggerUi = require ('swagger-ui-express');
const YAML = require( 'yamljs' );
const swaggerDocument = YAML.load('./swagger.yaml');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

/* ...

Step 1.
npm install --save swagger-ui-express
npm install --save yamljs

Step 2.

Copy line 2 & 3 in existing server.js
Copy line 15 in existing server.js

Step 3.
Copy swagger.yaml into project root

Step 4.
Update swagger.yaml as per your need

 */
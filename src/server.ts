import express from 'express';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

const schema = buildSchema(`
  type Query {
    hello: String
    age: Int
    weight: Float
    isHuman: Boolean
  }
`);

const rootValue = {
  hello: () => 'Hello world!',
  age: () => 30,
  weight: () => 70.5,
  isHuman: () => true,
};

const app = express();

app.all('/graphql', createHandler({ schema, rootValue }));

app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

app.listen(8888);

console.log('Api running on http://localhost:8888'); //eslint-disable-line

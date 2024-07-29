import { FastifyInstance } from 'fastify';

// eslint-disable-next-line func-names
export default async function (fastify: FastifyInstance) {
  fastify.get('/', async () => ({ message: 'Hello API' }));
}

import { createClient, RedisClientOptions } from 'redis';

type RedisClient = ReturnType<typeof createClient>;

export class RedisWrapper {
  private _client?: RedisClient;

  get client() {
    if (!this._client) throw new Error('Cannot access Redis client before connecting');
    return this._client;
  }

  connect(config: RedisClientOptions) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        this._client = createClient(config);
        this._client.on('ready', () => resolve());
        this._client.on('error', (err) => reject(err));
        await this._client.connect()
      } catch (error) {
        reject(error)
      }
    });
  }
}

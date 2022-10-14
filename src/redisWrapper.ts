import { createClient, RedisClientType, RedisClientOptions } from 'redis';

export class RedisWrapper {
  private _client?: RedisClientType;

  get client() {
    if (!this._client) throw new Error('Cannot access Redis client before connecting');
    return this._client;
  }

  connect(config: RedisClientOptions) {
    this._client = createClient(config);

    return new Promise<void>(async (resolve, reject) => {
      await this._client!.connect()
      this.client.on('connect', () => {
        console.log('Connected to Redis');
        resolve();
      });
      this.client.on('error', (err) => reject(err));
    });
  }
}

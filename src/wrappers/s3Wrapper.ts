import { S3Client, S3ClientConfig, waitUntilBucketExists } from '@aws-sdk/client-s3';
import * as s3Library from '@aws-sdk/client-s3';

export class s3Wrapper {
  private _client?: S3Client;

  get client() {
    if (!this._client) throw new Error('Cannot access s3 client before connecting');
    return this._client;
  }

  get s3Library() {
    return s3Library
  }

  connect(config: S3ClientConfig, Bucket: string, maxWaitTime: number = 1000) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        this._client = new S3Client(config);
        await waitUntilBucketExists({ client: this._client, maxWaitTime }, { Bucket });
        resolve()
      } catch (error) {
        reject(error)
      }
    });
  }
}

import { S3, S3ClientConfig, waitUntilBucketExists } from '@aws-sdk/client-s3';
import * as s3Library from '@aws-sdk/client-s3';

interface Buckets {
  [key: string]: string;
}

export class s3Wrapper {
  private _clients = new Map<string, S3>();

  get s3Library() {
    return s3Library
  }

  async connect(config: S3ClientConfig, buckets: Buckets, maxWaitTime: number = 1000) {
    try {
      for (const [bucketName, bucket] of Object.entries(buckets)) {
        const s3 = new S3(config);
        await waitUntilBucketExists({ client: s3, maxWaitTime }, { Bucket: bucket });
        this._clients.set(bucketName, s3);
      }
    } catch (error) {
      throw new Error(`Error connecting to one or more buckets. ${error}`);
    }
  }

  getClient(bucketName: string) {
    if (!this._clients.has(bucketName)) throw new Error(`Cannot access s3 client for ${bucketName} before connecting`);
    return this._clients.get(bucketName);
  }
}

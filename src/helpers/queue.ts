import { Queue, QueueOptions, Worker, Job } from 'bullmq';
import { parseExpression } from 'cron-parser';
import { isEmpty } from 'lodash';


const queues: Map<string, Queue> = new Map();

interface ConnectionOptions {
  host?: string;
  port?: number;
  password?: string;
}

export const getQueue = (queueName: string, options: QueueOptions = { connection: {} }): Queue => {
  if (!queues.has(queueName)) {
    const defaultOptions: QueueOptions = {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    };

    const mergedOptions: QueueOptions = { ...defaultOptions, ...options };
    queues.set(queueName, new Queue(queueName, mergedOptions));
  }
  return queues.get(queueName) as Queue;
};

export const getAllQueues = (): Map<string, Queue> => {
  return queues;
};

export const repeatStrategySetting = (cronTiming: string) => {
  return {
    repeatStrategy: (millis: number, opts: any) => {
      const currentDate =
        opts.startDate && new Date(opts.startDate) > new Date(millis)
          ? new Date(opts.startDate)
          : new Date(millis);

      try {
        // Parse the cron expression
        const interval = parseExpression(cronTiming, { currentDate });

        // Get the next scheduled date
        const nextOccurrence = interval.next().toDate();

        return nextOccurrence.getTime();
      } catch (err) {
        throw new Error(`Invalid cron expression: ${cronTiming}`);
      }
    },
  };
};

export const bullQueue = (queueName: string, options: QueueOptions = { connection: {} }): Queue => {
  const defaultOptions: QueueOptions = {
    connection: {
      host: 'localhost',
      port: 6379,
    },
  };

  const mergedOptions: QueueOptions = { ...defaultOptions, ...options };
  const queue = new Queue(queueName, mergedOptions);
  queues.set(queueName, queue);
  return queue;
};


export const getWorkQueue = <TData = any, TResult = any>(
  queueName: string,
  jobProcessor: (job: Job<TData, TResult>) => Promise<TResult>,
  queueOptions: QueueOptions = { connection: {} },
  cronTiming: string = ''
): Worker<TData, TResult> => {

  const resolvedConnection: ConnectionOptions = {
    host: 'localhost',
    port: 6379,
    ...queueOptions.connection
  };

  let worker;

  if (isEmpty(cronTiming)) {
    worker = new Worker<TData, TResult>(
      queueName,
      async (job: Job<TData, TResult>) => {
        const result = await jobProcessor(job);
        return result;
      },
      {
        ...queueOptions,
        connection: resolvedConnection,
      }
    );
  }
  else {
    const settings = repeatStrategySetting(cronTiming);
    worker = new Worker<TData, TResult>(
      queueName,
      async (job: Job<TData, TResult>) => {
        const result = await jobProcessor(job);
        return result;
      },
      {
        ...queueOptions,
        connection: resolvedConnection,
        settings
      }
    );
  }
  return worker;
};


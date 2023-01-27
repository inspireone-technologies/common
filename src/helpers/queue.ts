import Bull, { QueueOptions, Queue } from 'bull';

const queues = new Map();

export const bullQueue = (queueName: string, options: QueueOptions = {}): Queue => {
  const queue = new Bull(queueName, options);
  queues.set(queueName, queue);
  return queue;
}

export const getQueue = (queueName: string, options: QueueOptions = {}): Queue => {
  if (!queues.has(queueName)) queues.set(queueName, bullQueue(queueName, options));
  return queues.get(queueName);
}
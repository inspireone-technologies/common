import Bull, { QueueOptions, Queue } from 'bull';

export const bullQueue = (queueName: string, options: QueueOptions): Queue => {
  return new Bull(queueName, options)
}
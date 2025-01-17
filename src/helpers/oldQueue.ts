import Bull, { Queue, QueueOptions } from "bull";

const queues: Map<String, Queue> = new Map();

export const oldBullQueue = (queueName: string, queueOptions: QueueOptions = {}): Queue => {
    if (!queues.has(queueName)) {
        const queue: Queue = new Bull(queueName, queueOptions);
        queues.set(queueName, queue);
    }

    return queues.get(queueName) as Queue;
}

export const getOldQueues = (): Map<String, Queue> => {
    return queues as Map<String, Queue>;
}
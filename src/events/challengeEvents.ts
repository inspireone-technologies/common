import { Subjects } from './subjects';

export interface ChallengeCreatedEvent {
  subject: Subjects.ChallengeCreated;
  data: {
    id: string;
    version: number;
  };
}

export interface ChallengeDeletedEvent {
  subject: Subjects.ChallengeDeleted;
  data: {
    id: string;
    version: number;
  };
}

export interface ChallengeReactivatedEvent {
  subject: Subjects.ChallengeReactivated;
  data: {
    id: string;
    version: number;
  };
}

export interface ChallengeUpdatedEvent {
  subject: Subjects.ChallengeUpdated;
  data: {
    id: string;
    version: number;
  };
}

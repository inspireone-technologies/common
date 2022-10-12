import { Subjects } from './subjects';

export interface ChallengeCreatedEvent {
  subject: Subjects.ChallengeCreated;
  data: {
    id: string;
  };
}

export interface ChallengeDeletedEvent {
  subject: Subjects.ChallengeDeleted;
  data: {
    id: string;
  };
}

export interface ChallengeReactivatedEvent {
  subject: Subjects.ChallengeReactivated;
  data: {
    id: string;
  };
}

export interface ChallengeUpdatedEvent {
  subject: Subjects.ChallengeUpdated;
  data: {
    id: string;
  };
}

import { Subjects } from './subjects';

export interface UsersCreatedEvent {
  subject: Subjects.UsersCreated;
  data: {
    id: string;
  };
}

export interface UsersDeletedEvent {
  subject: Subjects.UsersDeleted;
  data: {
    id: string;
  };
}

export interface UsersReactivatedEvent {
  subject: Subjects.UsersReactivated;
  data: {
    id: string;
  };
}

export interface UsersUpdatedEvent {
  subject: Subjects.UsersUpdated;
  data: {
    id: string;
  };
}

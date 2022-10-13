import { Subjects } from './subjects';

export interface UsersCreatedEvent {
  subject: Subjects.UsersCreated;
  data: {
    id: string;
    version: number;
  };
}

export interface UsersDeletedEvent {
  subject: Subjects.UsersDeleted;
  data: {
    id: string;
    version: number;
  };
}

export interface UsersReactivatedEvent {
  subject: Subjects.UsersReactivated;
  data: {
    id: string;
    version: number;
  };
}

export interface UsersUpdatedEvent {
  subject: Subjects.UsersUpdated;
  data: {
    id: string;
    version: number;
  };
}

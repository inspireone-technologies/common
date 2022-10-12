import { Subjects } from './subjects';

export interface ProjectCreatedEvent {
  subject: Subjects.ProjectCreated;
  data: {
    id: string;
  };
}

export interface ProjectDeletedEvent {
  subject: Subjects.ProjectDeleted;
  data: {
    id: string;
  };
}

export interface ProjectReactivatedEvent {
  subject: Subjects.ProjectReactivated;
  data: {
    id: string;
  };
}

export interface ProjectUpdatedEvent {
  subject: Subjects.ProjectUpdated;
  data: {
    id: string;
  };
}

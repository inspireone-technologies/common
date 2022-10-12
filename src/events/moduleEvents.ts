import { Subjects } from './subjects';

export interface ModuleCreatedEvent {
  subject: Subjects.ModuleCreated;
  data: {
    id: string;
  };
}

export interface ModuleDeletedEvent {
  subject: Subjects.ModuleDeleted;
  data: {
    id: string;
  };
}

export interface ModuleReactivatedEvent {
  subject: Subjects.ModuleReactivated;
  data: {
    id: string;
  };
}

export interface ModuleUpdatedEvent {
  subject: Subjects.ModuleUpdated;
  data: {
    id: string;
  };
}

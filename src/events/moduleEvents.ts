import { Subjects } from './subjects';

export interface ModuleCreatedEvent {
  subject: Subjects.ModuleCreated;
  data: {
    id: string;
    version: number;
  };
}

export interface ModuleDeletedEvent {
  subject: Subjects.ModuleDeleted;
  data: {
    id: string;
    version: number;
  };
}

export interface ModuleReactivatedEvent {
  subject: Subjects.ModuleReactivated;
  data: {
    id: string;
    version: number;
  };
}

export interface ModuleUpdatedEvent {
  subject: Subjects.ModuleUpdated;
  data: {
    id: string;
    version: number;
  };
}

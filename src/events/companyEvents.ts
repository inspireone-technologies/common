import { Subjects } from './subjects';

export interface CompanyCreatedEvent {
  subject: Subjects.CompanyCreated;
  data: {
    id: string;
    version: number;
  };
}

export interface CompanyDeletedEvent {
  subject: Subjects.CompanyDeleted;
  data: {
    id: string;
    version: number;
  };
}

export interface CompanyReactivatedEvent {
  subject: Subjects.CompanyReactivated;
  data: {
    id: string;
    version: number;
  };
}

export interface CompanyUpdatedEvent {
  subject: Subjects.CompanyUpdated;
  data: {
    id: string;
    version: number;
  };
}

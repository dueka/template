export interface approvalListInterface {
  count: Number;
  message: string;
  mandateDTOs: mandateDTOsInterface[];
}

export interface mandateDTOsInterface {
  definitions: definitionsInterface[];
  description: string;
  enabled: boolean;
  primaryKey: Number;
  steps: Number;
  type: string;
}

export interface definitionsInterface {
  administrators: approvalAdminsInterface[];
}

export interface approvalAdminsInterface {
  email: string;
  firstname: string;
  surname: string;
}

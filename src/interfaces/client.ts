export interface ApiHeader {
  Authorization?: string;
  "Content-type": string;
}

export type Body = Record<string, unknown>;

export interface OptionsArgs {
  body?: Body;
  headers?: Record<string, unknown>;
  [props: string]: unknown;
}

export interface QueryKeyInterface {
  pageParam: string;
  queryKey: [];
}

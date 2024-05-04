import { HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";

export interface IOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: "body";
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface IProducts {
  items: IProduct[];
  total: number;
  page: number;
  perPage: number;
  totalPage: number;
}

export interface IProduct {
  price: string;
  name: string;
  image: string;
  rating: number;
}

export interface IPaginationParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  page: number;
  perPage: number;
}

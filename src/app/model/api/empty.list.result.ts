import { ListResult } from './list.result';

export const emptyListResult: ListResult<never> = {
  total: 0,
  data: [],
};

export const INCREASE_COUNT = 'INCREASE_COUNT';
export type AllActionTypes = typeof INCREASE_COUNT;

export type InitialStore = {
  count: number;
};

export interface AllActions extends CountRootState {
  type: AllActionTypes;
}

export interface CountRootState extends InitialStore {}

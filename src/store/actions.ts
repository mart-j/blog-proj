export const increaseCount = (count: number) => {
  return {
    type: 'INCREASE_COUNT',
    count,
  };
};

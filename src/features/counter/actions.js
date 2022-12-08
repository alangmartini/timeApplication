export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const actionIncrement = () => ({
  type: INCREMENT_COUNTER,
});

export const actionDecrement = () => ({
  type: DECREMENT_COUNTER,
});

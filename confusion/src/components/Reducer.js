export const initialState = {
  count: 100,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCRE':
      return {
        count: action.onChange(state.count),
      };
    case 'DECRE':
      return {
        count: action.onChange(state.count),
      };
    default:
      return state;
  }
};

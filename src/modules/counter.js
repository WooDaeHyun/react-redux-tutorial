const INCREASE = "counter/INCREASE"; //액션 타입
const DECREASE = "counter/DECREASE"; //액션 타입

export const increase = () => {
  // 액션 생성 함수
  return { type: INCREASE };
};

export const decrease = () => {
  //// 액션 생성 함수
  return { type: DECREASE };
};

const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  //리듀서 함수
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;

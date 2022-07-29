// 1. 액션 타입
// 2. 액션 리턴 함수
// 3. 초기값
// 4. reducer 만들기

const INCREASE = "counter/INCREASE" as const
const DECREASE = "counter/DECREASE" as const
const INCREASE_BY = "counter/INCREASE_BY" as const


//액션 생성 함수
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});
export const increaseBy = (diff: number) => ({
    type:INCREASE_BY,
    patload: diff
});

// 스테이트의 타입을 지정
type CounterState = {
    count: number
}
//초기상태 생성
const initialState = {
    count : 0
}

//리듀서 액션 타입 지정
//ReturnType<typeof ---> 특정 함수의 반환값을 추론 // 숫자가 들어가면 자동으로 number로 해준다.
type CounterAction = 
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>

//리듀서 만들기
export default function counter(state:CounterState = initialState,action :CounterAction) : CounterState{
    switch(action.type){
        case 'counter/INCREASE':
            return {count: state.count+1};
        case 'counter/DECREASE':
            return {count: state.count-1};
        case 'counter/INCREASE_BY':
            return {count: state.count + action.patload};
        default:
            return state;           
    }
}
import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter'

const ContainerCount = () => {
    const count = useSelector((state:RootState) =>state.counter.count)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increase())
    }
    const onDecrease = () => {
        dispatch(decrease())
    }
    const onIncreaseBy = (diff:number) => {
        dispatch(increaseBy(diff))
    }
    return (
        <div>
            <Counter count={count} onIncrease={onIncrease} 
            onDecrease={onDecrease} onIncreaseBy={onIncreaseBy}/>
        </div>
    );
};

export default ContainerCount;
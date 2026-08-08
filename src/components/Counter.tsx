import { useAppSelector, useAppDispatch } from '../app/reduxHooks';
import { increment, decrement, incrementByAmount,reset } from '../features/counter/counterSlice';

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
//   {
//   counter: { state hold this data;
//     value: 0
//   }
// }
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
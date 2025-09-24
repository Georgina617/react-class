import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt[100px] space-x-4">
      <h1>Redux Counter</h1>
      <div className="flex gap-4 justify-center mt-4">
        <button
          className="px-10 py-2 bg-red-400 rounded-lg text-white font-semibold"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="font-bold">{count}</span>
        <button
          className="px-10 py-2 bg-blue-400 rounded-lg text-white font-semibold"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-10 py-2 bg-red-400 rounded-lg text-white font-semibold"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

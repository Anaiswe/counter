import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ul className="container-counter">
        <li className="number">
          <>{counter}</>
          <li>
            <button
              className="less"
              disabled={counter < 1}
              onClick={() => {
                if (counter > 0) {
                  setCounter(counter - 1);
                }
              }}
            >
              -
            </button>
          </li>
          <li>
            <button
              className="more"
              disabled={counter >= 10}
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          </li>
        </li>
      </ul>
      <button
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        RESET
      </button>
    </>
  );
};
export default Counter;

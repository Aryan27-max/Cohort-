import { useEffect, useState } from "react";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(function () {
    let clock = setInterval(function () {
      setCounterVisible((visible) => !visible);
    }, 5000);

    return function () {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <b>hi there</b>

      {counterVisible && <Counter></Counter>}

      hello
    </div>
  );
}

// mounting, re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0);

  // clearInterval
  useEffect(function () {
    console.log("on mount");

    let clock = setInterval(function () {
      console.log("from inside setInterval");
      setCount((c) => c + 1);
    }, 1000);

    return function () {
      console.log("on unmount");
      clearInterval(clock);
    };
  }, []); // dependency array, cleanup, fetch inside useEffect

  function increaseCount() {
    setCount(count + 1);
  }

  console.log("counter");

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}

export default App;
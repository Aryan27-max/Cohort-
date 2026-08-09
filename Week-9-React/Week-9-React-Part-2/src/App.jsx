import { useState, useEffect } from "react";

//use effects, depnedecy array, cleanups 
export default function App(){
  const [count, setCount] = useState(0);

  function increase(){
    setCount(c => c + 1);
  }

  return ( 
  <div>
    <Counter count={count} />
     <button onClick={increase}>Increase Count</button> 
    </div>
  );
}

// mounting rendering, un mounting 
function Counter(props) {
  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmounted");
    };
  }, []);

  return <div>
    Counter {props.count}
  </div>
}
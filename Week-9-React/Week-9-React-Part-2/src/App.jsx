import { useEffect, useState } from "react"

function App() {
    return <div>
      <b>
        hi there 
      </b>
      <Counter></Counter>
    </div>
}

// mounting, umounting, re-rendering
function Counter () {

  const [count, setCount] = useState(0); 

  // hooking into the life-cycle events of react
  console.log("counter");

  //gaurd our setInterval with re-renders using the useEffect hook 
  useEffect(function(){
    setInterval(function(){
      setCount(function(count){
        return count + 1;
      })
    }, 1000)
    console.log("Mounted");
  }, []);

  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App

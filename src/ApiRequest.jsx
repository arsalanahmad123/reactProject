import { useState } from "react";
import { useEffect } from "react";

export function ApiRequest() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  console.log("Component rendered");
  useEffect(
    function () {
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then((response) => response.json())
        .then((json) => setData(json));
      console.log("Effect ran");
    },
    [count]
  );
  return (
    <div>
      <pre> {JSON.stringify(data, null, 2)} </pre>
      <div>{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get next todo
      </button>
    </div>
  );
}

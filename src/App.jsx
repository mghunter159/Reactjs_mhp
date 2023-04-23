//import Apps from "./Apps";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-centr">
          <div className="col-12 col-md-6">
            <div className="bg-ligt text-centr p-2 display-6 mb-2">
              Pro <b>Counter</b>
            </div>

            <div className="display-1 text-centr my-5 py-5">{counter}</div>
            <div className="row">
              <div className="col">
                 <button className="btn btn-primaty w-100" onClick={() => setCounter(counter + 1)}>Увеличить</button>
              </div>
              <div className="col">
                 <button className="btn btn-succes w-100" onClick={() => setCounter(counter - 1)}>Уменьшить</button>
              </div>
              <div className="col">
                 <button className="btn btn-outline-danger w-100" onClick={() => setCounter(0)}>Сбросить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default App;

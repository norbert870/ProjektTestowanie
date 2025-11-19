import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!logged ? (
        <>
          <Register />
          <hr />
          <Login onLogin={() => setLogged(true)} />
        </>
      ) : (
        <Movies />
      )}
    </div>
  );
}

export default App;

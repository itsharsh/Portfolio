import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";

import Pages from "./pages";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/itsharsh")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Circles
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return <Pages user={user} />;
}

export default App;

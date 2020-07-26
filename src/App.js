import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }

  return <Pages user={user} />;
}

export default App;

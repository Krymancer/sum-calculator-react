import React, { useState } from "react";
import "./index.scss";

const Main: React.FC = () => {
  const [n1, sn1] = useState(0);
  const [n2, sn2] = useState(0);
  const [result, sresult] = useState(0);

  const title = process.env.REACT_APP_TITLE || "Title not found in env";

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">
        <div>
          <input
            type="number"
            onChange={(e) => {
              sn1(parseInt(e.target.value));
            }}
            value={n1}
          />
          <input
            type="number"
            onChange={(e) => {
              sn2(parseInt(e.target.value));
            }}
            value={n2}
          />
        </div>
        <button
          onClick={() => {
            sresult(n1 + n2);
          }}
        >
          +
        </button>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import "./App.css";
import NewChart from "./components/formInput/NewChart";
import DisplayAllData from "./components/formInput/DisplayAllData";
const App = () => {
  const [uData, setUData] = useState([]);

  const onGetDatasHandler = (dataIsGet) => {
    setUData((prevData) => {
      return [ ...prevData, dataIsGet];
    });
  };

  console.log(uData);

  return (
    <div className="App">
      <NewChart getDatas={onGetDatasHandler} />
      <DisplayAllData onPassData={uData} />
    </div>
  );
};

export default App;

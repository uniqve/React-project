import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/Sidebar/index";
import MainPage from "../components/MainPage/index";
import styles from "./index.module.scss";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <Sidebar />
          <div className={styles.content}>
            <MainPage />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

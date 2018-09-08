import React, { Component } from 'react';
import styles from './App.css';
import DrumBox from "./components/DrumBox"

class D_App extends Component {
  render() {
    return (
      <div /*className={styles.container}*/>
        <div /*className={styles.content}*/>
          <div className="App">
            <DrumBox />
          </div>
        </div>
      </div>
    );
  }
}

export default D_App;

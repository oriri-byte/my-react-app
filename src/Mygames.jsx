import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class Mygames extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      count: 0,
      time: new Date().toLocaleString()
    };
    this.incrementCount = this.incrementCount.bind(this);
  };

  incrementCount() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, 1000);
  };

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const {count, time} = this.state;
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://www.amazon.co.jp/">
            <p>amazon Linkはこちら</p>
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.incrementCount}>
            count is {count}
          </button>
          <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
            現在時刻: {time}
          </p>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default Mygames;

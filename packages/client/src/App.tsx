import React from 'react';
import WebSocket from 'ws';
import './App.css';


class WS extends React.PureComponent {

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:8000')
    ws.on('open', function name() {
      ws.send("hello")

    })
  }
  render() {
    return <div>123</div>
  }
}

function App() {
  return (
    <div className="App">
      {/* <WS/> */}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

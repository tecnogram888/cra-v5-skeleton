import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';

const test = {
  title: 'titles',
  children: [{
      title: 'sub child',
      children: [{
          children: [{
              title: 'sub sub child',
              children: []
          }, 'asdf', 'next']}],
  }, 'asdf', 'next']
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Editor value={test} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

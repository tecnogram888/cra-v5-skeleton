import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import EventListView from './components/EventListView';
import { AddEventForm } from './components/AddEventForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddEventForm />
        <EventListView />
        <Editor id={1} />
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

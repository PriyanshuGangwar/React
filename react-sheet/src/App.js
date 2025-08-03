import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { Timer, Stopwatch} from './components/Stopwatch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <button onClick={toggleDarkMode} className="dark-toggle">
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Counter />
        <Timer />
        <Stopwatch />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

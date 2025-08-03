import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
        <header className="App-header">
            <button onClick={toggleDarkMode} className="dark-toggle">
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <Menu />
        </header>
    </div>
  );
}

export default App;

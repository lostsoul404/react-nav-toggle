import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'; 

function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#3f4041c6' : '#343a40';
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;

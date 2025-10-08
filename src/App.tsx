import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <img
          src="/footprint_18143728 (6).png"
          alt="Footprint Logo"
          className="logo"
        />
        <h1>Footprint Tracker</h1>
        <p className="tagline">Track your environmental impact</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Steps Counter</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
              -
            </button>
            <span className="count-display">{count}</span>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
              +
            </button>
          </div>
          <button onClick={() => setCount(0)} className="btn btn-reset">
            Reset
          </button>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Carbon Footprint</h3>
            <p className="metric">Track your daily carbon emissions</p>
          </div>
          <div className="info-card">
            <h3>Water Usage</h3>
            <p className="metric">Monitor water consumption</p>
          </div>
          <div className="info-card">
            <h3>Energy Savings</h3>
            <p className="metric">Calculate energy efficiency</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Making every step count for the environment</p>
      </footer>
    </div>
  );
}

export default App;

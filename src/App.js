import { useSpring, animated } from 'react-spring';

import './App.css';
import './index.css';

function App() {
  const styles = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 }
});

const stylesBox = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 1500 },
    delay: 1000,
});

const stylesText = useSpring({
  from: { opacity: 0, marginLeft: -500 },
  to: { opacity: 1, marginLeft: 0 },
  config: { duration: 2500 },
  delay: 3000,
});

const stylesTextTop = useSpring({
  from: { opacity: 0, marginLeft: -500 },
  to: { opacity: 1, marginLeft: 70 },
  config: { duration: 2500 },
  delay: 2000,
});
  return (
    <animated.div style={styles} className="App">
      <header className="home">
        <animated.div style={stylesBox} className="body">
          <animated.div style={stylesTextTop} className="top">
            <div className="title">Webshift</div>
            <div className='subtitle'>Design System</div>
          </animated.div>
          <animated.div style={stylesText} className="bottom">
            <div className="bottom-text">
              IN-PROGRESS
            </div>
          </animated.div>
        </animated.div>
      </header>
    </animated.div>
  );
}

export default App;

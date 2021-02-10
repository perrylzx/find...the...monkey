import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import monke from './monke.gif';

function App() {
  const [monkeyPosition, setMonkeyPosition] = useState({ left: 0, top: 0 });
  const [isMonkeyClicked, setIsMonkeyClicked] = useState(false);

  useEffect(function randomizeMonkeyPosition() {
    setMonkeyPosition({
      // abitrary number. I want to randomize it within the range of the viewport of the screen.
      left: Math.random() * 1000,
      top: Math.random() * 1000,
    });
  }, []);

  // MonkeyDance will become visible upon finding (clicking) the invisible monkey.
  // Possible to make the hidden monkey and dancing monkey one component.
  const MonkeyDance = styled.img.attrs({
    src: monke,
    alt: 'Monkey Flip',
  })`
    visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};
  `;

  const HiddenMonkey = styled(Button)`
    color: blue;
    position: fixed;
    top: ${monkeyPosition.top}px;
    left: ${monkeyPosition.left}px;
    width: 100px;
    height: 100px;
  `;

  const clickMonkey = async () => {
    await alert('You win!');
    setIsMonkeyClicked(true);
  };

  return (
    <div>
      {/* not necessary to pass down the monkeyPosition. Directly passing it to the styled component is sufficient. */}
      {/* instead of using css to make it invisible just render this conditionally */}
      <MonkeyDance clicked={isMonkeyClicked} position={monkeyPosition} />
      <HiddenMonkey onClick={() => clickMonkey()} />
    </div>
  );
}

export default App;

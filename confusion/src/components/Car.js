import React from 'react';
import { useState } from 'react';

const Car = (props) => {
  const [color, setColor] = useState('red');
  const [brand, setBrand] = useState('Ford');
  const [model, setModel] = useState('Mustang');
  const [year, setYear] = useState(1964);

  const changeColor = () => {
    setColor('blue');
  };

	const start = (e) => {
		alert('Your car is ready by ' + e.type);
	}

  return (
    <div>
      <h2>My {brand}</h2>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <button type="button" onClick={changeColor}>
        Change color
      </button>
			<button type="button" onClick={start}>Start</button>
    </div>
  );
};

export default Car;

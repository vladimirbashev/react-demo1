import './Button.css';
import {useState} from 'react';

function Button() {
	const [text, setText] = useState('Save');
	const clicked = () => {
		setText((t) => t + '!');
	};

	return (
		<button onClick={clicked} className='button accent'>{text}</button>
	);
}

export default Button;

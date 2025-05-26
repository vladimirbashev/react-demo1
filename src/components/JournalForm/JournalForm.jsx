import styles from './JournalForm.module.css';
import {useEffect, useState} from 'react';
import Button from '../components/Button/Button.jsx';


function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputDataChange = (e) => {
		setInputData(e.target.value);
	};

	const addJournalItem = (e) => {
		const formData = new FormData(e.target);
		console.log(formData);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		console.log(formProps);
	};

	useEffect(() => {
		console.log('inputData обновилось:', inputData);
	}, [inputData]);

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<input type="text" name="title"/>
			<input type="date" name="date"/>
			<input type="text" name="tag" value={inputData} onChange={inputDataChange}/>
			<textarea name="post" id="post" cols="30" rows="10"></textarea>
			<Button text="Save"></Button>
		</form>
	);
}

export default JournalForm;

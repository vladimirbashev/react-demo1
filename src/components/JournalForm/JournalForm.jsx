import './JournalForm.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';


function JournalForm({onSubmit}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if (!formProps.post?.trim().length) {
			setFormValidState(state => ({...state, post: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, post: true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if (!isFormValid) {
			return;
		}
		onSubmit(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title' className={`input ${formValidState.title ? '' : 'invalid'}`}/>
			<input type='date' name='date' className={`input ${formValidState.date ? '' : 'invalid'}`}/>
			<input type='text' name='tag'/>
			<textarea name="post" id="" cols="30" rows="10"
					  className={`input ${formValidState.post ? '' : 'invalid'}`}></textarea>
			<Button text="Save" onClick={() => console.log('Pressed')}></Button>
		</form>
	);
}

export default JournalForm;

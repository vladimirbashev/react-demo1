import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';


function JournalForm({onSubmit}) {
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<input type="text" name="title"/>
			<input type="date" name="date"/>
			<input type="text" name="tag" />
			<textarea name="text" id="post" cols="30" rows="10"></textarea>
			<Button text="Save" onClick={() => console.log('Pressed')}></Button>
		</form>
	);
}

export default JournalForm;

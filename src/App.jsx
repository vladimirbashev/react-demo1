import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';


function App() {
	const data = [
		{
			title: 'Udemy',
			text: 'Its cool',
			date: new Date()
		},
		{
			title: 'Visiting the city center',
			text: 'Its beautiful',
			date: new Date()
		}
	];

	return (
		<>
			<h1>Title</h1>
			<div>Project</div>
			<Button></Button>
			<CardButton>
                <JournalItem
                    title={data[0].title}
                    text={data[0].text}
                    date={data[0].date}
                />
            </CardButton>
		</>
	);
}

export default App;

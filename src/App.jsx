import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import JournalList from './components/JournalList/JournalList.jsx';


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
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{data.map((el, index) => (
						<CardButton key={index}>
							<JournalItem
								title={el.title}
								text={el.text}
								date={el.date}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				Body
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;

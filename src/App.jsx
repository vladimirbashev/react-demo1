import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import {useState} from 'react';
import JournalForm from "./components/JournalForm/JournalForm.jsx";


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
				<CardButton>
					<JournalItem
						title={data[0].title}
						text={data[0].text}
						date={data[0].date}
					/>
				</CardButton>
				<CardButton>
					<JournalItem
						title={data[1].title}
						text={data[1].text}
						date={data[1].date}
					/>
				</CardButton>
			</LeftPanel>
			<Body>
				Body
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;

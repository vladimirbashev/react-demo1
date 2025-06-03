import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import {useState} from 'react';

const INITIAL_ITEMS = [
	{
		title: 'Udemy',
		text: 'Its cool',
		date: new Date(),
		id: 1
	},
	{
		title: 'Visiting the city center',
		text: 'Its beautiful',
		date: new Date(),
		id: 2
	}
];

function App() {
	const [items, setItems] = useState(INITIAL_ITEMS);

	const addItem = item => setItems((oldItems) => [...oldItems, {
		...item,
		date: new Date(item.date),
		id: oldItems.length > 0 ? Math.max(...oldItems.map(item => item.id)) + 1 : 1
	}]);

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={items}></JournalList>
			</LeftPanel>
			<Body>
				Body
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;

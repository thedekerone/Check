import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Course } from './components/Course';
import { HomePage } from './components/HomePage';

export const App = () => {
	return (
		<div>
			<GlobalStyles />
			<HomePage />
		</div>
	);
};

export default App;

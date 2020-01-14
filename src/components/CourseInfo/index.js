import React from 'react';
import { Progress, GoldProgress, BronzeProgress, Title, ProgressTitle, Container } from './styles';

export const CourseInfo = ({
	title = 'Matematicas',
	progress = { gold: '30', bronze: '20', silver: '0', diamond: '0' }
}) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Progress>
				{progress.gold !== '0' && <GoldProgress progress={progress.gold} />}
				{progress.bronze !== '0' && <BronzeProgress progress={progress.gold} />}
			</Progress>
			<ProgressTitle>Tu progreso</ProgressTitle>
		</Container>
	);
};

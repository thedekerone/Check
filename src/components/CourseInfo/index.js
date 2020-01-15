import React from 'react';
import {
	ProgressLine,
	GoldProgress,
	BronzeProgress,
	Title,
	ProgressTitle,
	Container,
	SilverProgress,
	DiamondProgress
} from './styles';

export const CourseInfo = ({
	title = 'Matematicas',
	progress = { gold: '30', bronze: '60', silver: '0', diamond: '0' }
}) => {
	return (
		<Container>
			<Title>{title}</Title>
			<ProgressLine>
				{progress.gold !== '0' && <GoldProgress percentage={progress.gold} progress={progress.gold} />}
				{progress.bronze !== '0' && <BronzeProgress percentage={progress.bronze} progress={progress.bronze} />}
				{progress.silver !== '0' && <SilverProgress percentage={progress.silver} progress={progress.silver} />}
				{progress.diamond !== '0' && (
					<DiamondProgress percentage={progress.diamond} progress={progress.diamond} />
				)}
			</ProgressLine>
			<ProgressTitle>Tu progreso</ProgressTitle>
		</Container>
	);
};

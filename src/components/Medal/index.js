import React from 'react';
import { MedalImg, MedalContainer, MedalDescription, MedalEmpty } from './styles';

export const Medal = ({ color = 'black', imgPath = '', value = 0, description = 'default', empty = false }) => {
	return (
		<MedalContainer>
			{empty ? <MedalEmpty /> : <MedalImg color={color} src={imgPath} width='100%' alt='medal' />}

			<MedalDescription>
				{value} {description}
			</MedalDescription>
		</MedalContainer>
	);
};

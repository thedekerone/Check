import React, { useEffect } from 'react';
import { CourseInfo } from '../CourseInfo';
import { Medal } from '../Medal';
import { CourseContainer, CourseImage, Wrapper, MedalList } from './styles';
import diamond from '../../resources/img/diamond_2.svg';
import bronze from '../../resources/img/feature-lingot-bronze_2.svg';
import gold from '../../resources/img/feature-lingot-gold_2.svg';
import silver from '../../resources/img/feature-lingot-silver_2.svg';

// HOOKS
import { useNearScreen } from '../../resources/hooks/useNearScreen';

export const Course = ({ delay = 0, title = '', imgPath = '', color = '#ffbc00' }) => {
	const [
		show,
		element
	] = useNearScreen();

	return (
		<CourseContainer ref={element} show={show} delay={delay}>
			<Wrapper>
				<CourseImage color={color}>
					<img src={imgPath} width='100%' height='100%' alt='' />
				</CourseImage>
				<CourseInfo title={title} />
			</Wrapper>
			<MedalList>
				<Medal empty={true} value='1' description='intento' />
				<Medal imgPath={bronze} value='5' description='Bronce' color='#CC7E48' />
				<Medal imgPath={silver} value='1' description='Plata' color='#A4C1CF' />
				<Medal imgPath={gold} value='5' description='Oro' color='#EFB30C' />
				<Medal imgPath={diamond} value='5' description='Diamante' color='#62EBFF' />
			</MedalList>
		</CourseContainer>
	);
};

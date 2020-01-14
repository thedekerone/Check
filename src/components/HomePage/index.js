import React from 'react';
import { Container, Title, Subtitle } from './styles';
import { Course } from '../Course';
import abacus from '../../resources/img/abacus_2.svg';
import science from '../../resources/img/science.svg';
import dna from '../../resources/img/dna.svg';

export const HomePage = () => {
	return (
		<Container>
			<Title>¿Qué aprenderas hoy?</Title>
			<Subtitle>Tus cursos</Subtitle>
			<Course color='#ffbc00' imgPath={abacus} title='Matemáticas' />
			<Course color='black' imgPath={science} title='Ciencias' />
			<Course color='#f0f0f0' imgPath={dna} title='Genética' />
		</Container>
	);
};

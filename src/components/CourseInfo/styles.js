import styled from 'styled-components';

export const Progress = styled.div`
	height: .5rem;
	width: 100%;

	background: darkgray;
	display: flex;
	border-radius: 5rem;
	position: relative;
`;

export const GoldProgress = styled.div`
	height: 100%;
	width: 30%;
	background: #efb30c;
	position: absolute;
	z-index: 4;
`;
export const BronzeProgress = styled.div`
	height: 100%;
	width: 50%;
	position: absolute;
	background: #cc7e48;
	z-index: 1;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	color: #232323;
	font-weight: 500px;
`;
export const ProgressTitle = styled.h2`
	color: #232323;
	font-size: 0.75rem;
	font-weight: 500px;
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 1.5rem;
	@media (max-width: 600px) {
		margin: 0;
		margin-left: 1.5rem;
	}
`;

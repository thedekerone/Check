import styled from 'styled-components';

export const ProgressLine = styled.div`
	height: .5rem;
	width: 100%;
	background: darkgray;
	display: flex;
	border-radius: 5rem;
	position: relative;
`;

export const GoldProgress = styled.div`
	height: 100%;
	background: #efb30c;
	width: ${(props) => props.percentage}%;
	position: absolute;
	z-index: 3;
`;
export const BronzeProgress = styled.div`
	height: 100%;
	position: absolute;
	background: #cc7e48;
	width: ${(props) => props.percentage}%;
	z-index: 1;
`;
export const SilverProgress = styled.div`
	height: 100%;
	position: absolute;
	background: #a4c1cf;
	width: ${(props) => props.percentage}%;
	z-index: 2;
`;
export const DiamondProgress = styled.div`
	height: 100%;
	position: absolute;
	background: #50e6ff;
	width: ${(props) => props.percentage + '%'};
	z-index: 5;
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

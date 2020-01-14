import styled from 'styled-components';

export const MedalImg = styled.img`
	border-radius: 100%;
	background: white;
	padding: .45rem;
	box-sizing: border-box;
	width: 2.6875rem;
	height: 2.6875rem;
	margin-bottom: .4rem;
	border: ${(props) => `1px solid ${props.color}`};
`;
export const MedalEmpty = styled.div`
	border-radius: 100%;
	background: white;
	padding: .45rem;
	box-sizing: border-box;
	width: 2.6875rem;
	height: 2.6875rem;
	margin-bottom: .4rem;
	border: 2px dashed #ffbc00;
`;

export const MedalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.2rem;
	flex-direction: column;
`;

export const MedalDescription = styled.span`
	font-size: 0.75rem;
	font-weight: 500;
`;

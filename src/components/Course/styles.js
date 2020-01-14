import styled from 'styled-components';

export const CourseContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 50rem;
	height: 12rem;
	background: white;
	justify-content: space-between;
	padding: 1.2rem;
	box-sizing: border-box;
	transition-duration: .8s;
	transform: ${(props) => (props.show ? 'translateY(0px)' : 'translateY(50px)')};
	opacity: ${(props) => (props.show ? '1' : '0')};
	margin-bottom: 1.4rem;
	transition-delay: ${(props) => props.delay};
	align-items: center;
	border-radius: 6px;
	box-shadow: -1px 2px 25px 3px rgba(0, 0, 0, 0.11);

	@media (max-width: 600px) {
		flex-direction: column;
		height: 14rem;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
export const MedalList = styled(Wrapper)`
	max-width: 25rem;
`;

export const CourseImage = styled.div`
	width: 4.375rem;
	height: 4.375rem;
	background: ${(props) => props.color};
	border-radius: 100%;
	padding: .8rem;
	flex-shrink: 0;
	box-sizing: border-box;
`;

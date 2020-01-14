import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {
	const [
		show,
		setShow
	] = useState(false);

	const element = useRef(null);

	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					console.log(entry.isIntersecting);

					if (entry.isIntersecting) {
						setShow(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold : 0.5
			}
		);

		observer.observe(element.current);
	});
	return [
		show,
		element
	];
}

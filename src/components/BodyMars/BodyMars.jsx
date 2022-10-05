import React from 'react';
import styles from './styles/BodyMars.module.css';
import { useAxiosGet } from '../../hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SekeletonCardItem } from '../Skeletons/SekeletonCardItem';

const BodyMars = () => {

	const [response, error, loading] = useAxiosGet('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=B0GPms5jhjJw0ogRlG6FToz3aJoeK8vq430qtFPl');
	console.log(response)
	return (
		<div className={styles.bodymars}>
				{
				error ?  new Array(25).fill().map((item, index) => (
					<SekeletonCardItem key={index} />
				)) : null
			}
			{
				loading && new Array(25).fill().map((item, index) => (
					<SekeletonCardItem key={index} />
				))
			}
			{
				response.photos && response.photos.map(data => (
					<div className={styles.card_item}>
						<LazyLoadImage
							src={data.img_src} // use normal <img> attributes as props
						/>
						<div className={styles.card_info}>
							<span className={styles.camara_title}><strong>Camera:</strong> {data.camera.full_name}</span>
							<span><strong>Alias:</strong> {data.camera.name}</span>
							<span><strong>Rover</strong>: {data.rover.name}</span>
							<span><strong>Satus:</strong> {data.rover.status}</span>
						</div>
					</div>
				))
			}
		</div >
	)
};

export default BodyMars;

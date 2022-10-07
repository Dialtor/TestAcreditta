import React from 'react';
import styles from './styles/BodyMars.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SekeletonCardItem } from '../Skeletons/SekeletonCardItem';
import FilterMars from '../FilterMars/FilterMars';
import { useState } from 'react';
import { PaginationMars } from '../PaginationMars';
import {useDispatch, useSelector} from 'react-redux'
import { getMarsAsync } from '../../features/mars/marsSlice';
import { useEffect } from 'react';


const BodyMars = () => {

	const [searchInput, setSearchInput] = useState("");
	const [dateInput, setDateInput] = useState("");
	const [currentRover, setCurrentRover] = useState("curiosity");
	const [currentRange, setCurrentRange] = useState(0);
	const dispatch = useDispatch();
	const masrsInfo = useSelector(state => state.mars.data);
	const loading = useSelector(state => state.mars.loading);
	const currentPage = useSelector(state => state.mars.currentPage);


	useEffect(() => {

			dispatch(getMarsAsync(currentRover,currentRange, currentPage));

	}, [currentRover,currentRange, currentPage])
	
	return (
		<>
			<section className={styles.mars_container}>
			<FilterMars
				setSearchInput={setSearchInput}
				setDateInput={setDateInput}
				setCurrentRover={setCurrentRover}
				currentRover={currentRover}
				setCurrentRange={setCurrentRange}
				currentRange={currentRange}

			/>
			<div className={styles.bodymars}>

				{/* {
					error ? new Array(25).fill().map((item, index) => (
						<SekeletonCardItem key={index} />
					)) : null
				} */}
				{
					loading && new Array(25).fill().map((item, index) => (
						<SekeletonCardItem key={index} />
					))
				}
				{

masrsInfo[0] && masrsInfo[0].photos.map(data => {

						if (data.camera.full_name.toLowerCase().includes(searchInput.trim().toLowerCase())
							|| data.camera.name.toLowerCase().includes(searchInput.trim().toLowerCase())
							|| data.rover.name.toLowerCase().includes(searchInput.trim().toLowerCase())) {

							if (data.rover.landing_date.toLowerCase().includes(dateInput.trim().toLowerCase())) {
								return (
									<div key={data.id} className={styles.card_item}>
										<LazyLoadImage
											src={data.img_src} // use normal <img> attributes as props
										/>
										<div className={styles.card_info}>
											<span className={styles.camara_title}><strong>Camera:</strong> {data.camera.full_name}</span>
											<span><strong>Alias:</strong> {data.camera.name}</span>
											<span><strong>Rover:</strong>: {data.rover.name}</span>
											<span><strong>Satus:</strong> {data.rover.status}</span>
											<span><strong>Earth Date:</strong> {data.earth_date}</span>
											<span><strong>Launch Date:</strong> {data.rover.launch_date}</span>
											<span><strong>Landing Date:</strong> {data.rover.landing_date}</span>
										</div>
									</div>
								)
							}

						}
					})
				}

				{/* {
					response ?
						<h1>Not Found</h1>
						: null
				} */}
			</div >


			<PaginationMars currentPage={currentPage}  />
			</section>

		</>

	)
};

export default BodyMars;

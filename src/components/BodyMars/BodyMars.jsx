import React from 'react';
import styles from './styles/BodyMars.module.css';
import { useAxiosGet, useAxiosGetParam } from '../../hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SekeletonCardItem } from '../Skeletons/SekeletonCardItem';
import FilterMars from '../FilterMars/FilterMars';
import { useState } from 'react';
import { PaginationMars } from '../PaginationMars';


const BodyMars = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchInput, setSearchInput] = useState("");
	const [dateInput, setDateInput] = useState("");
	const [currentRover, setCurrentRover] = useState("curiosity");
	const [response, error, loading] = useAxiosGet(`https://api.nasa.gov/mars-photos/api/v1/rovers/${currentRover}/photos?sol=1000&page=${currentPage}&api_key=syf4L9a9xiL3YQx0snEdMrRMDP8e2oGiCZoH7a2f`, currentPage, currentRover);
	
	

	return (
		<>
			<FilterMars 
				setSearchInput={setSearchInput} 
				setDateInput={setDateInput} 
				setCurrentRover={setCurrentRover}
				currentRover={currentRover}

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

					response.photos && response.photos.map(data => {
		
						if (data.camera.full_name.toLowerCase().includes(searchInput.trim().toLowerCase())
							|| data.camera.name.toLowerCase().includes(searchInput.trim().toLowerCase())
							|| data.rover.name.toLowerCase().includes(searchInput.trim().toLowerCase()))  {

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
			</div >
			

			<PaginationMars currentPage={currentPage} setCurrentPage={setCurrentPage}/>
		
		</>

	)
};

export default BodyMars;

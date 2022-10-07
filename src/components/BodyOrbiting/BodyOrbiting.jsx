import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAxiosGet } from '../../hooks';
import { FilterTle } from '../FilterTle';
import styles from './styles/BodyOrbiting.module.css';
import { getLatLngObj } from "tle.js";

const BodyOrbiting = () => {

	const [idSatelite, setIdSalite] = useState(null);
	const [nameSatelite, setNameSatelite] = useState(null);
	const [date, setDate] = useState(null);
	const [line1, setLine1] = useState(null);
	const [line2, setLine2] = useState(null);

	const [response, error, loading] = useAxiosGet(`https://tle.ivanstanojevic.me/api/tle/`);
	const tle = `${nameSatelite && nameSatelite}
${line1 && line1}
${line2 && line2}`;

const latLonObj = getLatLngObj(tle && tle, date);


	return (
		<>
			<FilterTle
				setIdSalite={setIdSalite}
				setNameSatelite={setNameSatelite}
				setDate={setDate}
				response={response}
				error={error}
				loading={loading}
				setLine1={setLine1}
				setLine2={setLine2}
			/>

			<div className={styles.bodyorbiting}>
			{
				!loading && new Array(1).fill().map((item, index) => (
					<div key={index} className={styles.info_satelite_container}>
					<h1>Satelite {nameSatelite}</h1>
					<div>
						<span>ID Saltelite Reference: {idSatelite}</span>
						<span>Date: {date}</span>
						<span>Line 1: {line1}</span>
						<span>Line 1: {line2}</span>
					</div>
					</div>
				))
			}
			</div >
		</>
	)
};

export default BodyOrbiting;

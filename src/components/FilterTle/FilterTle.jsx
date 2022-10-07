import React from 'react';
import { useAxiosGet } from '../../hooks';
import { SkeletonButtonSatelites } from '../Skeletons/SkeletonButtonSatelites';
import styles from './styles/FilterTle.module.css';

const FilterTle = ({setIdSalite, setNameSatelite, setDate, response, error, loading, setLine2, setLine1}) => {


const data = response["member"]
const DataMember = data && data;


	return (
		<div className={styles.filtertle}>
							{
					loading && new Array(20).fill().map((item, index) => (
						<SkeletonButtonSatelites key={index}/>
					))
				}
			{
				DataMember && DataMember.map(item => (
					<div key={item.satelliteId} className={styles.satelite_item} onClick={() => [setNameSatelite(item.name), setIdSalite(item.satelliteId), setDate(item.date), setLine1(item.line1), setLine2(item.line2)]}>
						<span>{item.name}</span>

					</div>
				))
			}
		</div >
	)
};

export default FilterTle;

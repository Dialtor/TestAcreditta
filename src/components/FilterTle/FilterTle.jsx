import React from 'react';
import { useAxiosGet } from '../../hooks';
import { SkeletonButtonSatelites } from '../Skeletons/SkeletonButtonSatelites';
import styles from './styles/FilterTle.module.css';

const FilterTle = () => {
	const [response, error, loading] = useAxiosGet(`https://tle.ivanstanojevic.me/api/tle/`);
	
console.log(response["member"], error, loading)
const data = response["member"]
const DataMember = data && data;

console.log("DataMember", DataMember)
	return (
		<div className={styles.filtertle}>
							{
					loading && new Array(20).fill().map((item, index) => (
						<SkeletonButtonSatelites key={index}/>
					))
				}
			{
				DataMember && DataMember.map(item => (
					<div key={item.id} className={styles.satelite_item}>
						<span>{item.name}</span>
					</div>
				))
			}
		</div >
	)
};

export default FilterTle;

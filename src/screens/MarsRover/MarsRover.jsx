import React from 'react';
import { Footer, Navbar } from '../../common';
import { BodyMars } from '../../components';

const MarsRover = () => {

	console.log("mars")
	return (
		<>
			<Navbar/>
			<BodyMars/>
			<Footer/>
		</>
	)
};

export default MarsRover;

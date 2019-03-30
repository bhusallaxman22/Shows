import React from 'react';

const Card = ({ name, id, No_Of_Current_Seasons, Status, Plot }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow=5'>
		<img alt='shows' src = {`./images/${id}.jpg`} height = '20' width= '20' />
	<div>
		<h2>{name}</h2>
		<p>No. Of Current Seasons: {No_Of_Current_Seasons}</p>
		<p>Plot: {Plot}</p>
		<p>Runtime Status: {Status}</p>
	</div>
	</div>
	);
}
export default Card
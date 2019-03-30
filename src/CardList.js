import React from 'react';
import Card from './Card';


const CardList = ({ Shows }) => {


	return (
	<div>
{
	Shows.map((user, i) => {
		return (
			<Card 
			 key={i} 
			 id={Shows[i].id} 
			 name={Shows[i].name} 
			 No_Of_Current_Seasons={Shows[i].No_Of_Current_Seasons}
			 Plot={Shows[i].Plot}
			 Status={Shows[i].Status}
			 
			/>
		);
	}) 
}
	</div>
		);
}

export default CardList
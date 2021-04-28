import React from 'react';

const Card = (props) => {
	return (

		<div className="tc bg-light-purple dib br3 pa3 ma2 grow bmw2 shadow-5">
		<img alt='friends' src={`https://robohash.org/${props.id}?180x180`} />
		<div>
		<h4>{props.name}</h4>
		<p>{props.emails}</p>
		</div>
		</div>
		);
}

export default Card;
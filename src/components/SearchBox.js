import React from 'react';
import 'tachyons';

const  searchBox = ({searchfield, searchChange}) => {

	return (
		<div className='pa2'>
		<input 
		className ='pa3 ba b--purple bg-lightest-blue'
		type='search' 
		placeholder='Search for Engineers' 
		onChange={searchChange}
		/>
		</div>
		);
}
export default searchBox
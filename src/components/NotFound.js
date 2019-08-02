import React from 'react';
let problem;
const NotFound=(props)=>{
	switch(props.status){
	case 500:
	problem='INTERAL SERVER ERROR'
	break;
	case 404:
			problem='404-Data Not FOUND'
			break;
			default:
					problem='We are Loading.....'
				break;
}
	
  return(
 		<div className="not-found">
	<div><h2>{problem}</h2></div>

		</div>

);
}

export default NotFound;
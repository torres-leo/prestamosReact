import React from 'react';

// function Header(props) {
// console.log(props);
// 	const { titulo } = props;
// 	return (
// 		<Fragment>
// 			{/* // ! Si se colocan las llaves "{}" React lo interpreta como javaScript, sino, como HTML */}
// 			<h1>{titulo}</h1>
// 		</Fragment>
// 	);
// }

const Header = (props) => {
	const { titulo } = props;
	return <h1>{titulo}</h1>;
};

export default Header;

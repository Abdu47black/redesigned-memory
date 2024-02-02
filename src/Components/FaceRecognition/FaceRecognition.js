import React from "react";

const FaceRecognition = ({ imageurl }) => {
	return (
		<div className="center">
			<img src={imageurl} alt="" style={{ height: "auto", width: 500 }} />
		</div>
	);
};
export default FaceRecognition;

//https://i.pinimg.com/originals/49/da/f9/49daf967a116ea4ff582e09fcc59e31a.jpg

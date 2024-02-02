import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<div>
				<p className="center f3">
					{
						"This Magic brain will detect faces from your Pictures,Give it a try!"
					}
				</p>
			</div>

			<div className="center">
				<div className=" form center pa4 br3 shadow-5">
					<input
						className="f4 pa2 w-70 center"
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="w-30 grow ba b--none f4 link ph3 pv2 dib white bg-light-purple Arm"
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};
export default ImageLinkForm;

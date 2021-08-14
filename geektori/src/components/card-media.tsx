import React from "react";

const Image = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return <img className={"esticker-image"} {...props} />;
};

const CardMedia = (props) => {
	return (
		<div className={`esticker-media ${props.className ?? ""}`}>
			<Image src={props.image_src} alt={props.image_alt} />
		</div>
	);
};

export default CardMedia;

import React from "react";

interface CardMediaProps {
	image_src: string;
	image_alt: string;
	className?: string;
}

const Image = (
	props: React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
) => {
	return <img className={"esticker-image"} {...props} />;
};

const CardMedia = (props: CardMediaProps) => {
	return (
		<div className={`esticker-media ${props.className ?? ""}`}>
			<Image src={props.image_src} alt={props.image_alt} />
		</div>
	);
};

export default CardMedia;

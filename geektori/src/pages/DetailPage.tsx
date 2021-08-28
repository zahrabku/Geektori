import React from "react";
import styled from "styled-components";
import {
	FaWhatsapp,
	FaTelegramPlane,
	FaTwitter,
	FaFacebookF,
} from "react-icons/fa";
import Container from "../components/Container";
import { Image } from "../components/CardMedia";
import { useSlug } from "../hooks";
import "../styles/sass/detail-card.scss";
import "../styles/sass/container__body.scss";
import Lama from "../images/lama.png";

// import colors from "../styles/sass/_colors.scss";

const EstickerTitle = styled.h1`
	color: black;
	font-size: 25px;
	font-weight: bold;
	line-height: 160%;
`;

const EstickerPrice = styled.h2`
	color: rgb(96, 108, 236);
	font-size: 20px;
	font-weight: bold;
`;

const AddToCartButton = styled.button`
	color: white;
	height: 55px;
	background: #3ecf8e;
	font-size: 18px;
	padding: 0px 35px;
	font-weight: bold;
	border-radius: 3px;
	border-style: none;
`;

const EstickerProps = styled.div`
	line-height: 55px;
	flex-grow: 1;
	padding-right: 30px;
`;

const EstickerDetail = styled.div`
	display: flex;
	justify-content: start;
`;

const EstickerInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SocialMedia = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				width: "15%",
				color: "gray",
			}}>
			<FaWhatsapp />
			<FaTelegramPlane />
			<FaTwitter />
			<FaFacebookF />
		</div>
	);
};

interface EstickerDetailProps {
	imageSrc: string
	imageAlt?: string
	price: string
}

const Detail = (props: EstickerDetailProps) => {
	const slug = useSlug();

	return (
		<Container className='main-container'>
			<EstickerDetail>
				<Image className='esticker-image-detail' src={props.imageSrc} alt={props.imageAlt} />
				<EstickerProps>
					<EstickerTitle>استیکر {slug}</EstickerTitle>
					<EstickerPrice>{props.price} تومان</EstickerPrice>
					<EstickerInfo>
						<AddToCartButton>اضافه به سبد خرید</AddToCartButton>
						<SocialMedia />
					</EstickerInfo>
				</EstickerProps>
			</EstickerDetail>
		</Container>
	);
};

export default Detail;
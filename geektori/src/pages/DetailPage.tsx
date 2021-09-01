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
import { useId } from "../hooks";
import { items } from "../utils/DataDump";
import "../styles/sass/detail-card.scss";
import "../styles/sass/container__body.scss";

// import colors from "../styles/sass/_colors.scss";

interface EstickerPriceProps {
	readonly existance?: boolean;
}

const EstickerTitle = styled.h1`
	color: black;
	font-size: 25px;
	font-weight: bold;
	line-height: 160%;
`;

const EstickerPrice = styled.h2<EstickerPriceProps>`
	color: ${(props) =>
		props.existance ? "rgb(96, 108, 236)" : "rgb(236, 96, 96)"};
	font-size: 20px;
	font-weight: bold;
`;

const AddToCartButton = styled.button`
	height: 55px;
	background: #3ecf8e;
	font-size: 18px;
	padding: 0px 35px;
	font-weight: bold;
	border-radius: 3px;
	border-style: none;
	color: ${(props) => (props.disabled ? "#B9B9B9" : "#FFFF")};
	background: ${(props) => (props.disabled ? "#e8e8e8" : "#3ecf8e")};
`;

const EstickerProps = styled.div`
	line-height: 60px;
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
	imageSrc: string;
	imageAlt?: string;
	price: string;
}

const Detail = (props: EstickerDetailProps) => {
	const id = useId();
	const card = items.find((c) => c.id === Number(id));

	return (
		<Container className='main-container'>
			<EstickerDetail>
				<Image
					className='esticker-image-detail'
					src={card?.image}
					alt={card?.imageAlt}
				/>
				<EstickerProps>
					<EstickerTitle>{card?.title}</EstickerTitle>
					{card?.existance ? (
						<EstickerPrice existance={card?.existance}>
							{card?.price} تومان
						</EstickerPrice>
					) : (
						<EstickerPrice existance={card?.existance}>ناموجود</EstickerPrice>
					)}
					<EstickerInfo>
						<AddToCartButton disabled={!card?.existance}>
							اضافه به سبد خرید
						</AddToCartButton>
						<SocialMedia />
					</EstickerInfo>
				</EstickerProps>
			</EstickerDetail>
		</Container>
	);
};

export default Detail;

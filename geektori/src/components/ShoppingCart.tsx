import React from "react";
import styled from "styled-components";

const ShoppingCartSection = styled.div`
	class: ${(props) => props.className};
`;

const ShoppingCart: React.FC = (props) => {
	return <div className='shopping-cart'>{props.children}</div>;
};

export { ShoppingCart, ShoppingCartSection };

import Container from "./components/container";
import ItemHeader from "./components/ItemHeader";
import FAQContainer from "./components/FAQContainer";
import { Card, AddToCart, OffLable } from "./components/card";
import { CardMedia, Image } from "./components/card-media";
import {
	Menu,
	SmallMenu,
	MenuItem,
	MenuItemName,
	MenuItemIcon,
	MenuItemInput,
} from "./components/Menu";
import { CardContent, Description, Price } from "./components/card-content";

import {
	FaAngleDown,
	FaHeart,
	FaSearch,
	FaShoppingBasket,
} from "react-icons/fa";

import "./styles/sass/container__body.scss";
import "./styles/sass/card-style.scss";
import "./styles/sass/general.scss";
import "./styles/sass/menu.scss";

import Geektori from "./images/geek-logo.png";
import Vanilla from "./images/vanilla.png";
import Lama from "./images/lama.png";
import Octopus from "./images/octopus.jpg";
import Penguin from "./images/penguin.png";
import { useState } from "react";

function App() {
	const [isSearchOpen, setIsOpen] = useState(false);

	return (
		<Container>
			<Menu>
				<SmallMenu className='right'>
					<MenuItem>
						<Image
							className='geektori-logo'
							src={Geektori}
							alt='geektori logo'
						/>
					</MenuItem>
					<MenuItem>
						<MenuItemName href='#'>استیکر</MenuItemName>
						<MenuItemIcon iconName={FaAngleDown} />
					</MenuItem>
					<MenuItem>
						<MenuItemName href='#'>استیکرهای فانتزی</MenuItemName>
						<MenuItemIcon iconName={FaAngleDown} />
					</MenuItem>
					<MenuItem>
						<MenuItemName href='#'>طراح‌هامون</MenuItemName>
						<MenuItemIcon iconName={FaHeart} />
					</MenuItem>
					<MenuItem>
						<MenuItemName href='#'>طرح دلخواه</MenuItemName>
					</MenuItem>
					<MenuItem>
						<MenuItemName href='#'>پینتوری</MenuItemName>
					</MenuItem>
				</SmallMenu>

				<SmallMenu className='left'>
					{!isSearchOpen && (
						<>
							<MenuItem onClick={() => setIsOpen(true)}>
								<MenuItemIcon iconName={FaSearch} className='search-icon' />
							</MenuItem>
							<MenuItem className='shopping-basket'>
								<MenuItemIcon
									iconName={FaShoppingBasket}
									className='shopping-basket-icon'
								/>
								<MenuItemName href='#'>سبد خرید</MenuItemName>
							</MenuItem>
							<MenuItem>
								<MenuItemName href='#'>عضویت</MenuItemName>
							</MenuItem>
							<MenuItem>
								<MenuItemName href='#'>وارد شوید</MenuItemName>
							</MenuItem>
						</>
					)}
					{isSearchOpen && (
						<MenuItemInput
							className='search-input'
							type='text'
							defaultValue='نام محصول یا دسته'
						/>
					)}
				</SmallMenu>
			</Menu>

			<Card>
				<CardMedia imageSrc={Lama} imageAlt='cute lama' />
				<CardContent>
					<Description text='Cute Lama استیکر' />
					<Price price='۲/۹۵۰' main_price='۳/...' />
				</CardContent>
				<AddToCart />
				<OffLable />
			</Card>
			<Card>
				<CardMedia imageSrc={Vanilla} imageAlt='vanilla ice cream' />
				<CardContent>
					<Description text='استیکر بستنی وانیلی' />
					<Price price='۲/۹۵۵' main_price='۳/۶۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
			<Card>
				<CardMedia imageSrc={Octopus} imageAlt='pink octopus' />
				<CardContent>
					<Description text='Pink Octopus استیکر' />
					<Price price='۳/۰۰۰' />
				</CardContent>
				<AddToCart />
			</Card>
			<Card>
				<CardMedia imageSrc={Penguin} imageAlt='penguin' />
				<CardContent>
					<Description text='Penguin استیکر' />
					<Price price='۳/۰۰۰' existence={false} />
				</CardContent>
				<AddToCart />
			</Card>
			<ItemHeader text='سوالات پرتکرار'></ItemHeader>
			<FAQContainer></FAQContainer>
		</Container>
	);
}
export default App;

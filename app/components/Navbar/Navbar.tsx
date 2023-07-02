"use client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
	return (
		<div className="fixed w-full bg-white shadow-sm z-10">
			<div className="py-4 border-b">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0">
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;

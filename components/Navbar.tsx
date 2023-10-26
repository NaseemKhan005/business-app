"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { languages, navLinks } from "@/constants/NavLinks";
import HamburgerMenu from "./HamburgerMenu";
import { cn } from "@/lib/utils";
import ButtonDefault from "./common/ButtonDefault";
import ButtonOutline from "./common/ButtonOutline";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const navbar = useRef<HTMLDivElement | null>(null);

	window.onscroll = () => {
		if (window.pageYOffset >= 1 && navbar.current) {
			navbar.current.classList.add("show-shadow");
		} else if (navbar.current) {
			navbar.current.classList.remove("show-shadow");
		}
	};

	return (
		<nav
			className="bg-secondary-color overflow-hidden fixed top-0 left-0 w-full"
			ref={navbar}
		>
			<div className="container px-5 md:px-16 py-3 mx-auto">
				<div className="flex items-center justify-between gap-8">
					<div className="flex items-center gap-8">
						<Link href="/">
							<Image
								src="/assets/images/logo.svg"
								alt="logo"
								width={500}
								height={500}
								className="w-28 lg:w-36 h-full object-contain"
							/>
						</Link>

						<div
							className={cn(
								"capitalize flex items-start overflow-hidden lg:items-center gap-1 lg:gap-6 lg:relative fixed lg:top-0 top-16 left-0 w-full bg-white lg:bg-transparent transition-all duration-500 md:px-16 lg:p-0 px-5 flex-col lg:flex-row",
								openMenu ? "h-screen lg:h-auto" : "h-0 lg:h-auto"
							)}
						>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.link}
									className="first:mt-7 lg:first:mt-0 md:text-lg lg:text-[.95rem] lg:text-zinc-600/90 hover:text-black/90 font-[500] border-b lg:border-0 block lg:inline-block w-full lg:w-fit pb-2 lg:pb-0 mt-5 lg:mt-0 relative before:absolute before:left-0 before:bottom-0 before:bg-black/90 before:w-0 before:h-[2px] before:rounded-full hover:before:w-full before:transition-all before:duration-500"
								>
									{link.name}
								</Link>
							))}
							<ButtonDefault
								btnText="Get started"
								className="w-full py-6 text-base lg:hidden mt-8 lg:mt-0"
							/>
							<ButtonOutline
								btnText="Log In"
								className="w-full py-6 text-base lg:hidden"
							/>
						</div>
					</div>

					<div className="flex items-center gap-5">
						<Popover>
							<PopoverTrigger asChild className="sm:block hidden">
								<span className="text-2xl cursor-pointer text-zinc-600/90 hover:text-black/90">
									<TfiWorld />
								</span>
							</PopoverTrigger>
							<PopoverContent className="w-32 flex flex-col gap-0 p-0 py-1">
								{languages.map((language) => (
									<Link
										href="/"
										key={language}
										className="hover:bg-blue-500 px-2 py-1 hover:text-white"
									>
										{language}
									</Link>
								))}
							</PopoverContent>
						</Popover>
						<span className="sm:block w-[.5px] h-6 bg-zinc-300 hidden" />
						<Link
							href="/"
							className="sm:block hidden text-zinc-600/90 hover:text-black/90 text-[.95rem] font-[500]"
						>
							<span className="lg:hidden xl:block">Contact Sales</span>
							<CiMail className="lg:block xl:hidden hidden text-[1.8rem]" />
						</Link>
						<Link
							href="/"
							className="sm:block hidden text-zinc-600/90 hover:text-black/90 text-[.95rem] font-[500]"
						>
							<span className="lg:hidden xl:block">Log In</span>
							<PiUserCircleLight className="lg:block xl:hidden hidden text-[1.8rem]" />
						</Link>
						<ButtonDefault btnText="Get started" />

						<HamburgerMenu
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
							className="lg:hidden"
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
	openMenu: Boolean;
	setOpenMenu: Function;
	className?: String;
}

const HamburgerMenu = ({
	openMenu,
	setOpenMenu,
	className,
}: HamburgerMenuProps) => {
	return (
		<button
			className={cn(
				"flex items-center gap-[5px] flex-col transition-all",
				className,
				openMenu ? "rotate-180" : "rotate-0"
			)}
			onClick={() => setOpenMenu(!openMenu)}
		>
			<span
				className={cn(
					"block w-5 h-[2px] bg-black transition-all duration-500",
					openMenu ? "rotate-45 translate-y-[.43rem]" : "-rotate-180"
				)}
			/>
			<span
				className={cn(
					"block w-5 h-[2px] bg-black transition-all duration-500",
					openMenu ? "scale-0" : "scale-100"
				)}
			/>
			<span
				className={cn(
					"block w-5 h-[2px] bg-black transition-all duration-500",
					openMenu ? "-rotate-45 -translate-y-[.43rem]" : "rotate-0"
				)}
			/>
		</button>
	);
};

export default HamburgerMenu;

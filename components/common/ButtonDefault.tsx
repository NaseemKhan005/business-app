import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ButtonDefaultProps {
	btnText: String;
	className?: String;
}

const ButtonDefault = ({ btnText, className }: ButtonDefaultProps) => {
	return (
		<Button
			className={cn(
				"rounded-sm hover:text-black hover:bg-primary-color bg-black",
				className
			)}
		>
			{btnText}
		</Button>
	);
};

export default ButtonDefault;

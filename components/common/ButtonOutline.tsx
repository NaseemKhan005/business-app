import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ButtonDefaultProps {
	btnText: String;
	className?: String;
}

const ButtonOutline = ({ btnText, className }: ButtonDefaultProps) => {
	return (
		<Button
			variant="outline"
			className={cn(
				"rounded-sm hover:text-black hover:bg-primary-color hover:border-primary-color border-2 border-black",
				className
			)}
		>
			{btnText}
		</Button>
	);
};

export default ButtonOutline;

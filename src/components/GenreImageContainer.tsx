import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GenreImageContainerProps {
	children: ReactNode;
}

const GenreImageContainer = ({ children }: GenreImageContainerProps) => {
	return (
		<Box boxSize="32px" borderRadius={8}>
			{children}
		</Box>
	);
};

export default GenreImageContainer;

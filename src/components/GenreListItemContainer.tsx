import { ListItem } from "@chakra-ui/react";
import { ReactElement } from "react";

interface GenreListItemContainerProps {
	children: ReactElement;
}

const GenreListItemContainer = ({ children }: GenreListItemContainerProps) => {
	return <ListItem paddingY="5px">{children}</ListItem>;
};

export default GenreListItemContainer;

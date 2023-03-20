import { HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";
import GenreImageContainer from "./GenreImageContainer";

interface GenreItemProps {
	backgroundImageUrl: string;
	name: string;
}

export const GenreItem = ({ backgroundImageUrl, name }: GenreItemProps) => {
	return (
		<>
			<HStack>
				<GenreImageContainer>
					<Image src={getCroppedImageUrl(backgroundImageUrl)} />
				</GenreImageContainer>
				<Text fontSize="lg">{name}</Text>
			</HStack>
		</>
	);
};

import { Button, HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";
import GenreImageContainer from "./GenreImageContainer";

interface GenreItemProps {
	backgroundImageUrl: string;
	genreName: string;
	onSelectGenre: () => void;
}

export const GenreItem = ({
	backgroundImageUrl,
	genreName,
	onSelectGenre,
}: GenreItemProps) => {
	return (
		<>
			<HStack>
				<GenreImageContainer>
					<Image src={getCroppedImageUrl(backgroundImageUrl)} />
				</GenreImageContainer>
				<Button
					onClick={() => onSelectGenre()}
					fontSize="lg"
					variant="link"
				>
					{genreName}
				</Button>
			</HStack>
		</>
	);
};

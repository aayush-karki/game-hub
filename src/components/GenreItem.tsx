import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/Image-url";
import GenreImageContainer from "./GenreImageContainer";

interface GenreItemProps {
	genre: Genre;
	onSelectGenre: (genre: Genre) => void;
}

export const GenreItem = ({ genre, onSelectGenre }: GenreItemProps) => {
	return (
		<>
			<HStack>
				<GenreImageContainer>
					<Image src={getCroppedImageUrl(genre.image_background)} />
				</GenreImageContainer>
				<Button
					onClick={() => onSelectGenre(genre)}
					fontSize="lg"
					variant="link"
				>
					{genre.name}
				</Button>
			</HStack>
		</>
	);
};

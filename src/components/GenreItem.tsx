import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/Image-url";
import GenreImageContainer from "./GenreImageContainer";

interface GenreItemProps {
	backgroundImageUrl: string;
	genreName: string;
	onSelectGenre: () => void;
	selectedGenreName: string;
}

export const GenreItem = ({
	backgroundImageUrl,
	genreName,
	onSelectGenre,
	selectedGenreName,
}: GenreItemProps) => {
	return (
		<>
			<HStack>
				<GenreImageContainer>
					<Image src={getCroppedImageUrl(backgroundImageUrl)} />
				</GenreImageContainer>
				<Button
					onClick={() => onSelectGenre()}
					fontWeight={
						selectedGenreName === genreName ? "bold" : "normal"
					}
					fontSize="lg"
					variant="link"
				>
					{genreName}
				</Button>
			</HStack>
		</>
	);
};

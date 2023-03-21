import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/Image-url";

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
				<Image
					boxSize="32px"
					borderRadius={8}
					objectFit="cover"
					src={getCroppedImageUrl(backgroundImageUrl)}
				/>
				<Button
					fontSize="lg"
					onClick={() => onSelectGenre()}
					fontWeight={
						selectedGenreName === genreName ? "bold" : "normal"
					}
					textAlign="left"
					variant="link"
					whiteSpace="normal"
				>
					{genreName}
				</Button>
			</HStack>
		</>
	);
};

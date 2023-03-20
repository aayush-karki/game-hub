import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/Image-url";

const GenreList = () => {
	const { data } = useGenres();

	return (
		<List>
			{data.map((gerne) => (
				<ListItem key={gerne.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(gerne.image_background)}
						/>
						<Text fontSize="lg">{gerne.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;

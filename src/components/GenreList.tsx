import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GenreItem } from "./GenreItem";
import GenreListItemContainer from "./GenreListItemContainer";
import GerneItemSkeleton from "./GerneItemSkeleton";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const skeletons = Array.from(Array(20).keys());

	if (error) return null;

	return (
		<List>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GenreListItemContainer key={skeleton}>
						<GerneItemSkeleton key={skeleton} />
					</GenreListItemContainer>
				))}
			{!isLoading &&
				data.map((genre) => (
					<GenreListItemContainer key={genre.id}>
						<GenreItem
							backgroundImageUrl={genre.image_background}
							name={genre.name}
						/>
					</GenreListItemContainer>
				))}
		</List>
	);
};

export default GenreList;

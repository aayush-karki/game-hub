import { Heading, List } from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { GenreItem } from "./GenreItem";
import GenreListItemContainer from "./GenreListItemContainer";
import GerneItemSkeleton from "./GerneItemSkeleton";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();
	const skeletons = Array.from(Array(20).keys());

	if (error) return null;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
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
								genreName={genre.name}
								onSelectGenre={() => {
									onSelectGenre(genre);
								}}
								selectedGenreName={selectedGenre?.name || ""}
							/>
						</GenreListItemContainer>
					))}
			</List>
		</>
	);
};

export default GenreList;

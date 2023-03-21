import { List } from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { GenreItem } from "./GenreItem";
import GenreListItemContainer from "./GenreListItemContainer";
import GerneItemSkeleton from "./GerneItemSkeleton";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
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
							genreName={genre.name}
							onSelectGenre={() => {
								onSelectGenre(genre);
							}}
						/>
					</GenreListItemContainer>
				))}
		</List>
	);
};

export default GenreList;

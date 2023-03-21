import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = Array.from(Array(20).keys());
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing="13"
				padding="10px"
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{!isLoading &&
					data.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;

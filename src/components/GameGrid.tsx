import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { data, error, isLoading } = useGames();
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

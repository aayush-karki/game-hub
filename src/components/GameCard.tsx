import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/userGames";
import getCroppedImageUrl from "../services/Image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card width="300px" borderRadius={10} overflow="hidden">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<Heading fontSize={"2xl"}>{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;

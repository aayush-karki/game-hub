import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import GenreImageContainer from "./GenreImageContainer";

const GerneItemSkeleton = () => {
	return (
		<>
			<HStack>
				<GenreImageContainer>
					<Skeleton boxSize="32px" borderRadius={8} />
				</GenreImageContainer>
				<SkeletonText width="150px" />
			</HStack>
		</>
	);
};

export default GerneItemSkeleton;

import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GerneItemSkeleton = () => {
	return (
		<>
			<HStack>
				<Skeleton boxSize="32px" borderRadius={8} />
				<SkeletonText width="150px" />
			</HStack>
		</>
	);
};

export default GerneItemSkeleton;

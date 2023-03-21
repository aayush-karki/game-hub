import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({
	onSelectedPlatform,
	selectedPlatform,
}: PlatformSelectorProps) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<Box>
			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<BsChevronDown />}
					margin={1}
				>
					{selectedPlatform?.name || "Platforms"}
				</MenuButton>
				<MenuList>
					{data.map((platform) => (
						<MenuItem
							onClick={() => onSelectedPlatform(platform)}
							key={platform.id}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};

export default PlatformSelector;

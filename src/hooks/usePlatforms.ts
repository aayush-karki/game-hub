import platforms from "../data/platforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => ({
	data: platforms as Platform[],
	isLoading: false,
	error: null,
});

export default usePlatforms;

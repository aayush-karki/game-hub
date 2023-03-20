import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data } = useGenres();

	return (
		<ul>
			{data.map((gerne) => (
				<li key={gerne.id}>{gerne.name}</li>
			))}
		</ul>
	);
};

export default GenreList;

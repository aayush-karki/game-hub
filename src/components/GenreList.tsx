import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { genres } = useGenres();
	return (
		<ul>
			{genres.map((gerne) => (
				<li key={gerne.id}>{gerne.name}</li>
			))}
		</ul>
	);
};

export default GenreList;

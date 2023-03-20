import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
			.then((res) => {
				setLoading(false);
				setData(res.data.results);
			})
			.catch((err) => {
				setLoading(false);
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { data, error, isLoading };
};

export default useData;

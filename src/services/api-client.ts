import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "39c82f9aadda480b9c2e93282804194b",
	},
});

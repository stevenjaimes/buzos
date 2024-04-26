import { Category } from "@/types";

const URL ="http://localhost:3001/api/60e0e54d-de04-4732-970d-7c146900846e/categories"

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(URL);

	return res.json();
}

export default getCategories; 
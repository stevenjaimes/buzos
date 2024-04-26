import { Category } from "@/types";

const URL ="https://shopangel.cloud/admin/api/c6b0df6c-ecf2-46b6-9eb0-51fe962c7c75/categories"

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(URL);

	return res.json();
}

export default getCategories; 
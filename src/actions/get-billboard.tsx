import { Billboard } from "@/types";

const URL = "http://localhost:3001/api/60e0e54d-de04-4732-970d-7c146900846e/billboards"

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getBillboard; 
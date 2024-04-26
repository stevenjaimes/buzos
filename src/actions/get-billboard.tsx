import { Billboard } from "@/types";

const URL = "https://shopangel.cloud/admin/api/c6b0df6c-ecf2-46b6-9eb0-51fe962c7c75/billboards"

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getBillboard; 
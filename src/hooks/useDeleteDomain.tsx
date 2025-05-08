import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import { mutate } from "swr";

const useDeleteDomain = () => {
    const deleteDomain = async (domainID: string) => {
        const response = await fetcher({
            url: `${API_URL}/domain/${domainID}`,
            method: "DELETE",
        });

        await mutate([`${API_URL}/domain`]);

        return response;
    };

    return {
        deleteDomain,
    };
};

export default useDeleteDomain;

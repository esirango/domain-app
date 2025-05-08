import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import { mutate } from "swr";

const useUpdateDomain = () => {
    const updateDomain = async (postData: any, domainID: string) => {
        const response = await fetcher({
            url: `${API_URL}/domain/${domainID}`,
            body: {
                domain: postData.domain,
                status: postData.status,
                isActive: postData.isActive,
            },
            method: "PUT",
        });
        await mutate([`${API_URL}/domain`]);

        return response;
    };

    return {
        updateDomain,
    };
};

export default useUpdateDomain;

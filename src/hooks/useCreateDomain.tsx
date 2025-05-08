import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import { mutate } from "swr";

const useCreateDomain = () => {
    const createDomain = async (postData: any) => {
        const response = await fetcher({
            url: `${API_URL}/domain`,
            body: {
                createdDate: 1737992850,
                domain: postData.domain,
                status: postData.status,
                isActive: postData.isActive,
            },
            method: "POST",
        });
        await mutate([`${API_URL}/domain`]);

        return response;
    };

    return {
        createDomain,
    };
};

export default useCreateDomain;

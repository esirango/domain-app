import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import useSWR from "swr";

const useUpdateDomain = (domainID: string) => {
    const { data, error, isLoading, mutate } = useSWR(null, null);

    const updateDomain = async (postData: any) => {
        const response = await fetcher({
            url: `${API_URL}/domain/${domainID}`,
            body: {
                domain: postData.domain,
                status: postData.status,
                isActive: postData.isActive,
            },
            method: "PUT",
        });
        mutate();
        return response;
    };

    return {
        updateDomain,
        updateDomainData: data,
        updateDomainError: error,
        updateDomainLoading: isLoading,
    };
};

export default useUpdateDomain;

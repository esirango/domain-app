import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import useSWR from "swr";

const useCreateDomain = () => {
    const { data, error, isLoading, mutate } = useSWR(null, null);

    const createDomain = async () => {
        const response = await fetcher({
            url: `${API_URL}/domain`,
            body: {
                createdDate: 1737992850,
                domain: "new domain",
                status: "new status",
                isActive: true,
            },
            method: "POST",
        });
        mutate();
        return response;
    };

    return {
        createDomain,
        createDomainData: data,
        createDomainError: error,
        createDomainLoading: isLoading,
    };
};

export default useCreateDomain;

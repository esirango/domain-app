import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import useSWR from "swr";

const useGetDeleteDomain = (domainID: string) => {
    const { data, error, isLoading } = useSWR(
        [`${API_URL}/domain/${domainID}`],
        ([url]) =>
            fetcher({
                url: url,
                method: "DELETE",
            })
    );

    return {
        deleteDomainData: data,
        deleteDomainError: error,
        deleteDomainLoading: isLoading,
    };
};

export default useGetDeleteDomain;

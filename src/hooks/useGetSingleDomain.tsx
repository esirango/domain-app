import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import useSWR from "swr";

const useGetSingleDomain = (domainID: string) => {
    const { data, error, isLoading } = useSWR(
        [`${API_URL}/domain/${domainID}`],
        ([url]) =>
            fetcher({
                url: url,
                method: "GET",
            })
    );

    return {
        singleDomainData: data,
        singleDomainError: error,
        singleDomainLoading: isLoading,
    };
};

export default useGetSingleDomain;

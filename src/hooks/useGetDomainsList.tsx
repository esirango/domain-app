import { fetcher } from "@/func/fetchers";
import { API_URL } from "@/store/environmentVariables";
import useSWR from "swr";

const useGetDomainsList = () => {
    const { data, error, isLoading, mutate } = useSWR(
        [`${API_URL}/domain`],
        ([url]) =>
            fetcher({
                url: url,
                method: "GET",
            })
    );

    return {
        domainsListData: data,
        domainsListError: error,
        domainsListLoading: isLoading,
        domainsListMutate: mutate,
    };
};

export default useGetDomainsList;

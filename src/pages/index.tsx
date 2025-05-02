import Actions from "@/components/domainSection/Actions";
import Table from "@/components/domainSection/Table";
import Header from "@/components/layout/Header";
import useGetDomainsList from "@/hooks/useGetDomainsList";

export default function Home() {
    const { domainsListData, domainsListLoading } = useGetDomainsList();
    return (
        <div className="my-2.5 mx-4">
            <Header />
            <Actions />
            <Table
                domainsList={domainsListData}
                domainsListLoading={domainsListLoading}
            />
        </div>
    );
}

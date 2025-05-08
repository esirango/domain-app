import Actions from "@/components/domainSection/Actions";
import Table from "@/components/domainSection/Table";
import Header from "@/components/layout/Header";
import Drawer from "@/components/modals/Drawer";
import useGetDomainsList from "@/hooks/useGetDomainsList";
import { useState } from "react";

export default function Home() {
    const { domainsListData, domainsListLoading } = useGetDomainsList();

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [drawerType, setDrawerType] = useState<string>("Add");

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    // for filters
    const [search, setSearch] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [filterActivation, setFilterActivation] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");

    const filteredDomainListData = () => {
        if (domainsListLoading || domainsListData?.length < 0) return;

        let filteredData = domainsListData;

        if (search) {
            filteredData = filteredData.filter((domain: any) =>
                domain.domain.includes(search)
            );
        }

        if (sortOrder) {
            filteredData = filteredData?.sort((a: any, b: any) => {
                const aDomain = a.domain.replace(/^https?:\/\//, "");
                const bDomain = b.domain.replace(/^https?:\/\//, "");

                const comparison = aDomain.localeCompare(bDomain);

                return sortOrder === "asc" ? comparison : -comparison;
            });
        }

        if (filterActivation && filterActivation !== "all") {
            filteredData = filteredData.filter(
                (domain: any) =>
                    String(domain.isActive) === String(filterActivation)
            );
        }

        if (filterStatus && filterStatus !== "all") {
            filteredData = filteredData.filter(
                (domain: any) => String(domain.status) === String(filterStatus)
            );
        }

        return filteredData;
    };
    return (
        <div className="my-2.5 mx-4">
            <Header />
            <Actions
                toggleDrawer={toggleDrawer}
                setDrawerType={setDrawerType}
                search={search}
                setSearch={setSearch}
                setSortOrder={setSortOrder}
                setFilterActivation={setFilterActivation}
                setFilterStatus={setFilterStatus}
                sortOrder={sortOrder}
                filterActivation={filterActivation}
                filterStatus={filterStatus}
            />
            <Table
                toggleDrawer={toggleDrawer}
                domainsList={filteredDomainListData()}
                domainsListLoading={domainsListLoading}
                setDrawerType={setDrawerType}
            />
            <Drawer
                type={drawerType}
                isOpen={isOpenDrawer}
                onClose={toggleDrawer}
            />
        </div>
    );
}

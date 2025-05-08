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

    return (
        <div className="my-2.5 mx-4">
            <Header />
            <Actions
                isOpenDrawer={isOpenDrawer}
                setIsOpenDrawer={setIsOpenDrawer}
                toggleDrawer={toggleDrawer}
                drawerType={drawerType}
                setDrawerType={setDrawerType}
            />
            <Table
                isOpenDrawer={isOpenDrawer}
                setIsOpenDrawer={setIsOpenDrawer}
                toggleDrawer={toggleDrawer}
                domainsList={domainsListData}
                domainsListLoading={domainsListLoading}
                drawerType={drawerType}
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

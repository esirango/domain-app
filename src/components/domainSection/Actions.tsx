import React from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import useGlobalStates from "@/store/globalStates";

function Actions({
    setDrawerType,
    toggleDrawer,
    search,
    setSearch,
    setSortOrder,
    setFilterActivation,
    setFilterStatus,
    sortOrder,
    filterActivation,
    filterStatus,
}: any) {
    const { setSingleGlobalDomainData } = useGlobalStates();

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-8 mx-12 ">
                <div className="w-full md:w-auto flex justify-center">
                    <button
                        onClick={() => {
                            setSingleGlobalDomainData(null);
                            setDrawerType("Add");
                            setTimeout(() => {
                                toggleDrawer();
                            }, 100);
                        }}
                        className="cursor-pointer h-12 lg:w-full md:w-full flex justify-center items-center text-white bg-blue-400 rounded-sm px-6 py-3 font-light w-2/3"
                    >
                        <BiPlus className="mr-3" />
                        Add Domain
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:max-w-2/3 justify-end ">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3  w-2/3 md:w-auto text-gray-500"
                    >
                        <option value="" disabled>
                            Sort By
                        </option>
                        <option value="asc">Order by Ascending</option>
                        <option value="desc">Order by Descending</option>
                    </select>
                    <select
                        value={filterActivation}
                        onChange={(e) => setFilterActivation(e.target.value)}
                        className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3 w-2/3 md:w-auto text-gray-500"
                    >
                        <option value="" disabled>
                            Filters for Activation
                        </option>
                        <option value="all">All</option>
                        <option value="true">Active</option>
                        <option value="false">Disable</option>
                    </select>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3 w-2/3 md:w-auto text-gray-500"
                    >
                        <option value="" disabled>
                            Filters for Status
                        </option>
                        <option value="all">All</option>
                        <option value="verified">Verified</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <div className="relative w-2/3 md:w-auto">
                        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2  " />
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3 pl-10 w-full"
                                type="search"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Actions;

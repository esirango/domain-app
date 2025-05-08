import React from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import Drawer from "../modals/Drawer";

function Actions({
    drawerType,
    setDrawerType,
    toggleDrawer,
    isOpenDrawer,
    setIsOpenDrawer,
}: any) {
    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-8 mx-12 ">
                <div className="w-full md:w-auto flex justify-center">
                    <button
                        onClick={() => {
                            toggleDrawer();
                            setDrawerType("Add");
                        }}
                        className="cursor-pointer h-12 lg:w-full md:w-full flex justify-center items-center text-white bg-blue-400 rounded-sm px-6 py-3 font-light w-2/3"
                    >
                        <BiPlus className="mr-3" />
                        Add Domain
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:max-w-2/3 justify-end ">
                    <select className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3 w-2/3 md:w-auto text-gray-500">
                        <option value="ascending">Order by Ascending</option>
                        <option value="descending">Order by Descending</option>
                    </select>
                    <div className="relative w-2/3 md:w-auto">
                        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2  " />
                        <input
                            className="h-12 outline-none border-1 border-gray-400 rounded-sm p-3 pl-10 w-full"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Actions;

import useCreateDomain from "@/hooks/useCreateDomain";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";

const Drawer = ({ isOpen, onClose }: any) => {
    const {
        createDomain,
        createDomainData,
        createDomainError,
        createDomainLoading,
    } = useCreateDomain();

    return (
        <div
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity overflow-hidden ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`fixed right-0 top-0 lg:w-1/2 w-full h-full bg-white shadow-lg transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4 ">
                    <h1 className="text-3xl" onClick={createDomain}>
                        Add Domain
                    </h1>
                    <button onClick={onClose}>
                        <BiX className="text-2xl" />
                    </button>
                </div>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="ورودی اول"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <input
                        type="text"
                        placeholder="ورودی دوم"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <input
                        type="text"
                        placeholder="ورودی سوم"
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <div className="flex gap-2 ">
                        <button className="w-1/2  p-2 rounded border-1 border-gray-300">
                            cancel
                        </button>
                        <button className="w-1/2 bg-blue-400 text-white p-2 rounded">
                            add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;

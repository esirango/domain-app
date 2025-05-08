import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { useForm } from "react-hook-form";
import useCreateDomain from "@/hooks/useCreateDomain";
import useUpdateDomain from "@/hooks/useUpdateDomain";
import useGlobalStates from "@/store/globalStates";

const urlRegex = /^https:\/\/(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\S*)?$/;

const Drawer = ({ type, isOpen, onClose }: any) => {
    const { singleGlobalDomainData } = useGlobalStates();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            domain: "",
            status: "",
            isActive: "",
        },
    });

    useEffect(() => {
        if (type === "Add") {
            reset({
                domain: "",
                status: "",
                isActive: "",
            });
        } else if (type === "Edit" && singleGlobalDomainData) {
            reset({
                domain: singleGlobalDomainData.domain,
                status: singleGlobalDomainData.status,
                isActive: String(singleGlobalDomainData.isActive),
            });
        }
    }, [type, singleGlobalDomainData, reset]);

    const { createDomain } = useCreateDomain();

    const { updateDomain } = useUpdateDomain();

    const onSubmit = (data: any) => {
        if (type === "Add") {
            createDomain(data);
        } else if (type === "Edit") {
            updateDomain(
                data,
                type === "Edit" ? singleGlobalDomainData.id : "1"
            );
        }
        reset();
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 z-60 bg-black/30 backdrop-blur-sm transition-opacity overflow-hidden ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`fixed right-0 z-70 top-0 lg:w-1/2 w-full h-full bg-white shadow-lg transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-3xl">{type} Domain</h1>
                        <button onClick={onClose} type="button">
                            <BiX className="text-2xl" />
                        </button>
                    </div>
                    <div className="p-4 flex-1 overflow-auto">
                        <input
                            type="text"
                            placeholder="Ex: https://www.esirango.com"
                            {...register("domain", {
                                required: "URL is required",
                                pattern: {
                                    value: urlRegex,
                                    message: "Invalid URL",
                                },
                            })}
                            className={`w-full p-2 border rounded mb-1 bg-white transition-all outline-none ${
                                errors.domain
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300"
                            }`}
                        />
                        <p className="text-red-500 text-xs h-5">
                            {errors.domain?.message as string}
                        </p>

                        <select
                            {...register("status", {
                                required: "Select a status",
                            })}
                            className="w-full p-2 border border-gray-300 rounded mb-2 outline-none text-gray-700"
                        >
                            <option value="" disabled>
                                Status
                            </option>
                            <option value="verified">Verified</option>
                            <option value="rejected">Rejected</option>
                            <option value="pending">Pending</option>
                        </select>
                        <p className="text-red-500 text-xs h-5">
                            {errors.status?.message as string}
                        </p>

                        <div className="flex gap-6 mt-2 mb-2">
                            <label className="flex items-center gap-2 text-gray-700">
                                <input
                                    type="radio"
                                    value="true"
                                    {...register("isActive", {
                                        required: "Select status",
                                    })}
                                />
                                Active
                            </label>
                            <label className="flex items-center gap-2 text-gray-700">
                                <input
                                    type="radio"
                                    value="false"
                                    {...register("isActive", {
                                        required: "Select status",
                                    })}
                                />
                                Disable
                            </label>
                        </div>
                        <p className="text-red-500 text-xs h-5">
                            {errors.isActive?.message as string}
                        </p>
                    </div>

                    <div className="flex gap-2 p-4 ">
                        <button
                            onClick={() => {
                                onClose();
                                reset();
                            }}
                            type="button"
                            className="w-1/2 p-2 rounded border border-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-blue-400 text-white p-2 rounded disabled:opacity-50"
                        >
                            {type}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Drawer;

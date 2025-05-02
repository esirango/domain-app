import {
    checkActiveColor,
    checkActiveTitle,
    checkVerificationStatusColor,
    checkVerificationStatusTitle,
} from "@/func/domainChecks";
import Link from "next/link";
import React from "react";
import {
    BiDetail,
    BiErrorCircle,
    BiLinkExternal,
    BiLoader,
} from "react-icons/bi";
import {
    BsCircleFill,
    BsOption,
    BsThreeDots,
    BsThreeDotsVertical,
} from "react-icons/bs";

const TableCell = ({ children, className }: any) => {
    return (
        <td className={`border-t border-gray-300 p-2 ${className}`}>
            {children}
        </td>
    );
};

function Table({ domainsList, domainsListLoading }: any) {
    console.log(domainsList);
    return (
        <div className="flex justify-center w-full my-20 overflow-x-auto">
            {domainsListLoading ? (
                <BiLoader className="text-6xl mt-24" />
            ) : (
                <table className="w-full rounded-lg mx-12">
                    <thead className="text-left ">
                        <tr>
                            <th className="text-gray-500 p-2 text-md font-extralight">
                                Domain URL
                            </th>
                            <th className="text-gray-500 p-2 text-md font-extralight">
                                Active Status
                            </th>
                            <th className="text-gray-500 p-2 text-md font-extralight">
                                Verification Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {domainsList.map((domain: any) => (
                            <tr
                                key={domain.id}
                                className="hover:bg-gray-100 font-normal "
                            >
                                <TableCell>
                                    <Link
                                        className="flex items-center gap-3"
                                        href={domain.domain}
                                    >
                                        {domain.isActive ? (
                                            <BsCircleFill className="text-green-500" />
                                        ) : (
                                            <BiErrorCircle className="text-red-500" />
                                        )}
                                        {domain.domain}{" "}
                                        <BiLinkExternal className="text-gray-500" />
                                    </Link>
                                </TableCell>
                                <TableCell
                                    className={checkActiveColor(
                                        domain.isActive
                                    )}
                                >
                                    {checkActiveTitle(domain.isActive)}
                                </TableCell>
                                <TableCell
                                    className={checkVerificationStatusColor(
                                        domain.status
                                    )}
                                >
                                    {checkVerificationStatusTitle(
                                        domain.status
                                    )}
                                </TableCell>
                                <TableCell className="text-gray-500">
                                    <BsThreeDotsVertical />
                                </TableCell>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Table;

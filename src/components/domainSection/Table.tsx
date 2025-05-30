import React, { useState } from "react";
import { BiErrorCircle, BiLinkExternal, BiLoader } from "react-icons/bi";
import { BsCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import {
    checkActiveColor,
    checkActiveTitle,
    checkVerificationStatusColor,
    checkVerificationStatusTitle,
} from "@/func/domainChecks";
import OptionsMenu from "./OptionMenu";
import TableCell from "./TableCell";

function Table({
    domainsList,
    domainsListLoading,
    toggleDrawer,
    setDrawerType,
}: any) {
    const [domainID, setDomainID] = useState<number | null>(null);
    const [menuPosition, setMenuPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);

    const handleMenuClick = (event: React.MouseEvent, domainId: number) => {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        setMenuPosition({ x: rect.right, y: rect.bottom });
        setDomainID(domainId);
    };

    return (
        <div className="flex justify-center w-full my-20 overflow-x-auto ">
            {domainsListLoading ? (
                <BiLoader className="text-6xl mt-24" />
            ) : domainsList?.length > 0 ? (
                <table className="w-full rounded-lg mx-12 relative">
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {domainsList.map((domain: any) => (
                            <tr
                                key={domain.id}
                                className="hover:bg-gray-100 font-normal relative"
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
                                        {domain.domain}
                                        <BiLinkExternal className="text-gray-500" />
                                    </Link>
                                </TableCell>
                                <TableCell
                                    className={checkActiveColor(
                                        String(domain.isActive)
                                    )}
                                >
                                    {checkActiveTitle(String(domain.isActive))}
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
                                <TableCell className="text-gray-500 relative">
                                    <button
                                        onClick={(e) =>
                                            handleMenuClick(e, domain.id)
                                        }
                                    >
                                        <BsThreeDotsVertical />
                                    </button>

                                    {domainID !== null && menuPosition && (
                                        <div
                                            className="fixed bg-white shadow-md border border-gray-200 rounded-lg z-[1000]"
                                            style={{
                                                top: menuPosition.y,
                                                left: menuPosition.x,
                                            }}
                                        >
                                            <OptionsMenu
                                                setDrawerType={setDrawerType}
                                                toggleDrawer={toggleDrawer}
                                                onClose={() =>
                                                    setDomainID(null)
                                                }
                                                domainID={domainID}
                                            />
                                        </div>
                                    )}
                                </TableCell>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="flex flex-col items-center justify-center w-full mt-20 text-gray-500">
                    <BiErrorCircle className="text-6xl mb-4 text-gray-400" />
                    <h4 className="text-lg font-medium">
                        There's no Domain to Show
                    </h4>
                </div>
            )}
        </div>
    );
}

export default Table;

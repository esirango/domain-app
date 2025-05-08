import React, { useRef, useState, useEffect } from "react";
import {
    BiDetail,
    BiErrorCircle,
    BiLinkExternal,
    BiLoader,
} from "react-icons/bi";
import { BsCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import {
    checkActiveColor,
    checkActiveTitle,
    checkVerificationStatusColor,
    checkVerificationStatusTitle,
} from "@/func/domainChecks";

const TableCell = ({ children, className }: any) => {
    return (
        <td className={`border-t border-gray-300 p-2 ${className}`}>
            {children}
        </td>
    );
};

const OptionsMenu = ({ onClose }: { onClose: () => void }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={menuRef}
            className="w-[150px] absolute right-4 mt-2 p-3 h-fit bg-white shadow-md border border-gray-200 rounded-lg z-100"
        >
            <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    مشاهده
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ویرایش
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    حذف
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    کپی
                </li>
            </ul>
        </div>
    );
};

function Table({ domainsList, domainsListLoading }: any) {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [menuPosition, setMenuPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);

    const handleMenuClick = (event: React.MouseEvent, domainId: number) => {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        setMenuPosition({ x: rect.right, y: rect.bottom });
        setOpenMenuId(domainId);
    };

    return (
        <div className="flex justify-center w-full my-20 overflow-x-auto ">
            {domainsListLoading ? (
                <BiLoader className="text-6xl mt-24" />
            ) : (
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
                                <TableCell className="text-gray-500 relative">
                                    <button
                                        onClick={(e) =>
                                            handleMenuClick(e, domain.id)
                                        }
                                    >
                                        <BsThreeDotsVertical />
                                    </button>

                                    {openMenuId !== null && menuPosition && (
                                        <div
                                            className="fixed bg-white shadow-md border border-gray-200 rounded-lg z-[1000]"
                                            style={{
                                                top: menuPosition.y,
                                                left: menuPosition.x,
                                            }}
                                        >
                                            <OptionsMenu
                                                onClose={() =>
                                                    setOpenMenuId(null)
                                                }
                                            />
                                        </div>
                                    )}
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

import { checkVerificationStatusTitle } from "@/func/domainChecks";
import useGetSingleDomain from "@/hooks/useGetSingleDomain";
import useUpdateDomain from "@/hooks/useUpdateDomain";
import { useEffect, useRef } from "react";

const OptionsMenu = ({
    onClose,
    domainID,
    toggleDrawer,
    setDrawerType,
}: {
    onClose: () => void;
    domainID: string;
    toggleDrawer: () => void;
    setDrawerType: any;
}) => {
    console.log(toggleDrawer);

    const { singleDomainData } = useGetSingleDomain(domainID);
    const { updateDomainData } = useUpdateDomain();

    console.log(singleDomainData);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setTimeout(() => {
                    onClose();
                }, 200);
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
                <li
                    onClick={() => {
                        toggleDrawer();
                        setDrawerType("Edit");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    Edit
                </li>
                <li className="px-4 text-red-500 py-2 hover:bg-gray-100 cursor-pointer">
                    Delete
                </li>
            </ul>
        </div>
    );
};

export default OptionsMenu;

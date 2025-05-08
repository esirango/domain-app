const TableCell = ({ children, className }: any) => {
    return (
        <td className={`border-t border-gray-300 p-2 ${className}`}>
            {children}
        </td>
    );
};

export default TableCell;

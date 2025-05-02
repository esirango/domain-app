const checkActiveTitle = (isActive: boolean) => {
    if (isActive) {
        return "Active";
    } else {
        return "Not Active";
    }
};

const checkActiveColor = (isActive: boolean) => {
    if (isActive) {
        return "text-green-500";
    } else {
        return "text-red-500";
    }
};

const checkVerificationStatusColor = (status: string) => {
    switch (status) {
        case "verified":
            return "text-green-500";
        case "rejected":
            return "text-red-500";
        default:
            return "text-gray-500";
    }
};

const checkVerificationStatusTitle = (status: string) => {
    switch (status) {
        case "verified":
            return "Verified";
        case "rejected":
            return "Not Verified";
        case "pending":
            return "Pending";
        default:
            return status;
    }
};

export {
    checkActiveTitle,
    checkActiveColor,
    checkVerificationStatusColor,
    checkVerificationStatusTitle,
};

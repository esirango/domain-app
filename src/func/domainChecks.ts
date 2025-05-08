const checkActiveTitle = (isActive: string) => {
    if (isActive === "true") {
        return "Active";
    } else {
        return "Disable";
    }
};

const checkActiveColor = (isActive: string) => {
    if (isActive === "true") {
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

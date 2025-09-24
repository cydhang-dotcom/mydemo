export type payslipData = {
    date: string;
    employeeName: string;
    jobTitle: string;
    department: string;
    payingEntity: string;
    actualPayout: string;
    grossPay: {
        title: string;
        amount: string;
        items: {
            label: string;
            value: string;
        }[];
    };
    deductions: {
        title: string;
        amount: string;
        items: {
            label: string;
            value: string;
            hasInfo?: boolean;
        }[];
    };
};

export type taxDataItem = {
    label: string;
    value: string;
    hasDetails?: boolean;
};

export type taxData = {
    incomeMonth: string;
    taxAmount: string;
    incomeType: {
        tag: string;
        description: string;
        amount: string;
    };
    currentPeriod: {
        title: string;
        items: taxDataItem[];
    };
    cumulative: {
        title: string;
        items: taxDataItem[];
    };
    taxCalculation: {
        title: string;
        items: taxDataItem[];
    };
};

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

export type Contract = {
    id: string;
    type: string;
    title: string;
    status: '已签署' | '已到期' | '待签署';
    name: string;
    tags: string[];
    periodStart: string;
    periodEnd: string | null;
    signingDate: string;
};

export type Document = {
  id: string;
  company: string;
  title: string;
  date: string;
};

export type Coupon = {
  id: string;
  title: string;
  description: string;
  validityStart: string;
  validityEnd: string;
  value: number;
  tags: string[];
  status: 'active' | 'used';
};
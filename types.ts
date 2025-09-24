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

export type EmployeeInfoSection = {
    id: string;
    label: string;
    status: '已完善' | '未完善';
    actionType: 'navigate' | 'modal';
    target: string;
};

export type ContactInfo = {
    mobile: string;
    email: string;
    address: string;
};

export type PersonalInfo = {
    nativePlace: string;
    isVeteran: string;
    maritalStatus: string;
    hasChildren: string;
    householdType: string;
    householdAddress: string;
    hasResidencePermit: string;
    residencePermitNumber: string;
    bloodType: string;
    firstWorkDate: string;
};

export type WorkExperience = {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
};

export type ShareRecord = {
  id: string;
  name: string;
  date: string;
  status: string;
};

export type ServiceStatus = '未处理' | '处理中' | '完成';

export type ServiceTimelineEvent = {
    id: string;
    title: string;
    status: string;
    timestamp: string;
    details?: { [key: string]: string };
    description?: string[];
};

export type Service = {
    id: string;
    type: string;
    target: string;
    status: ServiceStatus;
    timeline: ServiceTimelineEvent[];
};

export type Colleague = {
  id: string;
  name: string;
  avatar: string;
  department: string;
  title: string;
  phone: string;
  initial: string;
};

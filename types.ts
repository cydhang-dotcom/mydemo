export interface Contract {
    id: string;
    type: string;
    title: string;
    status: '已签署' | '已到期';
    name: string;
    tags: string[];
    periodStart: string;
    periodEnd: string | null;
    signingDate: string;
}

export interface PayslipDataItem {
    label: string;
    value: string;
    hasInfo?: boolean;
}

export interface PayslipSection {
    title: string;
    amount: string;
    items: PayslipDataItem[];
}

export interface payslipData {
    date: string;
    employeeName: string;
    jobTitle: string;
    department: string;
    payingEntity: string;
    actualPayout: string;
    grossPay: PayslipSection;
    deductions: PayslipSection;
}

export interface TaxDataItem {
    label: string;
    value: string;
    hasDetails?: boolean;
}

export interface TaxSection {
    title: string;
    items: TaxDataItem[];
}

export interface taxData {
    incomeMonth: string;
    taxAmount: string;
    incomeType: {
        tag: string;
        description: string;
        amount: string;
    };
    currentPeriod: TaxSection;
    cumulative: TaxSection;
    taxCalculation: TaxSection;
}

export interface Document {
    id: string;
    company: string;
    title: string;
    date: string;
}

export interface Coupon {
    id: string;
    title: string;
    description: string;
    validityStart: string;
    validityEnd: string;
    value: number;
    tags: string[];
    status: 'active' | 'used';
}

export interface EmployeeInfoSection {
    id: string;
    label: string;
    status: '已完善' | '未完善';
    actionType: 'navigate' | 'modal';
    target: string;
}

export interface ContactInfo {
    mobile: string;
    email: string;
    address: string;
}

export interface PersonalInfo {
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
}

export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
}

export interface ShareRecord {
    id: string;
    name: string;
    date: string;
    status: string;
}

export type ServiceStatus = '未处理' | '处理中' | '完成';

export interface ServiceTimelineEvent {
    id: string;
    title: string;
    status: string;
    timestamp: string;
    description: string[];
}

export interface Service {
    id: string;
    type: string;
    target: string;
    status: ServiceStatus;
    timeline: ServiceTimelineEvent[];
}

export interface Colleague {
    id: string;
    name: string;
    avatarText: string;
    position: string;
    departmentId: string;
    departmentName: string;
    phone: string;
    email: string;
    specialty?: string;
    companyId?: string;
    serviceGroup?: string;
}

export interface Department {
    id: string;
    name: string;
    memberCount: number;
    parentId: string | null;
    companyId: string;
}

export interface Company {
    id: string;
    name: string;
}

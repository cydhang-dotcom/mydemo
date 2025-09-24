import { EmployeeInfoSection, ContactInfo, PersonalInfo, WorkExperience } from '../types';

export const employeeInfoSections: EmployeeInfoSection[] = [
    { id: '1', label: '个人信息', status: '已完善', actionType: 'navigate', target: 'personal-info' },
    { id: '2', label: '身份证', status: '已完善', actionType: 'navigate', target: '#' },
    { id: '3', label: '银行卡', status: '已完善', actionType: 'navigate', target: '#' },
    { id: '4', label: '联系方式', status: '已完善', actionType: 'modal', target: 'contact-info-modal' },
    { id: '5', label: '紧急联系人', status: '已完善', actionType: 'navigate', target: '#' },
    { id: '6', label: '教育经历', status: '已完善', actionType: 'navigate', target: '#' },
    { id: '7', label: '工作经历', status: '已完善', actionType: 'navigate', target: 'work-history' },
    { id: '8', label: '培训经历', status: '已完善', actionType: 'navigate', target: '#' },
    { id: '9', label: '档案信息', status: '未完善', actionType: 'navigate', target: '#' },
];

export const contactInfo: ContactInfo = {
    mobile: '13916870521',
    email: 'hangzp@yowits.com',
    address: '上海市黄浦区南孔家弄17号',
};

export const personalInfoData: PersonalInfo = {
    nativePlace: '上海',
    isVeteran: '请写入',
    maritalStatus: '已婚',
    hasChildren: '否',
    householdType: '上海城镇',
    householdAddress: '妙哉妙哉这款裤子裤子裤子',
    hasResidencePermit: '是',
    residencePermitNumber: '请写入',
    bloodType: '请写入',
    firstWorkDate: '2003-09-19',
};

export const workExperienceData: WorkExperience[] = [
    {
        id: '1',
        company: '上海惠青计算机',
        position: '软件工程师',
        startDate: '2003-07',
        endDate: '2009-07',
    },
    {
        id: '2',
        company: '启明软件',
        position: '技术总监',
        startDate: '2009-08',
        endDate: '2016-03',
    }
];
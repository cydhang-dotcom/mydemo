import { payslipData as payslipDataType } from '../types';

export const payslipDataByMonth: { [key: string]: payslipDataType } = {
    '2023-07': {
        date: '2023-07',
        employeeName: '张三',
        jobTitle: '软件工程师',
        department: '技术部',
        payingEntity: '上海云才网络技术有限公司',
        actualPayout: '25,000.00',
        grossPay: {
            title: '应发',
            amount: '30,000.00',
            items: [
                { label: '基本工资', value: '20,000.00' },
                { label: '绩效奖金', value: '8,000.00' },
                { label: '餐补', value: '1,000.00' },
                { label: '通讯补贴', value: '1,000.00' },
            ],
        },
        deductions: {
            title: '扣除',
            amount: '5,000.00',
            items: [
                { label: '个人所得税', value: '1,500.00', hasInfo: true },
                { label: '养老保险', value: '1,600.00' },
                { label: '医疗保险', value: '400.00' },
                { label: '失业保险', value: '100.00' },
                { label: '住房公积金', value: '1,400.00' },
            ],
        },
    },
    '2023-06': {
        date: '2023-06',
        employeeName: '张三',
        jobTitle: '软件工程师',
        department: '技术部',
        payingEntity: '上海云才网络技术有限公司',
        actualPayout: '24,500.00',
        grossPay: {
            title: '应发',
            amount: '29,500.00',
            items: [
                { label: '基本工资', value: '20,000.00' },
                { label: '绩效奖金', value: '7,500.00' },
                { label: '餐补', value: '1,000.00' },
                { label: '通讯补贴', value: '1,000.00' },
            ],
        },
        deductions: {
            title: '扣除',
            amount: '5,000.00',
            items: [
                { label: '个人所得税', value: '1,500.00', hasInfo: true },
                { label: '养老保险', value: '1,600.00' },
                { label: '医疗保险', value: '400.00' },
                { label: '失业保险', value: '100.00' },
                { label: '住房公积金', value: '1,400.00' },
            ],
        },
    },
    '2022-12': {
        date: '2022-12',
        employeeName: '张三',
        jobTitle: '软件工程师',
        department: '技术部',
        payingEntity: '上海云才网络技术有限公司',
        actualPayout: '28,000.00',
        grossPay: {
            title: '应发',
            amount: '33,000.00',
            items: [
                { label: '基本工资', value: '20,000.00' },
                { label: '绩效奖金', value: '8,000.00' },
                { label: '年终奖', value: '3,000.00' },
                { label: '餐补', value: '1,000.00' },
                { label: '通讯补贴', value: '1,000.00' },
            ],
        },
        deductions: {
            title: '扣除',
            amount: '5,000.00',
            items: [
                { label: '个人所得税', value: '1,500.00', hasInfo: true },
                { label: '养老保险', value: '1,600.00' },
                { label: '医疗保险', value: '400.00' },
                { label: '失业保险', value: '100.00' },
                { label: '住房公积金', value: '1,400.00' },
            ],
        },
    }
};

export const availablePayslipMonths = Object.keys(payslipDataByMonth).sort((a, b) => b.localeCompare(a));

export const availablePayslipYearsData = Object.keys(payslipDataByMonth).reduce((acc: { [key: string]: string[] }, month) => {
    const year = month.substring(0, 4);
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(month);
    acc[year].sort((a, b) => b.localeCompare(a));
    return acc;
}, {});

export const availablePayslipYears = Object.keys(availablePayslipYearsData).sort((a, b) => b.localeCompare(a));

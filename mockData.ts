import { payslipData as payslipDataType, taxData as taxDataType, Contract as ContractType } from './types';

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


export const taxDataByMonth: { [key: string]: taxDataType } = {
    '2023-07': {
        incomeMonth: '2023-07',
        taxAmount: '150.25',
        incomeType: {
            tag: '综合所得',
            description: '正常工资薪金',
            amount: '20000.00',
        },
        currentPeriod: {
            title: '本月(次)情况',
            items: [
                { label: '收入额计算', value: '14630.00', hasDetails: true },
                { label: '减除费用', value: '5000.00', hasDetails: false },
                { label: '专项扣除', value: '4384.60', hasDetails: true },
                { label: '其他扣除', value: '805.56', hasDetails: true },
            ],
        },
        cumulative: {
            title: '累计情况',
            items: [
                { label: '累计收入额', value: '148070.76', hasDetails: false },
                { label: '累计减除费用', value: '35000.00', hasDetails: false },
                { label: '累计专项扣除', value: '32870.20', hasDetails: false },
                { label: '累计专项附加扣除', value: '21000.00', hasDetails: true },
                { label: '累积个人养老金', value: '0.00', hasDetails: false },
                { label: '累计其他扣除', value: '5638.92', hasDetails: false },
                { label: '准予扣除的捐赠额', value: '0.00', hasDetails: false },
            ],
        },
        taxCalculation: {
            title: '税款计算',
            items: [
                { label: '应纳税所得额', value: '53561.64', hasDetails: false },
                { label: '税率/预扣率', value: '10%', hasDetails: false },
                { label: '速算扣除数', value: '2520.00', hasDetails: false },
                { label: '应纳税额', value: '2836.16', hasDetails: false },
                { label: '减免税额', value: '0.00', hasDetails: false },
                { label: '已缴税额', value: '2685.91', hasDetails: false },
                { label: '应补/退税额', value: '150.25', hasDetails: false },
            ]
        }
    },
    '2023-06': {
        incomeMonth: '2023-06',
        taxAmount: '145.80',
        incomeType: {
            tag: '综合所得',
            description: '正常工资薪金',
            amount: '19500.00',
        },
        currentPeriod: {
            title: '本月(次)情况',
            items: [
                { label: '收入额计算', value: '14130.00', hasDetails: true },
                { label: '减除费用', value: '5000.00', hasDetails: false },
                { label: '专项扣除', value: '4384.60', hasDetails: true },
                { label: '其他扣除', value: '805.56', hasDetails: true },
            ],
        },
        cumulative: {
            title: '累计情况',
            items: [
                { label: '累计收入额', value: '133440.76', hasDetails: false },
                { label: '累计减除费用', value: '30000.00', hasDetails: false },
                { label: '累计专项扣除', value: '28485.60', hasDetails: false },
                { label: '累计专项附加扣除', value: '18000.00', hasDetails: true },
                { label: '累积个人养老金', value: '0.00', hasDetails: false },
                { label: '累计其他扣除', value: '4833.36', hasDetails: false },
                { label: '准予扣除的捐赠额', value: '0.00', hasDetails: false },
            ],
        },
        taxCalculation: {
            title: '税款计算',
            items: [
                { label: '应纳税所得额', value: '52121.80', hasDetails: false },
                { label: '税率/预扣率', value: '10%', hasDetails: false },
                { label: '速算扣除数', value: '2520.00', hasDetails: false },
                { label: '应纳税额', value: '2692.18', hasDetails: false },
                { label: '减免税额', value: '0.00', hasDetails: false },
                { label: '已缴税额', value: '2546.38', hasDetails: false },
                { label: '应补/退税额', value: '145.80', hasDetails: false },
            ]
        }
    },
    '2022-12': {
        incomeMonth: '2022-12',
        taxAmount: '320.00',
        incomeType: {
            tag: '综合所得',
            description: '正常工资薪金',
            amount: '28000.00',
        },
        currentPeriod: {
            title: '本月(次)情况',
            items: [
                { label: '收入额计算', value: '20000.00', hasDetails: true },
                { label: '减除费用', value: '5000.00', hasDetails: false },
                { label: '专项扣除', value: '4000.00', hasDetails: true },
                { label: '其他扣除', value: '1000.00', hasDetails: true },
            ],
        },
        cumulative: {
            title: '累计情况',
            items: [
                { label: '累计收入额', value: '280000.00', hasDetails: false },
                { label: '累计减除费用', value: '60000.00', hasDetails: false },
                { label: '累计专项扣除', value: '48000.00', hasDetails: false },
                { label: '累计专项附加扣除', value: '24000.00', hasDetails: true },
                { label: '累积个人养老金', value: '0.00', hasDetails: false },
                { label: '累计其他扣除', value: '12000.00', hasDetails: false },
                { label: '准予扣除的捐赠额', value: '0.00', hasDetails: false },
            ],
        },
        taxCalculation: {
            title: '税款计算',
            items: [
                { label: '应纳税所得额', value: '136000.00', hasDetails: false },
                { label: '税率/预扣率', value: '20%', hasDetails: false },
                { label: '速算扣除数', value: '16920.00', hasDetails: false },
                { label: '应纳税额', value: '10280.00', hasDetails: false },
                { label: '减免税额', value: '0.00', hasDetails: false },
                { label: '已缴税额', value: '9960.00', hasDetails: false },
                { label: '应补/退税额', value: '320.00', hasDetails: false },
            ]
        }
    },
};

export const availableTaxMonths = Object.keys(taxDataByMonth).sort((a, b) => b.localeCompare(a));

export const availableTaxYearsData = Object.keys(taxDataByMonth).reduce((acc: { [key: string]: string[] }, month) => {
    const year = month.substring(0, 4);
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(month);
    acc[year].sort((a, b) => b.localeCompare(a));
    return acc;
}, {});

export const availableTaxYears = Object.keys(availableTaxYearsData).sort((a, b) => b.localeCompare(a));


export const insuranceDataByMonth: { [key: string]: any } = {
    '2023-07': {
        period: '2023-07',
        contributions: {
            title: '缴费明细',
            details: [
                { type: '养老保险', company: '3,200.00', personal: '1,600.00' },
                { type: '医疗保险', company: '800.00', personal: '400.00' },
                { type: '失业保险', company: '200.00', personal: '100.00' },
                { type: '工伤保险', company: '50.00', personal: '0.00' },
                { type: '生育保险', company: '150.00', personal: '0.00' },
                { type: '住房公积金', company: '1,400.00', personal: '1,400.00' },
            ]
        }
    },
    '2023-06': {
        period: '2023-06',
        contributions: {
            title: '缴费明细',
            details: [
                { type: '养老保险', company: '3,200.00', personal: '1,600.00' },
                { type: '医疗保险', company: '800.00', personal: '400.00' },
                { type: '失业保险', company: '200.00', personal: '100.00' },
                { type: '工伤保险', company: '50.00', personal: '0.00' },
                { type: '生育保险', company: '150.00', personal: '0.00' },
                { type: '住房公积金', company: '1,200.00', personal: '1,200.00' },
            ]
        }
    },
    '2023-05': {
        period: '2023-05',
        contributions: {
            title: '缴费明细',
            details: [
                { type: '养老保险', company: '3,000.00', personal: '1,500.00' },
                { type: '医疗保险', company: '750.00', personal: '375.00' },
                { type: '失业保险', company: '180.00', personal: '90.00' },
                { type: '工伤保险', company: '45.00', personal: '0.00' },
                { type: '生育保险', company: '140.00', personal: '0.00' },
                { type: '住房公积金', company: '1,200.00', personal: '1,200.00' },
            ]
        }
    },
    '2022-12': {
        period: '2022-12',
        contributions: {
            title: '缴费明细',
            details: [
                { type: '养老保险', company: '2,800.00', personal: '1,400.00' },
                { type: '医疗保险', company: '700.00', personal: '350.00' },
                { type: '失业保险', company: '160.00', personal: '80.00' },
                { type: '工伤保险', company: '40.00', personal: '0.00' },
                { type: '生育保险', company: '130.00', personal: '0.00' },
                { type: '住房公积金', company: '1,100.00', personal: '1,100.00' },
            ]
        }
    }
};

export const availableMonths = Object.keys(insuranceDataByMonth).sort((a, b) => b.localeCompare(a));

export const availableYearsData = Object.keys(insuranceDataByMonth).reduce((acc: { [key: string]: string[] }, month) => {
    const year = month.substring(0, 4);
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(month);
    acc[year].sort((a, b) => b.localeCompare(a));
    return acc;
}, {});

export const availableYears = Object.keys(availableYearsData).sort((a, b) => b.localeCompare(a));

export const attendanceDataByMonth: { [key: string]: any } = {
    '2025-09': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 34,
                items: [
                    { date: '2025-09-01', description: '上下班未打卡' },
                    { date: '2025-09-02', description: '上下班未打卡' },
                    { date: '2025-09-03', description: '上下班未打卡' },
                    { date: '2025-09-04', description: '上下班未打卡' },
                    { date: '2025-09-05', description: '上下班未打卡' },
                    { date: '2025-09-08', description: '上下班未打卡' },
                    { date: '2025-09-09', description: '上下班未打卡' },
                    { date: '2025-09-10', description: '上下班未打卡' },
                ]
            }
        }
    },
    '2025-08': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 12,
                items: [
                    { date: '2025-08-11', description: '上下班未打卡' },
                    { date: '2025-08-15', description: '上班未打卡' },
                    { date: '2025-08-22', description: '下班未打卡' },
                ]
            }
        }
    },
    '2025-07': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 5,
                items: [
                    { date: '2025-07-04', description: '下班未打卡' },
                    { date: '2025-07-18', description: '上班未打卡' },
                ]
            }
        }
    }
};

export const availableAttendanceMonths = Object.keys(attendanceDataByMonth).sort((a, b) => b.localeCompare(a));

export const contractsData: ContractType[] = [
    {
        id: '1',
        type: '用工合同',
        title: '无固定期限合同签订',
        status: '已签署',
        name: '云才劳动合同',
        tags: ['无固定'],
        periodStart: '2022-03-03',
        periodEnd: null,
        signingDate: '2022-03-02',
    },
    {
        id: '2',
        type: '用工合同',
        title: '固定期限合同签订',
        status: '已到期',
        name: '云才劳动合同',
        tags: ['3年'],
        periodStart: '2019-03-03',
        periodEnd: '2022-03-02',
        signingDate: '2019-03-02',
    },
    {
        id: '3',
        type: '保密协议',
        title: '保密与竞业协议',
        status: '已签署',
        name: '云才保密协议',
        tags: ['通用'],
        periodStart: '2019-03-03',
        periodEnd: null,
        signingDate: '2019-03-02',
    }
];

export const contractTypes = [...new Set(contractsData.map(c => c.type))];
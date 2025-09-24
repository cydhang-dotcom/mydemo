import { taxData as taxDataType } from '../types';

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

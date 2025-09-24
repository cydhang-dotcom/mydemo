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

export const availableInsuranceMonths = Object.keys(insuranceDataByMonth).sort((a, b) => b.localeCompare(a));

export const availableInsuranceYearsData = Object.keys(insuranceDataByMonth).reduce((acc: { [key: string]: string[] }, month) => {
    const year = month.substring(0, 4);
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(month);
    acc[year].sort((a, b) => b.localeCompare(a));
    return acc;
}, {});

export const availableInsuranceYears = Object.keys(availableInsuranceYearsData).sort((a, b) => b.localeCompare(a));

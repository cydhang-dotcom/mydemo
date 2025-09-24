import React, { useState } from 'react';
import { payslipDataByMonth, availablePayslipMonths, availablePayslipYears, availablePayslipYearsData } from './mockData';
import { EyeIcon, EyeOffIcon, InfoIcon, CheckIcon, ChevronRightIcon } from './Icons';
import { Header } from './Header';

type ViewMode = 'details' | 'selection';

export const PayslipPage = ({ onBack }: { onBack: () => void }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('details');
    const [selectedMonth, setSelectedMonth] = useState(availablePayslipMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availablePayslipMonths[0].substring(0, 4));
    const [showSalary, setShowSalary] = useState(true);

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        setViewMode('details');
    };
    
    const handleBack = () => {
        if (viewMode === 'selection') {
            setViewMode('details');
        } else {
            onBack();
        }
    };

    const formatAmount = (amountStr: string | undefined) => {
        if (!showSalary || !amountStr) return '******';
        return amountStr;
    }

    if (viewMode === 'selection') {
         return (
            <div className="w-full bg-white min-h-screen flex flex-col">
                <Header title="选择月份" onBack={handleBack} />
                <main className="flex-grow flex">
                    <div className="w-1/3 bg-slate-100/70 border-r border-slate-200">
                        <ul>
                            {availablePayslipYears.map((year) => (
                                <li
                                    key={year}
                                    onClick={() => setActiveYearInSelector(year)}
                                    className={`p-4 text-center text-base cursor-pointer ${
                                        activeYearInSelector === year 
                                        ? 'bg-white font-semibold text-slate-900' 
                                        : 'text-slate-600 hover:bg-slate-200/50'
                                    }`}
                                    role="button"
                                    aria-selected={activeYearInSelector === year}
                                >
                                    {year}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-2/3">
                        <ul className="divide-y divide-slate-100">
                            {(availablePayslipYearsData[activeYearInSelector] || []).map((month) => (
                                <li 
                                    key={month} 
                                    onClick={() => handleMonthSelect(month)} 
                                    className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50"
                                    role="button"
                                    aria-label={`Select month ${month}`}
                                >
                                    <span className={`text-base ${month === selectedMonth ? 'text-[#5Fc38f] font-semibold' : 'text-slate-800'}`}>{month.substring(5, 7)}月</span>
                                    {month === selectedMonth && <CheckIcon className="w-6 h-6 text-[#5Fc38f]" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        );
    }

    const payslipData = payslipDataByMonth[selectedMonth];

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="工资单" onBack={handleBack} />
            
            <main className="flex-grow p-5 pb-8 space-y-5">
                 <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 text-green-600 font-bold text-xl rounded-full flex items-center justify-center mr-4">
                            {payslipData.employeeName.charAt(0)}
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl text-slate-900">{payslipData.employeeName}</h2>
                            <p className="text-base text-slate-500 mt-1">{payslipData.jobTitle}</p>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 my-5"></div>
                    <div className="text-base space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500">部门名称</span>
                            <span className="text-slate-900 font-semibold">{payslipData.department}</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-slate-500">发放主体</span>
                            <span className="text-slate-900 font-semibold text-right">{payslipData.payingEntity}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#5Fc38f] text-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-base text-green-200">实发工资 (元)</span>
                        <button onClick={() => {
                            setActiveYearInSelector(selectedMonth.substring(0, 4));
                            setViewMode('selection')
                        }} className="flex items-center text-sm text-green-200 hover:text-white transition-colors p-1 -m-1 rounded">
                            <span>{payslipData.date}</span>
                            <ChevronRightIcon className="!text-green-200 ml-1" />
                        </button>
                    </div>
                    <div className="flex justify-between items-center my-3">
                        <p className="text-5xl font-extrabold tracking-tight">
                            {formatAmount(payslipData.actualPayout)}
                        </p>
                        <button onClick={() => setShowSalary(!showSalary)} className="text-green-200 hover:text-white">
                           {showSalary ? <EyeIcon className="w-6 h-6"/> : <EyeOffIcon className="w-6 h-6"/>}
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-base mt-6">
                        <div>
                            <p className="text-green-200">应发工资</p>
                            <p className="font-semibold mt-1 text-lg">{formatAmount(payslipData.grossPay.amount)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-green-200">扣除总计</p>
                            <p className="font-semibold mt-1 text-lg">{formatAmount(payslipData.deductions.amount)}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm">
                    <div className="flex justify-between items-center px-5 py-4">
                        <h3 className="font-bold text-[#5Fc38f] text-base">{payslipData.grossPay.title}</h3>
                        <span className="font-bold text-base text-slate-800">{formatAmount(payslipData.grossPay.amount)}</span>
                    </div>
                    <div className="px-5 pb-1">
                        {payslipData.grossPay.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-4 border-t border-slate-100">
                                <span className="text-slate-600 text-base">{item.label}</span>
                                <span className="text-slate-800 text-base font-semibold">{formatAmount(item.value)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="flex justify-between items-center px-5 py-4">
                        <h3 className="font-bold text-slate-800 text-base">{payslipData.deductions.title}</h3>
                        <span className="font-bold text-base text-slate-800">{formatAmount(payslipData.deductions.amount)}</span>
                    </div>
                    <div className="px-5 pb-1">
                        {payslipData.deductions.items.map((item, index) => (
                             <div key={index} className="flex justify-between items-center py-4 border-t border-slate-100">
                                <span className="text-slate-600 text-base">{item.label}</span>
                                <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                                    <span className="text-slate-800 text-base font-semibold text-right">{formatAmount(item.value)}</span>
                                    <div className="w-5 h-5">
                                        {item.hasInfo && <InfoIcon />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
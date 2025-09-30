import React, { useState } from 'react';
import { payslipDataByMonth, availablePayslipMonths, availablePayslipYears, availablePayslipYearsData } from './mockdata';
import { EyeIcon, EyeOffIcon, CheckIcon, ChevronRightIcon, XMarkIcon } from './icons';
import { Header } from './Header';
import { Modal } from './Modal';

const BreakdownRow: React.FC<{ label: string, value: string | undefined }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-3">
        <span className="text-base text-slate-600">{label}</span>
        <span className="font-mono font-semibold text-slate-800 text-base text-right">{value}</span>
    </div>
);

export const PayslipPage = ({ onBack }: { onBack: () => void }) => {
    const [isMonthSelectorOpen, setIsMonthSelectorOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(availablePayslipMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availablePayslipMonths[0].substring(0, 4));
    const [showSalary, setShowSalary] = useState(true);

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        setIsMonthSelectorOpen(false);
    };

    const formatAmount = (amountStr: string | undefined) => {
        if (!showSalary || !amountStr) return '******';
        const number = parseFloat(amountStr.replace(/,/g, ''));
        if (isNaN(number)) return '******';
        return `¥ ${number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    const payslipData = payslipDataByMonth[selectedMonth];

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="工资单" onBack={onBack} />
            <main className="p-4">
                <div className="bg-white rounded-xl shadow-sm">
                    {/* Header Section */}
                    <div className="flex justify-between items-center p-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">{payslipData.employeeName}</h2>
                            <p className="text-sm text-slate-500 mt-1">{payslipData.jobTitle} &bull; {payslipData.department}</p>
                        </div>
                        <button 
                            onClick={() => {
                                setActiveYearInSelector(selectedMonth.substring(0, 4));
                                setIsMonthSelectorOpen(true)
                            }} 
                            className="flex-shrink-0 flex items-center text-base font-semibold text-[#5fc38f] bg-green-100/60 hover:bg-green-100 transition-colors px-4 py-2 rounded-full"
                        >
                            <span>{payslipData.date}</span>
                            <ChevronRightIcon className="!w-5 !h-5 ml-1 text-[#5fc38f]" />
                        </button>
                    </div>

                    <div className="border-t border-slate-100"></div>
                    
                    {/* Net Pay Summary */}
                    <div className="p-6">
                        <div className="text-center">
                            <div className="flex justify-center items-center">
                                <span className="text-base text-slate-600">实发工资 (元)</span>
                                <button
                                    onClick={() => setShowSalary(!showSalary)}
                                    className="p-2 bg-green-100/60 text-green-700 hover:bg-green-100 rounded-full transition-colors ml-3"
                                    aria-label={showSalary ? '隐藏金额' : '显示金额'}
                                >
                                    {showSalary ? <EyeIcon className="w-7 h-7" /> : <EyeOffIcon className="w-7 h-7" />}
                                </button>
                            </div>
                            <p className="text-4xl font-bold text-slate-800 tracking-tight my-2">
                                {formatAmount(payslipData.actualPayout)}
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-3 items-center text-center">
                            <div className="text-center">
                                <p className="text-slate-500 text-sm">应发合计</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{formatAmount(payslipData.grossPay.amount)}</p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-px h-10 bg-slate-200"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-slate-500 text-sm">扣除合计</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{formatAmount(payslipData.deductions.amount)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Detailed Breakdown */}
                    <div className="p-6">
                        {/* Gross Pay Section */}
                        <div>
                             <div className="flex justify-between items-center py-2 border-b border-slate-100 mb-2">
                                <h3 className="font-bold text-lg text-slate-800">应发项目</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {payslipData.grossPay.items.map((item, index) => (
                                    <BreakdownRow key={`gross-${index}`} label={item.label} value={formatAmount(item.value)} />
                                ))}
                                <div className="flex justify-between items-center py-3 border-t-2 border-slate-100 mt-2 pt-3">
                                    <span className="text-base font-bold text-slate-800">应发合计</span>
                                    <span className="font-mono font-bold text-slate-900 text-base text-right">{formatAmount(payslipData.grossPay.amount)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Deductions Section */}
                        <div className="mt-8">
                             <div className="flex justify-between items-center py-2 border-b border-slate-100 mb-2">
                                <h3 className="font-bold text-lg text-slate-800">扣除项目</h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {payslipData.deductions.items.map((item, index) => (
                                    <BreakdownRow key={`deduction-${index}`} label={item.label} value={formatAmount(item.value)} />
                                ))}
                                 <div className="flex justify-between items-center py-3 border-t-2 border-slate-100 mt-2 pt-3">
                                    <span className="text-base font-bold text-slate-800">扣除合计</span>
                                    <span className="font-mono font-bold text-slate-900 text-base text-right">{formatAmount(payslipData.deductions.amount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Issuing Info Footer */}
                <div className="mt-8 mb-4 text-center text-slate-500">
                    <p className="font-semibold text-slate-700 text-base">{payslipData.payingEntity}</p>
                    <p className="text-sm mt-1">发放于 {payslipData.date}</p>
                </div>
            </main>
            <Modal isOpen={isMonthSelectorOpen} onClose={() => setIsMonthSelectorOpen(false)}>
                <div className="flex flex-col h-[60vh]">
                     <div className="p-5 flex justify-between items-center border-b border-slate-200 flex-shrink-0">
                        <h2 className="text-lg font-bold text-slate-900">选择月份</h2>
                        <button onClick={() => setIsMonthSelectorOpen(false)} className="p-2 -mr-2 text-slate-500 hover:text-slate-800">
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex-grow flex overflow-hidden">
                        <div className="w-1/3 bg-slate-100/70 border-r border-slate-200 overflow-y-auto">
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
                        <div className="w-2/3 overflow-y-auto">
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
                    </div>
                </div>
            </Modal>
        </div>
    );
};
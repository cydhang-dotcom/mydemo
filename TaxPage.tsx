import React, { useState } from 'react';
import { taxDataByMonth, availableTaxMonths, availableTaxYears, availableTaxYearsData } from './mockdata';
import { Header } from './Header';
import { ListItem } from './ListItem';
import { CheckIcon, ChevronRightIcon, XMarkIcon } from './icons';
import { Modal } from './Modal';

export const TaxPage = ({ onBack }: { onBack: () => void; }) => {
    const [isMonthSelectorOpen, setIsMonthSelectorOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(availableTaxMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availableTaxMonths[0].substring(0, 4));

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        setIsMonthSelectorOpen(false);
    };

    const taxData = taxDataByMonth[selectedMonth];
    const taxRateItem = taxData.taxCalculation.items.find(item => item.label === '税率/预扣率');
    const taxRate = taxRateItem ? taxRateItem.value : 'N/A';
    const monthlyIncome = taxData.incomeType.amount;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="个税" onBack={onBack} />
            <main className="p-4">
                 <div className="bg-white rounded-xl shadow-sm">
                    {/* Header Section */}
                    <div className="flex justify-between items-center p-6">
                        <h2 className="text-xl font-bold text-slate-900">税款详情</h2>
                         <button 
                            onClick={() => {
                                setActiveYearInSelector(selectedMonth.substring(0, 4));
                                setIsMonthSelectorOpen(true)
                            }} 
                            className="flex-shrink-0 flex items-center text-base font-semibold text-[#5fc38f] bg-green-100/60 hover:bg-green-100 transition-colors px-4 py-2 rounded-full"
                        >
                            <span>所得月份: {taxData.incomeMonth}</span>
                            <ChevronRightIcon className="!w-5 !h-5 ml-1 text-[#5fc38f]" />
                        </button>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Summary Section */}
                    <div className="p-6 text-center">
                        <span className="text-base text-slate-600">个税税额 (元)</span>
                        <p className="text-4xl font-bold text-slate-800 tracking-tight my-2">{taxData.taxAmount}</p>
                        <div className="mt-6 grid grid-cols-2 items-center text-center divide-x divide-slate-200">
                            <div>
                                <p className="text-slate-500 text-sm">本月收入</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{monthlyIncome}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">税率</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{taxRate}</p>
                            </div>
                        </div>
                    </div>

                     <div className="border-t border-slate-100"></div>
                     
                     {/* Detailed Breakdown */}
                     <div className="p-6 space-y-8">
                        <div>
                            <h3 className="pb-2 text-base font-bold text-slate-900">{taxData.currentPeriod.title}</h3>
                            <div className="divide-y divide-slate-100">
                                {taxData.currentPeriod.items.map((item, index) => (
                                    <ListItem key={index} label={item.label} value={item.value} hasDetails={item.hasDetails} />
                                ))}
                            </div>
                        </div>
                         <div>
                            <h3 className="pb-2 text-base font-bold text-slate-900">{taxData.cumulative.title}</h3>
                            <div className="divide-y divide-slate-100">
                                {taxData.cumulative.items.map((item, index) => (
                                    <ListItem key={index} label={item.label} value={item.value} hasDetails={item.hasDetails} />
                                ))}
                            </div>
                        </div>
                         <div>
                            <h3 className="pb-2 text-base font-bold text-slate-900">{taxData.taxCalculation.title}</h3>
                            <div className="divide-y divide-slate-100">
                                {taxData.taxCalculation.items.map((item, index) => (
                                    <ListItem key={index} label={item.label} value={item.value} hasDetails={item.hasDetails} />
                                ))}
                            </div>
                        </div>
                     </div>
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
                                {availableTaxYears.map((year) => (
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
                                {(availableTaxYearsData[activeYearInSelector] || []).map((month) => (
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
import React, { useState } from 'react';
import { taxDataByMonth, availableTaxMonths, availableTaxYears, availableTaxYearsData } from './mockData';
import { Header } from './Header';
import { ListItem } from './ListItem';
import { CheckIcon, ChevronRightIcon } from './Icons';

const Section = ({ title, items }: { title: string; items: { label: string; value: string; hasDetails?: boolean }[] }) => (
    <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="pb-2 text-base font-bold text-slate-900">{title}</h3>
        <div className="divide-y divide-slate-100">
            {items.map((item, index) => (
                <ListItem key={index} label={item.label} value={item.value} hasDetails={item.hasDetails} />
            ))}
        </div>
    </div>
);

type ViewMode = 'details' | 'selection';

export const TaxPage = ({ onBack }: { onBack: () => void }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('details');
    const [selectedMonth, setSelectedMonth] = useState(availableTaxMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availableTaxMonths[0].substring(0, 4));

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

    if (viewMode === 'selection') {
         return (
            <div className="w-full bg-white min-h-screen flex flex-col">
                <Header title="选择月份" onBack={handleBack} />
                <main className="flex-grow flex">
                    <div className="w-1/3 bg-slate-100/70 border-r border-slate-200">
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
                    <div className="w-2/3">
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
                </main>
            </div>
        );
    }

    const taxData = taxDataByMonth[selectedMonth];
    const taxRateItem = taxData.taxCalculation.items.find(item => item.label === '税率/预扣率');
    const taxRate = taxRateItem ? taxRateItem.value : 'N/A';
    const monthlyIncome = taxData.incomeType.amount;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="个税" onBack={handleBack} />
            <main className="p-5 space-y-5">
                <div className="bg-[#5Fc38f] text-white p-6 rounded-xl shadow-lg">
                     <div className="flex justify-between items-start">
                        <span className="text-base text-green-200">个税税额 (元)</span>
                         <button onClick={() => { 
                             setActiveYearInSelector(selectedMonth.substring(0, 4));
                             setViewMode('selection') 
                         }} className="flex items-center text-sm text-green-200 hover:text-white transition-colors p-1 -m-1 rounded">
                            <span>所得月份: {taxData.incomeMonth}</span>
                            <ChevronRightIcon className="!text-green-200 ml-1" />
                        </button>
                    </div>
                    <p className="text-5xl font-extrabold tracking-tight my-3">{taxData.taxAmount}</p>
                    <div className="text-sm text-green-200 mt-2">
                        <span>本月收入: {monthlyIncome}</span>
                        <span className="ml-4">税率: {taxRate}</span>
                    </div>
                </div>
                
                <Section title={taxData.currentPeriod.title} items={taxData.currentPeriod.items} />
                <Section title={taxData.cumulative.title} items={taxData.cumulative.items} />
                <Section title={taxData.taxCalculation.title} items={taxData.taxCalculation.items} />
            </main>
        </div>
    );
};
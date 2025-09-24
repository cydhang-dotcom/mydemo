import React, { useState } from 'react';
import { insuranceDataByMonth, availableInsuranceMonths, availableInsuranceYears, availableInsuranceYearsData } from './mockdata';
import { Header } from './Header';
import { ShieldCheckIcon, BriefcaseIcon, UsersIcon, HomeIcon, HeartIcon, CheckIcon, ChevronRightIcon } from './Icons';

const getIconForType = (type: string) => {
    const iconProps = { className: "w-5 h-5" };
    switch (type) {
        case '养老保险':
            return <ShieldCheckIcon {...iconProps} />;
        case '医疗保险':
            return <HeartIcon {...iconProps} />;
        case '失业保险':
             return <BriefcaseIcon {...iconProps} />;
        case '工伤保险':
            return <ShieldCheckIcon {...iconProps} />;
        case '生育保险':
            return <UsersIcon {...iconProps} />;
        case '住房公积金':
            return <HomeIcon {...iconProps} />;
        default:
            return <ShieldCheckIcon {...iconProps} />;
    }
};

// FIX: Define props with an interface and use React.FC to correctly type the component,
// which resolves issues with special props like 'key'.
interface ContributionItemProps {
    type: string;
    company: string;
    personal: string;
}

const ContributionItem: React.FC<ContributionItemProps> = ({ type, company, personal }) => {
    const total = parseFloat(company.replace(/,/g, '')) + parseFloat(personal.replace(/,/g, ''));
    const formatNumber = (num: number) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className="py-5">
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-4 flex-shrink-0">
                    {getIconForType(type)}
                </div>
                <div>
                    <p className="font-bold text-slate-800 text-base">{type}</p>
                    <p className="text-sm text-slate-500 mt-1">总计: <span className="font-semibold">{formatNumber(total)}</span></p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center bg-slate-50 p-4 rounded-lg">
                <div>
                    <p className="text-sm text-slate-500 mb-1">企业缴纳</p>
                    <p className="font-bold text-slate-900 text-lg">{company}</p>
                </div>
                <div>
                    <p className="text-sm text-slate-500 mb-1">个人缴纳</p>
                    <p className="font-bold text-slate-900 text-lg">{personal}</p>
                </div>
            </div>
        </div>
    );
};

type ViewMode = 'details' | 'selection';

export const InsurancePage = ({ onBack }: { onBack: () => void }) => {
    const [viewMode, setViewMode] = useState<ViewMode>('details');
    const [selectedMonth, setSelectedMonth] = useState(availableInsuranceMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availableInsuranceMonths[0].substring(0, 4));

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
                            {availableInsuranceYears.map((year) => (
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
                            {(availableInsuranceYearsData[activeYearInSelector] || []).map((month) => (
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

    const insuranceData = insuranceDataByMonth[selectedMonth];
    const totals = insuranceData.contributions.details.reduce(
        (acc: { company: number; personal: number; }, item: { company: string; personal: string; }) => {
            acc.company += parseFloat(item.company.replace(/,/g, ''));
            acc.personal += parseFloat(item.personal.replace(/,/g, ''));
            return acc;
        },
        { company: 0, personal: 0 }
    );

    const formatNumber = (num: number) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="五险一金" onBack={handleBack} />
            <main className="p-5 space-y-5">
                <div className="bg-[#5Fc38f] text-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-start">
                        <span className="text-base text-green-200">缴费总计 (元)</span>
                         <button onClick={() => { 
                             setActiveYearInSelector(selectedMonth.substring(0, 4));
                             setViewMode('selection') 
                         }} className="flex items-center text-sm text-green-200 hover:text-white transition-colors p-1 -m-1 rounded">
                            <span>缴纳月份: {insuranceData.period}</span>
                            <ChevronRightIcon className="!text-green-200 ml-1" />
                        </button>
                    </div>
                    <p className="text-5xl font-extrabold tracking-tight my-3">
                        {formatNumber(totals.company + totals.personal)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-base mt-6">
                        <div>
                            <p className="text-green-200">企业缴纳合计</p>
                            <p className="font-semibold mt-1 text-lg">{formatNumber(totals.company)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-green-200">个人缴纳合计</p>
                            <p className="font-semibold mt-1 text-lg">{formatNumber(totals.personal)}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                     <div className="p-5 border-b border-slate-100">
                        <h2 className="text-xl font-bold text-slate-900">{insuranceData.contributions.title}</h2>
                    </div>
                    <div className="px-5 divide-y divide-slate-100">
                        {insuranceData.contributions.details.map((item: { type: string; company: string; personal: string; }, index: React.Key | null | undefined) => (
                            <ContributionItem
                                key={index}
                                type={item.type}
                                company={item.company}
                                personal={item.personal}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
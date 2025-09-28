import React, { useState } from 'react';
import { insuranceDataByMonth, availableInsuranceMonths, availableInsuranceYears, availableInsuranceYearsData } from './mockdata';
import { Header } from './Header';
import { Modal } from './Modal';
import { 
    ShieldCheckIcon, 
    BriefcaseIcon, 
    UsersIcon, 
    HomeIcon, 
    HeartIcon, 
    CheckIcon, 
    ChevronRightIcon,
    XMarkIcon 
} from './icons';

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

export const InsurancePage = ({ onBack }: { onBack: () => void }) => {
    const [isMonthSelectorOpen, setIsMonthSelectorOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(availableInsuranceMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availableInsuranceMonths[0].substring(0, 4));

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        setIsMonthSelectorOpen(false);
    };
    
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
    const totalContribution = totals.company + totals.personal;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="五险一金" onBack={onBack} />
            <main className="p-4">
                <div className="bg-white rounded-xl shadow-sm">
                    {/* Header Section */}
                    <div className="flex justify-between items-center p-6">
                        <h2 className="text-xl font-bold text-slate-900">{insuranceData.contributions.title}</h2>
                        <button 
                            onClick={() => {
                                setActiveYearInSelector(selectedMonth.substring(0, 4));
                                setIsMonthSelectorOpen(true)
                            }} 
                            className="flex-shrink-0 flex items-center text-base font-semibold text-[#5fc38f] bg-green-100/60 hover:bg-green-100 transition-colors px-4 py-2 rounded-full"
                        >
                            <span>缴纳月份: {insuranceData.period}</span>
                            <ChevronRightIcon className="!w-5 !h-5 ml-1 text-[#5fc38f]" />
                        </button>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Summary Section */}
                    <div className="p-6 text-center">
                        <span className="text-base text-slate-600">缴费总计 (元)</span>
                        <p className="text-4xl font-bold text-slate-800 tracking-tight my-2">{formatNumber(totalContribution)}</p>
                        <div className="mt-6 grid grid-cols-3 items-center text-center">
                             <div className="text-center">
                                <p className="text-slate-500 text-sm">企业缴纳合计</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{formatNumber(totals.company)}</p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-px h-10 bg-slate-200"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-slate-500 text-sm">个人缴纳合计</p>
                                <p className="font-semibold mt-1 text-lg text-slate-800">{formatNumber(totals.personal)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>
                    
                    {/* Detailed Breakdown */}
                    <div className="px-5 divide-y divide-slate-100">
                        {insuranceData.contributions.details.map((item, index) => (
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
                        <div className="w-2/3 overflow-y-auto">
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
                    </div>
                </div>
            </Modal>
        </div>
    );
};
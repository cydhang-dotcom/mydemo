import React, { useState } from 'react';
import { 
    attendanceDataByMonth, 
    availableAttendanceMonths,
    availableAttendanceYears,
    availableAttendanceYearsData
} from './mockdata';
import { Header } from './Header';
import { Modal } from './Modal';
import { 
    ChevronRightIcon,
    CheckIcon,
    XMarkIcon
} from './icons';

// FIX: Define interfaces for anomaly data to provide strong typing and resolve errors.
interface AnomalyItem {
    date: string;
    description: string;
}

interface AnomalyDetails {
    count: number;
    items: AnomalyItem[];
}

const SummaryItem: React.FC<{ label: string, value: string | number, unit: string }> = ({ label, value, unit }) => (
    <div className="text-center">
        <p className="text-slate-500 text-sm">{label}</p>
        <p className="font-semibold mt-1 text-lg text-slate-800">
            {value} <span className="text-sm font-normal">{unit}</span>
        </p>
    </div>
);

export const AttendancePage = ({ onBack }: { onBack: () => void }) => {
    const [isMonthSelectorOpen, setIsMonthSelectorOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(availableAttendanceMonths[0]);
    const [activeYearInSelector, setActiveYearInSelector] = useState(availableAttendanceMonths[0].substring(0, 4));

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        setIsMonthSelectorOpen(false);
    };

    const data = attendanceDataByMonth[selectedMonth];
    // FIX: Cast `data.anomalies` to a strongly-typed record to allow TypeScript to correctly infer the type of `details`.
    const anomalies = Object.entries(data.anomalies as Record<string, AnomalyDetails>)
        .filter(([, details]) => details.count > 0);

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="月度汇总" onBack={onBack} />
            <main className="p-4">
                 <div className="bg-white rounded-xl shadow-sm">
                    {/* Header Section */}
                    <div className="flex justify-between items-center p-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">{data.employee.name}</h2>
                            <p className="text-sm text-slate-500 mt-1">{data.employee.title}</p>
                        </div>
                        <button 
                            onClick={() => {
                                setActiveYearInSelector(selectedMonth.substring(0, 4));
                                setIsMonthSelectorOpen(true)
                            }} 
                            className="flex-shrink-0 flex items-center text-base font-semibold text-[#5fc38f] bg-green-100/60 hover:bg-green-100 transition-colors px-4 py-2 rounded-full"
                        >
                            <span>{selectedMonth}</span>
                            <ChevronRightIcon className="!w-5 !h-5 ml-1 text-[#5fc38f]" />
                        </button>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Summary Section */}
                    <div className="p-6">
                        <div className="text-center">
                            <span className="text-base text-slate-600">实际出勤 (天)</span>
                            <p className="text-4xl font-bold text-slate-800 tracking-tight my-2">
                                {data.summary.actualDays}
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-4 items-center text-center">
                           <SummaryItem label="应出勤" value={data.summary.requiredDays} unit="天" />
                           <SummaryItem label="迟到" value={data.summary.lateCount} unit="次" />
                           <SummaryItem label="早退" value={data.summary.earlyLeaveCount} unit="次" />
                           <SummaryItem label="请假" value={data.summary.leaveDays} unit="天" />
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                     {/* Detailed Breakdown */}
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-slate-800 pb-2 border-b border-slate-100 mb-2">出勤异常</h3>
                        {anomalies.length > 0 ? (
                            <div className="space-y-8 pt-4">
                                {anomalies.map(([type, details]) => (
                                    <div key={type}>
                                        <h4 className="font-semibold text-base text-slate-700 mb-3">{type} ({details.count}次)</h4>
                                        <div className="relative">
                                            {/* Vertical timeline bar */}
                                            <div className="absolute left-2.5 top-1 bottom-1 w-0.5 bg-slate-200" aria-hidden="true"></div>
                                            <div className="space-y-6">
                                                {details.items.map((item, index: number) => (
                                                    <div key={index} className="flex items-start relative">
                                                        <div className="flex-shrink-0 w-6 h-6 bg-slate-400 rounded-full border-4 border-white flex items-center justify-center z-10"></div>
                                                        <div className="flex-1 ml-4">
                                                            <div className="flex justify-between items-center">
                                                                <div>
                                                                    <p className="font-semibold text-sm text-slate-800">{item.date}</p>
                                                                    <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                                                                </div>
                                                                <button className="flex-shrink-0 px-3 py-1 text-xs font-semibold text-[#5fc38f] border border-[#5fc38f] rounded-full hover:bg-[#5fc38f]/10 transition-colors">
                                                                    处理
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-slate-500 py-6">本月无出勤异常记录</p>
                        )}
                    </div>
                </div>

                <div className="text-center text-sm text-slate-500 mt-6 pb-4">
                    <p>考勤方案: {data.employee.plan}</p>
                    <p className="mt-1">数据截止于 {new Date().toLocaleDateString('zh-CN')}</p>
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
                                {availableAttendanceYears.map((year) => (
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
                                {(availableAttendanceYearsData[activeYearInSelector] || []).map((month) => (
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
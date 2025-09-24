import React, { useState } from 'react';
import { attendanceDataByMonth, availableAttendanceMonths } from './mockData';
import { Header } from './Header';
import { 
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon
} from './Icons';

export const AttendancePage = ({ onBack }: { onBack: () => void }) => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    const currentMonth = availableAttendanceMonths[currentMonthIndex];
    const data = attendanceDataByMonth[currentMonth];
    const anomalyKey = Object.keys(data.anomalies)[0];
    const anomalyData = data.anomalies[anomalyKey];

    const goToPreviousMonth = () => {
        if (currentMonthIndex < availableAttendanceMonths.length - 1) {
            setCurrentMonthIndex(currentMonthIndex + 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex(currentMonthIndex - 1);
        }
    };
    
    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="月度汇总" onBack={onBack} />

            <main className="p-5 space-y-5 pb-8">
                <div className="bg-[#5fc38f] text-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                            {data.employee.avatarText}
                        </div>
                        <div>
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold text-white">{data.employee.name}</h2>
                                <span className="ml-3 text-xs font-semibold text-green-700 bg-white rounded-full px-2.5 py-1">{data.employee.plan}</span>
                            </div>
                            <p className="text-green-200 mt-2 text-base">{data.employee.title}</p>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/20 my-5"></div>

                    <div className="flex justify-between items-center -m-2">
                        <button onClick={goToPreviousMonth} disabled={currentMonthIndex >= availableAttendanceMonths.length - 1} className="p-3 text-white disabled:text-white/40 hover:bg-white/10 transition-colors rounded-lg">
                            <ChevronLeftIcon className="w-6 h-6"/>
                        </button>
                        <span className="text-lg font-bold text-white">{currentMonth}</span>
                        <button onClick={goToNextMonth} disabled={currentMonthIndex === 0} className="p-3 text-white disabled:text-white/40 hover:bg-white/10 transition-colors rounded-lg">
                            <ChevronRightIcon className="!w-6 !h-6 !text-inherit"/>
                        </button>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-5 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900">出勤异常</h3>
                    </div>
                    
                    <div>
                        <div 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className="flex justify-between items-center p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                            role="button" 
                            aria-expanded={isExpanded}
                        >
                            <span className="font-semibold text-base text-slate-800">{anomalyKey}</span>
                            <div className="flex items-center text-slate-600">
                                <span className="mr-2 font-medium">{anomalyData.count}次</span>
                                {isExpanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                            </div>
                        </div>
                        
                        {isExpanded && (
                            <div className="border-t border-slate-100">
                               <div className="px-5 divide-y divide-slate-100">
                                    {anomalyData.items.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-4">
                                            <div>
                                                <p className="font-semibold text-base text-slate-800">{item.date}</p>
                                                <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                                            </div>
                                            <button className="flex-shrink-0 px-4 py-1.5 text-sm font-semibold text-[#5fc38f] border border-[#5fc38f] rounded-full hover:bg-[#5fc38f]/10 transition-colors">
                                                处理
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
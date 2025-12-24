
import React, { useState } from 'react';
import { Header } from './Header';
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    ChartBarIcon,
    ChevronDownIcon,
    LocationPinIcon,
    BullseyeIcon,
    PlusIcon
} from './icons';

export const AttendanceCalendarPage = ({ onBack }: { onBack: () => void }) => {
    const [selectedDate, setSelectedDate] = useState('2025-12-19');

    // Calendar data based on screenshot 2025-12
    const days = [
        { d: 30, currentMonth: false },
        { d: 1, currentMonth: true, status: 'warning' },
        { d: 2, currentMonth: true, status: 'warning' },
        { d: 3, currentMonth: true, status: 'warning' },
        { d: 4, currentMonth: true, status: 'warning' },
        { d: 5, currentMonth: true, status: 'warning' },
        { d: 6, currentMonth: true },
        { d: 7, currentMonth: true },
        { d: 8, currentMonth: true, status: 'warning' },
        { d: 9, currentMonth: true, status: 'warning' },
        { d: 10, currentMonth: true, status: 'warning' },
        { d: 11, currentMonth: true, status: 'warning' },
        { d: 12, currentMonth: true, status: 'warning' },
        { d: 13, currentMonth: true },
        { d: 14, currentMonth: true },
        { d: 15, currentMonth: true, status: 'warning' },
        { d: 16, currentMonth: true, status: 'warning' },
        { d: 17, currentMonth: true, status: 'warning' },
        { d: 18, currentMonth: true, status: 'warning' },
        { d: 19, currentMonth: true, status: 'warning', isToday: true },
        { d: 20, currentMonth: true },
        { d: 21, currentMonth: true },
        { d: 22, currentMonth: true },
        { d: 23, currentMonth: true },
        { d: 24, currentMonth: true },
        { d: 25, currentMonth: true },
        { d: 26, currentMonth: true },
        { d: 27, currentMonth: true },
        { d: 28, currentMonth: true },
        { d: 29, currentMonth: true },
        { d: 30, currentMonth: true },
        { d: 31, currentMonth: true },
        { d: 1, currentMonth: false },
        { d: 2, currentMonth: false },
        { d: 3, currentMonth: false },
        { d: 4, currentMonth: false },
        { d: 5, currentMonth: false },
        { d: 6, currentMonth: false },
        { d: 7, currentMonth: false },
        { d: 8, currentMonth: false },
        { d: 9, currentMonth: false },
        { d: 10, currentMonth: false },
    ];

    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

    const getStatusColor = (status?: string) => {
        switch (status) {
            case 'warning': return 'bg-yellow-400';
            case 'error': return 'bg-red-500';
            case 'info': return 'bg-blue-400';
            case 'success': return 'bg-purple-400';
            default: return 'bg-transparent';
        }
    };

    return (
        <div className="w-full bg-slate-50 min-h-screen flex flex-col">
            <Header title="考勤日历" onBack={onBack} />
            
            <div className="bg-white flex-shrink-0">
                {/* Calendar Controls */}
                <div className="flex items-center justify-between px-4 py-3">
                    <button className="text-[#5fc38f] text-sm font-medium">回今日</button>
                    <div className="flex items-center space-x-4">
                        <ChevronLeftIcon className="w-5 h-5 text-slate-400" />
                        <span className="font-bold text-slate-800">2025-12-19</span>
                        <ChevronRightIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <button className="flex items-center text-[#5fc38f] text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
                        <ChartBarIcon className="w-4 h-4 mr-1" />
                        考勤统计
                    </button>
                </div>

                {/* Calendar Grid */}
                <div className="px-2 pb-4">
                    <div className="grid grid-cols-7 mb-2">
                        {weekdays.map(wd => (
                            <div key={wd} className="text-center text-xs text-slate-400 py-2">{wd}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-y-2">
                        {days.map((day, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center h-14 relative cursor-pointer">
                                <div className={`w-10 h-10 flex flex-col items-center justify-center rounded-lg transition-colors ${
                                    day.isToday ? 'border border-[#5fc38f] bg-emerald-50' : ''
                                } ${!day.currentMonth ? 'opacity-30' : ''}`}>
                                    <span className={`text-base font-medium ${day.isToday ? 'text-[#5fc38f]' : 'text-slate-700'}`}>
                                        {day.isToday ? '今' : day.d}
                                    </span>
                                    {day.status && (
                                        <div className={`w-1 h-1 rounded-full mt-1 ${getStatusColor(day.status)}`}></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="bg-slate-50 py-3 flex items-center justify-center space-x-6 text-[10px] text-slate-400">
                    <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-1.5"></div>迟到/早退/未打卡</div>
                    <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></div>旷工</div>
                    <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5"></div>请假</div>
                    <div className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-1.5"></div>公出</div>
                </div>
                <div className="flex justify-center bg-slate-50 border-b border-slate-100 pb-2">
                    <ChevronDownIcon className="w-4 h-4 text-slate-300" />
                </div>
            </div>

            <main className="flex-grow overflow-y-auto p-4 space-y-6">
                {/* Sign-in cards updated style */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f0faf5] rounded-2xl p-6 flex flex-col items-center justify-center border border-emerald-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20"></div>
                        <span className="text-[10px] text-emerald-600/60 font-black uppercase tracking-widest mb-2">上班签到</span>
                        <p className="text-3xl font-bold text-emerald-600 tracking-tighter">09:00</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-100 opacity-60">
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">下班签退</span>
                        <p className="text-3xl font-bold text-slate-400 tracking-tighter">17:30</p>
                    </div>
                </div>

                {/* Location info */}
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center text-[10px] text-slate-400">
                        <LocationPinIcon className="w-4 h-4 mr-1 text-[#5fc38f]" />
                        未进入考勤范围, 距离703米
                    </div>
                    <button className="flex items-center text-[10px] text-[#5fc38f] font-medium">
                        停止定位 <BullseyeIcon className="w-3 h-3 ml-1" />
                    </button>
                </div>

                {/* Agenda */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-800 text-lg">日程</h3>
                        <button className="flex items-center text-[#5fc38f] text-sm font-medium">
                            <PlusIcon className="w-4 h-4 mr-1" />
                            申请审批
                        </button>
                    </div>

                    <div className="relative space-y-4">
                        {/* Timeline line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100"></div>

                        <div className="flex items-start">
                            <div className="w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10 mt-1"></div>
                            <div className="ml-4 flex-grow bg-slate-50 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-slate-500 text-sm font-medium">上班时间</span>
                                    <span className="ml-3 text-emerald-400 font-bold text-sm">未打卡</span>
                                </div>
                                <button className="text-emerald-400 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">补签</button>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10 mt-1"></div>
                            <div className="ml-4 flex-grow bg-slate-50 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-slate-500 text-sm font-medium">下班时间</span>
                                    <span className="ml-3 text-emerald-400 font-bold text-sm">未打卡</span>
                                </div>
                                <button className="text-emerald-400 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">补签</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


import React, { useState, useEffect } from 'react';
import type { IconProps } from './icons';
import {
    ChevronRightIcon,
    LocationPinIcon,
    ArrowPathIcon,
    AttendanceCalendarIcon,
    AttendanceSearchIcon,
    LeaveRequestIcon,
    OAApprovalIcon,
    EmployeeServiceIcon,
    BuildingOfficeIcon,
    ChevronDownIcon,
    UserCircleIcon,
    ClipboardDocumentCheckIcon,
} from './icons';

// A standardized header for main pages, showing the company selector.
const CompanySelectorHeader = () => (
    <header className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 border-b border-slate-100">
        <div className="flex justify-between items-center h-9">
            <div className="flex items-center cursor-pointer group" onClick={() => alert('切换公司')}>
                <div className="w-9 h-9 bg-green-100/60 rounded-md flex items-center justify-center mr-3">
                   <BuildingOfficeIcon className="w-5 h-5 text-[#5fc38f]"/>
                </div>
                <h1 className="text-slate-800 font-semibold text-base">上海云才网络技术有限公司</h1>
                <ChevronDownIcon className="w-5 h-5 ml-1.5 text-slate-500 group-hover:text-slate-800 transition-colors" />
            </div>
        </div>
    </header>
);

const AttendanceSection = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
            {/* Large Centered Clock */}
            <div className="mb-6">
                <p className="text-5xl font-bold text-slate-800 tracking-tight">
                    {time.toLocaleTimeString('en-GB')}
                </p>
            </div>

            {/* Attendance Status Cards */}
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-[#f0faf5] rounded-2xl p-5 flex flex-col items-center justify-center transition-transform active:scale-95 cursor-pointer">
                    <p className="text-[#5fc38f] text-xl font-bold">上班签到</p>
                    <p className="text-[#5fc38f] text-sm mt-1 font-medium">09:00</p>
                </div>
                <div className="bg-[#f0faf5] rounded-2xl p-5 flex flex-col items-center justify-center transition-transform active:scale-95 cursor-pointer">
                    <p className="text-[#5fc38f] text-xl font-bold">下班签退</p>
                    <p className="text-[#5fc38f] text-sm mt-1 font-medium">17:30</p>
                </div>
            </div>
            
            {/* Bottom Info Bar */}
            <div className="w-full mt-6 px-1 flex justify-between items-center">
                <div className="flex items-center text-xs text-slate-400">
                    <LocationPinIcon className="w-3.5 h-3.5 mr-1.5 text-[#5fc38f]" />
                    <span>未进入考勤范围</span>
                </div>
                <button className="flex items-center text-xs text-[#5fc38f] font-medium">
                    <span>刷新位置</span>
                    <ArrowPathIcon className="w-3.5 h-3.5 ml-1" />
                </button>
            </div>
        </div>
    );
};

const TodoSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-lg">待办</h3>
                <button className="text-slate-400 text-sm flex items-center hover:text-slate-600">
                    查看全部 <ChevronRightIcon className="w-4 h-4 ml-0.5" />
                </button>
            </div>
            
            <div className="px-5 pb-6 space-y-4">
                {/* Style 1: Aggregated OA Approval (Green Theme) */}
                <div onClick={() => navigateTo('oa-approval')} className="flex items-start bg-slate-50/50 hover:bg-slate-50 border border-slate-100/50 rounded-xl p-4 transition-all cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-[#5fc38f] rounded-full mr-4 mt-2.5 flex-shrink-0 shadow-sm shadow-[#5fc38f]/30"></div>
                    <div className="flex-grow">
                        <div className="flex items-center mb-2">
                            <h4 className="font-bold text-slate-800 text-base">OA审批</h4>
                            <span className="ml-2.5 bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-0.5 rounded-md border border-orange-100/50">10+ 待处理</span>
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-slate-500 text-sm font-medium">王鞞的公出申请</p>
                            <p className="text-slate-500 text-sm font-medium">马海荣的年假申请</p>
                        </div>
                    </div>
                    <button className="ml-4 border border-[#5fc38f]/40 text-[#5fc38f] text-sm font-bold px-4 py-1.5 rounded-full bg-white self-center">查看审批</button>
                </div>

                {/* Style 2: Urgent Attendance Anomaly (Red Theme) */}
                <div onClick={() => navigateTo('attendance')} className="flex items-start bg-red-50/30 hover:bg-red-50/50 border border-red-100/30 rounded-xl p-4 transition-all cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full mr-4 mt-2.5 flex-shrink-0 shadow-sm shadow-red-500/30"></div>
                    <div className="flex-grow">
                        <div className="flex items-center mb-2">
                            <h4 className="font-bold text-slate-800 text-base">考勤异常</h4>
                            <span className="ml-2.5 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-md">未处理</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">12月18日 上午漏打卡</p>
                        <p className="text-xs text-red-400 mt-1">请及时提交补签申请</p>
                    </div>
                    <button className="ml-4 border border-red-400/40 text-red-500 text-sm font-bold px-4 py-1.5 rounded-full bg-white self-center">去补签</button>
                </div>

                {/* Style 3: Contract Signing Reminder (Blue Theme) */}
                <div onClick={() => navigateTo('contracts')} className="flex items-start bg-blue-50/30 hover:bg-blue-50/50 border border-blue-100/30 rounded-xl p-4 transition-all cursor-pointer">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-4 mt-2.5 flex-shrink-0 shadow-sm shadow-blue-500/30"></div>
                    <div className="flex-grow">
                        <div className="flex items-center mb-2">
                            <h4 className="font-bold text-slate-800 text-base">合同签署</h4>
                            <span className="ml-2.5 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md">待签署</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">《保密与竞业禁止协议》</p>
                        <p className="text-xs text-slate-400 mt-1">截止日期：2025-01-10</p>
                    </div>
                    <button className="ml-4 border border-blue-400/40 text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full bg-white self-center">去签署</button>
                </div>
            </div>
        </div>
    );
};

const HrServicesSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
    type ServiceCategory = 'attendance' | 'oa' | 'employee';

    interface Service {
        name: string;
        icon: React.ReactElement<IconProps>;
        category: ServiceCategory;
        hasNotification?: boolean;
        onClick?: () => void;
    }

    const services: Service[] = [
        { name: '考勤日历', icon: <AttendanceCalendarIcon />, category: 'attendance', onClick: () => navigateTo('attendance-calendar') },
        { name: '考勤查询', icon: <AttendanceSearchIcon />, category: 'attendance', onClick: () => navigateTo('attendance-query') },
        { name: '请假公出', icon: <LeaveRequestIcon />, category: 'attendance', onClick: () => navigateTo('apply-selection') },
        { name: 'OA审批', icon: <OAApprovalIcon />, category: 'oa', hasNotification: true, onClick: () => navigateTo('oa-approval') },
        { name: '员工服务', icon: <EmployeeServiceIcon />, category: 'employee' },
    ];
    
    const categoryStyles: Record<ServiceCategory, string> = {
        attendance: 'bg-[#eff6ff] text-[#3b82f6]', // Blue
        oa: 'bg-[#fff7ed] text-[#f97316]',         // Orange
        employee: 'bg-[#ecfdf5] text-[#10b981]',   // Green
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-6">人事</h3>
            <div className="grid grid-cols-4 gap-x-2 gap-y-6">
                {services.map(service => (
                    <div key={service.name} onClick={service.onClick} className="cursor-pointer group flex flex-col items-center text-center">
                        <div className="relative">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:brightness-95 transition-all shadow-sm ${categoryStyles[service.category]}`}>
                                {React.cloneElement(service.icon, { className: 'w-11 h-11' })}
                            </div>
                            {service.hasNotification && (
                                <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
                            )}
                        </div>
                        <p className="text-sm text-slate-700 font-medium mt-3 whitespace-nowrap">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DailyPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    return (
        <div className="w-full flex flex-col min-h-full bg-[#f8fbfd] font-sans">
            {/* Header section with Centered Title as shown in common app headers */}
            <header className="bg-white px-4 h-12 flex items-center justify-center border-b border-slate-50 sticky top-0 z-20">
                <h2 className="text-slate-800 font-bold text-base">员工日常</h2>
                {/* Simulated native controls on the right */}
                <div className="absolute right-4 flex items-center space-x-3 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-900"></div>
                    <div className="w-4 h-4 rounded-full border border-slate-900 flex items-center justify-center ml-1">
                        <div className="w-2 h-2 rounded-full border-2 border-slate-900"></div>
                    </div>
                </div>
            </header>

            <main className="flex-grow p-4 space-y-5 pb-24">
                <AttendanceSection />
                <TodoSection navigateTo={navigateTo} />
                <HrServicesSection navigateTo={navigateTo} />
            </main>
        </div>
    );
};

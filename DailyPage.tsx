
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
} from './icons';

/**
 * Premium Consolidated Profile Card (Synced from HomePage style)
 */
const ProfileCard = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => (
    <div 
        onClick={() => navigateTo('employee-info')}
        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all"
    >
        <div className="flex items-center space-x-4">
            <div className="relative">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm overflow-hidden">
                    <UserCircleIcon className="w-12 h-12" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#5fc38f] p-1.5 rounded-full border-2 border-white shadow-sm">
                    <BuildingOfficeIcon className="w-3 h-3 text-white" />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center">
                    <h2 className="font-extrabold text-2xl text-slate-900 leading-none">杭志平</h2>
                    <span className="ml-2 bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded font-bold">研发总监</span>
                </div>
                
                <div 
                    className="flex items-center mt-2 group/company"
                    onClick={(e) => { e.stopPropagation(); alert('切换公司'); }}
                >
                    <span className="text-xs text-slate-400 group-hover/company:text-[#5fc38f] transition-colors truncate max-w-[180px]">
                        上海云才网络技术有限公司
                    </span>
                    <ChevronDownIcon className="w-3.5 h-3.5 ml-1 text-slate-300 group-hover/company:text-[#5fc38f]" />
                </div>
            </div>
        </div>

        <div className="w-8 h-8 flex items-center justify-center text-slate-300 group-hover:text-slate-500 transition-colors">
            <ChevronRightIcon className="w-6 h-6" />
        </div>
    </div>
);

const AttendanceSection = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center border border-slate-50">
            <div className="mb-6 text-center">
                <p className="text-xs text-slate-400 font-bold mb-1 tracking-wider uppercase">
                    {time.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })}
                </p>
                <p className="text-5xl font-black text-slate-800 tracking-tighter">
                    {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-[#f0faf5] rounded-2xl p-5 flex flex-col items-center justify-center transition-all active:scale-95 cursor-pointer border border-emerald-50 group hover:border-emerald-200">
                    <p className="text-[#5fc38f] text-xl font-extrabold">上班签到</p>
                    <p className="text-[#5fc38f]/70 text-sm mt-1 font-bold">09:00</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 flex flex-col items-center justify-center transition-all active:scale-95 cursor-pointer border border-slate-100 opacity-60">
                    <p className="text-slate-400 text-xl font-extrabold">下班签退</p>
                    <p className="text-slate-400 text-sm mt-1 font-bold">17:30</p>
                </div>
            </div>
            
            <div className="w-full mt-6 px-1 flex justify-between items-center">
                <div className="flex items-center text-[10px] text-slate-400 font-bold">
                    <LocationPinIcon className="w-4 h-4 mr-1 text-[#5fc38f]" />
                    <span>上海市浦东新区张江路...</span>
                </div>
                <button className="flex items-center text-[10px] text-[#5fc38f] font-black uppercase tracking-widest">
                    <span>刷新</span>
                    <ArrowPathIcon className="w-3.5 h-3.5 ml-1" />
                </button>
            </div>
        </div>
    );
};

const TodoSection = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
    const todos = [
        { id: 'oa', title: 'OA审批', badge: '10+', desc: '王鞞的公出申请等待审批', time: '10分钟前', type: 'urgent', page: 'oa-approval' },
        { id: 'att', title: '考勤异常', badge: '异常', desc: '12月19日存在漏打卡记录', time: '1小时前', type: 'warning', page: 'attendance' },
        { id: 'contract', title: '合同签署', badge: '新', desc: '《全薪保密协议》待签署', time: '2小时前', type: 'info', page: 'contracts' },
        { id: 'perf', title: '绩效确认', badge: '待办', desc: '2025年Q4季度个人绩效指标', time: '昨天', type: 'success', page: 'services' },
    ];

    const typeColors = {
        urgent: 'bg-orange-500 shadow-orange-500/30',
        warning: 'bg-red-500 shadow-red-500/30',
        info: 'bg-blue-500 shadow-blue-500/30',
        success: 'bg-emerald-500 shadow-emerald-500/30',
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
                <div className="flex items-center">
                    <h3 className="font-bold text-slate-900 text-lg">待办事项</h3>
                    <span className="ml-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">12</span>
                </div>
                <button onClick={() => navigateTo('oa-approval')} className="text-slate-400 text-sm font-bold flex items-center hover:text-slate-600 transition-colors">
                    查看全部 <ChevronRightIcon className="w-4 h-4 ml-0.5" />
                </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-50">
                <div className="divide-y divide-slate-50">
                    {todos.map(todo => (
                        <div 
                            key={todo.id} 
                            onClick={() => navigateTo(todo.page)}
                            className="p-5 flex items-center active:bg-slate-50 transition-colors cursor-pointer group"
                        >
                            {/* Status Indicator Dot */}
                            <div className={`w-2 h-2 rounded-full mr-4 flex-shrink-0 shadow-sm ${typeColors[todo.type as keyof typeof typeColors]}`}></div>
                            
                            <div className="flex-grow min-w-0 pr-4">
                                <div className="flex items-center mb-1">
                                    <h4 className="font-extrabold text-slate-800 text-[15px]">{todo.title}</h4>
                                    <span className="ml-2 text-[10px] font-black text-slate-300 uppercase tracking-tighter">{todo.time}</span>
                                </div>
                                <p className="text-slate-500 text-xs truncate font-medium">{todo.desc}</p>
                            </div>

                            <div className="flex-shrink-0">
                                <button className="text-[#5fc38f] text-[11px] font-black px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 group-hover:bg-[#5fc38f] group-hover:text-white transition-all active:scale-90">
                                    去处理
                                </button>
                            </div>
                        </div>
                    ))}
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
        attendance: 'bg-[#eff6ff] text-[#3b82f6]', 
        oa: 'bg-[#fff7ed] text-[#f97316]',         
        employee: 'bg-[#ecfdf5] text-[#10b981]',   
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-50">
            <h3 className="font-bold text-slate-900 text-lg mb-6">人事服务</h3>
            <div className="grid grid-cols-4 gap-x-2 gap-y-6">
                {services.map(service => (
                    <div key={service.name} onClick={service.onClick} className="cursor-pointer group flex flex-col items-center text-center">
                        <div className="relative">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all shadow-sm ${categoryStyles[service.category]}`}>
                                {React.cloneElement(service.icon, { className: 'w-10 h-10' })}
                            </div>
                            {service.hasNotification && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
                            )}
                        </div>
                        <p className="text-[11px] text-slate-700 font-bold mt-3 whitespace-nowrap">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DailyPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    return (
        <div className="w-full flex flex-col min-h-full bg-[#f8fbfd]">
            {/* Top Navigation Bar with Page Title */}
            <header className="bg-white px-4 h-12 flex items-center justify-center border-b border-slate-50 sticky top-0 z-20">
                <h2 className="text-slate-800 font-black text-base tracking-tight">员工日常</h2>
                <div className="absolute right-4 flex items-center space-x-3 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-900"></div>
                    <div className="w-4 h-4 rounded-full border border-slate-900 flex items-center justify-center ml-1">
                        <div className="w-2 h-2 rounded-full border-2 border-slate-900"></div>
                    </div>
                </div>
            </header>

            <main className="flex-grow p-4 space-y-7 pb-24">
                <ProfileCard navigateTo={navigateTo} />
                
                <AttendanceSection />
                
                <TodoSection navigateTo={navigateTo} />
                
                <HrServicesSection navigateTo={navigateTo} />
            </main>
        </div>
    );
};

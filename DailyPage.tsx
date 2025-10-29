import React, { useState, useEffect } from 'react';
import type { IconProps } from './icons';
// FIX: Import UserCircleIcon to resolve reference error.
import {
    ChevronRightIcon,
    LocationPinIcon,
    ArrowPathIcon,
    CalendarIcon,
    DocumentTextIcon,
    UsersIcon,
    DocumentMagnifyingGlassIcon,
    ClipboardDocumentCheckIcon,
    BuildingOfficeIcon,
    ChevronDownIcon,
    UserCircleIcon,
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

// A standardized card for displaying user information on main pages.
const UserHeaderCard = () => (
    <div className="p-5 bg-white rounded-xl shadow-sm">
         <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <UserCircleIcon className="w-16 h-16 text-slate-500" />
                <div>
                    <h2 className="font-bold text-2xl text-slate-800">hand</h2>
                    <p className="text-sm text-slate-500 mt-1">人事主管 员工</p>
                </div>
            </div>
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
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center mb-6">
                <p className="text-sm text-slate-500 mb-2">
                    {time.toLocaleDateString('zh-CN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-4xl font-bold text-slate-800 tracking-wider">
                    {time.toLocaleTimeString('en-GB')}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button 
                    className="bg-slate-200 text-slate-500 rounded-xl py-4 text-center shadow-sm cursor-not-allowed"
                    disabled
                >
                    <p className="text-lg font-semibold">已签到</p>
                    <p className="text-sm mt-1">08:55</p>
                </button>
                <button 
                    className="bg-[#5fc38f] text-white rounded-xl py-4 text-center shadow-sm transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <p className="text-lg font-semibold">下班签退</p>
                    <p className="text-sm text-green-200 mt-1">17:30</p>
                </button>
            </div>
            
            <div className="w-full mt-6 flex justify-between items-center text-sm">
                <div className="flex items-center text-slate-500">
                    <LocationPinIcon className="w-4 h-4 mr-1.5 text-slate-400" />
                    <span>未进入考勤范围</span>
                </div>
                <button className="flex items-center text-[#5fc38f] font-medium">
                    刷新 <ArrowPathIcon className="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

const TodoSection = () => {
    const todos = [
        { task: '杨佳军的年假申请', time: '1小时前' },
        { task: '马海荣的年假申请', time: '3小时前' },
        { task: '马海荣的年假申请', time: '昨天 10:45' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b border-slate-100">
                <div className="flex items-center">
                    <h3 className="font-bold text-slate-900 text-base">待办</h3>
                    <span className="ml-2 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                </div>
                <button className="flex items-center text-sm text-slate-400 hover:text-[#5Fc38f]">
                    <span>查看审批</span>
                    <ChevronRightIcon className="w-4 h-4 ml-0.5" />
                </button>
            </div>
            
            <div className="divide-y divide-slate-100">
                {todos.map((todo, index) => (
                    <div key={index} className="p-4 flex items-center cursor-pointer hover:bg-slate-50">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                        <div className="flex-grow">
                            <p className="text-slate-800 font-medium text-sm">{todo.task}</p>
                            <p className="text-slate-400 text-xs mt-1">{todo.time}</p>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const HrServicesSection = () => {
    type ServiceCategory = 'attendance' | 'oa' | 'employee';

    // FIX: Use React.ReactElement for icon type to ensure it's a clonnable element
    // and to resolve the "Cannot find namespace 'JSX'" error.
    interface Service {
        name: string;
        // FIX: Specify IconProps generic for React.ReactElement to allow passing className via cloneElement.
        icon: React.ReactElement<IconProps>;
        category: ServiceCategory;
        hasNotification?: boolean;
    }

    const services: Service[] = [
        { name: '考勤日历', icon: <CalendarIcon />, category: 'attendance' },
        { name: '考勤查询', icon: <DocumentMagnifyingGlassIcon />, category: 'attendance' },
        { name: '请假公出', icon: <DocumentTextIcon />, category: 'attendance' },
        { name: 'OA审批', icon: <ClipboardDocumentCheckIcon />, category: 'oa', hasNotification: true },
        { name: '员工服务', icon: <UsersIcon />, category: 'employee' },
    ];
    
    const categoryStyles: Record<ServiceCategory, string> = {
        attendance: 'bg-blue-50 text-blue-500',
        oa: 'bg-orange-50 text-orange-500',
        employee: 'bg-emerald-50 text-emerald-500',
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-base mb-5">人事</h3>
            <div className="grid grid-cols-4 gap-y-5">
                {services.map(service => (
                    <div key={service.name} className="cursor-pointer group flex flex-col items-center text-center">
                        <div className="relative">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:brightness-95 transition-all ${categoryStyles[service.category]}`}>
                                {React.cloneElement(service.icon, { className: 'w-7 h-7' })}
                            </div>
                            {service.hasNotification && (
                                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                            )}
                        </div>
                        <p className="text-xs text-slate-600 font-medium mt-2">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DailyPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    return (
        <div className="w-full flex flex-col min-h-full bg-slate-100">
            <CompanySelectorHeader />
            <main className="flex-grow p-4 space-y-4 pb-24">
                <UserHeaderCard />
                <AttendanceSection />
                <TodoSection />
                <HrServicesSection />
            </main>
        </div>
    );
};

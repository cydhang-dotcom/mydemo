import React, { useState, useEffect } from 'react';
import {
    ChevronRightIcon,
    LocationPinIcon,
    ArrowPathIcon,
    CalendarIcon,
    DocumentTextIcon,
    UsersIcon,
    UserCircleIcon,
    DocumentMagnifyingGlassIcon,
    ClipboardDocumentCheckIcon,
    BuildingOfficeIcon,
    ChevronDownIcon,
} from './icons';

const DailyHeader = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => (
    <div className="bg-[#5Fc38f] px-6 pt-6 pb-16 text-white">
        <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => alert('切换公司')}>
                <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center mr-3">
                   <BuildingOfficeIcon className="w-5 h-5"/>
                </div>
                <h1 className="text-white font-semibold text-base">上海云才网络技术有限公司</h1>
                <ChevronDownIcon className="w-5 h-5 ml-1.5 text-white/70 group-hover:text-white transition-colors" />
            </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <UserCircleIcon className="w-16 h-16 text-white/80" />
                <div>
                    <h2 className="font-bold text-2xl">hand</h2>
                    <p className="text-sm text-green-200 mt-1">人事主管 员工</p>
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
                <button className="flex items-center text-sm text-slate-400 hover:text-[#5fc38f]">
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
    const services = [
        { name: '考勤日历', icon: <CalendarIcon /> },
        { name: '考勤查询', icon: <DocumentMagnifyingGlassIcon /> },
        { name: '请假公出', icon: <DocumentTextIcon /> },
        { name: 'OA审批', icon: <ClipboardDocumentCheckIcon />, hasNotification: true },
        { name: '员工服务', icon: <UsersIcon /> },
    ];
    
    return (
        <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="font-bold text-slate-900 text-base mb-5">人事</h3>
            <div className="grid grid-cols-4 gap-y-5 text-center">
                {services.map(service => (
                    <div key={service.name} className="cursor-pointer relative">
                        <div className="w-14 h-14 bg-green-100/60 text-[#5fc38f] rounded-2xl flex items-center justify-center mx-auto mb-2">
                            {React.cloneElement(service.icon, { className: 'w-7 h-7' })}
                        </div>
                        <p className="text-xs text-slate-600 font-medium">{service.name}</p>
                        {service.hasNotification && <span className="absolute top-[-4px] right-[calc(50%-32px)] w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DailyPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    return (
        <div className="w-full flex flex-col min-h-full bg-slate-100">
            <DailyHeader navigateTo={navigateTo} />
            <main className="flex-grow p-4 space-y-4 -mt-10 pb-24">
                <AttendanceSection />
                <TodoSection />
                <HrServicesSection />
            </main>
        </div>
    );
};
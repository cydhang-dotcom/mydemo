import React from 'react';
import {
    ChevronRightIcon,
    LocationPinIcon,
    ArrowPathIcon,
    CalendarIcon,
    DocumentTextIcon,
    UsersIcon,
    DocumentMagnifyingGlassIcon,
    ClipboardDocumentCheckIcon,
    UserCircleIcon,
} from './icons';

const UserHeader = () => (
    <div className="bg-white p-4 flex items-center border-b border-slate-100">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3 text-slate-400">
            <UserCircleIcon className="w-8 h-8" />
        </div>
        <div>
            <p className="font-semibold text-slate-900">hand</p>
            <p className="text-sm text-slate-500">人事主管 员工</p>
        </div>
    </div>
);

const AttendanceCard = () => (
    <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 text-lg">考勤</h3>
            <button className="text-sm text-slate-400 hover:text-slate-600 flex items-center">
                详情 <ChevronRightIcon className="!w-4 !h-4" />
            </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-green-50 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 transition-colors">
                <p className="font-bold text-lg text-green-600">上班签到</p>
                <p className="text-sm mt-1 text-slate-500">09:00</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center cursor-pointer hover:bg-green-100 transition-colors">
                <p className="font-bold text-lg text-green-600">下班签退</p>
                <p className="text-sm mt-1 text-slate-500">17:30</p>
            </div>
        </div>
        <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-slate-500">
                <LocationPinIcon className="w-4 h-4 mr-1.5 text-green-500" />
                <span>未进入考勤范围</span>
            </div>
            <button className="flex items-center text-green-600 font-semibold">
                刷新位置 <ArrowPathIcon className="w-4 h-4 ml-1" />
            </button>
        </div>
    </div>
);

const TodoCard = () => (
    <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-bold text-slate-900 text-lg mb-3">待办</h3>
        <div className="flex justify-between items-start">
            <div className="space-y-2 text-slate-700">
                <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="font-semibold">OA审批</span>
                    <span className="ml-2 bg-orange-100 text-orange-500 text-xs font-semibold px-2 py-0.5 rounded-full">3待处理</span>
                </div>
                <ul className="pl-5 space-y-1 text-sm text-slate-500">
                    <li>杨佳军的年假申请</li>
                    <li>马海荣的年假申请</li>
                    <li>马海荣的年假申请</li>
                </ul>
            </div>
            <button className="flex-shrink-0 mt-2 px-4 py-1.5 text-sm font-semibold text-green-600 border border-green-500 rounded-full hover:bg-green-50 transition-colors">
                查看审批
            </button>
        </div>
    </div>
);


const HrServicesCard = () => {
    const services = [
        { name: '考勤日历', icon: <CalendarIcon className="w-6 h-6" />, color: 'blue' },
        { name: '考勤查询', icon: <DocumentMagnifyingGlassIcon className="w-6 h-6" />, color: 'blue' },
        { name: '请假公出', icon: <DocumentTextIcon className="w-6 h-6" />, color: 'blue' },
        { name: 'OA审批', icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />, color: 'orange', hasNotification: true },
        { name: '员工服务', icon: <UsersIcon className="w-6 h-6" />, color: 'green' },
    ];
    
    const colors: { [key: string]: string } = {
        blue: 'bg-blue-100 text-blue-500',
        orange: 'bg-orange-100 text-orange-500',
        green: 'bg-green-100 text-green-500',
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-bold text-slate-900 text-lg mb-4">人事</h3>
            <div className="grid grid-cols-4 gap-y-5 text-center">
                {services.map(service => (
                    <div key={service.name} className="cursor-pointer group relative">
                        <div className={`w-14 h-14 ${colors[service.color]} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:brightness-95 transition-all`}>
                            {service.icon}
                        </div>
                        <p className="text-xs text-slate-600 font-medium">{service.name}</p>
                        {service.hasNotification && <span className="absolute top-0 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DailyPage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    return (
        <div className="w-full flex flex-col min-h-full bg-slate-100">
            <UserHeader />
            <main className="flex-grow p-4 space-y-4">
                <AttendanceCard />
                <TodoCard />
                <HrServicesCard />
            </main>
        </div>
    );
};

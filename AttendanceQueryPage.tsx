
import React, { useState } from 'react';
import { Header } from './Header';
import { SearchIcon, FunnelIcon } from './icons';
import { attendanceQueryData } from './mockdata/attendance';

export const AttendanceQueryPage = ({ onBack }: { onBack: () => void }) => {
    const [activeTab, setActiveTab] = useState('全部');
    const tabs = ['全部', '正常', '异常'];

    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Header title="考勤查询" onBack={onBack} />
            
            <div className="p-4 bg-white sticky top-16 z-10 border-b border-slate-100 flex-shrink-0">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                        type="search"
                        placeholder="请输入姓名"
                        className="w-full bg-slate-100 placeholder:text-slate-400 text-slate-800 rounded-lg border-none pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-[#5fc38f]"
                    />
                </div>

                <div className="flex items-center justify-between mt-4 px-2">
                    <div className="flex space-x-8">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-base font-medium relative transition-colors ${
                                    activeTab === tab ? 'text-[#5fc38f]' : 'text-slate-500'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5fc38f] rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center text-[#5fc38f] text-sm font-medium">
                        <FunnelIcon className="w-5 h-5 mr-1" />
                        筛选
                    </button>
                </div>
            </div>

            <main className="flex-grow overflow-y-auto bg-slate-100/50">
                {attendanceQueryData.map((group, idx) => (
                    <div key={idx}>
                        <div className="px-4 py-3 text-slate-500 text-sm font-medium bg-slate-50 border-y border-slate-100">
                            {group.date}
                        </div>
                        <div className="bg-white divide-y divide-slate-100">
                            {group.records.map(record => (
                                <div key={record.id} className="flex items-center px-4 py-4 hover:bg-slate-50 transition-colors">
                                    <div className={`w-12 h-12 ${record.color} text-white font-bold text-base rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                                        {record.avatar}
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold text-slate-800 text-base">{record.name}</p>
                                        <div className="mt-1 flex items-center text-xs text-slate-400 space-x-2">
                                            <span>上班</span>
                                            <span className={record.checkIn.includes('未打卡') ? 'text-orange-500' : 'text-slate-500'}>
                                                {record.checkIn}
                                            </span>
                                            <span>时长 {record.duration}</span>
                                            <span>下班</span>
                                            <span className={record.checkOut.includes('未打卡') ? 'text-orange-500' : 'text-slate-500'}>
                                                {record.checkOut}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                
                <div className="py-8 flex items-center justify-center text-slate-300 text-sm space-x-4">
                    <div className="w-16 h-px bg-slate-200"></div>
                    <span>没有更多数据了</span>
                    <div className="w-16 h-px bg-slate-200"></div>
                </div>
            </main>
        </div>
    );
};

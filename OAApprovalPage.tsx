
import React, { useState } from 'react';
import { Header } from './Header';
import { SearchIcon, ChevronDownIcon, BuildingOfficeIcon, LocationPinIcon, ImageIcon, PillIcon, UmbrellaIcon, BriefcaseIcon, CheckIcon, UserCircleIcon } from './icons';
import { approvalsData } from './mockdata/approvals';

export const OAApprovalPage = ({ onBack }: { onBack: () => void }) => {
    const [activeMainTab, setActiveMainTab] = useState('待处理');
    const [activeSubTab, setActiveSubTab] = useState('全部');
    const [activeFooterTab, setActiveFooterTab] = useState('我审批的');

    const mainTabs = [
        { name: '待处理', badge: 28 },
        { name: '已处理' }
    ];

    const subTabs = ['全部', '合同', '考勤'];
    
    const footerTabs = [
        { name: '我提交的' },
        { name: '我审批的', hasBadge: true },
        { name: '审批统计' }
    ];

    const getIcon = (type: string) => {
        const props = { className: "w-6 h-6 text-emerald-500" };
        switch (type) {
            case 'briefcase': return <BriefcaseIcon {...props} />;
            case 'pill': return <PillIcon {...props} />;
            case 'umbrella': return <UmbrellaIcon {...props} />;
            default: return <BriefcaseIcon {...props} />;
        }
    };

    return (
        <div className="w-full bg-slate-100 h-screen flex flex-col relative">
            <Header title="OA审批" onBack={onBack} />
            
            <div className="bg-white p-4 border-b border-slate-100 space-y-4 flex-shrink-0">
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

                <div className="flex justify-around">
                    {mainTabs.map(tab => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveMainTab(tab.name)}
                            className={`flex items-center pb-2 px-4 font-bold text-base relative ${
                                activeMainTab === tab.name ? 'text-[#5fc38f]' : 'text-slate-500'
                            }`}
                        >
                            {tab.name}
                            {tab.badge && <span className="ml-1 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5">{tab.badge}</span>}
                            {activeMainTab === tab.name && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5fc38f] rounded-full"></div>}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        {subTabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveSubTab(tab)}
                                className={`px-4 py-1 rounded-full text-xs border ${
                                    activeSubTab === tab 
                                    ? 'bg-[#5fc38f]/10 border-[#5fc38f] text-[#5fc38f]' 
                                    : 'border-slate-200 text-slate-600'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center text-xs text-[#5fc38f] border border-slate-200 rounded px-2 py-1">
                        全部状态 <ChevronDownIcon className="w-3 h-3 ml-1" />
                    </button>
                </div>
            </div>

            <main className="flex-grow overflow-y-auto p-4 space-y-4 pb-24">
                {approvalsData.map(item => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 relative">
                        <div className="absolute top-4 right-4 bg-slate-100 text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold">
                            {item.status}
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 border border-slate-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                {getIcon(item.iconType)}
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center flex-wrap gap-2">
                                    <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                                    {item.signed && <span className="text-[10px] text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">已签到</span>}
                                    {item.hasLocation && <LocationPinIcon className="w-4 h-4 text-emerald-500" />}
                                    {item.hasImage && <ImageIcon className="w-4 h-4 text-emerald-500" />}
                                </div>
                                <div className="mt-3 space-y-1.5">
                                    <p className="text-xs text-slate-500">
                                        <span className="w-16 inline-block">{item.type}时间:</span>
                                        <span className="text-slate-800">{item.period}</span>
                                    </p>
                                    {item.entity && (
                                        <p className="text-xs text-slate-500">
                                            <span className="w-16 inline-block">{item.type}公司:</span>
                                            <span className="text-slate-800">{item.entity}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 border-t border-slate-50 flex items-center">
                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                <span className="text-[10px] text-blue-500 font-bold">{item.submitter.slice(-1)}</span>
                            </div>
                            <span className="text-xs text-slate-400">由 <span className="text-slate-800 font-medium">{item.submitter}</span> 提交</span>
                        </div>
                    </div>
                ))}
            </main>

            {/* Floating Bulk Approval Button */}
            <button className="fixed bottom-24 right-6 w-14 h-14 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-slate-100 z-30 group active:scale-95 transition-transform">
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center mb-0.5">
                    <CheckIcon className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[10px] text-slate-500 font-medium">批量审批</span>
            </button>

            {/* Sub-Footer Approval Navigation */}
            <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex h-14 z-20">
                {footerTabs.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveFooterTab(tab.name)}
                        className={`flex-grow flex flex-col items-center justify-center text-xs relative ${
                            activeFooterTab === tab.name ? 'text-[#5fc38f] font-bold' : 'text-slate-500'
                        }`}
                    >
                        {tab.name}
                        {tab.hasBadge && <div className="absolute top-3 right-1/4 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>}
                    </button>
                ))}
            </nav>
        </div>
    );
};

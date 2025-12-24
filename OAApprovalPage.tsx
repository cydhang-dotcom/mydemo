
import React, { useState } from 'react';
import { Header } from './Header';
import { 
    SearchIcon, 
    LocationPinIcon, 
    PillIcon, 
    UmbrellaIcon, 
    BriefcaseIcon, 
    CheckIcon,
    ChevronRightIcon,
    DocumentTextIcon,
    ClockIcon,
    BackIcon,
    MoreIcon,
    MinusIcon,
    BullseyeIcon
} from './icons';
import { approvalsData } from './mockdata/approvals';

export const OAApprovalPage = ({ onBack, navigateTo }: { onBack: () => void, navigateTo: (page: string, params?: any) => void }) => {
    const [activeMainTab, setActiveMainTab] = useState('待处理');
    const [activeSubTab, setActiveSubTab] = useState('全部');

    const mainTabs = [
        { name: '待处理', badge: 28 },
        { name: '已处理' }
    ];

    const subTabs = ['全部', '合同', '考勤'];
    
    const getIcon = (type: string) => {
        const props = { className: "w-5 h-5" };
        switch (type) {
            case 'briefcase': return <div className="p-2 rounded-xl bg-emerald-50 text-emerald-500"><BriefcaseIcon {...props} /></div>;
            case 'pill': return <div className="p-2 rounded-xl bg-orange-50 text-orange-500"><PillIcon {...props} /></div>;
            case 'umbrella': return <div className="p-2 rounded-xl bg-blue-50 text-blue-500"><UmbrellaIcon {...props} /></div>;
            default: return <div className="p-2 rounded-xl bg-slate-50 text-slate-500"><BriefcaseIcon {...props} /></div>;
        }
    };

    return (
        <div className="w-full bg-[#f8fbfd] h-screen flex flex-col relative">
            <header className="bg-white px-4 pt-6 pb-2 border-b border-slate-50 sticky top-0 z-30">
                <div className="grid grid-cols-3 items-center h-10 mb-2">
                    <button onClick={onBack} className="justify-self-start p-1 -ml-1">
                        <BackIcon className="w-6 h-6 text-slate-800" />
                    </button>
                    <h1 className="justify-self-center text-lg font-bold text-slate-800">审批列表</h1>
                    <div className="justify-self-end flex items-center space-x-2 border border-slate-200 rounded-full px-2 py-1">
                        <MoreIcon className="w-4 h-4 text-slate-800" />
                        <div className="w-4 h-4 text-slate-300 flex items-center justify-center"><MinusIcon className="w-3 h-3" /></div>
                        <BullseyeIcon className="w-4 h-4 text-slate-800" />
                    </div>
                </div>

                <div className="flex justify-between items-end px-2 mt-4">
                    <div className="flex space-x-6">
                        {mainTabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveMainTab(tab.name)}
                                className={`flex items-center pb-2 px-1 font-bold text-[15px] relative transition-all ${
                                    activeMainTab === tab.name ? 'text-slate-900' : 'text-slate-400'
                                }`}
                            >
                                {tab.name}
                                {tab.badge && <span className="ml-1 text-[11px] font-bold bg-red-500 text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center shadow-sm">{tab.badge}</span>}
                                {activeMainTab === tab.name && <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#5fc38f] rounded-full"></div>}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        {subTabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveSubTab(tab)}
                                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                                    activeSubTab === tab ? 'bg-slate-800 text-white' : 'text-slate-400 border border-slate-100'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-grow overflow-y-auto p-4 space-y-3 pb-24">
                {approvalsData.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => navigateTo('oa-approval-detail', { approvalId: item.id })}
                        className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50 active:bg-slate-50 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-500 border-2 border-white shadow-sm">
                                    <span className="text-sm">{item.submitter.slice(-2)}</span>
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-bold text-slate-800 text-base">{item.submitter}</h4>
                                    <div className="flex items-center text-[12px] text-slate-400 mt-0.5 font-medium">
                                        <ClockIcon className="w-3.5 h-3.5 mr-1" />
                                        <span>12-19 08:20</span>
                                    </div>
                                </div>
                            </div>
                            <span className="text-[11px] font-bold text-[#5fc38f] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/50">
                                {item.status}
                            </span>
                        </div>

                        <div className="flex items-center space-x-4 bg-slate-50/50 rounded-xl p-3 border border-slate-50">
                            {getIcon(item.iconType)}
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-slate-800">{item.title}</p>
                                <p className="text-[12px] text-slate-500 mt-1 font-medium line-clamp-1">{item.entity || item.period}</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 text-slate-300" />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

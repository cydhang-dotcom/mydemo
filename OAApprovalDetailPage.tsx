
import React from 'react';
import { 
    BackIcon, MoreIcon, MinusIcon, BullseyeIcon, 
    ChevronRightIcon, BriefcaseIcon, CheckIcon, UserCircleIcon
} from './icons';

export const OAApprovalDetailPage = ({ onBack, approvalId }: { onBack: () => void, approvalId: string }) => {
    const data = {
        submitter: "王鞞",
        dept: "客户服务部",
        type: "公出",
        duration: "1天",
        time: "2025-12-19 09:00 ~ 2025-12-19 17:30",
        unit: "社保事务办理公积金事务办理",
        flow: [
            { id: 'f1', role: '发起', user: '王鞞', time: '2025-12-19 08:20', status: 'completed' },
            { id: 'f2', role: '部门审批', user: '王鞞', time: '2025-12-19 08:20', status: 'completed' },
            { id: 'f3', role: '人事审批', users: '杭志平, 云才网络, 王振东, 傅小燕', status: 'pending' }
        ]
    };

    return (
        <div className="w-full h-screen bg-slate-50 flex flex-col font-sans">
            <header className="bg-white px-4 pt-6 pb-4 flex-shrink-0">
                <div className="grid grid-cols-3 items-center h-10 mb-6">
                    <button onClick={onBack} className="justify-self-start p-1 -ml-1">
                        <BackIcon className="w-6 h-6 text-slate-800" />
                    </button>
                    <h1 className="justify-self-center text-lg font-bold text-slate-800">审批详情</h1>
                    <div className="justify-self-end flex items-center space-x-2 border border-slate-200 rounded-full px-2 py-1">
                        <MoreIcon className="w-4 h-4 text-slate-800" />
                        <div className="w-4 h-4 text-slate-300 flex items-center justify-center"><MinusIcon className="w-3 h-3" /></div>
                        <BullseyeIcon className="w-4 h-4 text-slate-800" />
                    </div>
                </div>

                <div className="flex items-center justify-center px-4 mb-4">
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-[#7dbce3] rounded-full flex items-center justify-center text-white font-semibold text-lg border-4 border-white shadow-sm mb-2">
                            {data.submitter.slice(-2)}
                        </div>
                        <p className="text-sm font-bold text-slate-800">{data.submitter}</p>
                        <p className="text-[11px] text-slate-400 font-semibold">{data.dept}</p>
                    </div>

                    <div className="flex-grow mx-4 relative">
                        <div className="h-px bg-slate-100 w-full"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#effbf6] shadow-sm mb-2">
                             <div className="w-10 h-10 bg-[#5fc38f] rounded-full flex items-center justify-center text-white">
                                <BriefcaseIcon className="w-6 h-6" />
                             </div>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{data.type}</p>
                        <p className="text-[11px] text-slate-400 font-semibold">{data.duration}</p>
                    </div>
                </div>
            </header>

            <main className="flex-grow overflow-y-auto pt-4 space-y-4 pb-32">
                <section className="bg-white p-6 shadow-sm border-b border-slate-50">
                    <h3 className="text-base font-bold text-slate-900 mb-6">申请信息</h3>
                    <div className="space-y-5">
                        <div className="space-y-1">
                            <p className="text-sm text-slate-400 font-semibold">公出时间</p>
                            <p className="text-base font-bold text-slate-800">{data.time}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-slate-400 font-semibold">单位</p>
                            <p className="text-base font-bold text-slate-800 leading-relaxed">{data.unit}</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
                    <span className="text-base font-bold text-slate-600">查看考勤信息</span>
                    <ChevronRightIcon className="text-slate-300 w-5 h-5" />
                </section>

                <section className="bg-white p-6 shadow-sm">
                    <h3 className="text-base font-bold text-slate-900 mb-8">审批流程</h3>
                    
                    <div className="relative pl-2">
                        <div className="absolute left-[13px] top-4 bottom-4 w-px bg-slate-100"></div>

                        <div className="space-y-8">
                            {data.flow.map((step) => (
                                <div key={step.id} className="relative flex items-start pl-8">
                                    <div className="absolute left-0 top-0.5">
                                        {step.status === 'completed' ? (
                                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 bg-[#5fc38f] rounded-full flex items-center justify-center text-white border-4 border-[#effbf6]">
                                                    <CheckIcon className="w-3 h-3" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-slate-200 rounded-full flex items-center justify-center bg-white">
                                                    <UserCircleIcon className="w-4 h-4 text-slate-300" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center mb-3">
                                            <h4 className={`text-sm font-bold ${step.status === 'completed' ? 'text-[#5fc38f]' : 'text-slate-400'}`}>
                                                {step.role}
                                            </h4>
                                        </div>

                                        <div className={`rounded-xl p-4 ${step.status === 'completed' ? 'bg-[#effbf6]' : 'bg-slate-50'}`}>
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                                                    <span className="text-slate-400 font-medium">
                                                        {step.user ? '发起人：' : '可审批人：'}
                                                    </span>
                                                    {step.user || step.users}
                                                </p>
                                                {step.time && <span className="text-[11px] text-slate-400 font-bold ml-2 whitespace-nowrap">{step.time}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 flex space-x-4 z-40 max-w-md mx-auto">
                <button 
                    onClick={onBack}
                    className="flex-1 py-3.5 rounded-full font-bold text-lg text-[#f44336] border border-[#f44336] active:bg-red-50 transition-colors"
                >
                    驳回
                </button>
                <button 
                    onClick={onBack}
                    className="flex-grow-[2] py-3.5 rounded-full font-bold text-lg text-white bg-[#5fc38f] shadow-lg shadow-[#5fc38f]/20 active:scale-95 transition-all"
                >
                    同意
                </button>
            </footer>
        </div>
    );
};

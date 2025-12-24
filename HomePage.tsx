
import React from 'react';
import { 
    WalletIcon, ReceiptTaxIcon, ShieldCheckIcon, DocumentTextIcon, CalendarIcon, CogIcon,
    UserCircleIcon, TicketIcon, FolderIcon, ShareIcon, BuildingOfficeIcon,
    ChevronRightIcon,
    ChevronDownIcon 
} from './icons';
import { servicesData } from './mockdata';
import type { ServiceStatus } from './types';

const ProfileCard = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => (
    <div 
        onClick={() => navigateTo('employee-info')}
        className="mx-4 mt-4 mb-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-50 flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all"
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
                    <h2 className="font-bold text-xl text-slate-900 leading-none">杭志平</h2>
                    <span className="ml-2 bg-slate-100 text-slate-500 text-[11px] px-1.5 py-0.5 rounded font-semibold">研发总监</span>
                </div>
                
                <div 
                    className="flex items-center mt-2 group/company"
                    onClick={(e) => { e.stopPropagation(); alert('切换公司'); }}
                >
                    <span className="text-xs text-slate-400 font-medium group-hover/company:text-[#5fc38f] transition-colors truncate max-w-[180px]">
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

const statusStyles: { [key in ServiceStatus]: string } = {
    '未处理': 'text-orange-600 bg-orange-50 border-orange-100',
    '处理中': 'text-blue-600 bg-blue-50 border-blue-100',
    '完成': 'text-slate-500 bg-slate-50 border-slate-100'
};

const statusDots: { [key in ServiceStatus]: string } = {
    '未处理': 'bg-orange-400',
    '处理中': 'bg-blue-500',
    '完成': 'bg-slate-300'
};

export const HomePage = ({ navigateTo }: { navigateTo: (page: string, params?: any) => void; }) => {
    const mainActions = [
        { name: '工资单', icon: <WalletIcon />, action: () => navigateTo('payslip') },
        { name: '个税', icon: <ReceiptTaxIcon />, action: () => navigateTo('tax') },
        { name: '五险一金', icon: <ShieldCheckIcon />, action: () => navigateTo('insurance') },
        { name: '合同协议', icon: <DocumentTextIcon />, action: () => navigateTo('contracts') },
        { name: '考勤汇总', icon: <CalendarIcon />, action: () => navigateTo('attendance') },
    ];
    
    const serviceItems = servicesData.slice(0, 3);
    const inProgressCount = servicesData.filter(s => s.status === '处理中').length;

    const settingItems = [
        { name: '个人信息', icon: <UserCircleIcon />, action: () => navigateTo('employee-info') },
        { name: '优惠券', icon: <TicketIcon />, action: () => navigateTo('coupons') },
        { name: '档案包', icon: <FolderIcon />, action: () => navigateTo('documents') },
        { name: '分享班步', icon: <ShareIcon />, action: () => navigateTo('share') },
        { name: '设置', icon: <CogIcon />, action: () => {} },
    ];

    return (
         <div className="w-full flex flex-col min-h-full bg-[#f8fbfd]">
            <header className="bg-white px-4 h-12 flex items-center justify-center border-b border-slate-50 sticky top-0 z-20">
                <h2 className="text-slate-800 font-bold text-base">我的</h2>
                <div className="absolute right-4 flex items-center space-x-3 bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-900"></div>
                    <div className="w-4 h-4 rounded-full border border-slate-900 flex items-center justify-center ml-1">
                        <div className="w-2 h-2 rounded-full border-2 border-slate-900"></div>
                    </div>
                </div>
            </header>
                
            <main className="flex-grow pb-24 space-y-6">
                <ProfileCard navigateTo={navigateTo} />
                
                <div className="px-4 space-y-6">
                    <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-50">
                        <h3 className="font-bold text-slate-900 mb-6 text-base px-1">我的服务入口</h3>
                        <div className="grid grid-cols-4 gap-y-6 text-center">
                            {mainActions.map(action => (
                                <div key={action.name} onClick={action.action} className="cursor-pointer group flex flex-col items-center">
                                    <div className="w-14 h-14 bg-emerald-50/50 text-[#5fc38f] rounded-2xl flex items-center justify-center mb-2.5 transition-all group-active:scale-95 border border-emerald-50/50">
                                      {React.cloneElement(action.icon, { className: 'w-7 h-7' })}
                                    </div>
                                    <p className="text-[12px] text-slate-600 font-semibold">{action.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-50">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <h3 className="font-bold text-slate-900 text-lg">办理进度</h3>
                                {inProgressCount > 0 && (
                                    <span className="ml-2.5 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                                        {inProgressCount}
                                    </span>
                                )}
                            </div>
                            <button onClick={() => navigateTo('services')} className="text-sm font-bold text-slate-400 hover:text-[#5fc38f] transition-colors flex items-center">
                                全部 <ChevronRightIcon className="w-4 h-4 ml-0.5" />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {serviceItems.map((item) => (
                               <div 
                                   key={item.id} 
                                   onClick={() => navigateTo('service-details', { serviceId: item.id })} 
                                   className="flex justify-between items-center p-3 rounded-xl border border-slate-50 bg-slate-50/30 group cursor-pointer hover:bg-slate-50 transition-all active:scale-[0.98]"
                               >
                                   <div className="flex items-center">
                                       <div className={`w-2 h-2 rounded-full mr-3 ${statusDots[item.status]}`}></div>
                                       <div className="flex flex-col">
                                           <p className="font-bold text-sm text-slate-800 group-hover:text-[#5fc38f] transition-colors">{item.type}</p>
                                           <p className="text-[12px] text-slate-400 mt-0.5 font-medium">对象: {item.target}</p>
                                       </div>
                                   </div>
                                   <div className="flex items-center">
                                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${statusStyles[item.status]}`}>
                                            {item.status}
                                        </span>
                                        <ChevronRightIcon className="w-4 h-4 ml-2 text-slate-300" />
                                   </div>
                               </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-50">
                       {settingItems.map((item) => (
                           <div 
                                key={item.name} 
                                onClick={item.action} 
                                className="flex justify-between items-center p-4.5 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 transition-colors"
                            >
                               <div className="flex items-center space-x-4">
                                   <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50/50 text-[#5fc38f]">
                                        {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                                   </div>
                                   <span className="text-base font-bold text-slate-700">{item.name}</span>
                               </div>
                               <ChevronRightIcon className="text-slate-200" />
                           </div>
                       ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

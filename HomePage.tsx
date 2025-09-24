import React from 'react';
import { 
    WalletIcon, ReceiptTaxIcon, ShieldCheckIcon, DocumentTextIcon, CalendarIcon, CogIcon,
    UserCircleIcon, TicketIcon, FolderIcon, ShareIcon, BuildingOfficeIcon,
    ChevronRightIcon,
    ChevronDownIcon 
} from './icons';
import { servicesData } from './mockdata';

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
         <div className="w-full flex flex-col min-h-full bg-slate-100">
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
                    <div onClick={() => navigateTo('employee-info')} className="flex items-center text-sm font-medium text-white/90 cursor-pointer group hover:text-white transition-colors">
                        <span>个人资料</span>
                        <ChevronRightIcon className="!w-5 !h-5 ml-1 !text-inherit group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </div>
            </div>
                
            <main className="flex-grow -mt-10 px-4 pb-24">
                <div className="space-y-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-5 text-base">我的</h3>
                        <div className="grid grid-cols-4 gap-y-5 text-center">
                            {mainActions.map(action => (
                                <div key={action.name} onClick={action.action} className="cursor-pointer group">
                                    <div className="w-14 h-14 bg-green-100/60 text-[#5Fc38f] rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:brightness-95 transition-all">
                                      {React.cloneElement(action.icon, { className: 'w-7 h-7' })}
                                    </div>
                                    <p className="text-xs text-slate-600 font-medium">{action.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <h3 className="font-bold text-slate-900 text-base">我的服务</h3>
                                {inProgressCount > 0 && <div className="ml-2 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">{inProgressCount}</div>}
                            </div>
                            <button onClick={() => navigateTo('services')} className="text-sm text-slate-400 hover:text-[#5Fc38f] flex items-center">详情 <ChevronRightIcon/></button>
                        </div>
                        <div className="space-y-2">
                            {serviceItems.map((item, i) => (
                               <div key={i} onClick={() => navigateTo('service-details', { serviceId: item.id })} className="flex justify-between items-center p-3 -m-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                                   <div>
                                       <p className="font-semibold text-sm text-slate-800">{item.type}</p>
                                       <p className="text-xs text-slate-400 mt-1">服务对象: {item.target}</p>
                                   </div>
                                   <ChevronRightIcon />
                               </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm">
                       {settingItems.map((item) => (
                           <div key={item.name} onClick={item.action} className="flex justify-between items-center p-4 hover:bg-slate-50 cursor-pointer first:rounded-t-xl last:rounded-b-xl">
                               <div className="flex items-center space-x-4 text-slate-800">
                                   <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100/60 text-[#5Fc38f]">
                                        {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                                   </div>
                                   <span className="text-sm font-medium">{item.name}</span>
                               </div>
                               <ChevronRightIcon />
                           </div>
                       ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
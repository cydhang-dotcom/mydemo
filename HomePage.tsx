import React from 'react';
import { 
    WalletIcon, ReceiptTaxIcon, ShieldCheckIcon, DocumentTextIcon, CalendarIcon, CogIcon,
    UserCircleIcon, TicketIcon, FolderIcon, ShareIcon, BriefcaseIcon, UsersIcon,
    ChevronDownIcon, ChevronRightIcon 
} from './Icons';

export const HomePage = ({ navigateTo }: { navigateTo: (page: string) => void; }) => {
    const mainActions = [
        { name: '工资单', icon: <WalletIcon />, action: () => navigateTo('payslip') },
        { name: '个税', icon: <ReceiptTaxIcon />, action: () => navigateTo('tax') },
        { name: '五险一金', icon: <ShieldCheckIcon />, action: () => navigateTo('insurance') },
        { name: '合同协议', icon: <DocumentTextIcon />, action: () => {} },
        { name: '考勤汇总', icon: <CalendarIcon />, action: () => {} },
    ];
    
    const serviceItems = [
        { title: '个人服务', subtitle: '新增任务 7 个月前' },
        { title: '员工增员', subtitle: '社保 公积金 工资 个税' },
        { title: '个人服务', subtitle: '新增任务 3年前' },
    ];

    const settingItems = [
        { name: '设置', icon: <CogIcon /> },
        { name: '个人信息', icon: <UserCircleIcon className="w-6 h-6" /> },
        { name: '优惠券', icon: <TicketIcon /> },
        { name: '档案包', icon: <FolderIcon /> },
        { name: '分享班步', icon: <ShareIcon /> },
    ];

    return (
         <div className="w-full flex flex-col min-h-screen bg-slate-100">
            <main className="flex-grow pb-24">
                <div className="p-6 bg-white pb-20">
                    <div className="flex items-center">
                        <div className="w-9 h-9 bg-[#5Fc38f] text-white font-bold text-lg rounded-md flex items-center justify-center mr-3">
                           <BriefcaseIcon className="w-5 h-5"/>
                        </div>
                        <h1 className="text-slate-800 font-semibold">上海云才网络技术有限公司</h1>
                        <ChevronDownIcon className="text-slate-400 ml-1" />
                    </div>
                </div>
                
                <div className="-mt-16 mx-4">
                    <div className="bg-white p-6 flex items-center space-x-4 rounded-xl shadow-md mb-4">
                        <UserCircleIcon className="w-16 h-16 text-slate-300" />
                        <div>
                            <h2 className="font-bold text-xl text-slate-900">hand</h2>
                            <p className="text-sm text-slate-500">人事主管 员工</p>
                        </div>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-5 text-base">我的</h3>
                        <div className="grid grid-cols-4 gap-y-5 text-center">
                            {mainActions.map(action => (
                                <div key={action.name} onClick={action.action} className="cursor-pointer group">
                                    <div className="w-14 h-14 bg-green-50 text-[#5Fc38f] rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-green-100 transition-colors">
                                      {React.cloneElement(action.icon, { className: 'w-7 h-7' })}
                                    </div>
                                    <p className="text-xs text-slate-600 font-medium">{action.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="m-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <h3 className="font-bold text-slate-900 text-base">我的服务</h3>
                            <div className="ml-2 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">5</div>
                        </div>
                        <a href="#" className="text-sm text-slate-400 hover:text-[#5Fc38f] flex items-center">详情 <ChevronRightIcon/></a>
                    </div>
                    <div className="space-y-2">
                        {serviceItems.map((item, i) => (
                           <div key={i} className="flex justify-between items-center p-3 -m-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                               <div>
                                   <p className="font-semibold text-sm text-slate-800">{item.title}</p>
                                   <p className="text-xs text-slate-400 mt-1">{item.subtitle}</p>
                               </div>
                               <ChevronRightIcon />
                           </div>
                        ))}
                    </div>
                </div>
                
                <div className="m-4 bg-white rounded-xl shadow-sm">
                   {settingItems.map((item) => (
                       <div key={item.name} className="flex justify-between items-center p-4 hover:bg-slate-50 cursor-pointer first:rounded-t-xl last:rounded-b-xl">
                           <div className="flex items-center space-x-4 text-slate-600">
                               {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                               <span className="text-sm font-medium">{item.name}</span>
                           </div>
                           <ChevronRightIcon />
                       </div>
                   ))}
                </div>
            </main>

            <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 flex justify-around text-xs">
                <div className="text-center p-2 text-slate-500 w-full flex flex-col items-center justify-center space-y-1 hover:bg-slate-50 cursor-pointer">
                    <BriefcaseIcon />
                    <p>员工日常</p>
                </div>
                <div className="text-center p-2 text-slate-500 w-full flex flex-col items-center justify-center space-y-1 hover:bg-slate-50 cursor-pointer">
                    <UsersIcon />
                    <p>通讯录</p>
                </div>
                <div className="text-center p-2 text-[#5Fc38f] w-full flex flex-col items-center justify-center space-y-1 bg-green-50/50">
                    <UserCircleIcon className="w-6 h-6" />
                    <p className="font-semibold">我的</p>
                </div>
            </nav>
        </div>
    );
};
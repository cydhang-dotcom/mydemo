import React, { useState } from 'react';
import { Header } from './Header';
import { servicesData } from './mockdata';
import type { ServiceStatus, Service } from './types';
import { ChevronRightIcon } from './icons';

const statusStyles: { [key in ServiceStatus]: string } = {
    '未处理': 'text-orange-600 bg-orange-100',
    '处理中': 'text-blue-600 bg-blue-100',
    '完成': 'text-slate-600 bg-slate-100'
};

interface ServiceListItemProps {
    service: Service;
    onViewDetails: () => void;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({ service, onViewDetails }) => {
    return (
        <div onClick={onViewDetails} className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50 transition-colors">
            <div>
                <h3 className="font-bold text-slate-800 text-base">{service.type}</h3>
                <p className="text-sm text-slate-500 mt-2">服务对象: {service.target}</p>
            </div>
            <div className="flex items-center">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${statusStyles[service.status]} mr-4`}>
                    {service.status}
                </span>
                <ChevronRightIcon className="w-5 h-5 text-slate-400" />
            </div>
        </div>
    );
};


export const ServicesPage = ({ onBack, navigateTo }: { onBack: () => void; navigateTo: (page: string, params: { serviceId: string }) => void; }) => {
    const tabs: { status: ServiceStatus | '全部', label: string }[] = [
        { status: '未处理', label: '未办理'},
        { status: '处理中', label: '办理中'},
        { status: '完成', label: '完成'},
    ];

    const [activeTab, setActiveTab] = useState<ServiceStatus | '全部'>('处理中');

    const filteredServices = servicesData.filter(service => {
        if (activeTab === '全部') return true;
        return service.status === activeTab;
    });
    
    const inProgressCount = servicesData.filter(s => s.status === '处理中').length;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="我的服务" onBack={onBack} />
             <main className="p-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <nav className="flex justify-around">
                        {tabs.map(tab => (
                            <button 
                                key={tab.status}
                                onClick={() => setActiveTab(tab.status)}
                                className={`py-4 text-base font-semibold w-full transition-colors relative border-b-2 ${
                                    activeTab === tab.status 
                                    ? 'text-[#5fc38f] border-[#5fc38f]' 
                                    : 'text-slate-500 hover:text-slate-800 border-transparent'
                                }`}
                            >
                                {tab.label}
                                {tab.status === '处理中' && inProgressCount > 0 && <span className="ml-1.5 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5">{inProgressCount}</span>}
                            </button>
                        ))}
                    </nav>
                    <div className="divide-y divide-slate-100">
                        {filteredServices.length > 0 ? (
                            filteredServices.map(service => (
                                <ServiceListItem 
                                    key={service.id}
                                    service={service} 
                                    onViewDetails={() => navigateTo('service-details', { serviceId: service.id })}
                                />
                            ))
                        ) : (
                             <p className="text-center text-slate-500 py-20">暂无服务记录</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

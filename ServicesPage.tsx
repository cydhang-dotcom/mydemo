import React, { useState } from 'react';
import { Header } from './Header';
import { servicesData } from './mockdata';
import type { ServiceStatus, Service } from './types';

const statusStyles: { [key in ServiceStatus]: string } = {
    '未处理': 'text-orange-600 bg-orange-100',
    '处理中': 'text-blue-600 bg-blue-100',
    '完成': 'text-slate-600 bg-slate-100'
};

const ServiceCard = ({ service, onViewDetails }: { service: Service, onViewDetails: () => void }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-slate-800 text-base">{service.type}</h3>
                    <p className="text-sm text-slate-500 mt-2">服务对象: {service.target}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${statusStyles[service.status]}`}>
                    {service.status}
                </span>
            </div>
            <div className="border-t border-slate-100 my-3"></div>
            <div className="text-right">
                <button 
                    onClick={onViewDetails}
                    className="text-sm font-semibold text-[#5fc38f] hover:text-green-700 transition-colors"
                >
                    查看详情
                </button>
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

    // FIX: Changed state type to include '全部' to match filter logic and avoid type errors.
    const [activeTab, setActiveTab] = useState<ServiceStatus | '全部'>('处理中');

    const filteredServices = servicesData.filter(service => {
        if (activeTab === '全部') return true;
        return service.status === activeTab;
    });
    
    const inProgressCount = servicesData.filter(s => s.status === '处理中').length;

    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="我的服务" onBack={onBack} />
            <nav className="bg-white border-b border-slate-200 flex justify-around sticky top-[69px] z-10">
                {tabs.map(tab => (
                    <button 
                        key={tab.status}
                        // FIX: Removed unnecessary type assertion to correctly handle all possible tab statuses.
                        onClick={() => setActiveTab(tab.status)}
                        className={`py-3 text-base font-semibold w-full transition-colors relative ${
                            activeTab === tab.status 
                            ? 'text-[#5fc38f]' 
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        {tab.label}
                        {tab.status === '处理中' && inProgressCount > 0 && <span className="ml-1.5 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5">{inProgressCount}</span>}
                        {activeTab === tab.status && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#5fc38f] rounded-full"></div>}
                    </button>
                ))}
            </nav>
            <main className="p-4 space-y-4">
                {filteredServices.map(service => (
                    <ServiceCard 
                        key={service.id} 
                        service={service} 
                        onViewDetails={() => navigateTo('service-details', { serviceId: service.id })}
                    />
                ))}
            </main>
        </div>
    );
};
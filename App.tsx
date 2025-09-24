import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { PayslipPage } from './PayslipPage';
import { TaxPage } from './TaxPage';
import { InsurancePage } from './InsurancePage';
import { AttendancePage } from './AttendancePage';
import { ContractsPage } from './ContractsPage';
import { DocumentsPage } from './DocumentsPage';
import { CouponsPage } from './CouponsPage';
import { EmployeeInfoPage } from './EmployeeInfoPage';
import { PersonalInfoPage } from './PersonalInfoPage';
import { WorkHistoryPage } from './WorkHistoryPage';
import { SharePage } from './SharePage';
import { ServicesPage } from './ServicesPage';
import { ServiceDetailsPage } from './ServiceDetailsPage';


export const App = () => {
    const [history, setHistory] = useState(['home']);
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const currentPage = history[history.length - 1];

    const navigateTo = (page: string, params?: { serviceId?: string }) => {
        if (params?.serviceId) {
            setSelectedServiceId(params.serviceId);
        }
        setHistory([...history, page]);
    };

    const handleBack = () => {
        if (history.length > 1) {
            setHistory(history.slice(0, -1));
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'payslip':
                return <PayslipPage onBack={handleBack} />;
            case 'tax':
                return <TaxPage onBack={handleBack} />;
            case 'insurance':
                return <InsurancePage onBack={handleBack} />;
            case 'attendance':
                return <AttendancePage onBack={handleBack} />;
            case 'contracts':
                return <ContractsPage onBack={handleBack} />;
            case 'documents':
                return <DocumentsPage onBack={handleBack} />;
            case 'coupons':
                return <CouponsPage onBack={handleBack} />;
            case 'employee-info':
                return <EmployeeInfoPage onBack={handleBack} navigateTo={navigateTo} />;
            case 'personal-info':
                return <PersonalInfoPage onBack={handleBack} />;
            case 'work-history':
                return <WorkHistoryPage onBack={handleBack} />;
            case 'share':
                return <SharePage onBack={handleBack} />;
            case 'services':
                return <ServicesPage onBack={handleBack} navigateTo={navigateTo} />;
            case 'service-details':
                 return <ServiceDetailsPage onBack={handleBack} serviceId={selectedServiceId!} />;
            case 'home':
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="w-full max-w-md bg-white shadow-lg">
           {renderPage()}
        </div>
    );
};
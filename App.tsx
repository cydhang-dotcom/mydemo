import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { PayslipPage } from './PayslipPage';
import { TaxPage } from './TaxPage';
import { InsurancePage } from './InsurancePage';
import { AttendancePage } from './AttendancePage';
import { ContractsPage } from './ContractsPage';
import { DocumentsPage } from './DocumentsPage';
import { CouponsPage } from './CouponsPage';

export const App = () => {
    const [page, setPage] = useState('home');

    const navigateTo = (target: string) => setPage(target);

    const renderPage = () => {
        switch (page) {
            case 'payslip':
                return <PayslipPage onBack={() => navigateTo('home')} />;
            case 'tax':
                return <TaxPage onBack={() => navigateTo('home')} />;
            case 'insurance':
                return <InsurancePage onBack={() => navigateTo('home')} />;
            case 'attendance':
                return <AttendancePage onBack={() => navigateTo('home')} />;
            case 'contracts':
                return <ContractsPage onBack={() => navigateTo('home')} />;
            case 'documents':
                return <DocumentsPage onBack={() => navigateTo('home')} />;
            case 'coupons':
                return <CouponsPage onBack={() => navigateTo('home')} />;
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
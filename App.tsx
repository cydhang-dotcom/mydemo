
import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { PayslipPage } from './PayslipPage';
import { TaxPage } from './TaxPage';
import { InsurancePage } from './InsurancePage';
import { ContractsPage } from './ContractsPage';
import { AttendancePage } from './AttendancePage';
import { AttendanceQueryPage } from './AttendanceQueryPage';
import { AttendanceCalendarPage } from './AttendanceCalendarPage';
import { OAApprovalPage } from './OAApprovalPage';
import { DocumentsPage } from './DocumentsPage';
import { CouponsPage } from './CouponsPage';
import { EmployeeInfoPage } from './EmployeeInfoPage';
import { SharePage } from './SharePage';
import { ServicesPage } from './ServicesPage';
import { ServiceDetailsPage } from './ServiceDetailsPage';
import { PersonalInfoPage } from './PersonalInfoPage';
import { WorkHistoryPage } from './WorkHistoryPage';
import { ContactsPage } from './ContactsPage';
import { DepartmentDetailPage } from './DepartmentDetailPage';
import { ContactDetailPage } from './ContactDetailPage';
import { DailyPage } from './DailyPage';
import { ApplySelectionPage } from './ApplySelectionPage';
import { ManualCheckInPage } from './ManualCheckInPage';
import { BusinessTripPage } from './BusinessTripPage';
import { LeaveRequestPage } from './LeaveRequestPage';
import { BottomNav, Tab } from './BottomNav';

interface HistoryItem {
    page: string;
    params?: any;
}

export const App = () => {
    const [myHistory, setMyHistory] = useState<HistoryItem[]>([{ page: 'home' }]);
    const [contactsHistory, setContactsHistory] = useState<HistoryItem[]>([{ page: 'contacts' }]);
    const [dailyHistory, setDailyHistory] = useState<HistoryItem[]>([{ page: 'daily' }]);
    const [activeTab, setActiveTab] = useState<Tab>('my');

    const histories = {
        my: myHistory,
        contacts: contactsHistory,
        daily: dailyHistory,
    };

    const setHistories = {
        my: setMyHistory,
        contacts: setContactsHistory,
        daily: setDailyHistory,
    };

    const history = histories[activeTab];
    const setHistory = setHistories[activeTab];
    const currentView = history[history.length - 1];

    const navigateTo = (page: string, params: any = {}) => {
        setHistory(prev => [...prev, { page, params }]);
    };

    const onBack = () => {
        if (history.length > 1) {
            setHistory(prev => prev.slice(0, -1));
        }
    };
    
    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
    };
    
    const renderPage = () => {
        switch (currentView.page) {
            case 'home':
                return <HomePage navigateTo={navigateTo} />;
            case 'daily':
                return <DailyPage navigateTo={navigateTo} />;
            case 'contacts':
                return <ContactsPage navigateTo={navigateTo} />;
            case 'payslip':
                return <PayslipPage onBack={onBack} />;
            case 'tax':
                return <TaxPage onBack={onBack} />;
            case 'insurance':
                return <InsurancePage onBack={onBack} />;
            case 'contracts':
                return <ContractsPage onBack={onBack} />;
            case 'attendance':
                return <AttendancePage onBack={onBack} />;
            case 'attendance-calendar':
                return <AttendanceCalendarPage onBack={onBack} />;
            case 'attendance-query':
                return <AttendanceQueryPage onBack={onBack} />;
            case 'oa-approval':
                return <OAApprovalPage onBack={onBack} />;
            case 'apply-selection':
                return <ApplySelectionPage onBack={onBack} navigateTo={navigateTo} />;
            case 'manual-checkin':
                return <ManualCheckInPage onBack={onBack} />;
            case 'business-trip':
                return <BusinessTripPage onBack={onBack} />;
            case 'leave-request':
                return <LeaveRequestPage onBack={onBack} />;
            case 'services':
                return <ServicesPage onBack={onBack} navigateTo={navigateTo} />;
            case 'service-details':
                return <ServiceDetailsPage onBack={onBack} serviceId={currentView.params.serviceId} />;
            case 'employee-info':
                return <EmployeeInfoPage onBack={onBack} navigateTo={navigateTo} />;
            case 'coupons':
                return <CouponsPage onBack={onBack} />;
            case 'documents':
                return <DocumentsPage onBack={onBack} />;
            case 'share':
                return <SharePage onBack={onBack} />;
            case 'personal-info':
                 return <PersonalInfoPage onBack={onBack} />;
            case 'work-history':
                return <WorkHistoryPage onBack={onBack} />;
            case 'department-details':
                return <DepartmentDetailPage onBack={onBack} navigateTo={navigateTo} departmentId={currentView.params.departmentId} />;
            case 'contact-details':
                return <ContactDetailPage onBack={onBack} contactId={currentView.params.contactId} />;
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    const showBottomNav = history.length === 1;

    return (
        <div className="w-full max-w-md mx-auto h-screen flex flex-col bg-slate-100 shadow-2xl">
            <div className="flex-grow overflow-y-auto">
                {renderPage()}
            </div>
            {showBottomNav && <BottomNav activeTab={activeTab} setActiveTab={handleTabChange} />}
        </div>
    );
};

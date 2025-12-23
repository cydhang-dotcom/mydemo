
import React from 'react';
import type { IconProps } from './types';

// Standardized Styled Icons for Daily Page Services
export const AttendanceCalendarIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="8" width="20" height="24" rx="3" fill="currentColor" fillOpacity="0.15"/>
        <path d="M14 16h6M14 22h12M14 28h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="28" cy="14" r="5" fill="white" stroke="currentColor" strokeWidth="1.5"/>
        <path d="m28 12 .8 1.6 1.7.2-1.2 1.3.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.3 1.7-.2.8-1.6Z" fill="currentColor"/>
    </svg>
);

export const AttendanceSearchIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="8" width="20" height="24" rx="3" fill="currentColor" fillOpacity="0.15"/>
        <circle cx="25" cy="25" r="7" fill="white" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="25" cy="23.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20.5 29c0-1.5 2-2.5 4.5-2.5s4.5 1 4.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 14h12M14 20h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
);

export const LeaveRequestIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10" y="8" width="20" height="24" rx="3" fill="currentColor" fillOpacity="0.15"/>
        <circle cx="28" cy="27" r="5" fill="white" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M28 25v4M26 27h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 14h6M14 20h12M14 26h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const OAApprovalIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="8" y="10" width="24" height="22" rx="4" fill="currentColor" fillOpacity="0.15"/>
        <path d="M8 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 7v5M28 7v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="m16 25 3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const EmployeeServiceIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="8" y="12" width="24" height="18" rx="4" fill="currentColor" fillOpacity="0.15"/>
        <rect x="12" y="16" width="6" height="5" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="25" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 26c0-2 2-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 25h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// Existing generic icons...
export const WalletIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25-2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m15 6.75h.008v.008H18v-.008z" />
    </svg>
);

export const ReceiptTaxIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
    </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const FolderIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

export const TicketIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75a.75.75 0 01-1.5 0V6h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V9h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H9a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0v-.75H7.5a.75.75 0 000 1.5h1.5V15a.75.75 0 01-1.5 0v-.75H6a.75.75 0 000 1.5h1.5v.75a.75.75 0 01-1.5 0V15H4.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v5.5a2.25 2.25 0 01-2.25 2.25h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v.75a.75.75 0 011.5 0V18h1.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H4.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010-1.5H7.5v-.75a.75.75 0 00-1.5 0V12H4.5a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0v.75H3a.75.75 0 010-1.5h1.5v-.75a.75.75 0 00-1.5 0V9H1.5a.75.75 0 010-1.5H3V6.75A.75.75 0 013.75 6H16.5z" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25L21 12V7.5A2.25 2.25 0 0018.75 5.25h-2.25A2.25 2.25 0 0014.25 3H9.75A2.25 2.25 0 007.5 5.25H5.25A2.25 2.25 0 003 7.5v4.5L3.75 14.25M20.25 14.25V18a2.25 2.25 0 01-2.25-2.25H6A2.25 2.25 0 013.75 18v-3.75m16.5 0c0-1.242-.984-2.25-2.25-2.25h-12c-1.242 0-2.25.984-2.25 2.25" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5h3.75a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H15m0-6.75h.008v.008H15V12.75zm-7.5 0h.008v.008H7.5V12.75zm-3 3.75h.008v.008H4.5v-.008zM9.75 21a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5zM12 11.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM12 3.75a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75z" />
    </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186v-2.186" />
    </svg>
);

export const DocumentMagnifyingGlassIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-1.5 6.959 6.959a2.25 2.25 0 0 0 3.182 0l2.121-2.121a2.25 2.25 0 0 0 0-3.182L18.5 12.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

export const ClipboardDocumentCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
);

export const PillIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const UmbrellaIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 21v-1.5m9-7.5h-1.5M4.5 12H3m14.121-6.121l-1.06 1.06M7.94 15.06l-1.061 1.06m10.121 0l-1.06-1.06M7.94 7.94L6.879 6.879M12 12c.333-2 1.5-3 3-3m-3 3c-.333-2-1.5-3-3-3m3 3c-.333 2 1.5 3 3 3m-3-3c-.333 2-1.5 3-3 3" />
    </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6.75v11.25a1.5 1.5 0 0 0 1.5 1.5ZM12 12.75h.007v.007H12v-.007Zm.007 0a.75.75 0 1 1-.75-.75.75.75 0 0 1 .75.75Z" />
    </svg>
);

export const FunnelIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

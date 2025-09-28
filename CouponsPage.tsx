import React from 'react';
import { Header } from './Header';
import { couponsData } from './mockdata';
import type { Coupon } from './types';

// FIX: Define props with an interface and use React.FC to correctly type the component,
// which resolves issues with special props like 'key'.
interface CouponCardProps {
    coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
    const valueColor = coupon.status === 'active' ? 'text-red-500' : 'text-slate-400';
    const isInactive = coupon.status !== 'active';

    return (
        <div className="bg-white rounded-lg shadow-sm flex items-stretch relative overflow-hidden border border-slate-200/80">
            {/* Left semicircle cutout */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200/80"></div>
            {/* Right semicircle cutout */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200/80"></div>

            <div className={`flex-grow p-4 pr-0 ${isInactive ? 'opacity-70' : ''}`}>
                <h3 className="font-bold text-slate-800 text-lg">{coupon.title}</h3>
                <p className="text-sm text-slate-500 mt-1.5">
                    {coupon.description}
                    {coupon.tags.length > 0 && (
                        <span className="ml-2">
                            {coupon.tags.map(tag => (
                                <span key={tag} className="inline-block text-xs font-medium text-slate-500 border border-slate-300 rounded-sm px-1.5 py-0.5 mr-1.5">
                                    {tag}
                                </span>
                            ))}
                        </span>
                    )}
                </p>
                <p className="text-sm text-slate-400 mt-3">{coupon.validityStart} ~ {coupon.validityEnd}</p>
            </div>
            
            <div className="w-px border-l border-dashed border-slate-300 mx-2 my-4"></div>

            <div className={`w-32 flex-shrink-0 flex items-center justify-center p-4 ${isInactive ? 'opacity-70' : ''}`}>
                <span className={`font-bold text-3xl ${valueColor}`}>
                    <span className="text-xl mr-0.5">¥</span>{coupon.value}
                </span>
            </div>
        </div>
    );
};

export const CouponsPage = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="w-full bg-slate-100 min-h-screen">
            <Header title="优惠券" onBack={onBack} />
            <main className="p-5 space-y-4">
                {couponsData.map(coupon => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </main>
        </div>
    );
};

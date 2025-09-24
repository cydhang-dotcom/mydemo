import { Coupon } from '../types';

export const couponsData: Coupon[] = [
    {
        id: 'coupon1',
        title: '企业开户',
        description: '本券可用于',
        validityStart: '2024-07-11',
        validityEnd: '2099-12-31',
        value: 500,
        tags: [],
        status: 'active',
    },
    {
        id: 'coupon2',
        title: '注册优惠',
        description: '本券可用于',
        validityStart: '2020-12-17',
        validityEnd: '2021-02-15',
        value: 20,
        tags: ['增员', '账单'],
        status: 'used',
    },
];

import { Contract as ContractType } from '../types';

export const contractsData: ContractType[] = [
    {
        id: '1',
        type: '用工合同',
        title: '无固定期限合同签订',
        status: '已签署',
        name: '云才劳动合同',
        tags: ['无固定'],
        periodStart: '2022-03-03',
        periodEnd: null,
        signingDate: '2022-03-02',
    },
    {
        id: '2',
        type: '用工合同',
        title: '固定期限合同签订',
        status: '已到期',
        name: '云才劳动合同',
        tags: ['3年'],
        periodStart: '2019-03-03',
        periodEnd: '2022-03-02',
        signingDate: '2019-03-02',
    },
    {
        id: '3',
        type: '保密协议',
        title: '保密与竞业协议',
        status: '已签署',
        name: '云才保密协议',
        tags: ['通用'],
        periodStart: '2019-03-03',
        periodEnd: null,
        signingDate: '2019-03-02',
    }
];

export const contractTypes = [...new Set(contractsData.map(c => c.type))];

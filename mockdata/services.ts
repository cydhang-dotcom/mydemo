import { Service } from '../types';

export const servicesData: Service[] = [
    {
        id: '1',
        type: '其他',
        target: '服务对象',
        status: '未处理',
        timeline: []
    },
    {
        id: '2',
        type: '增员',
        target: '对的',
        status: '未处理',
        timeline: []
    },
    {
        id: '3',
        type: '其他',
        target: '服务对象',
        status: '未处理',
        timeline: []
    },
    {
        id: '4',
        type: '借劳动合同',
        target: '刘天',
        status: '未处理',
        timeline: []
    },
    {
        id: '5',
        type: '增员',
        target: '杭志平',
        status: '处理中',
        timeline: [
            {
                id: 't1',
                title: '班步服务',
                status: '处理中',
                timestamp: '2020-12-07 16:50:29',
                description: []
            },
            {
                id: 't2',
                title: '班步服务',
                status: '添加',
                timestamp: '2020-12-07 16:50:12',
                description: [
                    '杭志平 310101198106080012',
                    '社保/公积金',
                    '参保城市: 直辖市-上海市',
                    '社保办理月: 2020-12',
                    '社保起缴月: 2020-12',
                    '公积金办理月: 2020-12',
                    '公积金起缴月: 2020-12',
                    '工资代发',
                    '代发开始月份: 2020-12'
                ]
            }
        ]
    },
    {
        id: '6',
        type: '离职',
        target: '李四',
        status: '完成',
        timeline: [
            {
                id: 't3',
                title: '服务完成',
                status: '完成',
                timestamp: '2024-05-25 10:00:00',
                description: ['所有离职手续已办结。']
            },
            {
                id: 't4',
                title: '班步服务',
                status: '处理中',
                timestamp: '2024-05-24 14:30:00',
                description: ['正在结算最终薪资。']
            },
            {
                id: 't5',
                title: '班步服务',
                status: '添加',
                timestamp: '2024-05-23 09:00:00',
                description: ['发起离职流程。']
            }
        ]
    }
];
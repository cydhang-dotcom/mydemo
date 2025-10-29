import type { Colleague, Department } from '../types';

export const featuredContacts: Colleague[] = [
    {
        id: 'fc1',
        name: '蔡燕君',
        avatarText: '蔡',
        position: '班步人事 - 服务顾问',
        departmentId: 'd-hr',
        departmentName: '客户成功部',
        phone: '13800138001',
        email: 'caiyj@example.com',
        specialty: '企业服务顾问',
    },
    {
        id: 'fc2',
        name: '王振东',
        avatarText: '王',
        position: '班步人事 - 税务顾问',
        departmentId: 'd-tax',
        departmentName: '税务服务部',
        phone: '13800138002',
        email: 'wangzd@example.com',
        specialty: '企业税务顾问',
    }
];

const rawColleagues: Omit<Colleague, 'avatarText'>[] = [
    // 行财部 (d1)
    { id: 'c1', name: '赵四', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723729', email: 'zhaosi@example.com' },
    { id: 'c2', name: '吕峰', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723730', email: 'lvfeng@example.com' },
    { id: 'c3', name: '孙皓', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723731', email: 'sunhao@example.com' },
    { id: 'c4', name: '袁秋', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723732', email: 'yuanqiu@example.com' },
    { id: 'c5', name: '殷新朋', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723733', email: 'yinxp@example.com' },
    { id: 'c6', name: '吴才美', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723734', email: 'wucm@example.com' },
    { id: 'c7', name: '吴汉辉', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723735', email: 'wuhh@example.com' },
    // 财务部 (d3)
    { id: 'c8', name: '李会计', position: '会计', departmentId: 'd3', departmentName: '财务部', phone: '18585723736', email: 'licai@example.com' },
    // 销售部 (d4)
    { id: 'c9', name: '王销售', position: '销售经理', departmentId: 'd4', departmentName: '销售部', phone: '18585723737', email: 'wangs@example.com' },
    { id: 'c10', name: '张销售', position: '销售代表', departmentId: 'd4', departmentName: '销售部', phone: '18585723738', email: 'zhangs@example.com' },
    // 研发中心 (d5)
    { id: 'c11', name: '杭志平', position: '研发总监', departmentId: 'd5', departmentName: '研发中心', phone: '13912345678', email: 'zhp@example.com' },
    { id: 'c12', name: '张三', position: '高级前端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13811112222', email: 'zhangsan@example.com' },
    { id: 'c13', name: '李四', position: '前端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13733334444', email: 'lisi@example.com' },
    { id: 'c14', name: '王五', position: '高级后端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13655556666', email: 'wangwu@example.com' },
    { id: 'c15', name: '赵六', position: '后端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13577778888', email: 'zhaoliu@example.com' },
    { id: 'c16', name: '孙七', position: '产品经理', departmentId: 'd5', departmentName: '研发中心', phone: '13499990000', email: 'sunqi@example.com' },
    // 管理中心 (d6)
    { id: 'c18', name: '刘管理', position: '总经理', departmentId: 'd6', departmentName: '管理中心', phone: '18585723739', email: 'liug@example.com' },
    // 客户服务部 (d9)
    { id: 'c19', name: '客服甲', position: '客服专员', departmentId: 'd9', departmentName: '客户服务部', phone: '18511112222', email: 'kefu1@example.com' },
    { id: 'c20', name: '客服乙', position: '客服专员', departmentId: 'd9', departmentName: '客户服务部', phone: '18533334444', email: 'kefu2@example.com' },
];

export const colleagues: Colleague[] = rawColleagues.map(c => ({
    ...c,
    avatarText: c.name.slice(-2)
}));

export const departments: Department[] = [
    { id: 'd1', name: '行财部', memberCount: 0, parentId: null },
    { id: 'd2', name: '运营部', memberCount: 0, parentId: null },
    { id: 'd3', name: '财务部', memberCount: 0, parentId: null },
    { id: 'd4', name: '销售部', memberCount: 0, parentId: null },
    { id: 'd5', name: '研发中心', memberCount: 0, parentId: null },
    { id: 'd6', name: '管理中心', memberCount: 0, parentId: null },
    { id: 'd7', name: '渠道部', memberCount: 0, parentId: null },
    { id: 'd8', name: '测试', memberCount: 0, parentId: null },
    { id: 'd9', name: '客户服务部', memberCount: 0, parentId: null },
].map(dept => ({
    ...dept,
    memberCount: colleagues.filter(c => c.departmentId === dept.id).length
}));

import type { Colleague, Department, Company } from '../types';

export const companies: Company[] = [
    { id: 'comp1', name: '上海云才网络技术有限公司' },
    { id: 'comp2', name: '上海艾班步信息技术有限公司' },
];

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
        serviceGroup: '云才网络',
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
        serviceGroup: '云才网络',
    },
    {
        id: 'fc3',
        name: '李会计',
        avatarText: '李',
        position: '财税服务 - 资深会计',
        departmentId: 'd-finance',
        departmentName: '财税服务部',
        phone: '13800138003',
        email: 'lihui@example.com',
        specialty: '高级财税顾问',
        serviceGroup: '艾班步',
    }
];

const rawColleagues: Omit<Colleague, 'avatarText'>[] = [
    // 上海云才网络技术有限公司 (comp1)
    { id: 'c1', name: '赵四', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723729', email: 'zhaosi@example.com', companyId: 'comp1' },
    { id: 'c2', name: '吕峰', position: '行政', departmentId: 'd1', departmentName: '行财部', phone: '18585723730', email: 'lvfeng@example.com', companyId: 'comp1' },
    { id: 'c8', name: '李会计', position: '会计', departmentId: 'd3', departmentName: '财务部', phone: '18585723736', email: 'licai@example.com', companyId: 'comp1' },
    { id: 'c9', name: '王销售', position: '销售经理', departmentId: 'd4', departmentName: '销售部', phone: '18585723737', email: 'wangs@example.com', companyId: 'comp1' },
    { id: 'c10', name: '张销售', position: '销售代表', departmentId: 'd4', departmentName: '销售部', phone: '18585723738', email: 'zhangs@example.com', companyId: 'comp1' },
    { id: 'c11', name: '杭志平', position: '研发总监', departmentId: 'd5', departmentName: '研发中心', phone: '13912345678', email: 'zhp@example.com', companyId: 'comp1' },
    { id: 'c12', name: '张三', position: '高级前端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13811112222', email: 'zhangsan@example.com', companyId: 'comp1' },
    { id: 'c13', name: '李四', position: '前端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13733334444', email: 'lisi@example.com', companyId: 'comp1' },
    { id: 'c14', name: '王五', position: '高级后端工程师', departmentId: 'd5', departmentName: '研发中心', phone: '13655556666', email: 'wangwu@example.com', companyId: 'comp1' },
    { id: 'c18', name: '刘管理', position: '总经理', departmentId: 'd6', departmentName: '管理中心', phone: '18585723739', email: 'liug@example.com', companyId: 'comp1' },

    // 上海艾班步信息技术有限公司 (comp2)
    { id: 'c3', name: '孙皓', position: '行政', departmentId: 'd11', departmentName: '行财部', phone: '18585723731', email: 'sunhao@example.com', companyId: 'comp2' },
    { id: 'c4', name: '袁秋', position: '行政', departmentId: 'd11', departmentName: '行财部', phone: '18585723732', email: 'yuanqiu@example.com', companyId: 'comp2' },
    { id: 'c5', name: '殷新朋', position: '行政', departmentId: 'd11', departmentName: '行财部', phone: '18585723733', email: 'yinxp@example.com', companyId: 'comp2' },
    { id: 'c19', name: '客服甲', position: '客服专员', departmentId: 'd9', departmentName: '客户服务部', phone: '18511112222', email: 'kefu1@example.com', companyId: 'comp2' },
    { id: 'c20', name: '客服乙', position: '客服专员', departmentId: 'd9', departmentName: '客户服务部', phone: '18533334444', email: 'kefu2@example.com', companyId: 'comp2' },
];

export const colleagues: Colleague[] = rawColleagues.map(c => ({
    ...c,
    avatarText: c.name.slice(-2)
}));

const allDepartments: Omit<Department, 'memberCount'>[] = [
    // comp1
    { id: 'd1', name: '行财部', parentId: null, companyId: 'comp1' },
    { id: 'd2', name: '运营部', parentId: null, companyId: 'comp1' },
    { id: 'd3', name: '财务部', parentId: null, companyId: 'comp1' },
    { id: 'd4', name: '销售部', parentId: null, companyId: 'comp1' },
    { id: 'd5', name: '研发中心', parentId: null, companyId: 'comp1' },
    { id: 'd6', name: '管理中心', parentId: null, companyId: 'comp1' },
    { id: 'd7', name: '渠道部', parentId: null, companyId: 'comp1' },
    { id: 'd8', name: '测试', parentId: null, companyId: 'comp1' },
    // comp2
    { id: 'd9', name: '客户服务部', parentId: null, companyId: 'comp2' },
    { id: 'd10', name: '市场部', parentId: null, companyId: 'comp2' },
    { id: 'd11', name: '行财部', parentId: null, companyId: 'comp2' },
];

export const departments: Department[] = allDepartments.map(dept => ({
    ...dept,
    memberCount: colleagues.filter(c => c.departmentId === dept.id).length
}));

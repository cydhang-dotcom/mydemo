export const attendanceDataByMonth: { [key: string]: any } = {
    '2025-09': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 34,
                items: [
                    { date: '2025-09-01', description: '上下班未打卡' },
                    { date: '2025-09-02', description: '上下班未打卡' },
                    { date: '2025-09-03', description: '上下班未打卡' },
                    { date: '2025-09-04', description: '上下班未打卡' },
                    { date: '2025-09-05', description: '上下班未打卡' },
                    { date: '2025-09-08', description: '上下班未打卡' },
                    { date: '2025-09-09', description: '上下班未打卡' },
                    { date: '2025-09-10', description: '上下班未打卡' },
                ]
            }
        }
    },
    '2025-08': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 12,
                items: [
                    { date: '2025-08-11', description: '上下班未打卡' },
                    { date: '2025-08-15', description: '上班未打卡' },
                    { date: '2025-08-22', description: '下班未打卡' },
                ]
            }
        }
    },
    '2025-07': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        anomalies: {
            '未打卡': {
                count: 5,
                items: [
                    { date: '2025-07-04', description: '下班未打卡' },
                    { date: '2025-07-18', description: '上班未打卡' },
                ]
            }
        }
    }
};

export const availableAttendanceMonths = Object.keys(attendanceDataByMonth).sort((a, b) => b.localeCompare(a));

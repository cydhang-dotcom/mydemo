export const attendanceDataByMonth: { [key: string]: any } = {
    '2025-09': {
        company: '上海云才网络技术有限公司',
        employee: {
            name: '杭志平',
            avatarText: '志平',
            plan: '研发考勤方案',
            title: '研发中心 研发总监'
        },
        summary: {
            requiredDays: 21,
            actualDays: 17,
            lateCount: 0,
            earlyLeaveCount: 0,
            leaveDays: 4,
            absentDays: 0,
        },
        anomalies: {
            '未打卡': {
                count: 4,
                items: [
                    { date: '2025-09-01', description: '上下班未打卡' },
                    { date: '2025-09-02', description: '上下班未打卡' },
                    { date: '2025-09-03', description: '上班未打卡' },
                    { date: '2025-09-04', description: '下班未打卡' },
                ]
            },
            '迟到': {
                count: 0,
                items: []
            },
            '早退': {
                count: 0,
                items: []
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
        summary: {
            requiredDays: 22,
            actualDays: 21.5,
            lateCount: 2,
            earlyLeaveCount: 1,
            leaveDays: 0.5,
            absentDays: 0,
        },
        anomalies: {
            '未打卡': {
                count: 3,
                items: [
                    { date: '2025-08-11', description: '上下班未打卡' },
                    { date: '2025-08-15', description: '上班未打卡' },
                    { date: '2025-08-22', description: '下班未打卡' },
                ]
            },
            '迟到': {
                count: 2,
                items: [
                    { date: '2025-08-12', description: '上班打卡: 09:15 (迟到15分钟)' },
                    { date: '2025-08-20', description: '上班打卡: 09:05 (迟到5分钟)' },
                ]
            },
            '早退': {
                count: 1,
                items: [
                    { date: '2025-08-28', description: '下班打卡: 17:10 (早退20分钟)' },
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
        summary: {
            requiredDays: 23,
            actualDays: 23,
            lateCount: 0,
            earlyLeaveCount: 0,
            leaveDays: 0,
            absentDays: 0,
        },
        anomalies: {
            '未打卡': {
                count: 2,
                items: [
                    { date: '2025-07-04', description: '下班未打卡' },
                    { date: '2025-07-18', description: '上班未打卡' },
                ]
            },
             '迟到': {
                count: 0,
                items: []
            },
            '早退': {
                count: 0,
                items: []
            }
        }
    }
};

export const availableAttendanceMonths = Object.keys(attendanceDataByMonth).sort((a, b) => b.localeCompare(a));

export const availableAttendanceYearsData = Object.keys(attendanceDataByMonth).reduce((acc: { [key: string]: string[] }, month) => {
    const year = month.substring(0, 4);
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(month);
    acc[year].sort((a, b) => b.localeCompare(a));
    return acc;
}, {});

export const availableAttendanceYears = Object.keys(availableAttendanceYearsData).sort((a, b) => b.localeCompare(a));

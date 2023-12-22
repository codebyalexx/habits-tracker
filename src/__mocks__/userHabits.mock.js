export default function userHabitsMock() {
    return new Promise((resolve) => {
        resolve({
            habits: [
                {
                    id: 12,
                    type: 'daily',
                    label: '🏋️‍♂️ Exercise',
                    category: 'Health'
                },
                {
                    id: 13,
                    type: 'daily',
                    label: '🥦 Diet',
                    category: 'Health'
                },
                {
                    id: 14,
                    type: 'sundays',
                    label: '🗑 Tidy up!',
                    category: 'Management'
                }
            ],
            data: [
                '2212202312',
                '2212202313'
            ]
        });
    });
}
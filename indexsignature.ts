var airplaneSeatingAssignments: {
    [seatNumber: string]: string     // [key: U]: T
} = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
}

let user: {
    readonly firstName: string        // const를 사용한 듯한 효과
} = {
    firstName: 'abby'
}
user.firstName                 // string
user.firstName                 // firstName에 값을 할당할 수 없음.


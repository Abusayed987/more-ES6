// P:01
/**
const user = [
    { id: 1, name: 'abul', job: 'doctor' }
]
const userJob = user[0].job;
// console.log(userJob);

const data = {
    count: 5000,
    data: [
        { id: 01, job: 'work', userName: 'bablu' },
        { id: 02, job: 'abolTablo', userName: 'sokomarRay' }
    ]
}
const userJob1 = data.data[0].job;
// console.log(userJob1);
const userName2 = data.data[1].userName;
// console.log(userName2);
const users = {
    id: 2323,
    name: `abolTabol Sokomar ray `,
    address: {
        street: `35/A dhaka Bangladesh`,
        PostOffice: `harinathpur`,
        side: 'rightSide'
    }
}
const side =users.address?.side; // chain Optional!
// const side =users.address.side;
console.log(side);

// P:02
const user = [
    { id: 1, name: 'abul', job: 'doctor' }
]
const userJob= user[0].job;
// console.log(userJob);

const data = {
    count: 5000,
    data: [
        { id: 01, job: 'work', userName: 'bablu' },
        { id: 02, job: 'abolTablo', userName: 'sokomarRay' }
    ]
}
const userJob2 = data.data[1].job;
// console.log(userJob2);


const users = {
    id: 2323,
    name: `abolTabol Sokomar ray `,
    address: {
        street: `35/A dhaka Bangladesh`,
        PostOffice: `harinathpur`,
        side: 'rightSide'
    }
}
const userSide = users.address?.side; // chain optional
console.log(userSide);
 */
// P:03


const user = [
    { id: 1, name: 'abul', job: 'doctor' }
]
const userName = user[0].name;
console.log(userName);

const data = {
    count: 5000,
    data: [
        { id: 01, job: 'work', userName: 'bablu' },
        { id: 02, job: 'abolTablo', userName: 'sokomarRay' }
    ]
}
const userName2 = data.data[0].userName;
console.log(userName2);


const users = {
    id: 2323,
    name: `abolTabol Sokomar ray `,
    address: {
        street: `35/A dhaka Bangladesh`,
        PostOffice: `harinathpur`,
        side: 'rightSide'
    }
}
const userPostOffice = users.address.PostOffice;
console.log(userPostOffice);
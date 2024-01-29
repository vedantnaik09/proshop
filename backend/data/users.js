import bcrypt from 'bcryptjs'

const users=
[
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Vedant Naik',
        email: 'vedant@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name: 'Bhupendra',
        email: 'bhupendra@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },   
]

export default users;
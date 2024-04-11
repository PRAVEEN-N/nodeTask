module.exports = {
    db: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'app_db'
    },
    jwt: {
        secret: 'kjshdgf32567ufebvryeudjcb854k3rhe7dhi3re98shdfkd',
        expiresIn: '1h'
    },
    ROLES: {
        ADMIN: 'admin',
        MANAGER: 'manager',
        STAFF: 'staff'
    }
};
const users = [];

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    save() {
        users.push(this);
    }

    static getAll() {
        return users;
    }
}

module.exports = User;
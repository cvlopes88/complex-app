let User = function(data) {
    this.data = data;
    this.errors = []
}

User.prototype.validate = function() {
    if (this.data.userName == "") { this.errors.push("you must provide userName")}
    if (this.data.email == "") { this.errors.push("you must provide email")}
    if (this.data.password == "") { this.errors.push("you must provide password")}
}
User.prototype.register = function() {
    //1 validate user data
    this.validate()
    //2 only if no validation error save data on database
}

module.exports = User;
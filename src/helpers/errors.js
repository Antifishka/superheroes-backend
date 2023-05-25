class JSNTestError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class ValidatoinError extends JSNTestError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends JSNTestError {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

class RegistrationConflictError extends JSNTestError { 
    constructor(message) { 
        super(message);
        this.status = 409;
    }
}

class NotAuthorizedError extends JSNTestError {
    constructor(message) {
        super(message);
        this.status = 401;
    }
}

module.exports = {
    JSNTestError,
    ValidatoinError,
    NotFoundError,
    RegistrationConflictError,
    NotAuthorizedError,
}
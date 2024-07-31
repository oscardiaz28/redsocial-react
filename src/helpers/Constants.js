const Constants = Object.freeze({
    BASE_URL: "http://localhost:8080/api/",
    ENDPOINTS: {
        REGISTER_USER: "auth/signup",
        LOGIN_USER: "auth/login"
    },
    HTTP_METHODS: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    },
    RESPONSE_STATES: {
        NOT_SAVED: 'not_saved',
        SAVED: 'saved',
        ERROR: 'error'
    },
    HEADER_NAMES: {
        CONTENT_TYPE: 'Content-Type',
        ACCEPT: 'Accept',
        AUTHORIZATION: 'Authorization'
    }
})

export default Constants;
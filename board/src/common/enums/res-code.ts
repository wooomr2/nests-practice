export enum ResCode {
    // 200
    SUCCESS = 'SU',
    VALIDATION_FAIL = 'VF',

    // 400
    DUPLICATE_EMAIL = 'DE',
    DUPLICATE_NICKNAME = 'DN',
    DUPLICATE_TEL = 'DT',

    NO_EXIST_USER = 'NU',
    NO_EXIST_BOARD = 'NB',

    // 401
    AUTHORIZATION_FAIL = 'AF',
    SIGN_IN_FAIL = 'SF',

    // 403
    NO_PERMISSION = 'NP`',

    // 500
    INTERNAL_SERVER_ERROR = 'ISE',
    DB_ERROR = 'DB',
    NOT_ALLOWED_EXTENTION = 'NAE'
}


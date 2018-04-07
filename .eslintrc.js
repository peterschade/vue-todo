// http://eslint.org/docs/user-guide/configuring
// 0 = off, 1 = warn, 2 = error

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
    ],
    rules: {
        'comma-dangle': [1, 'always'],
        'semi': [1, 'never'],
        'object-curly-spacing': [2, 'always', {'objectsInObjects': false}],
        'standard/object-curly-even-spacing': [0, 'either'],
    }
}

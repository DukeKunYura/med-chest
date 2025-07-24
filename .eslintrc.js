module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
        'space-infix-ops': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 0,
                'maxBOF': 0
            }
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': 'error',
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
};

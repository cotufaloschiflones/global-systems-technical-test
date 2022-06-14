module.exports = {
  root: true,
  env:  {
    node: true
  },
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules:   {
    'generator-star-spacing':      'off', // allow async-await
    'dot-location':                ['error', 'property'],
    semi:                          ['error', 'never'],
    indent:                        ['error', 2],
    'linebreak-style':             ['error', 'unix'],
    quotes:                        [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props':                 ['error', 'as-needed'],
    'no-unused-vars':              ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'brace-style':                 ['error'],
    'keyword-spacing':             ['error'],
    'no-trailing-spaces':          'error',
    'space-before-function-paren': ['error', {
      anonymous:  'never',
      named:      'never',
      asyncArrow: 'always',
    }],
    'space-before-blocks': ['error', {
      functions: 'always',
      keywords:  'always',
      classes:   'always'
    }],
    'object-curly-spacing':        ['error', 'always', { arraysInObjects: true }],
    'array-bracket-spacing':       ['error', 'never'],
    'key-spacing':                 ['error', { beforeColon: false, afterColon: true, align: 'value', }],
    'comma-spacing':               ['error', { before: false, after: true }],
    'no-multiple-empty-lines':     [2, { max: 1, maxEOF: 1, maxBOF: 0 }],
    'vue/max-attributes-per-line': [2, {
      singleline: 1,
      multiline:  {
        max:            1,
        allowFirstLine: false
      }
    }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    // allow debugger during development
    'no-console':  process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}


module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 0,
    'space-before-function-paren': ['error', 'always'],
    'no-undef': 0,
    'object-shorthand': ['error', 'never'],
    'func-names': ['error', 'never'],
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-plusplus': ['off'],
    'import/no-unresolved': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'eslint-comments/no-unlimited-disable': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 0,
    'react-native/no-raw-text': 0,
    'global-require': 0,
    'react-native/no-inline-styles': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  overrides: [
    // Jest - tests
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    // VUE
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'plugin:vue/strongly-recommended',
        'plugin:vue/essential',
      ],
      rules: {
        '@typescript-eslint/**': 0,
        indent: 0,
        'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
        'vue/html-indent': ['error', 2, { baseIndent: 1 }],
        'vue/html-quotes': ['error', 'single'],
        'vue/singleline-html-element-content-newline': 2,
        'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: { max: 1 } }],
        'vue/html-closing-bracket-newline': 2,
        'vue/attributes-order': ['error', { order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'] }],
        'vue/prop-name-casing': 0,
        'vue/require-prop-types': 'error',
        'vue/require-default-prop': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/no-template-shadow': 'error',
        'vue/name-property-casing': 'error',
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-end-tags': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/this-in-template': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      },
    },
    // Typescript
    {
      files: ['**/*.ts', '**/*.tsx', '*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/all',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'comma', requireLast: true },
          singleline: { delimiter: 'comma', requireLast: true },
        }],
        '@typescript-eslint/consistent-type-definitions': 0,
        '@typescript-eslint/default-param-last': 0,
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars-experimental': 0,
        '@typescript-eslint/no-extra-parens': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/init-declarations': 0,
        '@typescript-eslint/prefer-optional-chain': 0,
        '@typescript-eslint/no-implicit-any-catch': 0,
        '@typescript-eslint/comma-spacing': 0,
      },
    },
  ],
};

module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  jsxSingleQuote: true,
  semi: true,
  importOrder: [
    '^react(.*)$',
    '^@navigation/(.*)$',
    '^@components/(.*)$',
    '^@providers/(.*)$',
    '^@src-types/(.*)$',
    '^@constants/(.*)$',
    '^@services/(.*)$',
    '^@screens/(.*)$',
    '^@models/(.*)$',
    '^@errors/(.*)$',
    '^@store/(.*)$',
    '^@hooks/(.*)$',
    '^@assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

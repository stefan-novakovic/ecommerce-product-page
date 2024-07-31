module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'eslint-config-prettier'
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['react-refresh'],
   rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': [
         'error',
         {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_'
         }
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'off'
   },
   settings: {
      'import/resolver': {
         node: {
            paths: ['src'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
         }
      }
   }
};

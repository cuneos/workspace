import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {},
};

module.exports = Configuration;

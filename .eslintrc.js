/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "jsdoc"
  ],
  "extends": "plugin:jsdoc/recommended",
  "rules": {
    "no-unused-vars": "off",
    "jsdoc/check-access": "warn",
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-examples": "warn",
    "jsdoc/check-indentation": "warn",
    "jsdoc/check-line-alignment": "warn",
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-property-names": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/check-tag-names": "warn",
    "jsdoc/check-types": "warn",
    "jsdoc/check-values": "warn",
    "jsdoc/empty-tags": "warn",
    "jsdoc/implements-on-classes": "warn",
    "jsdoc/match-description": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/no-bad-blocks": "warn",
    "jsdoc/no-defaults": "warn",
    "jsdoc/no-types": "warn",
    "jsdoc/no-undefined-types": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-example": "warn",
    "jsdoc/require-file-overview": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": "warn",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-param-type": "warn",
    "jsdoc/require-property": "warn",
    "jsdoc/require-property-description": "warn",
    "jsdoc/require-property-name": "warn",
    "jsdoc/require-property-type": "warn",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-check": "warn",
    "jsdoc/require-returns-description": "warn",
    "jsdoc/require-returns-type": "warn",
    "jsdoc/valid-types": "warn"
  }
}

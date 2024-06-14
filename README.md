# Jest aws cdk asset filename renamer

[![GitHub](https://img.shields.io/github/license/gammarers/jest-aws-cdk-asset-filename-renamer?style=flat-square)](https://github.com/gammarers/jest-aws-cdk-asset-filename-renamer/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/jest-aws-cdk-asset-filename-renamer?style=flat-square)](https://www.npmjs.com/package/@gammarers/jest-aws-cdk-asset-filename-renamer)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/jest-aws-cdk-asset-filename-renamer/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/jest-aws-cdk-asset-filename-renamer/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/jest-aws-cdk-asset-filename-renamer?sort=semver&style=flat-square)](https://github.com/gammarers/jest-aws-cdk-asset-filename-renamer/releases)

this package is aws cdk construct asset filename renaming(RandomString.zip to HASH.zip)

## Installation

```shell
npm install --save-dev @gammarers/jest-aws-cdk-asset-filename-renamer
```

## Usage
You need to tell Jest to use the serializer. Add this to your Jest config:

```json
"snapshotSerializers": [
  "<rootDir>/node_modules/@gammarers/jest-aws-cdk-asset-filename-renamer"
]
```
or add this projenrc.ts 
```typescript
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/node_modules/@gammarers/jest-aws-cdk-asset-filename-renamer']
    }
  }
```

And your test.

```typescript
const stack = new Stack(app, 'TestStack');
new lambda.Function(stack, 'Function', {
    runtime: lambda.Runtime.NODEJS_22_X,
    code: lambda.Code.fromAsset(path.join(__dirname, '../asset/sample-func')),
    handler: 'index.lambda_handler',
});
const template = Template.fromStack(stack);
expect(template.toJSON()).toMatchSnapshot();
```



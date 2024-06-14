# Jest aws cdk asset filename renamer

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



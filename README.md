# Jest serializer cdk asset

Jest AWS CDK Construct snapshot serializer.

## Installation
```shell
npm install --save-dev @yicr/jest-serializer-cdk-asset
```

## Usage
You need to tell Jest to use the serializer. Add this to your Jest config:

```json
"snapshotSerializers": [
  "<rootDir>/node_modules/@yicr/jest-serializer-cdk-asset"
]
```
or add this projenrc.ts 
```typescript
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/node_modules/@yicr/jest-serializer-cdk-asset']
    }
  }
```

And your test.

```typescript
const stack = new Stack(app, 'TestingStack');
new lambda.Function(stack, 'Function', {
    runtime: lambda.Runtime.NODEJS_18_X,
    code: lambda.Code.fromAsset(path.join(__dirname, '../asset/sample-func')),
    handler: 'index.lambda_handler',
});
const template = Template.fromStack(stack);
expect(template.toJSON()).toMatchSnapshot();
```



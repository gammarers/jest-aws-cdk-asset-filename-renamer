# Jest serializer aws cdk asset filename replacer

Jest AWS CDK Constru
this package is aws cdk construct asset filename replacer(RandomString.zip to HASH.zip)

## Installation
```shell
npm install --save-dev @gammarer/jest-serializer-aws-cdk-asset-filename-replacer
```

## Usage
You need to tell Jest to use the serializer. Add this to your Jest config:

```json
"snapshotSerializers": [
  "<rootDir>/node_modules/@gammarer/jest-serializer-aws-cdk-asset-filename-replacer"
]
```
or add this projenrc.ts 
```typescript
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/node_modules/@gammarer/jest-serializer-aws-cdk-asset-filename-replacer']
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



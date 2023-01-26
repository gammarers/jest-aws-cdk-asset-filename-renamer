import path from 'path';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';

it('Should match snapshot', () => {
  const app = new App();
  const account = '123456789012';
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: account,
      region: 'us-east-1',
    },
  });
  new lambda.Function(stack, 'Function', {
    runtime: lambda.Runtime.NODEJS_18_X,
    code: lambda.Code.fromAsset(path.join(__dirname, '../asset/sample-func')),
    handler: 'index.lambda_handler',
  });
  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
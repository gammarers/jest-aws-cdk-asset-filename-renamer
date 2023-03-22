import { javascript, typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@yicr/jest-serializer-cdk-asset',
  projenrcTs: true,
  repository: 'https://github.com/yicr/jest-serializer-cdk-asset.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'jest', 'asset'],
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [],
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/src/index.ts'],
    },
  },
  publishTasks: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();
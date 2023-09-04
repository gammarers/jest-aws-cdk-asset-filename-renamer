import { javascript, typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@gammarer/jest-serializer-aws-cdk-asset-filename-replacer',
  projenrcTs: true,
  repository: 'https://github.com/yicr/jest-serializer-aws-cdk-asset-filename-replacer.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'jest', 'asset'],
  description: 'this package is aws cdk construct asset filename replacer(RandomString.zip to HASH.zip)',
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
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
  workflowNodeVersion: '18.17.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 16 * * 4']), // every thursday 16:00 (JST/FRI/02:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();
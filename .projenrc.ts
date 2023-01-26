import { typescript } from 'projen';
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
  // packageName: undefined,  /* The "name" in package.json. */
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/src/index.ts'],
    },
  },
});
project.synth();
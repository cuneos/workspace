export default {
  '{packages,examples}/**/*.{ts,js,json,md,html,css,scss}': (filenames) => [
    'nx format:write --uncommitted --libs-and-apps',
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
  ],
};

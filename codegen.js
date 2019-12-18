const {createConfig} = require('@graphql-codegen/cli/dist/commonjs/config');
const {generate} = require('@graphql-codegen/cli/dist/commonjs/generate-and-save');
const {lifecycleHooks} = require('@graphql-codegen/cli/dist/commonjs/hooks');
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()
if((!process.env.NODE_ENV || process.env.NODE_ENV  === 'development') && fs.existsSync('.env.development')){
  const envConfig = dotenv.parse(fs.readFileSync('.env.development'))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}
console.log('**************************',process.env)

createConfig({
  config:'./codegen.yml',
  overwrite: true,
  watch: true
})
.then(config=>{
  return generate(config).catch(async (error) => {
    await lifecycleHooks(config.hooks).onError(error.toString());
    throw error;
});
})

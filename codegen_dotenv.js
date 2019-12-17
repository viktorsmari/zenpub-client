const fs = require('fs')
const dotenv = require('dotenv')
if((!process.env.NODE_ENV || process.env.NODE_ENV  === 'development') && fs.existsSync('.env.development')){
  const envConfig = dotenv.parse(fs.readFileSync('.env.development'))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}
console.log('**************************',process.env)
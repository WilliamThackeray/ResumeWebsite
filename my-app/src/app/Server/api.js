// import 'dotenv/config'
import chalk from 'chalk'
import { createClient } from '@libsql/client/web'

// console.log(chalk.yellow('URL: ', process.env.TURSO_URL))
export default class DataBaseApi {
  constructor (host, url, auth) {
    console.log(chalk.bgCyan.italic('  DataBaseApi constructor()  '))
    this.host = host
    this.client = createClient({
      // url: `${url}`,
      url: `${url}`,
      // authToken: `${auth}`,
      authToken: `${auth}`
    })
    // might need to await createClient() 
    // can you await in a constructor?
  }


  async list (table) { // THIS IS THE IMPORTANT ONE FOR NOW 
    // get all ____'s
    console.log(chalk.bgCyanBright('DB List()'))
    let rows;
    try {
      const res = await this.client.execute(`select * from projects`)
      rows = res.rows
    } catch(err) {
      console.log(chalk.red('Error: ', err))
    }
    return rows
  }
  async read () {
    // read one ____
    console.log(chalk.bgCyanBright('DB Read()'))
  }
  async update () {
    // update one ____
    console.log(chalk.bgCyanBright('DB Update()'))
  }
  async create () {
    // create one ____
    console.log(chalk.bgCyanBright('DB Create()'))
  }
  async delete () {
    // delete one ____
    console.log(chalk.bgCyanBright('DB Delete()'))
  }

}

export function getApi(url, auth) {
  return new DataBaseApi('localhost:3000', url, auth)
}
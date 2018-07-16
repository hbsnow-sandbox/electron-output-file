import util from 'util'
import fs from 'fs'
import Papa from 'papaparse'

export default {
  read (...args) {
    return util.promisify(fs.readFile)(...args)
  },
  write (...args) {
    return util.promisify(fs.writeFile)(...args)
  },
  parseCSV (content) {
    let data

    return new Promise(resolve => {
      Papa.parse(content, {
        delimiter: ',',
        complete: results => {
          data = results.data
        }
      })

      resolve(data)
    })
  }
}

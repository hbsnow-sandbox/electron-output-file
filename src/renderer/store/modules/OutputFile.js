import util from 'util'
import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

const readFile = (...args) => util.promisify(fs.readFile)(...args)
const writeFile = (...args) => util.promisify(fs.writeFile)(...args)
const parseCSV = content => {
  let data
  return new Promise(resolve => {
    Papa.parse(content, {
      delimiter: ',',
      complete: (results) => {
        data = results.data
      }
    })

    resolve(data)
  })
}

const state = {
  path: '',
  error: ''
}

const mutations = {
  SET_FILE (state, file) {
    if (file.type !== 'text/csv') {
      state.error = 'CSVではありません。'
      return
    }
    state.error = ''
    state.path = file.path
  },
  SET_ERROR (state, message) {
    state.error = message
  }
}

const actions = {
  select ({ commit }, file) {
    commit('SET_FILE', file[0])
  },
  async convert ({ commit }) {
    try {
      const csv = await readFile(state.path, 'utf8')
      const json = await parseCSV(csv)
      const date = new Date()
      const filename = `${date.getFullYear()}_test.json`
      const jsonPath = path.join(__dirname, `${filename}`)
      await writeFile(jsonPath, JSON.stringify(json))
      commit('SET_ERROR', '')
    } catch (e) {
      commit('SET_ERROR', e)
    }
  }
}

export default {
  state,
  mutations,
  actions
}

import { readdirSync, lstatSync } from 'fs'

const rootDir = 'C:/Users/nelko/Documents/tk/WebProject-1xbet-v2'

const names = []

const recursiveReadDir = path => {
  const files = readdirSync(path)

  files.forEach(fileName => {
    const filePath = `${path}/${fileName}`
    const isFileDir = lstatSync(filePath).isDirectory()

    if (fileName.match(/[а-яА-Я]/)) {
        names.push(filePath)
    }

    if (isFileDir) {
      recursiveReadDir(filePath)
    }
  })
}

recursiveReadDir(rootDir)

console.log(names)

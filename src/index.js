import uniqueRandomArray from 'unique-random-array'
import spiderManNames from './spider-man-names.json'

const all = spiderManNames
const random = uniqueRandomArray(spiderManNames)

export { all, random }

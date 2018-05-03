import uniqueRandomArray from 'unique-random-array'
import spiderManNames from './spider-man-names.json'

export const all = spiderManNames
export const random = uniqueRandomArray(spiderManNames)

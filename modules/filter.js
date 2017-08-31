import curry from './internal/curry'

function filter (fn, arr) {
  let index = -1
  let resIndex = 0
  const len = arr.length
  const willReturn = []

  while (++index < len) {
    const value = arr[ index ]
    if (fn(value)) {
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}

export default curry(filter)

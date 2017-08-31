import type from './type'

export default function defaultTo (defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => defaultTo(defaultArgument, inputArgumentHolder)
  }

  return inputArgument === undefined || !(type(inputArgument) === type(defaultArgument)) ?
    defaultArgument :
    inputArgument
}

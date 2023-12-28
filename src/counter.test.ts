import { setupCounter } from './counter'

describe('setupCounter', () => {
  test('setups counter for a button element', () => {
    const element = document.createElement('button')
    setupCounter(element)
    expect(element.innerHTML).toBe('count is 0')
  })
})

import { setupCounter } from './counter'

describe('setupCounter', () => {
  test('setups counter for a button element', () => {
    const element = document.createElement('button')
    setupCounter(element)
    expect(element.innerHTML).toBe('count is 0')
  })

  test('setup counter ignores null input', () => {
    try {
      setupCounter(null)
    } catch (_) {
      fail('No errors should have been thrown.')
    }
  })

  test('setup counter increments on click', () => {
    const element = document.createElement('button')
    setupCounter(element)
    element.click()

    expect(element.innerHTML).toBe('count is 1')
  })
})

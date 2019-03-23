const test = require('tap').test

const mycode = require('../index')

test('smoke test', (t) => {
  const output = mycode()
  t.is(typeof output, 'string')
  t.ok(output.length > 0)
  t.ok(/-\d{2}$/.test(output))
  t.end()
})

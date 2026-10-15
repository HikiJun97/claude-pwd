import { expect, test } from 'claude-code/testing'

test('/pwd prints pwd output without the model', async ($, on) => {
  on('process.run', async (_$, e) => {
    expect(e.argv).toEqual(['pwd'])

    return { value: { exitCode: 0, stdout: '/some/dir\n', stderr: '' } }
  })

  const result = await $.command.run({ command: 'pwd', args: '' })

  expect(result.text).toBe('/some/dir')
})

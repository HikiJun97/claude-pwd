import type { Register } from 'claude-code'

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'pwd', description: '현재 디렉터리 출력 (모델 호출 없음)' })

    return next(e)
  })

  on('command.run', { command: 'pwd' }, async $ => {
    const { stdout } = await $.process.run(['pwd'])

    return { text: stdout.trim() }
  })
}

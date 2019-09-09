import {expect, test} from '@oclif/test'
import {exec} from 'child_process'
import {promisify} from 'util'

const execPromise = promisify(exec)

describe('show', () => {
  context('tasks.json file does not exist', () => {
    test
      .stdout()
      .do(() => process.env.BUSY_TASKS = '')
      .command('show')
      .it('it tells the user no task is currently being timed', ctx => {
        expect(ctx.stdout).to.equal('No task is currently being timed.\n')
      })
  })

  test
    .stdout()
    .do(async () => execPromise('faketime "1 hour 2 minutes ago" busy with "Build web site"'))
    .command('show')
    .it('shows how long the user have been working on current task', ctx => {
      expect(ctx.stdout).to.equal(
`Task: Build web site
Duration: 1h02`
      )
    })

})

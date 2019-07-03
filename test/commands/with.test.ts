import {expect, test} from '@oclif/test'

describe('with', () => {
  test
    .stdout()
    .command(['with', 'Build web site'])
    .it('tells the user that the timer for the task has started', ctx => {
      expect(ctx.stdout).to.contain('The timer for "Build web site" has started')
    })
})

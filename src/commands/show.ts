import {Command} from '@oclif/command'
import {access, constants} from 'fs'
import {promisify} from 'util'

export default class Show extends Command {
  static description = 'Shows how long you have been working on current task'

  static examples = [`
$ busy with "Build web site"
The timer for "Build web site" has started.

$ # 1 hour 2 minutes elapse

$ busy show
Task: Build web site
Duration: 1h02
`,
  ]

  async run() {
    try {
      await promisify(access)(process.env.BUSY_TASKS || '', constants.R_OK)
    } catch {
      this.log('No task is currently being timed.')
      return
    }
  }
}

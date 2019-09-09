import { Command } from '@oclif/command'
import * as fs from 'fs';

export default class With extends Command {
  static description = 'Starts the timer for the task of which the title is passed as the first argument.'

  static examples = [
    `$ busy with "Build web site"
The timer for "Build web site" has started.
`,
  ]

  static args = [{name: 'title'}]

  async run() {
    const {args} = this.parse(With)
    this.log(`The timer for "${args.title}" has started.`)
  }
}

@systemovich/busy
=================

&#34;Busy&#34; is a command line application that helps you keep track of how much time you spend on tasks.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@systemovich/busy.svg)](https://npmjs.org/package/@systemovich/busy)
[![Codecov](https://codecov.io/gh/systemovich/busy/branch/master/graph/badge.svg)](https://codecov.io/gh/systemovich/busy)
[![Downloads/week](https://img.shields.io/npm/dw/@systemovich/busy.svg)](https://npmjs.org/package/@systemovich/busy)
[![License](https://img.shields.io/npm/l/@systemovich/busy.svg)](https://github.com/systemovich/busy/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @systemovich/busy
$ busy COMMAND
running command...
$ busy (-v|--version|version)
@systemovich/busy/0.0.0 linux-x64 node-v10.12.0
$ busy --help [COMMAND]
USAGE
  $ busy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`busy hello [FILE]`](#busy-hello-file)
* [`busy help [COMMAND]`](#busy-help-command)

## `busy hello [FILE]`

describe the command here

```
USAGE
  $ busy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ busy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/systemovich/busy/blob/v0.0.0/src/commands/hello.ts)_

## `busy help [COMMAND]`

display help for busy

```
USAGE
  $ busy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->

v_database_cli
==============

nope

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/v_database_cli.svg)](https://npmjs.org/package/v_database_cli)
[![Downloads/week](https://img.shields.io/npm/dw/v_database_cli.svg)](https://npmjs.org/package/v_database_cli)
[![License](https://img.shields.io/npm/l/v_database_cli.svg)](https://github.com/V-core9/v_database_cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g v_database_cli
$ v_db COMMAND
running command...
$ v_db (-v|--version|version)
v_database_cli/0.0.0 win32-x64 node-v16.13.0
$ v_db --help [COMMAND]
USAGE
  $ v_db COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`v_db hello`](#v_db-hello)
* [`v_db help [COMMAND]`](#v_db-help-command)
* [`v_db install`](#v_db-install)
* [`v_db status`](#v_db-status)
* [`v_db type`](#v_db-type)

## `v_db hello`

Describe the command here

```
USAGE
  $ v_db hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/V-core9/v_database_cli/blob/v0.0.0/src/commands/hello.js)_

## `v_db help [COMMAND]`

display help for v_db

```
USAGE
  $ v_db help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.17/src/commands/help.ts)_

## `v_db install`

Describe the command here

```
USAGE
  $ v_db install

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/install.js](https://github.com/V-core9/v_database_cli/blob/v0.0.0/src/commands/install.js)_

## `v_db status`

Check the status of CLI tool and system.

```
USAGE
  $ v_db status

OPTIONS
  -c, --checklist=checklist  Check the CLI system status, will check all if empty.

DESCRIPTION
  ...
  Look for into the config directory and config file.

  Flags Additional Options:
    -c, --checklist  >>  [ "cfg_dir", "cfg_file" ]

  Example:
    v9 cli_status -c='cfg_dir cfg_file '
```

_See code: [src/commands/status.js](https://github.com/V-core9/v_database_cli/blob/v0.0.0/src/commands/status.js)_

## `v_db type`

Describe the command here

```
USAGE
  $ v_db type

OPTIONS
  -v, --view=view  id to print / view

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/type.js](https://github.com/V-core9/v_database_cli/blob/v0.0.0/src/commands/type.js)_
<!-- commandsstop -->

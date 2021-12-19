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
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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
v_database_cli/0.0.4 win32-x64 node-v16.13.0
$ v_db --help [COMMAND]
USAGE
  $ v_db COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g v_database_cli
$ v_db COMMAND
running command...
$ v_db (-v|--version|version)
v_database_cli/0.0.4 win32-x64 node-v16.13.0
$ v_db --help [COMMAND]
USAGE
  $ v_db COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g v_database_cli
$ v_db COMMAND
running command...
$ v_db (-v|--version|version)
v_database_cli/0.0.3 win32-x64 node-v16.13.0
$ v_db --help [COMMAND]
USAGE
  $ v_db COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`v_db get`](#v_db-get)
* [`v_db hello`](#v_db-hello)
* [`v_db help [COMMAND]`](#v_db-help-command)
* [`v_db install`](#v_db-install)
* [`v_db mk`](#v_db-mk)
* [`v_db rm`](#v_db-rm)
* [`v_db status`](#v_db-status)

## `v_db get`

View a type list, list of items in a type or specific item

```
USAGE
  $ v_db get

OPTIONS
  -i, --id=id      id to view
  -t, --type=type  type to view

DESCRIPTION
  ...
  Will list all types when triggered without specifying type or id[with type].
```

_See code: [src/commands/get.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/get.js)_

## `v_db hello`

Basic example command here

```
USAGE
  $ v_db hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here

  Welcome hope you find this useful.
```

_See code: [src/commands/hello.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/hello.js)_

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

Trigger v_database.install() process

```
USAGE
  $ v_db install

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Sets up the database dir and config file.
```

_See code: [src/commands/install.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/install.js)_

## `v_db mk`

Describe the command here

```
USAGE
  $ v_db mk

OPTIONS
  -c, --content=content  Content to use if adding item to type.
  -i, --id=id            Item id to use [optional]
  -t, --type=type        Type Name to [create/use]

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/mk.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/mk.js)_

## `v_db rm`

Delete a type or an item

```
USAGE
  $ v_db rm

OPTIONS
  -i, --id=id      Item id to use [optional]
  -t, --type=type  Type Name to [create/use]

DESCRIPTION
  ...
  Flag -t to delete a type
  Flag -i to delete an item of a type
```

_See code: [src/commands/rm.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/rm.js)_

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
    v9 cli_status -c='cfg_dir cfg_file'
```

_See code: [src/commands/status.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/status.js)_
<!-- commandsstop -->
* [`v_db delete`](#v_db-delete)
* [`v_db hello`](#v_db-hello)
* [`v_db help [COMMAND]`](#v_db-help-command)
* [`v_db install`](#v_db-install)
* [`v_db new`](#v_db-new)
* [`v_db status`](#v_db-status)
* [`v_db view`](#v_db-view)

## `v_db delete`

Delete a type or an item

```
USAGE
  $ v_db delete

OPTIONS
  -i, --id=id      Item id to use [optional]
  -t, --type=type  Type Name to [create/use]

DESCRIPTION
  ...
  Flag -t to delete a type
  Flag -i to delete an item of a type
```

_See code: [src/commands/delete.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/delete.js)_

## `v_db hello`

Basic example command here

```
USAGE
  $ v_db hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here

  Welcome hope you find this useful.
```

_See code: [src/commands/hello.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/hello.js)_

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

Trigger v_database.install() process

```
USAGE
  $ v_db install

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Sets up the database dir and config file.
```

_See code: [src/commands/install.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/install.js)_

## `v_db new`

Describe the command here

```
USAGE
  $ v_db new

OPTIONS
  -c, --content=content  Content to use if adding item to type.
  -i, --id=id            Item id to use [optional]
  -t, --type=type        Type Name to [create/use]

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/new.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/new.js)_

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
    v9 cli_status -c='cfg_dir cfg_file'
```

_See code: [src/commands/status.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/status.js)_

## `v_db view`

View a type list, list of items in a type or specific item

```
USAGE
  $ v_db view

OPTIONS
  -i, --id=id      id to view
  -t, --type=type  type to view

DESCRIPTION
  ...
  Will list all types when triggered without specifying type or id[with type].
```

_See code: [src/commands/view.js](https://github.com/V-core9/v_database_cli/blob/v0.0.4/src/commands/view.js)_
<!-- commandsstop -->
* [`v_db delete`](#v_db-delete)
* [`v_db hello`](#v_db-hello)
* [`v_db help [COMMAND]`](#v_db-help-command)
* [`v_db install`](#v_db-install)
* [`v_db new`](#v_db-new)
* [`v_db status`](#v_db-status)
* [`v_db view`](#v_db-view)

## `v_db delete`

Delete a type or an item

```
USAGE
  $ v_db delete

OPTIONS
  -i, --id=id      Item id to use [optional]
  -t, --type=type  Type Name to [create/use]

DESCRIPTION
  ...
  Flag -t to delete a type
  Flag -i to delete an item of a type
```

_See code: [src/commands/delete.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/delete.js)_

## `v_db hello`

Basic example command here

```
USAGE
  $ v_db hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here

  Welcome hope you find this useful.
```

_See code: [src/commands/hello.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/hello.js)_

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

Trigger v_database.install() process

```
USAGE
  $ v_db install

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Sets up the database dir and config file.
```

_See code: [src/commands/install.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/install.js)_

## `v_db new`

Describe the command here

```
USAGE
  $ v_db new

OPTIONS
  -c, --content=content  Content to use if adding item to type.
  -i, --id=id            Item id to use [optional]
  -t, --type=type        Type Name to [create/use]

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/new.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/new.js)_

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
    v9 cli_status -c='cfg_dir cfg_file'
```

_See code: [src/commands/status.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/status.js)_

## `v_db view`

View a type list, list of items in a type or specific item

```
USAGE
  $ v_db view

OPTIONS
  -i, --id=id      id to view
  -t, --type=type  type to view

DESCRIPTION
  ...
  Will list all types when triggered without specifying type or id[with type].
```

_See code: [src/commands/view.js](https://github.com/V-core9/v_database_cli/blob/v0.0.3/src/commands/view.js)_
<!-- commandsstop -->

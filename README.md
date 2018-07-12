# typescript-module-template

This is a template to develop and deploy a new module in TypeScript.

## Features

* Use rollup through [bili](https://github.com/egoist/bili)
* Extract table of contents from README.md
* Use `jest`, no need to configure anything

## Using this template

### Fork this repo

First, for this repository.

### Put your name

Before using this template, you should open `LICENSE.md` and replace `Your Name` with your name.
At the bottom of this file, there's another `Your Name` to be replaced and the broken link to the license file.

### Built-in Scripts

#### test

`npm run test`

#### testWatch

`npm run testWatch`

#### toc

`npm run toc`

This will extract table of contents from `README.md` and insert it back to `README.md`.

#### patch

`npm run patch`

This will deploy your module with patch version increased.

#### minor

`npm run minor`

This will deploy your module with minor version increased.

# Introduction

# Table of contents

<!-- toc -->

<!-- tocstop -->

# Install

# Getting Started

# Contributing

1.  Fork it!
2.  Create your feature branch: git checkout -b my-new-feature
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request :D

# Author

Your Name, Released under the [MIT](../../blob/master/LICENSE.md) License.

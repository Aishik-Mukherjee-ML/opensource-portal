# Contributing to MapleLabs OpenSource Portal

Welcome to the MapleLabs OpenSource initiative! Thanks for considering contributing to
our project and we hope you'll enjoy it :D

**All contributors must comply with
[the code of conduct](./code-of-conduct.md).**

To get started developing, see our devlopment guidelinnes below.

## Guidelines for contributing

The Development Team at MapleLabs welcome contributions to this repository.

If you'd like to to make code contributions follow the contribution guidelines below.

## Getting started

### Local development

You can serve this site locally to quickly see your changes and additions before you PR them. To get started, navigate into your new site’s directory and start it up, as follows.

```shell
cd opensource-portal/
yarn
yarn dev
```

Your site is now running at [`http://localhost:3000`](http://localhost:3000)!

The first time you build the site locally, it will take upwards of 5 minutes. This is normal, and will take signifigantly less time afterwards.

### Dependencies

Node v16 is used in this project as specified in [.nvmrc](https://github.com/newrelic/developer-website/blob/master/.nvmrc).




### Using Conventional Commits

Please help the maintainers by leveraging the following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
standards in your commit messages. You don't need to apply this format to the pull request title–just to commits.

As a reminder, here's the format for a single-line commit, but you are welcome to add the optional body and footer messages.

```
<type>(optional scope): <description>
```

When choosing a type, you can pick from any of the standard types (feat, fix, style, test, or chore) or you can add your own.

As far as scope, we recommend that you include this because it helps us identify relevant commits. For the opensoure project, the scope might refer to the part of the portal you are editing (for example, Projects or blogs). 

Here are some examples:

#### Use `chore`

Chores are best for changes that users don't see directly, such as improving unit tests or reducing technical debt. You might use them for minor non-functional changes/additions to github actions, github templates, package or config updates, etc.

```bash
git commit -m "chore(translation): extend translation unit test coverage"
```

#### Use `fix`

Fix is used for minor functional corrections to code.

```bash
git commit -m "fix(Projects): repair broken link in introduction"
```

#### Use `feat`

Feat is for major functional changes or additions to code.

```bash
git commit -m "feat(blogs): add new blogs"
```

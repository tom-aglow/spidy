# Contributing

Thanks for being willing to contribute!

## Project setup

1.  Fork and clone the repo
2.  `$ yarn` to install dependencies
3.  `$ yarn validate` to validate you've got it working
4.  Create a branch for your PR

## Committing and Pushing changes

This project uses [`semantic-release`][semantic-release] to do automatic releases and generate a changelog based on the commit history. So we follow [a convention][convention] for commit messages. Please follow this convention for your commit messages.

You can use `commitizen` to help you to follow [the convention][convention]

Once you are ready to commit the changes, please use the below commands

1.  `$ git add <files to be comitted>`
2.  `$ yarn commit`

... and follow the instruction of the interactive prompt.

[semantic-release]: https://npmjs.com/package/semantic-release
[convention]: https://github.com/conventional-changelog/conventional-changelog-angular/blob/ed32559941719a130bb0327f886d6a32a8cbc2ba/convention.md

# Contributing to [youtube-stats-card](https://github.com/dhyeythumar/youtube-stats-card)

I would love your input! I aim to make contributing to this project as easy as possible, whether it's:

- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Local Development

To run & test youtube-stats-card you need to follow a few simple steps:-
**(make sure you already have a [vercel](https://vercel.com/) account)**

1. Install [Vercel CLI](https://vercel.com/download)
1. Fork the repository and clone the code to your local machine
1. Run the command "vercel" in the root and follow the steps there
1. Create a `.env` file in the root of the directory
1. In the .env file add a new variable named "YT_KEY" with your [youtube API key](https://console.developers.google.com/)
1. Run the command "vercel dev" to start a development server at https://localhost:3000

## Themes Contribution

YouTube Stats Card supports custom themes, and you can also contribute new themes.

All you need to do is edit [themes/index.js](./themes/index.js) file and add your theme at the end of the file. You can also test how it looks using custom URL parameters like `title_color`, `icon_color`, `text_color`, `bg_color`

**NOTE: If you are contributing your theme just because you are using it personally, then you can [customize the looks](./readme.md#channel-customization) of your card with URL params instead.**

## Pull Requests

Pull request are actively welcomed:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add some tests' example.
3. If you've changed APIs, update the documentation.
4. Issue that pull request.

## Report issues/bugs using GitHub's [issues](https://github.com/dhyeythumar/youtube-stats-card)

Report a bug by [opening a new issue](https://github.com/dhyeythumar/youtube-stats-card/issues/new/choose); it's that easy!

### Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific
  - Share the snapshot (if possible)
  - YouTube Stats Card live link
- What actually happens
- What you expected would happen
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Request

**Great Feature Requests** tend to have:

- A quick idea summary
- What & why you wanted to add the specific feature
- Additional context like images, links to resources to implement the feature, etc

## License

Licensed under the [MIT License](./LICENSE).

## Acknowledgements

Inspired by anuraghazra's [**github-readme-stats**](https://github.com/anuraghazra/github-readme-stats)

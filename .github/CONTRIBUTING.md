## Contributing

From opening an issue for a documentation suggestion to creating a pull request: every
contribution is appreciated and welcome. If you're planning to implement a new section or
page please create an issue first.

## Setup

Start by ensuring that you have Node.js installed and forking the repository:

- Install [Node.js][1] if you have not already. npm ships with Node.js, so no separate package manager installation is required.
- Fork the **webpack.js.org** repo from [the main repository][2].
- `git clone <your-clone-url> && cd webpack.js.org`

> To run the project, you must run scripts that download the website content from GitHub.
> To avoid hitting rate limits, you'll need to use your GitHub token.
> The build scripts (`fetch-repo` and `fetch:*` commands) use this token to retrieve repository data,
> including documentation, examples, and contributors.
> If you do not have one, you can create it on the [GitHub Personal Access Tokens page](https://github.com/settings/personal-access-tokens).

Once you are in the project directory, run the following commands:

- `npm install` to pull all dependencies.
- `GITHUB_TOKEN=<your-token-here> npm run fetch-all` - Fetches all updated website content from GitHub.
- `npm run build` to create a production version of the site.
- `npm start` to develop on a local webpack-dev-server: [localhost:3000][3].

**Note:** The `fetch` and `fetch-repos` commands must be run before building the site as they populate necessary data for the build process.

> NOTE: run `npm run fetch-repos` and then `npm run fetch` before running `npm start` command for the first time

- `npm run fetch` to retrieve external documentation/data.

The final command, `npm run fetch`, is optional as both `npm run build` and `npm start`
will do this automatically. This step pulls in documentation for loaders/plugins hosted
in separate repositories such as the ones found in the [webpack-contrib][4] organization.
See the `package.json` for the full list of `scripts`.

> [!NOTE]
>
> **Node v20.9.0** or above is required for the build process to run properly.

## Updating the sponsors image

README에는 [SponsorKit](https://github.com/antfu-collective/sponsorkit)으로 생성한 SVG 이미지를 사용합니다.
`npm run build`는 후원자 데이터를 다운로드한 후 이미지를 자동으로 생성합니다.
빌드 과정에서 이미지를 `dist/assets/sponsors.svg`로 복사하며, README는
`https://webpack.kr/assets/sponsors.svg`에서 이미지를 불러오므로 배포할 때마다 갱신됩니다.

웹사이트를 빌드하지 않고 이미지만 다시 생성하려면 다음 명령을 실행하세요.

```bash
npm run sponsors
```

이 명령은 `fetch:supporters`로 webpack의 공개 Open Collective 데이터를 다운로드한 뒤
`src/assets/sponsors.svg`를 생성합니다. 후원 등급은 웹사이트와 마찬가지로 지난 1년간의
월평균 기여액을 기준으로 하며, 월 $1부터 시작합니다. API 키는 필요하지 않지만,
기존 `OPENCOLLECTIVE_API_KEY` 환경 변수를 설정하면 더 높은 요청 한도를 사용할 수 있습니다.

빌드 과정처럼 이미 다운로드한 데이터로 이미지를 생성하려면 `npm run sponsors:generate`를
사용하세요. 이미지 레이아웃은 `sponsorkit.config.mjs`에서 조정할 수 있습니다.
생성된 SVG, 다운로드한 데이터, SponsorKit 캐시는 Git 추적에서 제외됩니다.

## Contributor License Agreement

When submitting your contribution, a CLA (Contributor License Agreement) bot will come by
to verify that you signed the CLA. If it is your first time, it will link you to the right
place to sign it. However, if you have committed your contributions using an email that is
not the same as your email used on GitHub, the CLA bot can't accept your contribution.

Run `git config user.email` to see your Git email, and verify it with your [GitHub email][5].

## Editor Config

The [.editorconfig][6] in the root should ensure consistent formatting. Please make sure
you've [installed the plugin][7] if your text editor needs one.

## Testing

Run the full test suite (lint + Jest) with:

```bash
npm test
```

To run only Jest tests:

```bash
npm run jest
```

To update snapshots after intentional UI changes:

```bash
NODE_OPTIONS=--experimental-vm-modules jest --config=jest.config.mjs --updateSnapshot
```

## Branching Your Changes

Making a branch in your fork for your contribution is helpful in the following ways:

- It allows you to have multiple contributions in as PRs at once.
- It allows us to identify what your contribution is about from the branch name.

## Committing Your Changes

Please follow the [conventional commits][10] specification. For example, for documentation
changes, a short commit message may resemble the following:

```md
docs(config): clarify `output.filename` usage
```

Note that you can add a body/footer if more details are necessary. Soon we will
start utilizing [`standard-version`][11] for releases/changelog generation. This
will also potentially tie in to having archived docs for each major version.

## Submitting Changes

After getting some feedback, push to your fork branch and submit a pull request. We may
suggest some changes or improvements or alternatives, but for small changes your pull
request should be accepted and merged fairly quick.

> Before submitting a pull request, ensure your feature branch is up to date with the latest changes from the upstream `main` branch to avoid conflicts during review.
> You can go through this article to learn about [rebase technique][14]

Issue the PR to the [main][8] branch.

> See [GitHub documentation][9] for more help.

## Recognition

You can choose to add your GitHub username for recognition at the top of any markdown
document you edit:

**example.md**

```markdown
---
title: Some Example Page
contributors:
  - TheLarkInn
  - Sokra
  - bebraw
  - Jhnns
  - SpaceK33z
---

Some documentation...
```

This will add your name and GitHub profile photo to the document in production. It's a
great way to own the awesome work that you do and we encourage you to do this in your PRs.

## Thank You

Webpack is a feature rich, low level tool and documentation is a huge time sink. We appreciate
any time spent fixing typos or clarifying sections in the documentation.

[1]: https://nodejs.org/
[2]: https://github.com/webpack/webpack.js.org
[3]: http://localhost:3000/
[4]: https://github.com/webpack-contrib
[5]: https://github.com/settings/emails
[6]: https://github.com/webpack/webpack.js.org/blob/main/.editorconfig
[7]: http://editorconfig.org/#download
[8]: https://github.com/webpack/webpack.js.org/tree/main
[9]: https://help.github.com/articles/proposing-changes-to-your-work-with-pull-requests/
[10]: http://conventionalcommits.org/
[11]: https://github.com/conventional-changelog/standard-version
[14]: https://dev.to/matks/what-it-means-to-rebase-a-pull-request-submitted-on-github-5717

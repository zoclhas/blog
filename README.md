<div align="center">
  <img alt="Logo" src="/public/favicon-dark.ico" width="100" />
</div>
<h1 align="center">
  Zoclhas | Blog
</h1>
<p align="center">
The official source code for my blog site.
</p>

## Before Forking:

Yes you can fork this repo, and modify it for your personal site- **but you attribution is required.**

You can give the attribution by linking my website (in the footer preferably) [zocs.space](https://zocs.space/) or linking to this [GitHub Page](https://github.com/zoclhas/blog).

## Installation

1. Clone the repo-

```bash
git clone https://github.com/zoclhas/blog.git
```

2. Install the dependencies and run-

Node:

```bash
npm install
npm run dev
```

Yarn:

```bash
yarn install
yarn run dev
```

3. Make your changes:

    - Urls
    - Branding
    - Links
    - Colours
    - Themes

4. Creating posts:

    - Add your post files in `/posts/<post-name>.md`.
    - Copy the frontmatter template from this file's lines 1-10.
    - **`markdown-it` doesn't support raw HTML code- :(**
    - For links that are meant to be opened in a new tab, add `{.ext}` after the link.
    - Check the installed plugins for `markdown-it` in the `/pages/post/[slug].js` file. Visit their npm-js or GitHub pages for usage.

5. Push the changes.
6. Host on [Vercel](https://vercel.com) or similar.

💜

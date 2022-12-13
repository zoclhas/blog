---
title: "Hello (again)!"
metaTitle: "Hello (again)!"
metaDesc: "Remade the site, and new basic setup."
socialImage: images/post-1/post-1-dark.png
lightImage: images/post-1/post-1-light.png
date: "13-12-2022"
tags:
    - hello
---

Well hello there again- site's abit new(?). I really like this new layout haha. The old site is still up [here](https://blog.zochy.xyz){.ext}- just it won't be getting any new blog posts.

&nbsp;

## A few notable changes:

-   Post images in `/images/post-<number>/` **should** contain two images:

    -   Images for dark mode **must** be named `post-<number>-dark`.
    -   And images for light mode **must** be named `post-<number>-light`.

-   **Latest Post(s)** layout in the home page ustilises `flex-grow` for more dynamic look.
-   Posts now have a button for copying the url of the page with ease.
-   Code blocks will now display the [`tokyo-night-dark.css`](https://highlightjs.org/static/demo/#Tokyo%20Night%20Dark){.ext} theme.
-   (Soon: Copy button to code blocks will come soon).

&nbsp;

## Setup

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
6. Host on [Vercel](https://vercel.com){.ext} or similar.

&nbsp;

## Final words

That should be fairly simple. Now before you can publish it- **please include attributes to me in the footer by linking [zocs.space](https://zocs.space/) or the [GitHub Repo](https://github.com/zoclhas/blog)**. If you'd like to suggest any changes or add new features please make a PR.

That's all for this post. Have a great day 💜!

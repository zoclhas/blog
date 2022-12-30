---
title: "Remade zoclhas.com"
metaTitle: "Remade zoclhas.com"
metaDesc: "A small update on the remade zoclhas.com"
socialImage: images/post-1/post-1-dark.png
lightImage: images/post-1/post-1-light.png
date: "31-12-2022"
tags:
---

Hello! This is gonna a bit of a short blog post, buttttt let's get into the redesign of [zoclhas.com](https://zoclhas.com){.ext}. Don't worry- you can still view the previous of the site [here](https://v4.zoclhas.com){.ext}.

&nbsp;

## Overview

![zoclhas-com-landing](/images/post-2/overview.png)

&nbsp;

Well that's the landing page for the redesigned website. I've gone with using NextJS for the FE and I've gone against using any sort of UI frameworks here (don't get me wrong, I love them, but I want the site to be as light as possible).

&nbsp;

Some notable changes I've introduced here are:

-   Scrollspy for the small nav section. This is nothing too noticeable but adds subtle font weight and colour change.
-   Spotify current playing song. Displays the song if I'm listening on spotify; More of a fun thing hehe.
-   The Work/Project column now uses takes information from an array. This makes it easier to write each new work/project.
    The work section also hides cards if more than 3, there's a show more/show less button for viewing more work. The typical array:
       ```js
    export const works = [
        {
            coverImage: "zocs-space.png",
            title: "zocs.space",
            link: "https://zocs.space",
            description:
                "Personal blogging site for all sorts of randomg thoughts, code, etc. Made using NextJS, NextUI and with `markdown-it` for blogs.",
            github: "https://github.com/zoclhas/blog",
            isExternal: true,
        },
        {
            coverImage: "zaura-net.png",
            title: "zaura.net",
            link: "https://zaura.net",
            description:
                "Zaura is a professional studio creating high-quality resourepacks for Minecraft. It showcases pricing, downloads, updates, gallery. Made using NextJS & NextUI and Django serves as the backend.",
            github: null,
            isExternal: true,
        },
        {
            coverImage: "Amulet.webp",
            title: "Amulet",
            link: "https://zaura.net/amulet",
            description:
                "Amulet is a high-res stylized POM/PBR resourcepack for Minecraft. Generated procedurally using Substance Designer and compiled using PixelGraph.",
            github: null,
            isExternal: true,
        }
    ];
    ```

&nbsp;

## Closing Words

Well that's all I've got for this post. Again I'm really like the new redisgn, and it got some pretty **amazing** scores on [pagespeed.web.dev](https://pagespeed.web.dev). You can visit the website [here](https://zoclhas){.ext} and checkout it's [GitHub repo](https://github.com/zoclhas/zoclhas-v5){.ext}.

Have a great day! And Happy New Years!! 💜

---
title: "Linear gradient over video!"
metaTitle: "A cool effect for videos!"
metaDesc: "Parallax video with linear gradient!"
socialImage: images/blog-3.png
date: "26-11-2022"
tags:
    - nextjs
    - css
---

I've discovered this sweet css effect a while ago, when working on the second iteration of [zaura.net](https://zaura.net/). So alright lets get started :)

&nbsp;

Begining with this, we need a video _(obv)_.

Now the structure of the HTML file:

```html
<section id="hero">
    <div class="video">
        <video autoplay muted loop class="video-par">
            <source
                src="https://zaura.net/video/subtle-home-bg.mp4"
                type="video/mp4"
            />
        </video>
    </div>
    <div class="hero-content">
        <div class="card">
            <h1>Hello!</h1>
        </div>
    </div>
</section>
```

Alright now, we've created the hero/landing section with two divs inside, one for the video-background and other for the content you want to put.

&nbsp;

And as for the css styling:

```css
#hero {
    min-height: 100vh; /*for the nice full page*/
}

.video {
    z-index: -1;
}

.video::after {
    content: "";
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 400px;

    background-image: linear-gradient(
        0deg,
        rgba(13, 13, 13, 1) 2%,
        rgba(13, 13, 13, 0) 40%
    );
}

.video-par {
    z-index: -1;
    position: fixed;
    aspect-ratio: 16/9;
}
```

&nbsp;

There you have it! A wonderful parallax video with a gradient :D

![](https://raw.githubusercontent.com/zoclhas/blog/main/public/videos/Live.mp4)

And you can visit the [live full page here](https://zaura.net/SubtlePBR)- or checkout the codpen below.

/i/https://codepen.io/zoclhas/embed/NWzzpWq

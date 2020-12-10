---
title: Automating Imgur
date: 2020-12-11 06:00
description: Automating Imgur so that you can watch memes without doing any work
---

Hello Beautiful Humans,

I'm certain you have see [Imgur](https://imgur.com) before.

Every time you want to move to next Meme, you need to click Next button. Wait, there is one more option. Leveraging the power of JavaScript in the console. How can we do that?

`setInterval` comes to the rescue. How?

Follow these steps:

- Step 1: Copy the [code](https://gist.github.com/tpkahlon/f8a21c47ff42de5e62b14452a06aad10)
- Step 2: Open any MEME on the Imgur website
- Step 3: Open Developer tools by clicking Inspect element
- Step 4: Go to Console tab, paste the code and Hit enter.

We find Next button in the DOM, store it in the variable and run `click` method to fake the click event. You can provide your own custom timing for the `setInterval` function. I used 10 seconds for reference.

Hope you like this trick.

See you soon...

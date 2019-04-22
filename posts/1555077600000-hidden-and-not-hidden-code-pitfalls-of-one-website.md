Author: Anton Trofimov
Title: Hidden and Not Hidden Code Pitfalls of One Website
Subtitle: Hidden and Not Hidden Code Pitfalls of One Website - Keenethics Blog
Meta title: Hidden and Not Hidden Code Pitfalls of One Website - Keenethics Blog
Meta description: Autologin URLs, hidden but not hidden pictures, user vulnerability, and other code pitfalls of one website. These are the mistakes to avoid.
Categories: Tech, From KeenEthics
Preview image: /static/posts/hidden-and-not-hidden-code-pitfalls-of-one-website-prew.jpg

![Code](/static/posts/hidden-and-not-hidden-code-pitfalls-of-one-website.jpg)

You may spend a lot of time each day visiting random sites to feed your brain with some tasty chunks of information pie.

Let’s make it even tastier – and search for some bugs just for fun and new knowledge!

## Autologin URLs – What Is It, and Why Is It a Bad Idea?
The site I check, which I am not going to name for ethical purposes, sends marketing emails with different kind of images or URLs. If you click on them even when you aren’t logged in to this website, you will be logged in automatically. Also, for some reason, that URL does not expire, so I have used an almost 3-years-old one to check it and it still works.

Why is it bad?

If you search Google for parts of this URL, you will easily find some URL posted on forums, which would let you get access to another user’s account. Also, you may easily get these URLs via social engineering, email hacking, etc.

## Hidden Pictures Are Not Hidden

Another interesting thing I have found are the randomly hidden images in the list. These hidden images are blurred and have no profile URL. But is the picture actually protected? Let's try to unblur it.

If we check the HTML layout, we will see that it is just a styling applied by invisible class. So, we can just remove that class to get the original photo.

But photo without a user URL does not give enough information. Let's see what we can do to get the URL of the profile.

If we check "Who is this user" button, we will understand that it has an onclick handler, which accepts two parameters,

The first one is not quite helpful because it does not contain any user-related information, so let's try to check the second parameter.
To do so, let's copy function call to console and click Enter. It will be interpreted as function.toString() and show a part of source code. In fact, Chrome has a nice function: when you click on the source code, you are pointed to the place in the source tab of devtools that contains that piece of code.
Now, we place a breakpoint here and click on that button to see arguments passed to function call. We may see that one of the arguments has an interesting field that contains user ID. If we try to open the dating website link + “user” + that parameter, we will see the user profile. 

Now let's try to automate it.
If we check DOM tree again, we will see that parent container content gets changed each time when we click on the "Skip" button. Let's use MutationObserver to track child list changes. The code sample is here:

<div style="margin-bottom: 25px;">
  <iframe width="100%" height="300" src="//jsfiddle.net/maxsoloviov/g3fv5oe4/2/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
</div>

There are multiple ways of how to run this code automatically: using some kind of a user-script, like devtools-sources-snippet, or an existing extension, like Grease/Tampermonkey. We may also create a simple extension that will use content scripts to inject that code. Yet, take into account that, if you use a method that doesn't have access to page scope (like extension content script), you will need to load jQuery or to rewrite this code slightly to vanilla js.

User ID and photo are held on client-side no matter whether the user has access to this functionality or not.

## User Vulnerability

Sometimes, when you are online on this site, you may see a pop-up telling you about new visitors on the page. If you click on it, you will open the page with all current visitors. There is one little problem – all photos have a mosaic filter over them. You also have no user profile URL here.

If you could check DOM tree, you will see that the image is rendered over the canvas. Good news for us – there is data-image property, which contains the original image URL. However, there is not much sense in a photo without a profile URL. Let's try to get it!

When you open your profile image, there is one interesting API call. It has a lot of arguments, but most of them are not essential. It accepts image ID and returns owner information back.

Also, for some reason, this method does not require authorization, so we can make a request without providing credentials (for example, using a default fetch method).

The only required fields are img and avatar. Also, we need to have x-requested-with:XMLHttpRequest header. 

Img and avatar may have the same value, which is image ID you can extract from canvas data-image property (the name of the image).

## Let's Sum It Up!

<div style="margin-bottom: 25px;">
  <iframe width="100%" height="300" src="//jsfiddle.net/maxsoloviov/6em0Ltkp/2/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
</div>

__The issue__: an unexpected use of a function. What is the purpose of the function that returns a lot of information by the photo ID only? Obviously, this may be misused to extract sensitive user-related data.

## What Can We Understand from This Bug?

Just one thing: all of us are humans and all of us make errors. You can’t imagine all the possible ways to exploit something, but you may try to think out of the box to protect yourself from even low-chance things.

Be careful, have a good fantasy and good luck!

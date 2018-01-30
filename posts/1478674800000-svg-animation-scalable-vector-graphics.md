Author: Maryna Yanul
Title: SVG Animation
Subtitle: SVG Animation (Scalable Vector Graphics)
Meta title: SVG Animation (Scalable Vector Graphics)
Meta description: Why We Are Using SVG - Read on Keenethics Corporate Blog!
Preview image: https://cdn-images-1.medium.com/max/800/0*BWjB9M0P6eMdRAsD.

Fast and Practical Animating of SVG Images.

![Heroes](https://cdn-images-1.medium.com/max/800/0*BWjB9M0P6eMdRAsD.)

## Why We are Using SVG

If we observe the rapid growth of web development segment over the course of past few years we notice more frequent usage of SVG images. They are used for icons, logos, graphs and even fonts. Why has SVG become so popular these days that even clients suggest using it when providing requirement specification. Superb quality on any devices — main reason to chose this particular format over others.

For us as for developers there are even more reasons to use SVG:

1. Text format
2. Scalability
3. The ability to use raster graphics in SVG
4. Indexed by search engines
5. Many ways to animation
6. Integrates with HTML and XHTML documents
7. Compatibility with CSS
8. Unicode support
9. It supports standardized W3C Document Object Model

But there are also inconveniences:

1. A large number of small parts makes use of SVG irrational
2. Can not be used in drawing maps
3. Disadvantage of XML markup — large file size


## Ways of Optimizing SVG Images

Since we end up writing some extra code when rendering vector graphic the end result should be optimized using different services. Most often we use SVGO ([https://github.com/svg/svgo](https://github.com/svg/svgo)). It’s quite easy to use and there is no need to upload the images to other websites.

![Example of SVG optimisation using SVGO](https://cdn-images-1.medium.com/max/800/0*8YcO63_4ajXq0qEb.)

## Process of Animating SVG

There is a number of ways SVG can be animated:

1. SMIL (is the native SVG animation specification)
2. Web Animations API (The Web Animations API is native JavaScript that allows you to create more complex sequential animations without loading any external scripts)
3. ​WebGL
4. CSS animation

Css animation is used in order to avoid overloading your service with big libraries for animating icons and loaders.

Let’s have a look at an example of animating a yolk that was initially drawn in “Sketch”:

<iframe width="100%" height="300" src="//jsfiddle.net/yd3c81bg/9/embedded/html,css,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

As can be seen from the example, we use Keyframe Animation Syntax for animation.

It’s implemented by setting the initial position of an element by id(0%), transition(50%) and final position(100%). To achieve smooth animation Initial and final values are equal.

Here are some benefits of this approach:

1. You don’t need an external library
2. Preprocessors (like Sass or Less) allow you to create variables
3. You can listen for onAnimationEnd and some other animation hooks with native JavaScript
4. It is easy to use for responsive development because you can modify your animation with media queries

Downsides of using css animation:

1. You can’t produce some complex physics effects that are nice for realistic motion
2. A lot of recalculation needs to be done if you adjust timing
3. CSS and SVG on mobile sometimes requires strange hacks

Still, with the help of simple and trivial css animation interesting projects can be made. As an example have made a simple game-video using HTML, CSS & a little bit of JavaScript, all the SVG were drawn in “Sketch”. The game’s objective is to save the princess(“just click!” in any situation)

## Game:

<https://github.com/maryna-yanul/duck-the-princess/> — repository of the project.

So basically in order to avoid overloading the project with “heavy” libraries all you literally need is CSS and good mood ;)

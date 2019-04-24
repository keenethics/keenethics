Author: Anton Trofimov
Title: The Stories of an Avid Gamer and Bug Hunter
Subtitle: The Stories of an Avid Gamer and Bug Hunter - Keenethics Blog
Meta title: The Stories of an Avid Gamer and Bug Hunter - Keenethics Blog
Meta description: Finding cracks and vulnerabilities and winning the favorite game.
Categories: From KeenEthics
Preview image: /static/posts/the-stories-of-an-avid-gamer-and-bug-hunter-prew.jpeg

![Gamer](/static/posts/the-stories-of-an-avid-gamer-and-bug-hunter.jpeg)

<div>
  <p style="text-align: center; font-style: italic;">Finding cracks and vulnerabilities and winning the favorite game</p>
</div>

Hi everyone!

My name is Anton, and I am a software developer with 10 years of professional experience.

One of my amateur hobbies is analyzing various apps for the purpose of finding different vulnerabilities. Today, I would like to tell you about a few most interesting cases I have ever discovered and, perhaps, to share some useful lessons with you.

I will tell you about the most favorite game from my childhood, which I spent a few years playing. To be honest, I learned to develop software while creating some game-related stuff for interest and for profit. I have developed macroses and add-ons for simple automation, simple bots on top of the bot framework, self-made bots on C++ with the ability to input/output data… There were a lot of interesting things I have created, but now I would like to focus on what is related to hacking the game.

Gold hack or Money Out of Nothing

If you google “gold hack + GAME NAME”, you will see plenty of videos devoted to this topic. Gold hack is a holy grail for avid players who strive to achieve dominance in the game without putting in much effort. To put it briefly, it is a method of obtaining the game money out of nothing by using certain game vulnerabilities.

This game had a few relatively small communities, who tried looking for and investigating all the possible cracks in the game. Sometimes, we succeeded in discovering something interesting and even shared our findings with each other.

At some point, a guy from this community found that the game client hasdhidden game commands, which at first sight did not bring any significant bonuses but were accessible only to the players with minimal and higher rights for GameMaster (game had up to 12-13 levels of account roles).

The main trick rests in the fact that these functions did not feature any server tests and, by slightly modifying the client memory, they could be easily used. Have you ever seen questions like “how to hack online game with ArtMoney/CheatEngine”? That is exactly the case. 

However, nothing useful appeared to be there – at first sight. I am going to tell you later about some more critical functions. Now, I would like to start with one seemingly simple function – learning “recipes” of how to create some in-game items.

Basically, average players could also access the same functionality. However, using this game command, we could use it even when the game avatar was far from the location or even if the player did not meet some specific requirements (such as reputation). In fact, this can already be considered a vulnerability: the “hacked” function enabled players to save efforts and resources as one did not need to run to a certain location or to work hard to achieve a certain level of reputation. Yet, this problem is not critical as it gives advantage only to a certain player but, in most cases, does not harm the overall game.
Then, I decided to experiment with this function and to use it in different ways. How did it work?

For the understanding you need to know the following. First, for all objects, avatars, skills, and other things with a statistical set of properties, there was respective serial data used, where the identificator was one of the fields. For every type of things, a certain range of meanings was used. Frankly speaking, all the meanings in the range of 100-200 thousand are objects, 200-300 thousands – non-player characters, 400-500 thousands – recipes etc. All the IDs were incremental.
Meanwhile, a single argument – the identifier of a particular recipe – was sent to the same function. I decided to experiment and launched this function in the cycle, where the iterator equals the ID:

<div style="margin-bottom: 25px;">
  <iframe width="100%" height="150" src="//jsfiddle.net/maxsoloviov/yc6mz3b2/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
</div>

In the range, I added not only the IDs of recipes but also everything else.
Surely, taking into account that the function call was a synchronous server request, the client was working slowly because of a large number of requests. Imagine my surprise when I suddenly noticed that the amount of game money grew. Obviously, I got curious and started to look deeper into this function.
With the call to function, some objects subtracted a few millions of gold, so at some point, function calls returned an error saying that there was not enough money. Yet, I was shocked when I noticed that I received about 2 billions of gold, which is the maximal possible amount of money that a player may have. At that point, I thought that the reason rested in some test object with a negative value, but the reality appeared to be way more interesting. Later on, the server source codes were published, so I got an opportunity to check how it worked. As for me, it was quite interesting.

You need to know the following two facts.
1) All the statistical data about objects was stored in .db files. In fact, this was just a set of serialized characteristics (for instance, weight, size, volume, etc.)
2) The game read this binary data while loading a respective binary and deserialized it in a respective structure according to the file name. In C++, there is a data type named union, which allows to connect a few structures (similar to objects in JS but with a fixed size of a field), to set a common address for the memory block, and, depending on which structure is called, to deserialize binary data into it.

To compare, let’s say we have a rope of a certain length. If we take a ruler in centimeters, millimeters, or decimeters and measure the rope, we will have different values in respective units although the length of the rope will stay the same. If we take rulers of a different length, the shorter one will measure only a part of the rope, while the longer one will have an extra unused part. This is how it looks in code:

<div style="margin-bottom: 25px;">
  <iframe width="100%" height="250" src="//jsfiddle.net/maxsoloviov/56n7sfyh/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
</div>

This is the example where all the structures have the same value (in the first case – int, 4 bytes, in the second – short + short – 2 bytes + 2 bytes, yet still 4 bytes).

Let’s assume that we have memory with the following value: 0x3B9ACA00. If we calculate it with the help of ALLINONE.a1, we receive the value ALLINONE.a1.b1==1000000000. If we calculate it with the help of a2, we receive the value ALLINONE.a2.b1==15258, ALLINONE.a2.b2== –13824. This happens because we read one and the same memory field that contains this union, but depending on the structure, we obtain a different amount of memory, and each field will have its own size and value.
 
So let’s get back to the vulnerability. After learning the server source code, I understood that the recipe learning function did not validate the object type in accordance with the sent ID and did not check the negative value of an object.

Respectively, we got into a situation where the memory field that contains, for example, the weapon characteristics tried to be converted into the recipe properties. As a result, the price field, which was located 48 bytes away from the beginning of the memory block and was of integer type and 4 bytes in size, actually read data from the field that contained weapon characteristics. Consequently, we received random values and negative ones in particular.
Therefore, because the necessary validations were absent, the function сщгдв accept any value, and the player would receive an immense amount of gold.

__From this situation, I have drawn a few valuable conclusions, some of which are applicable to JS:__

1. One should not store critical parts of client-server application on the client even if they wanted to decrease server load. However strong the protection was,  there always may appear an enthusiast able to crack it.
2. Universalization is great, but there are no so-called “golden bullets”. Any solution has its disadvantages. 
3. Incremental IDs, depending on the situation, may be a bad decision. For example, I have recently read an article where important data was stolen from a large medical database with the help of a simple cycle calling APIs with user IDs.
4. It is necessary to add validations for the user action conditions even if it seems to be an improbable scenario. For instance, there is a site that generates auto-login links, which contain the user ID and hash, and sends them out as spam. If one such link is leaked, anyone can access somebody else’s account.
5. Requests should be carried out asynchronously or the browser may stop responding, which is going to badly affect the user experience.
6. One should leave no hints about admin functions on the client side. Users should receive everything they have a right to but not more. Otherwise, a bug hunter may make a guess about how the admin panel is organized and benefit from it.
7. Validations of data type and values are a must. The most obvious example of such an error is when a user buys something in a store and the price is negative.

## Creating Your Own Item

In some cases, before being added to the bag, the item is added to a so-called “queue of items”. For instance, if a user received an item after having won the monster but the bag was full, the item would wait in the line, from which it would get into the first vacant slot in the bag.
For some reason, the developers decided that these slots were reliable, and everything that the client said about them must be true. As a result, we got into a situation where we made a slot free by modifying the information about the item in the memory queue, after which the information about the updated item was sent to the server, saved, and the item info was updated. A few lines of modification and we got an imbalanced player knowing no limits and boundaries.
However, that was still not the most interesting trick we learned.
There are so-called gashas in the game – containers, which could be bought in a store for money, the items inside of which could be different. Let’s say there was such a package with 10 bottles of medicine for $1 each, or another one with a pet and food for it for $3. 
The hint: the ID of the item and its number is another modified characteristic of such a package.
As a result, when I turned on my code it modified all items in a sequence with the same pattern. Yet, since I forgot to disable it, I opened the package and found a really weird item inside. Having run a few more experiments, I learned that I could create any object by modifying these gashas.

__What did I learn from this is once again that one should not believe the client part. Besides, there was another useful finding: almost always there would be someone to use a certain object, service, or function not by its purpose.__

## SQL-Injection

Here, everything is quite trivial: game developers used a very weird method of data protection (they moved all the incoming information to HEX, extracted the original value on DB side, and recorded it into the table). 
I ran multiple tests of server source code requests that accept lines as an incoming value and record them into a database without hexing. Then, I found a function of checking users’ MAC-address aimed to detect the accounts of cheaters. What an irony!
Knowing the structure of the database, it was enough to create a request with an sql-injection, which could, for example, add administrator rights to users. The only limitation was the line length, something about 40-50 characters. By the way, it was enough to create a relatively complex request, which was supposed to find the necessary table without knowing DB names.

__The conclusion is that one should use ORM. If for some reason pure SQL-requests are more effective, parametrization should be used.__ 

## Ignoring the Administrator Rights Validation

And the last case for today. 
I found that the developers left a small crack in the code to allow administrator rights for themselves. There are two functions in the client: managekey and managepassword. The first function sends a server request, which generates a certain number and a respective password. To use the second function, one takes this number, processes it through the function that calculates the password, and then sends it to the given function. If everything went smooth the user would receive a special flag that enables to ignore the administrator rights validation.

__The conclusion I have drawn is as follows: one should not leave any backdoors on the client side even if they seem to be perfectly protected. Sooner or later someone will find a way to benefit from them.__

Thank you for the attention!
Author: Volodymyr Andrushchak
Title: Voice App Development
Subtitle: Voice App Development - Keenethics Blog
Meta title: Voice App Development - Keenethics Blog
Meta description: Let us tell you how Keenethics developers create truly useful voice apps, what challenges we face, and which opportunities we offer.
Preview image: /static/posts/voice-app-development-prew.jpg

![Heroes](/static/posts/voice-app-development.jpg)

<div><h1 style="font-weight: 600; margin-top: 30px" align="center">Voice App Development</h1></div>

## Voice Services

Voice devices and applications are a major AI advancement, which enables us to use numerous services in a hands-free regime. Functional features and qualitative characteristics of voice assistants have already grown to an extent where they become helpful tools in one’s personal and business routine.

<div>
  <p>
    According to <a href="https://techcrunch.com/2017/11/08/voice-enabled-smart-speakers-to-reach-55-of-u-s-households-by-2022-says-report/" target="_blank" rel="noopener noreferrer">Techcrunch</a>, “smart devices like the Amazon Echo, Google Home and Sonos One will be installed in a majority – that is, 55 percent – of U.S. households by the year 2022”. Only in the last year, the number of voice services users in the United States has grown by 128.9 percent.
  </p>
</div>

<div>
  <p>
    <a href="" target="_blank" rel="noopener noreferrer"></a>
    The number of voice assistants available today is overwhelming. Have you already met <a href="https://www.nuance.com/omni-channel-customer-engagement/digital/virtual-assistant/nina.html" target="_blank" rel="noopener noreferrer">Nina</a>, <a href="http://www.silvia.ai/" target="_blank" rel="noopener noreferrer">Silvia</a>, <a href="https://www.nuance.com/dragon/dragon-anywhere.html" target="_blank" rel="noopener noreferrer">Dragon</a>, <a href="https://www.jibo.com/" target="_blank" rel="noopener noreferrer">Jibo</a>, <a href="http://www.vokulnation.com/" target="_blank" rel="noopener noreferrer">Vokul</a>, <a href="https://www.samsung.com/us/explore/bixby/" target="_blank" rel="noopener noreferrer">Samsung Bixby</a>, <a href="https://yandex.com/company/blog/say-privet-to-alice-yandex-s-intelligent-assistant" target="_blank" rel="noopener noreferrer">Alice</a>, or <a href="https://www.brainasoft.com/braina/" target="_blank" rel="noopener noreferrer">Braina</a>? If not, you must have heard about <a href="https://www.microsoft.com/en-us/cortana" target="_blank" rel="noopener noreferrer">Cortana</a> for Windows, <a href="https://www.apple.com/siri/" target="_blank" rel="noopener noreferrer">Siri</a> for IOS, <a href="https://assistant.google.com/intl/en_uk/#?modal_active=none" target="_blank" rel="noopener noreferrer">Google Assistant</a> for Android, and <a href="https://www.amazon.com/Amazon-Echo-And-Alexa-Devices/b?ie=UTF8&node=9818047011" target="_blank" rel="noopener noreferrer">Alexa</a> for Amazon ― they are undisputed leaders in the field. 
  </p>
</div>

<div>
  <p>
    They may be accessed via <a href="https://keenethics.com/blog/1539840666250-best-smart-speakers-2018" target="_blank" rel="noopener noreferrer">stand-alone devices</a>, for instance, Alexa Echo or Google Home, or via a smartphone, a laptop, a smart TV set, or a tablet. Users connect to a voice assistant using a keyword, such as “Hey Siri” or “Ok Google”.
  </p>
</div>

<div>
  <p>
    One of the most impressive representatives in the field is <a href="https://ai.googleblog.com/" target="_blank" rel="noopener noreferrer">Google Duplex</a>. The personal assistant from Google has been recently upgraded, and now, it can make a restaurant reservation or order a pizza for you. In fact, your assistant will sound utterly life-like: with “umms” and “aahs”, he or she will be easily mistaken for an actual person. The ultimate example of AI using voice technology is Sophia the Robot. Sounds quite impressive, doesn’t she?
  </p>
</div>

For us as the developers and businesses using voice technology, its major importance lies in the opportunity to transform traditional messenger bots into voice chatbots, which are more appealing to the end user.

## Major Industry Challenges

Voice app development is quite simple in theory but rather challenging and time-consuming in practice. The first and most commonly cited risk associated with voice assistants is that they fail to properly understand and decode what has been said. **Misunderstandings** happen because an automatic voice recognition technology often fails to perceive language variations: accents, dialects, or sociolects. A single speech mistake makes a phrase indecipherable, which turns the usage of a voice app into an immense challenge for people with speech disorders. Most proper names, especially those rarely used, are almost never decoded properly. Finally, voice apps cannot be used by speakers of most less popular languages, such as Ukrainian, Albanian, Belarusian, Hungarian, or Mongolian. 

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: What is the weather in New York, chiquita?</p>
  <p style="margin-bottom: 0">Assistant: I’m having a bit of trouble here. Please try again.</p>
</div>

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: Search Internet for Jeff Bezos.</p>
  <p style="margin-bottom: 0">Assistant: Ok, I found this on the web for ‘Japanese’.</p>
</div>

<div style="text-align: center; font-style: italic;margin-bottom: 14px;"> 
  <p style="margin-bottom: 0">User: Хей, яка погода у Києві?</p>
  <p style="margin-bottom: 0">(Translated from Ukrainian: What is the weather in Kyiv?)</br>
    Assistant: I’m having a bit of trouble here. Please try again.</p>
</div>

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: Whatcha the weathe’ in Nu York on weekn’?</p>
  <p style="margin-bottom: 0">Assistant: I’m having a bit of trouble here. Please try again.</p>
</div>
    
Another important issue lies in NLU (Natural Language Understanding), which is defined as the **post-processing of perceived text**. At this point, the technology has to extract the basic entities from a given context (when, where, what, and who). 

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: Can you remind me tomorrow to meet Ann at 7 pm?</p>
  <p style="margin-bottom: 0">Assistant: Ok. Just tell me what you want to be reminded about.</p>
</div>

**Database of an optimal size** is also quite difficult to create as long as it has to cover all the trigger phrases that may be used to invoke a certain reaction. At the same time, the set of these phrases has to be quite concise so that the reaction is not induced when it is not supposed to. 

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: Can you remind me tomorrow to meet Ann at 7 pm?</p>
  <p style="margin-bottom: 0">Assistant: Calling Ann...</p>
</div>

**Small talk**, which is probably the most frequently used function, may seem to be simple to implement, but in fact, it is also one of the challenges. A voice assistant has to be given a full list of topics that the user may ask to discuss, such as weather forecasts, news briefs, jokes, or merely “How are you?” questions. Moreover, it is important to “teach” the technology to differentiate between small talks and commands.

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: Hey, how are you? Open my calendar.</p>
  <p style="margin-bottom: 0">Assistant: I’m pretty fine, thanks. And you?</p>
</div>

**Context** is a true headache for the voice app developers. The voice assistant has to be taught not only to decode a certain message but also to take into account all the phrases it received during the current conversation as well as the situational context of the communication: date, location, etc. 

<div style="text-align: center; font-style: italic;margin-bottom: 14px;">
  <p style="margin-bottom: 0">User: What is the weather in New York <b>this</b> weekend?</p>
  <p style="margin-bottom: 0">Assistant: I’m having a bit of trouble here. Please try again.</p>
</div>

And the ultimate concern of voice technology users is **data safety**. If a voice assistant reacts to a trigger word, then, presumably, it has to be constantly listening to what you are saying. What if this data is recorded, saved, and sent to someone or sold for advertising purposes? No doubt, nobody wants to have their private conversations leaked.

## The Opportunities Voice Services Provide You With

The newest and best-developed technologies can recognize the age, gender, and mood of a person in order to give the most relevant and appropriate answer. They also may be used as a security measure since they can distinguish the voice patterns of a certain person. For instance, even the voices of two young women will be told apart.

Voice assistants may be both helpful and entertaining. They may be used to get an answer for a general question, to listen to a news brief, to check out the schedule for the day, or to run a smart home. Voice assistants also make shopping easier as they enable a user to place, track, and cancel online orders.

Fascinated? Yes, we were. A few years ago.

Today, those features do not seem as miraculous as they used to be since most modern people got used to them. These functions seem helpful, but one can easily do without them. Be honest with yourself, how often do you talk to your voice assistant because you really need to?  

Therefore, the topical question is to improve the functionality of voice technologies to the extent where they become indispensable. And they can become such in the areas where people need a voice assistant because their hands are busy, dirty, or wet or when interruptions badly affect performance and productivity. Voice apps will help drivers not to get distracted from the road and to keep hands on a steering wheel. Chefs in restaurants will use voice apps to check recipes, add items to the “To Order” list, and review or close orders. Workers at a plant may operate machinery with the help of their voice to ensure safety of the manufacturing process and boost productivity. The list of opportunities is endless. The problem is that the ideas are limited.

<div style="padding-left: 6%">
  <p>
    Food for thought: would you want your voice assistant to understand when you start speaking a different language and to switch to it together with you? Imagine, you talk to your app in English but cannot remember a word. You name it in Spanish, and your assistant responds with no hesitation. What a great language learning tool would it be! We are definitely excited about this opportunity ― another idea to consider.
  </p>
</div>

## Stages of Voice Chatbots Development 

<div>
  <img style="margin: 15px auto;" src="/static/posts/photo_2019-01-22 12.35.38.jpeg" alt="Stages of voice chat dev"/>
</div>

As in the case of any other project, the first step of voice app development is a sound and comprehensive research. You cannot execute a project unless you fully understand its purpose, complexity, and expected user experience.  
The second level of voice application project development consists in creating UML diagrams for a more efficient representation of all the elements and processes of the future system.  
Subsequently, it is necessary to choose the technology that the voice chatbot will work with. Should it be a web-based application or the one connected to a certain platform, such as Slack or Facebook Messenger? After that, the prototypes of the future app are developed and agreed with the clients upon. 
The next step is to create a concise database of dialogue samples: keywords and phrases that the voice assistant has to react to and a set of programmed responses it will choose from. And only after all the brainstorming and planning, the development itself begins.

However, our work is not over even after the application has been completed and released. To make your voice service stand out and improve its quality, we need to obtain more 5-star reviews and record 'failed' requests ―  those that didn't result in an action or triggered a wrong answer.  


You Have an Idea? We Have a Solution!

Keenethics is a software developer with almost 2 years of experience in voice app development on multiple projects. We have integrated various chatbots with Alexa and Google Assistant to develop voice bots. In the scope of another large project, we have launched a web-powered and Skype-powered information search voice chatbot. We have also developed numerous Alexa skills for our personal use and for the customers.

Basically, what we offer is UX chatbots for any platforms or devices since the logic is pretty similar regardless of the chosen technology. If you have ideas, we will be glad to help you implement them.

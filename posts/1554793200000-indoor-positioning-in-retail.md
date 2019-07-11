Author: Tetiana Matviiok, Volodymyr Andrushchak
Title: Indoor Positioning in Retail
Subtitle: Indoor Positioning in Retail - KeenEthics Blog
Meta title: Indoor Positioning in Retail - KeenEthics Blog
Meta description: For a retailer, it opens unlimited marketing opportunities and boosts engagement. For a customer, it makes shopping easier, faster, and more efficient.
Categories: Business guide, Tech
Preview image: /static/posts/indoor-positioning-in-retail/indoor-positioning-in-retail-prew.jpg

![Indoor Positioning in Retail](/static/posts/indoor-positioning-in-retail/indoor-positioning-in-retail.jpg)

<div style="text-align: center;">
  <h2 style="font-weight: 600; margin: 30px 0 0 0;">The Use of Indoor Positioning in Retail</h2>
  <p>Information and navigation at the fingertips of your customers</p>
</div>

In a huge mall with multiple eye-catching ads and logos among a large number of people, how can you make your store attract the customers’ attention? How can you convince the visitors that your store is the one to visit, that it will become the optimal shopping decision? How can you let the customers know about discounts and special offers or new arrivals without bothering them with brochures and flyers?

### Let iBeacons help you out.

<div>
  <p>iBeacons have the potential to change the future of retail. With the use of a store positioning system, grabbing the attention of customers or informing them on most recent news requires almost no time or effort.  According to the statistics provided by <a href="//www.brickandmobile.com/mobile-stats/" target="_blank" rel="noopener noreferrer nofollow">Brick & Mobile</a>, timely sent in-store notifications may increase purchase intent by 20 times. Moreover, they say that about 80% of shoppers admit favoring purchases from a brand that offers a unique engaging mobile experience. The number of beacons used in American stores is going to hit the 400 million point by 2020, and if to consider the advantages these devices provide customers and retailers with, it becomes clear why.</p>
</div>

For customers:
- iBeacons make mall navigation easier, so one does not have to roam around the maze of stores, corridors, and escalators while looking for a particular shop. 
- If a user likes a certain store, they may add it to saved locations and quickly find it next time. 
- Personalized discounts and coupons let a buyer strike a bargain. 
- It is a life-saving solution for people with disabilities: looking for accessible routings or an elevator becomes easier than ever.

For retailers: 
- iBeacons are the key elements of proximity marketing – the strategy which boosts user engagement and makes stores stand out among the others. 
- With indoor positioning, retailers easily understand the behavior of their customers: where they go, what they are looking for, or where they stay the longest. 
- It becomes easier to understand customer preferences and collect qualitative feedback.

### How does indoor positioning work?

Almost no modern person leaves their home without a smartphone, especially while going around a shopping mall. People use phones to check information about a brand online, to ask about the opinion of friends or family, to store their discount cards, and to make cashless payments. The indoor positioning system further broadens these opportunities. Before iBeacons were introduced, the use of smartphones for shopping purposes was kind of one-way: smartphones were used exclusively by customers. However, the implementation of a store positioning system makes it two-way: both retailers and buyers use the technology in their interests.

Having downloaded a shopping center app, a person comes to a mall and gets a complete real-time map to navigate around the shopping center. Users also receive a general shopping digest to enjoy the greatest discounts and the newest arrivals. Once a device is in the immediate vicinity of a certain store that has introduced its own shopping app, iBeacons transmit the information that this particular retailer wants customers to see, and the user receives a push-up notification, a newsletter, or an e-brochure. 

In the following scheme, throughout their route, a person steps into the areas covered by beacons in the rooms R1, R2, and R5. Respectively, they receive a notification from these three stores, and they do not get any from the stores R3 and R4.

![Indoor Positioning in Retail](/static/posts/indoor-positioning-in-retail/image5.jpg)

In large stores, such as Walmart or Target, users may receive important information about the product once they approach it. Of course, you would not provide an information page for every single kind of chips or soda. But for some major goods, such as phones, TVs, or luxurious furniture, which the customers think about twice or trice before purchasing, why wouldn’t you?

Another unique opportunity that indoor positioning provides stores with is targeting individual customers. Imagine quite a common situation, when a person enters a shop, let’s say – a toy store, roams around aisles, but leaves without making a purchase. The analysis of data from their beacon may show which item they were looking at for the longest period of time if there is such. If the visitor spent a lot of time checking out a certain toy, why didn’t they buy it? Was it too expensive? Then, you may promptly message or e-mail them and offer a personalized 5 or 10 percent discount for 2 hours for this particular or similar toys. Think about it, your sales are going to rocket! And also be sure that the customer will appreciate your personalized approach and develop loyalty to your brand.

<div style="font-style: italic; padding-left: 5%;">
  <p>Food for thought: How would you use indoor positioning in a restaurant, an airport, a railway station, a governmental institution, a museum or an exhibition, or in a business center?</p>
</div>

### How we implement indoor positioning?

There are two major technical ways of how the indoor positioning system can be implemented: client-based and server-based. Basically, a client-based approach requires the user to have the app installed and locates the device via Bluetooth beacons or Wi-Fi. In turn, a server-based solution does not necessarily need an app but locates users via Wi-Fi, Bluetooth beacons, RFID modules, or Ultra-wideband. Both solutions are suitable for point-specific positioning of the device, but the first one provides way more opportunities. In other words, the first approach is suitable for proximity and customer relationship marketing, whereas the latter works for marketing data analysis.

As far as the client-based solution is concerned, to implement it, one needs to provide hardware (Bluetooth or Wi-Fi sensors) and three software products.

Before we jump into details about these three apps, let us look at the biggest obstacle that the indoor positioning system may face – walls. If there is a wall, there will be a loss in signal and, respectively, a mistake in positioning. How to overcome this issue? How do you know in which zones beacons will work properly and which zones are going to be blind? Are you going to run around and install beacons, then check the connection and reinstall them accordingly over and over again until all the areas are covered? We do not want you to do that.

This is where the first software product enters the fray (see Fig. 1). Basically, it is a software-based algorithm that enables the user to evaluate potential positioning mistakes in theory. The user creates a scheme of the building with all its walls and doors, places beacons, and sees which zones are easily accessible and which are blind. With the help of this algorithm, one may easily and quickly find the optimal configuration of beacons for a specific building.

![The map of investigated buildings](/static/posts/indoor-positioning-in-retail/image3.jpg)
<div><p style="text-align: center">Fig 1. The map of investigated buildings</p></div>

However, what if in practice some mistakes still slip through? This is where you need the second app – a software tool for the administrators of the indoor positioning system. Our next step is simulation and calculation of attenuation for every beacon on a specific position. There are places where we don’t have collisions with adjacent beacons because we are so close to a specific beacon. However, when we are in the middle of the room we can have collisions with adjacent beacons. That’s why we have developed this app that helps to find these blind zones and reduces the number of navigation errors in a real system. It saves the time of our client because we don’t spend a lot of time for deployment and adjustment of our system. 

In Figure 2, we can see the distribution of navigation errors in percents for every position. Based on this map of errors, we manipulate the location of beacons for increasing the accuracy of our system.

![The map of errors for the investigated map](/static/posts/indoor-positioning-in-retail/image1.jpg)
<div><p style="text-align: center">Fig 2. The map of errors for the investigated map</p></div>

The third app is the admin one, (both for Android and iOS platforms – see Fig. 3) which helps to control the deployed system. This app shows the level of signal that the device receives from each beacon at any given spot, so the administrator may go around the store and reassess the efficiency of the beacon configuration. When beacons are set on specific positions we use this app for debugging a real deployed navigation system, finding blind zones, etc. 

<div style="display: flex; flex-wrap: wrap; margin: 0 -15px; justify-content: center;">
  <div style="padding: 10px;"><img src="/static/posts/indoor-positioning-in-retail/image2.jpg" alt="Admin app"></div>
  <div style="padding: 10px;"><img src="/static/posts/indoor-positioning-in-retail/image4.jpg" alt="Admin app"></div>
  <p style="width: 100%; text-align: center;">Fig 3. Admin app</p>
</div>

The main purpose of these apps is to increase the accuracy of a navigation system, decrease deployment time, and reduce the number of navigation errors which can occur because of different native and artificial blockers.

### What are the Dos and Don’ts?

**DO** make sure that the indoor positioning is as accurate as possible. While approaching one store, the customer absolutely should not by mistake receive the information from another store nearby.

**DO NOT** leak or leave unprotected any personal data of your users. Physical safety and data security – both should go first.

**DO** inform your customers on the location, opening times, and specialization of your store and provide them with pictures and videos to make the information you offer more visually appealing.

**DO NOT** focus exclusively on prices not to repeal your customers.

**DO** use push-up notifications to improve your visibility and engagement.

**DO NOT** make your app annoying, i.e. buzzing with an unappealing sound or impossible to close.

### Let’s summarize.

iBeacons are gradually conquering the largest retail markets around the world, and some retail giants from the United States, Europe, or CIS have already implemented an indoor positioning system in their malls. However, such a technology has a great potential not only for huge stores but also for smaller retailers, who want to make their stores stand out among all the other bright logos and shop windows. The system is simple to implement, and while it requires some initial investment, it is going to pay off quite soon. For a retailer, it opens unlimited opportunities and increases engagement in the market. For a customer, it makes shopping easier, faster, and more efficient. 

If you feel venturous to make your retail business stand out, and you think that the indoor positioning system may be the solution you are looking for, you are absolutely right. Feel free to contact our team and consult us about the opportunities and risks associated with this technology. If you decide to develop a shopping app for your business, our professionals in the IoT field will also be eager to help you out.

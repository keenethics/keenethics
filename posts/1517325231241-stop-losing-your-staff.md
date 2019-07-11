Author: Volodya Andrushchak
Title: Case Study: PREE - Stop Losing Your Stuff
Subtitle: Case Study: PREE - Stop Losing Your Stuff - KeenEthics Blog
Meta title: Case Study: PREE - Stop Losing Your Stuff - KeenEthics Blog
Meta description: How often do you lose your stuff? How much time did you spend trying to find your keys the last time? I guess you were looking for it throughout your apartment while quarrelling with your beloved and ending up being late for work. Maybe it’s not about you but for someone else it’s a real problem.
Categories: From KeenEthics
Preview image: /static/posts/pree-1-prew.jpg

![PREE](/static/posts/pree-1.jpg)

<h1 style="text-align: center;">Case Study: PREE — Stop Losing Your Stuff</h1>

How often do you lose your stuff? How much time did you spend trying to find your keys the last time? I guess you were looking for it all around your apartment while quarreling with your beloved one and ended up being late for work. Maybe it’s not about you, but for someone else, it’s a real problem.

Ahmed Jacob from White Technology decided to solve this problem by using iBeacon technology. He suggested attaching the iBeacon BLE (Bluetooth Low Energy) devices to important belongings of users, which would communicate and provide your smartphone with information on its location. The idea is not new, but Ahmed decided to do something cool for the customers, constructed nice UX, and suggested all the necessary features, so we were happy to help him in implementing this idea.

## Methods and Technology

<p>First of all, we needed to decide which technology stack would be used for this app. We had to keep in mind that we needed to work with Bluetooth 4.0 as a native part of a smartphone, and if the connection between a smartphone and an iBeacon tracker was bad, it would be pointless to develop any features. Given that the application was not trivial and required hardware access, it seemed that developing a native application for both Android and iOS would be a poor decision. However, Ahmed had a daring idea to develop hybrid (not native) application on Ionic 3 framework. Since we had some experience developing hybrid applications, we took up this idea and made it real with the help of <a href="//github.com/don/cordova-plugin-ble-central" target="_blank" rel="noopener noreferrer nofollow">cordova-ble-plugin</a>.</p>

Ionic framework offers a huge number of templates, which makes it highly effective for the development. However, when we want to use some native APIs (keyboard, camera, network configuration etc.) we have to use Cordova and ionic-native plugins. On the one hand, it may speed up the process because the developer focuses only on developing the features. On the other hand, it can slow things down because the developer can use only the API of Cordova or ionic native plugins, which may have bugs or lack some features. In this case, you have three options:

1. Using the existing plugin and trying to handle errors on the level of ionic components and API;
2. Fixing bugs on the Cordova level. Here, you need some knowledge of Java and Swift/Objective-C.
3. Writing your own plugin. It’s quite expensive but it can sometimes be the most reliable option, and as in the previous option, you need some good knowledge of Java and Swift/Objective-C.

So, we were ready for these problems and we could assume that we would have a problem using Bluetooth-related API on our hybrid application.

## The Description of Our Job

Our task was to develop and release a mobile app for Android and iOS platforms that would communicate with BLE devices (in our case PREE device) and give it’s users the location information of their belongings.

For the backend, we used Nodejs, Express, and Mongo. For Android and IOS, we used Ionic, Cordova, BLE-plugin, Google Maps, and Geolocation. BLE-plugin allows to scan, connect, read/write information from a BLE device or, as in our case, PREE tracker device (BLE devices). We used this plugin for scanning PREE devices, getting signal level for every PREEs, setting Bluetooth pair connection for every attached device. We also used Google maps and Geolocation for storing and showing actual location of the attached PREE device. These measures allowed notifying users when they lose connection or come back “in-range” of their PREE device.

## UX and UI

The most important thing in the PREE app is to enable users to quickly access and control their PREE devices. That’s why, when the user’s registration is completed, the BLE starts scanning PREE devices and attaches trackers to the user’s account.

After the user’s configuration, they are navigated to the device page where they can set up bicone’s profile and have all settings there.

The main page, which is the list of devices, can be accessed from every other screen. This UX feature allows easy and fast access to the settings of PREE devices.

Apart from this, the user can track all devices on a general map. Implemented UX doesn’t have pages of deep nesting, which enables fast access to all PREE devices.

## Technical Problems

*Android: Connection*

Firstly, we encountered a problem with the connection in Android. There are a lot of manufacturers of Android devices, so the Bluetooth behavior of each device can differ. Sometimes, the connection between Android smartphone and PREE device is established at the seventh attempt. It takes a lot of customer’s time, so we decided to automatically keep scanning the BLE devices and trying to reconnect after every unsuccessful connection. In addition, we enabled the scanning and connecting processes to take place in the background mode.

*IOS: Power Consumption*

On iOS platform, connecting to BLE works better than on Android platform. In iOS, the main app flow is implemented through scanning of PREE devices and trying to connect to them, which works fast and reliable. The Bluetooth connection is reliable: it allows to read the information from a PREE device and Bluetooth periphery, which helps to calculate the approximate distance. The price of such Bluetooth functionality is more power consumption. For example, in the main flow, PREE app could consume all the battery power within just 6 hours.

We are still working on reducing the power consumption on both platforms and keeping up the required level of reliability of the PREE app.

## Final Product

We created the app with the ability to:

- Scan/connect/read/write for PREE BLE devices;
- Notify users when they lose connection or come back “in-range” with their PREE device;
- Store the last known location of a PREE device and rewrite it when the user is back in range;
- Show all the above-mentioned locations on a map for every device and on a general map;
- Show approximate distance to a PREE device;
- Notify a family member when a PREE device is lost.

Also, we developed two modes for PREE device: ‘close by’ (strict) and ‘normal’ (not strict), which depends on the distance to your PREE device.

![PREE Final Product](/static/posts/pree-2.jpg)


## Conclusion

To sum up, it was a huge experience for our KeenEthics team to develop this hybrid application. Although we have faced some problems on both platforms, the established connection works on an acceptable level, and we still keep developing this app and trying to improve the connection. This case proves that, sometimes, hybrid apps can be more appropriate than native.

<p>If you want to test this app, it is available in <a href="//play.google.com/store/apps/details?id=com.whitetechnologies.bluetooth" target="_blank" rel="noopener noreferrer nofollow">Play Store</a> and <a href=" //itunes.apple.com/us/app/pree-track/id1262375574?ls=1&mt=8" target="_blank" rel="noopener noreferrer">App Store</a>. If you want to get this PREE device tracker, you can visit <a href="//preetrack.com" target="_blank" rel="noopener noreferrer">this website</a>.</p>
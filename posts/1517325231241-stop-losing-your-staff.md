Author: Volodya Andrushchak
Title: Stop Losing Your Staff
Subtitle: Stop Losing Your Staff
Meta title: Stop Losing Your Staff
Meta description: Stop Losing Your Staff
Preview image: /static/posts/pree-preview.png

![Heroes](/static/posts/pree-in-article.png)

# Stop Losing Your Stuff

## Introduction

How often do you lose your stuff? How much time did you spend trying to find your keys the last time? I guess you were looking for it throughout your apartment while quarrelling with your beloved and ending up being late for work. Maybe it’s not about you but for someone else it’s a real problem. 

Ahmed Jacob from White Technology decided to solve this problem by using iBeacon technology. He suggested attaching the iBeacon BLE (Bluetooth Low Energy) devices to users’ stuff. These devices communicate and provide your smartphone with necessary information and gives you the location information of your stuff. It’s not a new idea but Ahmed decided to do something cool for the customers, constructed nice UX and suggested all  the necessary features and we were happy to help him in implementing this idea. 

## Methods and Technology

First of all, we needed to decide which technology stack would be used for this app. We had to keep in mind that we needed to work with Bluetooth 4.0 as a native part of smartphone. And if connection between a smartphone and an iBeacon tracker is bad, it will be pointless to develop any features. Given that the application is not trivial and requires hardware access, it seems that developing a native application for both platform - Android and iOS could be a gould solution. However, Ahmed had a daring idea to develop hybrid (not native) application on Ionic 3 framework. Since we have some experience developing hybrid applications we supported it and it became reality thanks to this [cordova-ble-plugin](https://github.com/don/cordova-plugin-ble-central).

Ionic framework is very cool for development especially when we talk about some information application as this framework suggests a huge number of  templates. However, when we want to use some native apis (keyboard, camera, network configuration etc) we have to use cordova and ionic-native plugins. Sometimes it speeds up the process because developer focuses only on developing the features, but it can sometimes slow things down. The reason for it is that developer can only use the api of cordova or ionic native plugins which may have bugs or lack some features. In this case you have three options:

1. Use existing plugin and try to handle errors on your level (I mean the level of ionic components and API)
2. Try to fix bugs on the cordova level - here you need some knowledge of Java and Swift/Objective-C. You can use the local fixed version of this plugin or wait when your pull request gets approved.         
3. Write your own plugin - it’s quite expensive but it can sometimes be the most reliable option. And as in the previous option you need some good knowledge of Java and Swift/Objective-C.

So, we were ready for these problems and we could assume that we would have a problem using bluetooth-related api on our hybrid application.  

## Our Job and Description.
Our task was to develop and release a mobile app for Android and iOS platforms which has to communicate with BLE devices (in our case PREE device) and give it’s users the location information of their stuff. 

For the backend we were using Nodejs, Express and Mongo. For Android and IOS: Ionic, Cordova, BLE-plugin, Google Maps and Geolocation.
BLE-plugin allows to scan, connect, read/write information from a BLE device - in our case PREE tracker device (BLE devices). We use this plugin for scanning PREE devices, getting signal level for every PREEs, setting bluetooth pair connection for every attached device. We also used Google maps and Geolocation for storing and showing actual location for attached PREE device. All this stuff is required for the main feature - notifying users when they lose connection or come back “in-range” of their PREE device. 

## UX and UI
The most important thing in PREE app is to enable users to quickly access and control their PREE devices. That’s why when the user’s registration is completed, the BLE starts scanning PREE devices and attaches trackers to the user’s account. 

After user’s attachment, they are navigated to the device page where they can configure bicone’s profile and have all settings there.

The main page - the list of devices is available on almost all pages. This UX feature allows an easy and fast access to the settings of PREE devices. 

Apart from this, the user can track all devices on a general map.
Implemented UX doesn’t have pages of deep nesting which allows us to have a fast access to all PREE devices.

## Technical Problems

\- _Connection_ 

Firstly, we encountered a problem with connection in Android. There are a lot of manufactures of Android devices and as a result the bluetooth behavior can differ in each of them. Sometimes the connection between Android smartphone and PREE device is established at the seventh attempt. It  takes a lot of customer’s time and we made the decision to keep scanning the BLE devices and try to reconnect after every unsuccessful connect. In addition to this, we implemented the scanning and connecting to operate in the background mode.  This leads to the power consumption increase, but it seems that right now we have found a golden mean for Android platform - between strong connection, reliable data and acceptable energy consumption. We are still working on a reliable level of connection for both platforms. 

\- _Problem with scanning on IOS_

On iOS platform connecting to BLE works better than on Android platform (Because iBeacon protocol is developed by Apple? :)). In iOS the main app flow is implemented through scanning of PREE devices and tries to connect to them. And it works fast and reliable.  The price of such bluetooth functionality is  more power consumption. For example, in the main flow PREE app could consume all the battery power within just 6 hours. Additionally, it’s not easy for bluetooth to scan in a background mode in iOS. Firstly, in order to upload it to the appstore, you have to explain them why you need it. Secondly and most importantly -  the scanning in background mode leads to an increase in the power consumption of iPhone. Therefore, we made a decision to avoid using BLE scanning in a background mode on iOS platform. The bluetooth connection works reliably -  it allows to read some information from PREE device and bluetooth periphery which helps to calculate the approximate distance. We are still working on reducing the power consumption on both platforms and also trying to keep up the required level of reliability of PREE app. 

## Final Product

Achievements:

1. An app which can scan/connect/read/write for PREE BLE devices (iBeacon)
2. Notify user when they lose connection or come back “in- range” with their PREE device.
3. Store the last to know location of your PREE device and rewrites it when you are back in-range. 
4. Show all the above mentioned locations on a map for every device and on a general map.
5. Show approximate distance to you PREE device. 
6. Developed two modes for PREE device - ‘close by’ (strict) and ‘normal’ (no strict), that depends on distance to your PREE device.
7. Notify your family member when PREE device is lost.

## Conclusion
To sum up, it was huge experience for us to develop this hybrid application. Although we have faced some problems on both platforms, it’s WORKING. The most important thing is that the established connection works on an acceptable level.  Apart from this, we keep developing this app and trying to improve the connection. I know that guys, who also write native app, probably don’t support my point of view, but what I want to say is that hybrid apps can sometimes be more appropriate than native.

If you want to test this app - it is available in [Play Store](https://play.google.com/store/apps/details?id=com.whitetechnologies.bluetooth) and App Store. If you want to get this PREE device tracker - you can visit [this site](https://preetrack.com/). 

Site - [https://preetrack.com/](https://preetrack.com/)

Link for Play Market - [https://play.google.com/store/apps/details?id=com.whitetechnologies.bluetooth](https://play.google.com/store/apps/details?id=com.whitetechnologies.bluetooth)
Link for App Store - [https://itunes.apple.com/us/app/pree-track/id1262375574?ls=1&mt=8](https://itunes.apple.com/us/app/pree-track/id1262375574?ls=1&mt=8)


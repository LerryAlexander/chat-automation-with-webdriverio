# Chat Automation with WebdriverIO
Chat automation with webdriverIO to run multiple Appium sessions on android devices by using [multiremote()](https://webdriver.io/docs/multiremote.html) function

> Chat Automation with WebdriverIO on two Android devices

![](chat-automation-webdriverIO.gif)

## Set Up and Dependencies 

  - Java JDK 
    - Please install Java JDK 8 or higher from Oracle official web site https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
  - Node JS & NPM
    - Please install from here https://nodejs.org/en/
  - Android Studio & Emulators
    - Please install from here https://developer.android.com/studio/install
    
 ## Set Up 2 virtual devices
 
  - From the Android Studio main screen, go to `Tools -> AVD Manager.`
  - Press the "+ Create Virtual Device" button.
  
  ![alt text](/android-studio-avd-manager.png "Android Studio ADV Manager" | width=80)
  
  - Choose and download **Pixel 2** (API 28, android 9.0) and **Nexus 4** (API 24, android 7.0) and press "Finish" to create each virtual device
  
  ![alt text](/android9.0.png "Android API 28, android 9.0")
  
  ![alt text](/android7.0.png "Android API 24, android 7.0")
  
## Install dependencies 
  - From the root of the project `/chat-automation-with-webdriverio` run:
    - `npm install`

## Run tests 
  - `npm run appium`
  
  

# APPIUM WITH AUTOMATION

## Install Dependencies

* Install node version: ```v18.16.1```
  * Cames with npm version: ```9.5.1```
  * Cames with npx version: ```9.5.1```
* Install JDK version: ```1.8.0_401``` and add env variables
* Install and Configure Android Studio.
Select ony one option:
  - Option A: follow all instructions from [Android-Studio.md](./README-DEPLOY-01A-Android-Studio.md) file. (Recommended) (Use it when you need test with real and emulator devices.)
  - Option B: follow all instructions from [Android-Sdk.md](./README-DEPLOY-01B-Android-Sdk.md) file. (Use it when you need only test with real devices.)
* Install Appium: follow all instructions from [Appium.md](./README-DEPLOY-02-Appium.md)
* Install and Configure Xcode [Xcode.md](./README-DEPLOY-04-Xcode.md) (Only for MAC)
* Configure ```config.properties``` file for Android according with [Config-Props-Android.md](./README-DEPLOY-03-Config-Props-Android.md)
* Configure ```config.properties``` file for iOS according with [Config-Props-iOS.md](./README-DEPLOY-05-Config-Props-iOS.md) (Only for MAC)

## Run tests
* Run all test ```gradlew --info cleanTest test```
* build all projects ```gradlew build```

## Run tests project-01
* build only a project ```gradlew :project-01:build```
* Run on project-01 ```gradlew :project-01:test```

## Run tests project-02
* build only a project ```gradlew :project-02:build```
* Run on project-01 ```gradlew :project-02:test```

## Run tests project-03

* build only a project ```gradlew :project-03:build```
* Run cucumber tests  ```gradlew :project-03:cucumber```
* Run cucumber tests only smoke```gradlew :project-03:cucumber -P tags=@SmokeTest```
* Then you can see the reports in ```project-03/reports/index.html``` folder.
# Boilerplate for React-Native
#### Customized by Jay Lim (for personnal uses.)

<p align="center">
  <a href="https://reactnative.dev/" target="blank"><img src="https://reactnative.dev/img/tiny_logo.png" width="200" alt="RN Logo" /></a>
</p>

<p align='center'>
<img alt="Typescript" src ="https://img.shields.io/badge/Typescript-3178C6.svg?&style=for-the-badge&logo=Typescript&logoColor=white"/>
<img alt="React Query" src ="https://img.shields.io/badge/Mobx-FF9955.svg?&style=for-the-badge&logo=mobx&logoColor=white"/>
<img alt="Mobx" src ="https://img.shields.io/badge/React Query-FF4154.svg?&style=for-the-badge&logo=reactquery&logoColor=white"/>
<img alt="Axios" src ="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/>
<img alt="i18next" src ="https://img.shields.io/badge/i18next-26A69A.svg?&style=for-the-badge&logo=i18next&logoColor=white"/>
<img alt="RN Paper" src ="https://img.shields.io/badge/Material Design (React Native Paper)-757575.svg?&style=for-the-badge&logo=materialdesign&logoColor=white"/>
<img alt="Zod" src ="https://img.shields.io/badge/Zod-3E67B1.svg?&style=for-the-badge&logo=zod&logoColor=white"/>
<img alt="React Native MMKV" src ="https://img.shields.io/badge/React Native MMKV-231F20.svg?&style=for-the-badge&&logoColor=white"/>
</p>

## Developement
```bash
npm run android:dev
```

## Notice
- The MMKV uses NDK version `23.1.7779620`. Need to fix the version at build.gradle or ndk.dir.


## Way to use in your development
### 1. Setting Up
1. Install all dependencies: `npm i`
2. Change your project & directory name to your project name. (Optional)
3. Change your Application name to your application name in app.json and package.json. (Optional)
4. Remove `android` and `ios` folder.
5. Eject your application to create new android and ios files: `npx react-native eject`

### 2. Android
1. Locate to directory `android`, create `local.properties` file.
2. Set `sdk.dir` to locate your sdk location. `sdk.dir=...`
3. Set `ndk.dir` to locate your *specific* version of ndk. `ndk.dir=...`. Remember to set `ndkVersion`in `build.gradle` located at `android` directory to be same with your version of `ndk.dir`.
> `react-native-mmkv` will make error if you use ndk with higher version than `23.1.7779620`. If you don't want to locate your ndk version, or if you don't need such library, remove the library by running `npm uninstall react-native-mmkv`.
4. If you ejected your react native project, locate to `/app` directory, add following line at `build.gradle`
```gradle
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"
# Add the line below.
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

### 3. iOS
1. Open the project in Xcode via `xed ./ios` 
2. Create a Configuration Setting file at the project, and add the code below. (It will genertate `Config.xcconfig` file.)
```xcode
#include? "tmp.xcconfig"
```
3. In PROJECT, change Info  - Configuration
```text
Debug -> [projectName] -> Set as Config 
Release -> [projectName] -> Set as Config
```
4. Add Scheme: `Prodjct -> Scheme -> New Scheme`, add `Development` scheme and `Production` scheme.
5. Set Scheme Action: `Product -> Shceme -> Edit Scheme`, locate `Build -> Pre-actions`, set .env directory as below.
```shell
mkdir -p tmp # Make a temporary file to copy dedicated env.

cp "${PROJECT_DIR}/../src/env/.env.development" "${PROJECT_DIR}/tmp/.env" #.env.produiction for Production scheme

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/tmp/.env" "${SRCROOT}/tmp.xcconfig"

```
6. Set .env variables in `Info.plist`. The name should be same with listed in `.env.~`.
```plist
<key>API_URL</key>
<string>${API_URL}</string>
```
7. `cd ios && pod install`

### 3. ENV
1. Locate `src/env`, create `.env.development`, `.env.production`.


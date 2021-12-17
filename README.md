<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jusoftdev/desktopSee">
    <img src="https://i.imgur.com/jTBYCxC.jpeg" alt="Logo">
  </a>

<h3 align="center">desktopSee</h3>

  <p align="center">
    Convert a Website to a crossplatform Desktop application.
    <br />
    <a href="https://github.com/jusoftdev/desktopSee"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jusoftdev/desktopSee/releases/tag/v1.0.0">Get it</a>
    ·
    <a href="https://github.com/jusoftdev/desktopSee/issues">Report Bug</a>
    ·
    <a href="https://github.com/jusoftdev/desktopSee/issues">Request Feature</a><br>&nbsp;
<a href="https://www.buymeacoffee.com/jusoft" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#showcase">Showcase</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#todo">To do</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Convert a Website to a crossplatform Desktop application
<img src="https://i.imgur.com/0Wm6xxK.png" />


<img src="https://i.imgur.com/kX8Vhrx.png"/>


### Built With

* [Electron](https://www.electronjs.org/)

<!-- GETTING STARTED -->
## Getting Started

Setup the plugin for your environment

### Installation / Setup

1. Clone the repo
   ```sh
   git clone https://github.com/jusoftdev/desktopSee.git
   ```
2. Install yarn packages
   ```sh
   npm install
   ```
3. Insert your Website you want to convert in `config.js`
```js
'websiteUrl': 'https://shortl.it/Dsm2Bf',
```

4. Run
```sh
npm start
```
5. Build the Application for platforms <br>
5.1. Install Electron Builder
```sh
npm i electron-builder -g
```

**Important**<br>
```
macOS User – Can build macOS, Windows and Linux version of your application
Windows User – Can only build Windows and Linux versions only
Linux User – Can only build Linux versions only
```
```
Supported Platforms
macOS
Only 64bit binaries are provided for macOS. The minimum macOS version supported is macOS 10.10 (Yosemite).
Windows
Windows 7 and later are supported. Older operating systems are not supported (and do not work).
Linux
The prebuilt ia32 (i686) and x64 (amd64) binaries of Electron are built on Ubuntu 12.04, the armv7l binary is built against ARM v7 with hard-float ABI and NEON for Debian Wheezy.
```

● Build for all platforms (which you are able to build):
```sh
electron-builder -mwl
```
● Build for macOS:
```sh
electron-builder --mac
```
● Build for Windows:
```sh
electron-builder --win
```
● Build for Linux
```sh
electron-builder --linux
```
5.3. Built output applications are located in the newly created directory called `dist` which is inside your application directory.
6. Setup the application according to your wishes<br>

● Enter Elements that will be hidden in `config.js` (optional)
```js
'hideElementsId': [],
```
● Enter Elements that will be hidden by class in `config.js` (optional)
```js
'hideElementsClass': [],
```
● Configure the application window size in `config.js` (optional)
```js
'width': 1280,
'height': 800,
'minWidth': 1280,
'minHeight': 800,
```
● Change application name in `config.js` (optional)
```js
'appName': 'desktopSee',
```
<!-- SHOWCASE -->
## Showcase

About Page
<img src="https://i.imgur.com/Jo3hNnU.png" />
Error Page
<img src="https://i.imgur.com/csxYpuL.png" />
Preloader <br>
<img src="https://i.imgur.com/ovKoXXV.png" />

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jusoftdev/desktopSee/issues) for a list of proposed features (and known issues).

<!-- todo -->
## Todo

* Setup the website you want convert in app



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

JuSoft - [@jusoftdev](https://twitter.com/jusoftdev) - [Discord Server](http://jsft.be/discord) - support@jusoft.dev

Project Link: [https://github.com/jusoftdev/desktopSee](https://github.com/jusoftdev/desktopSee)



<!-- ACKNOWLEDGEMENTS -->
## Contributors

* [juhom205](https://github.com/juhom205)





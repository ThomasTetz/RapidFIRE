# RapidFIRE

RapidFIRE was originally created for the University of Alberta Computer Engineering Club HackED 2020 hackathon. The DevPost submission can be found [here](https://devpost.com/software/rapidfire).

FIRE stands for Financial Independence / Retire Early, which is the concept of not having to work for money such as through investments or passive income, and achieving that state at an earlier age than typical retirement.

The goal of this app is to show different graphical information for various calculations needed to plan for retirement. The inputs should be flexible to target certain dollar values or time deadlines.


![RapidFIRE homepage](https://github.com/ThomasTetz/RapidFIRE/raw/master/docs/RapidFIRE_homepage.png "RapidFIRE homepage")

## Below is the original README from the starter repo.

# React boilerplate with sidebar navigation

Originally cloned from https://github.com/facebook/create-react-app

This is the starting point for my own website. I wanted to keep it as simple as possible for future uses. Feel free to clone/download and star if you find it useful. This is also great for sandboxing components.

## Dependencies
I have installed https://www.npmjs.com/package/depcheck. It is very useful when sandboxing because I often will install a bunch of packages to play around with and then end up forgetting to remove them. Just run:

```bash
$ yarn depcheck
```

Then for unused dependencies run:

```bash
$ yarn remove [package]
```

The sidebar comes from https://www.npmjs.com/package/react-sidebar. This is the best sidebar nav for React that I was able to find. You can configure it in many cool ways and adapts well to mobile. Take note that I am running an older version of react-sidebar (v2) because the newest version does not support the sliding functionality on mobile to close the menu.

Font Awesome is included as well, because well, it's awesome. No icons are actually used in the boilerplate but it's all set up and ready to go; all you have to do is uncomment the code in App.js and import your icon of choice to your component.

The remaining deps are pretty standard or come along with create-react-app. 

## Available Scripts

In the project directory, you can run (use yarn not npm):

```bash
$ yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```bash
$ yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

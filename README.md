# IssWatcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## About

I.S.S. watcher serves four purposes: The default pages shows the user's sunrise and sunset times. An iss live tracker, an iss next-passes generator, and a list of the people currently on the iss. It uses the [Open notify](http://open-notify.org/Open-Notify-API/) api, and the [Sunrise Sunset](https://sunrise-sunset.org/api) api.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`ng test` Has two tests. A tautological true=true as a placeholder for future tests, and a functional test.
`ng e2e` tests the page title.

## Process

I received the assessment details Tuesday evening and spent several hours that night and Wednesday morning researching Angular 4 (I haven't written any Angular in a while, and most of what I had done before was Angular 1). I also dug around for some public JSON APIs to work with.

I started the project Wednesday morning around 10 AM and worked through 12PM, and again around 6PM for another hour. Thursday I started early and ran into some issues with one of the API endpoints not being configured for CORS. This required a JSONP callback. I had to tinker around with Angular and RxJS to figure out their idioms. I picked it up again in the afternoon and worked until the evening.

This morning (Friday), I put the final touches on the forms, adding some light validation.

I spent around 12 hours writing code, and an additional 4-6 hours preparing (researching angular, api choices, building a simple throw-away app).
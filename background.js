// Copyright 2020 Erin Ptacek. All rights reserved.

'use strict'

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'app.slack.com' }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        return {
            cancel: true
        }
    }, { urls: blockURLs }, [ "blocking" ]
)

blockURLs = [
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*"
]
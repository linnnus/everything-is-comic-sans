# Change every font to Comic Sans
Comic Sans MS is such a beautiful font. In fact, the entire web deserves to be viewed in this magnificent typeface. That is the exact function of this Chrome extension. It's super simple and yet improves the browsing experience by magnitudes.

The extension can be enabled/disabled by clicking the icon, however, this has made it a bit slower. This means, that it is now possible to se the original (disgusting) webpage before the CSS is loaded. If performance is more important, one should concider injecting the CSS declarativly like so:

```json
"permissions": ["<all_urls>"],
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "css": ["styles.css"]
  }
],
...
```

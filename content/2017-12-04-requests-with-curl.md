+++
title = "Impersonating local requests with curl"
slug = "impersonating-local-requests-withcurl"
default_language = "en"
[taxonomies]
categories=["linux"]
tags=["cli"]
+++

```bash
curl -v --header "X-Forwarded-For: 127.0.0.1" --referer "http://targetreferrer" "http://destinationsite"
```

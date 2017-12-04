---
layout: post
title: Impersonating local requests with curl
slug: impersonating-local-requests-withcurl
name: Impersonating local requests with curl
---

{% highlight bash %}

curl -v --header "X-Forwarded-For: 127.0.0.1" --referer "http://targetreferrer" "http://destinationsite"

{% endhighlight %}
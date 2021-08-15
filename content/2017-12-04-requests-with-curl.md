+++
title = "Impersonating local requests with curl"
slug = "impersonating-local-requests-withcurl"
[taxonomies]
categories=["linux"]
tags=["cli"]
+++

{% highlight bash %}

curl -v --header "X-Forwarded-For: 127.0.0.1" --referer "http://targetreferrer" "http://destinationsite"

{% endhighlight %}

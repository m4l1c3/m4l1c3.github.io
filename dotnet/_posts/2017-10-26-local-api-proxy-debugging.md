---
layout: post
title: Local API Proxy Debugging in .Net
slug: local-api-proxy-debugging-dot-net
name: Local API Proxy Debugging in .Net
---

# How to point local APIs to Burp Suite in a microservice architecture

Add the following to your Web.config:

{% highlight xml %}
<system.net>
  <defaultProxy>
    <proxy proxyaddress="http://127.0.0.1:8080" bypassonlocal="False" />
  </defaultProxy>
</system.net>
{% endhighlight %}
---
layout: post
title: OWASP Broken Web Apps WackoPicko
slug: owasp-broken-web-apps-wackopicko
name: OWASP Broken Web Apps WackoPicko
---

Right off the bat, try hitting the search box with a simple XSS payload:

{% highlight javascript %}
search.php?query=<script>alert(1)<%2Fscript>&x=24&y=12
{% endhighlight %}


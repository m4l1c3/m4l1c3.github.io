---
layout: post
title: Billy Madison v1.1
---

#Billy Madison v1.1


Starting by scanning the hosts with nmap:
nmap -T4 -A -v -p0-65535 192.168.110.105 -oN nmap-results.txt

-   T4 for faster execution
-   A for OS detection
-   p0-65535 for scanning ports 0 - 65535
-   oN nmap-results.txt for writing output to a file using the "normal" format.  Also supports xml, script kiddy, and grepable format

The scan return the following:
-   Wordpress site - 69
-   Another site - 80
-   Possible telnet - 23
-   FTP - 21
-   SSH - 1974, weird

##Telnet
Trying to connect via telnet I got a message mentioning ROTten passwords, maybe ROT-13 encoded (http://decode.org/) Got back exschmenuating.

Checking that as a folder, got lucky and found "Eric's" secret page.



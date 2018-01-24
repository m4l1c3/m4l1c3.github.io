---
layout: post
title: Game of thrones
slug: game-of-thrones
name: game-of-thrones
---

# GoT


## Discover

{% highlight bash %}

netdiscover -r 192.168.1.0/24
Currently scanning: Finished!   |   Screen View: Unique Hosts

5 Captured ARP Req/Rep packets, from 4 hosts.   Total size: 300
_____________________________________________________________________________
IP            At MAC Address     Count     Len  MAC Vendor / Hostname
-----------------------------------------------------------------------------
192.168.1.1     30:5a:3a:73:51:90      1      60  ASUSTek COMPUTER INC.
192.168.1.5     78:4f:43:86:36:e3      1      60  Apple, Inc.
192.168.1.50    00:0c:29:f9:ee:88      1      60  VMware, Inc.
192.168.1.50    78:4f:43:86:36:e3      2     120  Apple, Inc.

nmap -T4 -sV -oA output 192.168.1.50

nmap -T4 -sV -oA output 192.168.1.50

Starting Nmap 7.60 ( https://nmap.org ) at 2018-01-23 21:16 MST
Stats: 0:01:16 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Service scan Timing: About 83.33% done; ETC: 21:18 (0:00:15 remaining)
Stats: 0:01:44 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Service scan Timing: About 83.33% done; ETC: 21:18 (0:00:20 remaining)
Nmap scan report for 7kingdoms (192.168.1.50)
Host is up (0.00022s latency).
Not shown: 992 closed ports
PORT      STATE    SERVICE    VERSION
21/tcp    open     ftp?
22/tcp    open     ssh        Linksys WRT45G modified dropbear sshd (protocol 2.0)
53/tcp    open     domain     ISC BIND Bind
80/tcp    open     http       Apache httpd
143/tcp   filtered imap
3306/tcp  filtered mysql
5432/tcp  open     postgresql PostgreSQL DB 9.6.0 or later
10000/tcp open     http       MiniServ 1.590 (Webmin httpd)
2 services unrecognized despite returning data. If you know the service/version, please submit the following fingerprints at https://nmap.org/cgi-bin/submit.cgi?new-service :
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port21-TCP:V=7.60%I=7%D=1/23%Time=5A6808B6%P=x86_64-pc-linux-gnu%r(Gene
SF:ricLines,11C,"220-------------------------\r\n220-\"These\x20are\x20the
SF:\x20Dorne\x20city\x20walls\.\x20We\x20must\x20enter!\"\x20-\x20Grey\x20
SF:Worm\r\n220-\r\n220-\"A\x20fail2ban\x20spell\x20is\x20protecting\x20the
SF:se\x20walls\.\x20You'll\x20never\x20get\x20in\"\x20-\x20One\x20of\x20th
SF:e\x20Sand\x20Snake\x20Girls\r\n220-------------------------\r\n220\x20T
SF:his\x20is\x20a\x20private\x20system\x20-\x20No\x20anonymous\x20login\r\
SF:n");
==============NEXT SERVICE FINGERPRINT (SUBMIT INDIVIDUALLY)==============
SF-Port5432-TCP:V=7.60%I=7%D=1/23%Time=5A6808B1%P=x86_64-pc-linux-gnu%r(SM
SF:BProgNeg,8C,"E\0\0\0\x8bSFATAL\0VFATAL\0C0A000\0Munsupported\x20fronten
SF:d\x20protocol\x2065363\.19778:\x20server\x20supports\x201\.0\x20to\x203
SF:\.0\0Fpostmaster\.c\0L2031\0RProcessStartupPacket\0\0");
MAC Address: 00:0C:29:F9:EE:88 (VMware)
Service Info: Device: router

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 180.60 seconds

{% endhighlight %}

Page source of port 80:

{% highlight html %}

<!--
This is the Game of Thrones CTF v1.0 (September 2017)

Designed by Oscar Alfonso (OscarAkaElvis or v1s1t0r)
Contact: v1s1t0r.1s.h3r3@gmail.com
https://github.com/OscarAkaElvis/game-of-thrones-hacking-ctf

Thanks to the beta testers, specially to j0n3, Kal3l and masAcre

--------------------------------------
 _____                      ___    _____ _                       			
|   __|___ _____ ___    ___|  _|  |_   _| |_ ___ ___ ___ ___ ___ 
|  |  | .'|     | -_|  | . |  _|    | | |   |  _| . |   | -_|_ -|
|_____|__,|_|_|_|___|  |___|_|      |_| |_|_|_| |___|_|_|___|___|

--------------------------------------

Goal:
-Get the 7 kingdom flags and the 4 extra content flags (3 secret flags + final battle flag). There are 11 in total.

Rules/guidelines to play:
- Start your conquer of the seven kingdoms
- You'll need hacking skills, no Game of Thrones knowledge is required. But if you play, it may contains spoilers of the TV series
- Difficulty of the CTF: Medium-High
- This is the start point, the base camp
- You must travel to westeros. First stop: Dorne. Last stop: King's Landing
- Don't forget to take your map (try to find it). It will guide you about the natural flag order to follow over the kingdoms
- Listen CAREFULLY to the hints. If you are stuck, read the hints again!
- Powerful fail2ban spells were cast everywhere. Bruteforce is not an option for this CTF (2 minutes ban penalty)
- The flags are 32 chars strings. Keep'em all! you'll need them

Good luck, the old gods and the new will protect you!

The game already started!! A couple of hints as a present.

"Everything can be TAGGED in this world, even the magic or the music" - Bronn of the Blackwater

"To enter in Dorne you'll need to be a kind face" - Ellaria Sand
-->

{% endhighlight %}


/robots.txt

{% highlight html %}

User-agent: Three-eyed-raven
Allow: /the-tree/
User-agent: *
Disallow: /secret-island/
Disallow: /direct-access-to-kings-landing/

{% endhighlight %}

Set user agent to Three-eyed-raven and hit /the-tree:

{% highlight html %}

<!--
    "I will give you three hints, I can see the future so listen carefully" - The three-eyed raven Bran Stark
    
    "To enter in Dorne you must identify as oberynmartell. You still should find the password"
    "3487 64535 12345 . Remember these numbers, you'll need to use them with POLITE people you'll know when to use them" 
    "The savages never crossed the wall. So you must look for them before crossing it"
-->

{% endhighlight %}

/secret-island/ gives the map

{% highlight html %}

<!--
    "Take this map and use it wisely. I want to be your friend" - Petyr (Littlefinger) Baelish
-->

{% endhighlight %}

Gives a map, outlines some of what nmap found:

1. dorne (ftp)
2. the wall/north (http)
3. iron islands (dns)
4. stormlands (webmin)
5. mountain and the vale (postgresql)
6. the reach (imap)
7. the rock and kinds landing (gitlist and mysql)

Bonuses:

8. Final battle, whitewalkers (ssh)
9. Savages (secret flag)
10. City of Braavos (secret flag)
11. Dragonglass mine (secret flag)

/direct-access-to-kings-landing/

{% highlight html %}

<!--
    "I've heard the savages usually play music. They are not as wild as one can expect, are they?" - Sansa Stark
-->

{% endhighlight %}


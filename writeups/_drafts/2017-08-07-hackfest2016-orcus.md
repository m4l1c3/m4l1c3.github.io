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


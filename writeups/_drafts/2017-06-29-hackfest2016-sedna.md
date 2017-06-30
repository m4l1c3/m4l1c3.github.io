---
layout: post
title: hackfest2016-Sedna
slug: hackfest-2016-sedna
name: hackfest2016-Sedna
---

# Sedna

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




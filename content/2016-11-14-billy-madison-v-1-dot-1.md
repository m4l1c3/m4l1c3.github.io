+++
title = "Billy Madison v1.1"
slug = "billy-madison"
default_language = "en"
[taxonomies]
categories=["vulnhub"]
tags=["vulnerable-machine"]
+++

Starting by scanning the hosts with nmap:
```bash
nmap -T4 -A -v -p0-65535 192.168.110.105 -oN nmap-results.txt
```
-   T4 for faster execution
-   A for OS detection
-   p0-65535 for scanning ports 0 - 65535
-   oN nmap-results.txt for writing output to a file using the "normal" format.  Also supports xml, script kiddy, and grepable format

The scan returned the following:
-   Wordpress site - 69
-   Another site - 80
-   Possible telnet - 23
-   FTP - 21
-   SSH - 1974, weird

## Telnet
Trying to connect via telnet I got a message mentioning ROTten passwords, maybe ROT-13 encoded (http://decode.org/) Got back exschmenuating.

##Another "Site"
Checking that as a folder, got lucky and found "Eric's" secret page.

Alternate Route:
Using cewl against the Billy Madison script from here: http://www.springfieldspringfield.co.uk/movie_script.php?movie=billy-madison and generating a wordlist:
```bash
cewl -w billy-madison-wordlist.list -d 0 -v http://www.springfieldspringfield.co.uk/movie_script.php?movie=billy-madison
```

Which found: exschmenuating

Then run that through dirbuster and brute force on our new wordlist, this also finds the hidden "site"

Also found a banned hosts file as well showing I'd been banned from connecting via telnet.

In Eric's notes it looks like he may have been sending a phishing e-mail to Veronica and mentioned the file containing everything (probably a network capture) had her name in it.  Since Kali comes with the rockyou wordlist I generated a new word list containing anything that had 'veronica' in it with this command:
```bash
grep -ir 'veronica' /usr/share/wordlists/rockyou.txt >> ./veronica.list
```

Then ran that through dirbuster with the file extensions: pcap and cap on the subdirectory /exschmenuating which found: 012987veronica.cap.

Time to grab that through the browser or with wget and open up Wireshark.  I was able to follow the TCP stream (under analyze in the menus) to step through the emails and see the communication back and forth between her and Eric.

Looks like the machines "anti-virus" caught the malware, but unfortunately Veronica had Eric upload the file with FTP so she can just run the executable, she gave a weird hint referencing the "Spanish Armada" fortunately I've seen the movie and a youtube video was included.  When the spanish armada is mentioned Billy states the following guesses, seems like port numbers: 1466 67 1469 1514 1981 1986.  After some googling it turns out there is a thing called port knocking, basically if you have a service you want to hide you can require that ports get pinged in a specific order another port that the service is running on will open up, then pinging the ports in reverse order closes the service's port.

With this bash command I was able to ping all the ports in order against the host:
```bash
for x in 1466 67 1469 1514 1981 1986; do nmap -Pn --host-timeout 201 --max-retries 0 -p $x bm; done
```

#OWASP Juice Shop

I started this process off by trying to throw some JavaScript into the search box, looks vulnerable to XSS:
&lt;script type="text/javascript"&gt;alert('hi');&lt;/script&gt;

Results in an alert popping up after the site issues a GET request to the server, followed by a UI alert stating an objective had been reached, finding unhandled exceptions.

Next I looked through the login page's source to see if anything sticks out and found this:

&lt;!--
    &lt;li class="dropdown"&gt;
       &lt;a href="#/score-board"&gt;Score Board&lt;/a&gt;
    &lt;/li&gt;
--&gt;

Looks like I found the scoreboard for the app and it is available at the following route:

&lt;a href="#/score-board"&gt;Score Board&lt;/a&gt;

Now that I've got a list of the challenges I do the following as a search:

&lt;script&gt;alert("XSS1")&lt;/script&gt;

Which succesfully performs a reflected XSS attack.

I next went through the process of placing an order and noticed the URL for my receipt was using a subdirectory, I tried browsing to the folder /ftp and was presented with files I could download, which ended up getting me another achievment: access a confidential document

Next I was able to get ot the administration section of the store by going to:

#/administration

Once on the admin page I was able to get another achievment by deleting the only user comment with a 5 star rating

Next I see there is a task to login as the administrator.  Based on the fact that the site already seems vulnerable to SQL injection I am going to fire up Burp Suite and try some things, the first place that came to mind to check was the login form.  I already know the admin user from getting access to the admin page that wasn't secured, but I'm going to just try using the username/email field for injection.

After some googling (or in my case duck duck go-ing) I was lead to FuzzDB and plugged the xplatform list under attack/detect.  After inspecting the responses it looks like this super simple gem: a' or 1=1-- will do the trick.  Try using that as my user and bam, logged in as admin.

Since I'm already focused on the admin login I'm next going to try and login as admin without performing SQL injection.  Back to Burp Suite.  This time I'm going to try and brute force the admin login now that I know the email address: admin@juice-sh.op.  After using Burp's intruder with the "big.txt" from Kali's dirb wordlists Looks like we have a successful payload: admin123.

Now that I've gotten that one I noticed that we have challenges to login as jim and and bender, might as well try the same technique with these two.

Another challenge: Place an order that makes you rich.

First I tried just manipulating the markup to see if I'd be able to just change the value and then update the quantity, however the model binding in angular kept that from working.

Back to Burp, this should be an easy task using the intercept.  Once everything is up and running I can see in the quantity being passed to the server, after changing the value to -100000 and forwarding traffic I can see a large negative total for the line item, now to checkout, and bam challenge completed.

Now that I've gotten access tpo admin I'm going to take a look at getting some of the hidden files in that /ftp directory.  Right now the two .bak fils are being blocked, lets head over to burp to try and use repeater to get these files out.  I got stuck on this one and watched a walkthrough and, basically passing in null characters to the URL to trick the express routing, I initially tried %00, which didn't work, then tried %2500 and got through: /ftp/package.json.bak%2500.pdf to get the file.

This ended up being the same for retrieving the easter egg and old coupon file.  

For the easter egg I got back a base64 encoded value: L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA== that decodes to: /gur/qrif/ner/fb/shaal/gurl/uvq/na/rnfgre/rtt/jvguva/gur/rnfgre/rtt

For the coupon file: 

n<MibgC7sn
mNYS#gC7sn
o*IVigC7sn
k#pDlgC7sn
o*I]pgC7sn
n(XRvgC7sn
n(XLtgC7sn
k#*AfgC7sn
q:<IqgC7sn
pEw8ogC7sn
pes[BgC7sn
l}6D$gC7ss

Now that I have the site's package.json file (node js package config) I can run an npm install and see if any dependencies have vulnerabilities, after running an npm install looks like sequelize and minimatch are both vulnerable because they're using an outdate package.  Looks like another challenge solver: Inform the shop about avulnerable library it is using.

Looking back at the score board looks like we have an item around getting back all the users/passwords from our database, time to fire up sqlmap.  I ended up running the following command which got me back the search parameter to use:

sqlmap -u "https://quiet-lake-65056.herokuapp.com/rest/product/search?q=test" --level=2 -p "q" --dbms="sqlite" --dump --proxy=http://10.1.206.89:8081

The parameters are used as follows:
-u = URL to attack
-level = the level of attack to execute
-p = parameter to try and exploit
-dbms = the dbms we're targeting
-dump = attempt to pull the database
-proxy = the proxy to run requests through

Once we get through things the following comes back with the following:

sear')) union all select null,null,null,null,null,null,null,'qzzjq'||'QHWDqQappkdzrcmfZObclJekqtZryURacjvmYOqV'||'qaakq'-- IvXq

Plugging that into the browser we get a partial product grid.  Time to start figuring out how to get the users and password back.

I ended up with this for the final search query:

sear')) union all select id,email,password,null,null,null,null,'qzzjq'||'QHWDqQappkdzrcmfZObclJekqtZryURacjvmYOqV'||'qaakq' from users-- IvXq

Bam, a list of users and their hashed passwords, another challenge completed.

Now to try and figure out some of these passwords.  I put the hashes all into this site:
https://crackstation.net/

This site was able to crack 2 of the user passwords, admin (already known) and jim.  Now to login as jim@juice-sh.op since thats a challenge. 

I used the following credentials:

User: jim@juice-sh.op
Pass: ncc-1701

Another challenge completed.

The password cracker I used identified the passwords it cracked as being md5, there is a challenge about informing the shop they're using a library/algorithm incorrectly so I gave it a shot and said the md5 implementation is weak, another challenge completed.



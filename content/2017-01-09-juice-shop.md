+++
title = "OWASP Juice Shop"
slug = "juice-shop"
+++


#OWASP Juice Shop

I started this process off by trying to throw some JavaScript into the search box, looks vulnerable to XSS:
{% highlight html %}
<script type="text/javascript">alert('hi');</script>
{% endhighlight %}
Results in an alert popping up after the site issues a GET request to the server, followed by a UI alert stating an objective had been reached, finding unhandled exceptions.

Next I looked through the login page's source to see if anything sticks out and found this:

{% highlight html %}
<!--
    <li class="dropdown">
       <a href="#/score-board">Score Board</a>
    </li>
-->
{% endhighlight %}
Looks like I found the scoreboard for the app and it is available at the following route:

{% highlight html %}
<a href="#/score-board">Score Board</a>
{% endhighlight %}
Now that I've got a list of the challenges I do the following as a search:
{% highlight html %}
<script>alert("XSS1")</script>
{% endhighlight %}
Which successfully performs a reflected XSS attack.

I next went through the process of placing an order and noticed the URL for my receipt was using a subdirectory, I tried browsing to the folder /ftp and was presented with files I could download, which ended up getting me another achievement: access a confidential document

Next I was able to get to the administration section of the store by going to:

#/administration

Once on the admin page I was able to get another achievement by deleting the only user comment with a 5 star rating

Next I see there is a task to login as the administrator.  Based on the fact that the site already seems vulnerable to SQL injection I am going to fire up Burp Suite and try some things, the first place that came to mind to check was the login form.  I already know the admin user from getting access to the admin page that wasn't secured, but I'm going to just try using the username/email field for injection.

After some googling (or in my case duck duck go-ing) I was lead to FuzzDB and plugged the xplatform list under attack/detect.  After inspecting the responses it looks like this super simple gem: a' or 1=1-- will do the trick.  Try using that as my user and bam, logged in as admin.

Since I'm already focused on the admin login I'm next going to try and login as admin without performing SQL injection.  Back to Burp Suite.  This time I'm going to try and brute force the admin login now that I know the email address: admin@juice-sh.op.  After using Burp's intruder with the "big.txt" from Kali's dirb wordlists Looks like we have a successful payload: admin123.

Now that I've gotten that one I noticed that we have challenges to login as jim and and bender, might as well try the same technique with these two.

Another challenge: Place an order that makes you rich.

First I tried just manipulating the markup to see if I'd be able to just change the value and then update the quantity, however the model binding in angular kept that from working.

Back to Burp, this should be an easy task using the intercept.  Once everything is up and running I can see in the quantity being passed to the server, after changing the value to -100000 and forwarding traffic I can see a large negative total for the line item, now to checkout, and bam challenge completed.

Now that I've gotten access to admin I'm going to take a look at getting some of the hidden files in that /ftp directory.  Right now the two .bak fils are being blocked, lets head over to burp to try and use repeater to get these files out.  I got stuck on this one and watched a walkthrough and, basically passing in null characters to the URL to trick the express routing, I initially tried %00, which didn't work, then tried %2500 and got through: /ftp/package.json.bak%2500.pdf to get the file.

This ended up being the same for retrieving the easter egg and old coupon file.

For the easter egg I got back a base64 encoded value: L2d1ci9xcmlmL25lci9mYi9zaGFhbC9ndXJsL3V2cS9uYS9ybmZncmUvcnR0L2p2Z3V2YS9ndXIvcm5mZ3JlL3J0dA== that decodes to: /gur/qrif/ner/fb/shaal/gurl/uvq/na/rnfgre/rtt/jvguva/gur/rnfgre/rtt

Another challenge that has been sticking in my head is the one about applying advanced crypto-analysis to the easter egg.  I had already identified the easter egg contents to be base64 encoded, however after decoding it just looked like an absurd file path.  I got stuck on this one and ended up checking a walkthrough, looks like it's rot13 encoded, after decoding I got: /the/devs/are/so/funny/they/hid/an/easter/egg/within/the/easter/egg and tried appending this to the base URL and got a new page along with challenge completed.


For the coupon file:
{% highlight bash %}
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
{% endhighlight %}

Now that I have the site's package.json file (node js package config) I can run an npm install and see if any dependencies have vulnerabilities, after running an npm install looks like sequelize and minimatch are both vulnerable because they're using an outdate package.  Looks like another challenge solver: Inform the shop about a vulnerable library it is using.

Looking back at the score board looks like we have an item around getting back all the users/passwords from our database, time to fire up sqlmap.  I ended up running the following command which got me back the search parameter to use:
{% highlight bash %}
sqlmap -u "https://quiet-lake-65056.herokuapp.com/rest/product/search?q=test" --level=2 -p "q" --dbms="sqlite" --dump --proxy=http://10.1.206.89:8081
{% endhighlight %}

The parameters are used as follows:

* -u = URL to attack
* -level = the level of attack to execute
* -p = parameter to try and exploit
* -dbms = the dbms we are targeting
* -dump = attempt to pull the database
* -proxy = the proxy to run requests through

Once we get through things the following comes back with the following:
{% highlight sql %}
sear')) union all select null,null,null,null,null,null,null,'qzzjq'||'QHWDqQappkdzrcmfZObclJekqtZryURacjvmYOqV'||'qaakq'-- IvXq
{% endhighlight %}
Plugging that into the browser we get a partial product grid.  Time to start figuring out how to get the users and password back.

I ended up with this for the final search query:
{% highlight sql %}
sear')) union all select id,email,password,null,null,null,null,'qzzjq'||'QHWDqQappkdzrcmfZObclJekqtZryURacjvmYOqV'||'qaakq' from users-- IvXq
{% endhighlight %}
A list of users and their hashed passwords, another challenge completed.

Now to try and figure out some of these passwords.  I put the hashes all into this site:
<https://crackstation.net/>

This site was able to crack 2 of the user passwords, admin (already known) and jim.  Now to login as jim@juice-sh.op since that's a challenge.

I used the following credentials:

User: jim@juice-sh.op
Pass: ncc-1701

Another challenge completed.

The password cracker I used identified the passwords it cracked as being md5, there is a challenge about informing the shop they're using a library/algorithm incorrectly so I gave it a shot and said the md5 implementation is weak, another challenge completed.

Another challenge is to give ourselves 80% or more off of an order.

Looking back at the coupon codes I found earlier it looks like it is time to figure out how those are encoded.  Maybe the package.json file from earlier will have a hint.  After seeing what several of the dependencies that we have listed are for, z85 appears to be a possibility for generating the password codes.  I downloaded the z85-cli and z85 modules from npm and ran a few coupon codes through the decoder, low and behold it decoded to the following format: MONYR-%% so I encoded JAN17-90 and got: n<Mibh.v3z, then checking out and using my code, another challenge completed.

Next I am looking at the file upload vulnerabilities, the first seems like a simple task in Burp.  Let's upload a small pdf, then intercept the traffic and upload the file with a different extension.  Success, another challenge done.

The second however was a bit more tricky.  At a glance I'm guessing that the previous method with Burp is likely to be the way to go.  I started off first by just modifying my order_ from placing orders for previous challenges to get its file size a bit closer to 100kb, then messed with the file's contents in the upload request and kept getting an error.  After taking a break and coming back to it, I only used the stream section of the file for padding size and was able to intercept the upload request, update the payload and get the challenge completed.

Now for more XSS based challenges, looks like we have 3 more outstanding, the first of which is performing a persisted XSS attack by circumventing a client-side security mechanism.  Sounds like another case where Burp will excel.

I had to try several forms first of which was the complaint form, then the contact form, and finally the user registration form.  Through this page I was able to register a user, then catch the request for submitting the user's data and put in the required XSS (&lt;script&gt;alert("XSS2")&lt;/script&gt;) payload as the user's name, another challenge completed.

The next XSS challenge is to perform a persisted XSS attack without using the front-end at all, this seems like talking directly to the site's API.  Watching the initial site load requests in Burp it looks like we have a rest API behind the scenes the request I saw this in was making a call to /rest/products, since rest uses GET/POST/PUT I'm thinking we can possibly store the XSS payload by doing a PUT for a given product.  I started out by simply trying: <https://quiet-lake-65056.herokuapp.com/api> to access the API and get some info, which returns:
{% highlight json  %}
{"status":"success","data":[{"name":"BasketItem","tableName":"BasketItems"},{"name":"Challenge","tableName":"Challenges"},{"name":"Complaint","tableName":"Complaints"},{"name":"Feedback","tableName":"Feedbacks"},{"name":"Product","tableName":"Products"},{"name":"User","tableName":"Users"}]}
{% endhighlight %}

This looks like a map of the different server-side API calls start points.

I'm going to start by trying to perform a GET through HttpRequested (firefox plugin to make http requests).  <https://quiet-lake-65056.herokuapp.com/api/Products/> was my first try, with a GET this just returns all the products in a JSON response object.

So far so good, next I tried getting a single product with this URL: <https://quiet-lake-65056.herokuapp.com/api/Products/1>, success.  Now I'm guessing we can use a PUT to update this object and persist the payload.  Looking at the JSON that comes back from the GET I built this as the payload for a PUT to update a product:
{%highlight json %}
{"description": "<script>alert(\"XSS3\")</script>"}
{% endhighlight %}

Success

Now for the last challenge, bypassing a server-side security mechanism.  After some pondering I decided a good way to get visibility into the server-side code would be the package.json backup we retrieved in an earlier challenge.  Int he dependencies for the application there is an item called sanitize-html.  I am guessing this will be what I have to get past.  After googling the node module and looking through issues from the specific version called out in dependencies I found a security issue based on recursive application of sanitization.  Here was the item identified in the issue:

{% highlight html %}
<<img src="csrf-attack"/>img src="csrf-attack"/>
{% endhighlight %}

would translate to:

{% highlight html %}
<img src="csrf-attack"/>
{% endhighlight %}

Now to try and do that with our required XSS payload.  After some tinkering I ended up submitting this as the message in the contact form to complete the challenge:

{% highlight html %}
<<script>alert("XSS4")</script>script>alert("XSS4")<</script>/script>
{% endhighlight %}

Next challenge: Wherever you go there you are.  This was quite perplexing, I ended up googling the challenge to get some help.  It turns out the "fork me on github" link does a redirect, rather than just linking to github, seems super weird given the scenario, but anyway, I started in on this and was able to figure out that passing a URL encoded null character allowed me to redirect back to the juice shop home page (which loads all funky) then going back to the site normally I had completed the challenge.

Another challenge I have been having trouble with is the item getting the Christmas 2014 deal and buying it.  Since we know the search is vulnerable to SQL injection I started by trying to get back all products rather than the ones that are displayed on a page with this search:

{% highlight sql %}
sear')) union all select null,id,description,price,null,null,null,null from products --
{% endhighlight %}
This got me the ability to see the item and think I was adding it to my cart, but I wasn't ever able to actually purchase the item.  After googling and watch a video from 7 minute security I had the following payload (provided by OWASP dev team):

{% highlight sql %}
christmas%25'))--
{% endhighlight %}

The %25 ends up decoding to % which closes the SQL like that is being used for a keyword search, my guess here is that the UNION ALL method I tried first was not grabbing some piece of data that was required for the angular code to properly bind all its parameters on the front-end resulting in an improper add to basket.

Now to try and find the language that never got published.  This looks like a job for Burp after inspecting the URLs that are requested when picking a language it looks like each language is just a JSON file with the language code as it's name.  I ended up googling an API language code list and built a small wordlist from the page I found, then fired Burp's intruder at the site's i8n with the language code as the payload placeholder so I was issuing GET requests to <https://quiet-lake-65056.herokuapp.com/i18n/placeholder.json> with placeholder being the wordlist items created from our googling.  I only had the free version of Burp available so it took a while, however I was able to find the missing language and complete the challenge.

After a lot of failed attempts, I ended up looking at the source (since it was available on github) and figured out the language that never made it to production was klingon -- tlh) so all my brute forcing failed based on using "normal" languages.  Either way though, challenge completed.

Logging in with Bjeorns account without using sql injection or hacking his account.

This one was pretty tough.  I had to find a walkthrough to discover that my heroku deployed app was not setup correctly.  I ended up having to configure this through both Google and in the juice shop files on my forked copy.  Once OAuth was setup though, I was now able to use the login with Google feature.

Watching requests in Burp I was able to see the requests and what was coming back to the site from a Google login, this was posted to /api/Users:

{% highlight json %}
{"email":"m4l1c3@m4l1ce.me","password":"bTRsMWMzQG00bDFjZS5tZQ=="}
{% endhighlight %}

Looks like a base64 encoded password gets sent back from Google, which was then forwarded to /rest/user/login:

{% highlight json %}
{"email":"m4l1c3@m4l1ce.me","password":"bTRsMWMzQG00bDFjZS5tZQ==","oauth":true}
{% endhighlight %}

After running

{% highlight bash %}
echo bTRsMWMzQG00bDFjZS5tZQ== | base64 -D m4l1c3@m4l1c3.me
{% endhighlight %}

I get the email back.

Then all we have to do is base64 encode his email and get: YmpvZXJuLmtpbW1pbmljaEBnb29nbGVtYWlsLmNvbQ==

Now we are able to login as Bjeorn, another challenge completed.

Next I have been wanting to figure out the OAuth2 exploit: logging in as the CISO.  Now we are logging in as a user that we do not have a known password for.  At least there is an OAuth hint to point us in the right direction.

I messed around with this quite a bit, I know we are going to need to utilize the login with Google button, however I am not really sure what to do beyond that.  After just staring at the login page for a while, I had an idea.  What happens when the remember me button is checked while logging in as a user we have credentials for.  I tried with admin@juice-sh.op and admin123, looks like a new header is present on our HTTP requests: X-User-Email, this gets set to the email of whichever user has logged in.

Now to try and see what happens if I try and fail to login as the CISO with ciso@juice-sh.op as the user and password as the password.  Login failed, but the header did update.

After pondering some more I tried just logging in with OAuth since my browser was already authenticated to Google, which ended up actually working, the X-User-Email option being set prior to the successful OAuth login I was logged in as the CISO, challenge completed.

Now, one I had skipped quite a while ago, logging in as Bender, since we have already identified that the login page is injectable, lets try just using this as the username and escape the query:

bender@juice-sh.op'--

This ends up making the query look like:

{% highlight sql %}
SELECT * FROM USERS WHERE email='bender@juice-sh.op'
{% endhighlight %}

And this logs us in, now that we're impersonating Bender we should change his password to get the other challenge, looking at the change password page, looks like we would need to know his password, which we do not.  Looking at the requests in Burp it makes a GET request to update the password, seems weird since data is being written, but whatever I guess.

I try a lot of different items with Burp's repeater with no success.  Then I had the idea to just remove the current query string:

/rest/user/change-password?current=%27&new=password&repeat=password

turns to:

/rest/user/change-password?new=password&repeat=password which worked, another challenge completed.

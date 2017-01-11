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



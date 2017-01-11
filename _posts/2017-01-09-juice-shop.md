#OWASP Juice Shop

I started this process off by trying to throw some JavaScript into the search box, looks vulnerable to XSS:
<script type="text/javascript">alert('hi');</script>

Results in an alert popping up after the site issues a GET request to the server, followed by a UI alert stating an objective had been reached, finding unhandled exceptions.

Next I looked through the login page's source to see if anything sticks out and found this:

<!--
    <li class="dropdown">
        <a href="#/score-board">Score Board</a>
    </li>
-->

Looks like I found the scoreboard for the app and it is available at the following route:

<a href="#/score-board"></a>

Now that I've got a list of the challenges I do the following as a search:

<script>alert("XSS1")</script>

Which succesfully performs a reflected XSS attack.

I next went through the process of placing an order and noticed the URL for my receipt was using a subdirectory, I tried browsing to the folder /ftp and was presented with files I could download, which ended up getting me another achievment: access a confidential document

Next I was able to get ot the administration section of the store by going to:

#/administration

Once on the admin page I was able to get another achievment by deleting the only user comment with a 5 star rating



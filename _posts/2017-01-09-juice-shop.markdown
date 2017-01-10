#OWASP Juice Shop

I started this process off by trying to throw some JavaScript into the search box, looks vulnerable to XSS:
<script type="text/javascript">alert('hi');</script>

Results in an alert popping up after the site issues a GET request to the server, followed by a UI alert stating an objective had been reached, finding unhandled exceptions.



ColumboJS
=========

A simple inline-script collector to execute them later after dependencies has been loaded at footer.

There are cases where you want to stick to load js libs at the end of the html but the backend framework cannot collect the component's related js files instead they vomit them inline.
With ColumboJS loader you can delay loading dependencies like the AMD way but it is more lightweight. Like a ponie. With wings.

#Usage example

```html
<html>
  <head>
    <script src="columbo.js"></script>
  </head>
<body>
...
  <p> Some html</p>
  
  <script>
    Columbo.add('Initialize tab view', function( $ ){  
      // Your component's script here
      $('.m-tabbar').tab();  
    });
  </script>
  
  <footer>
    Footer or whatever
    
      <script>
        Columbo.add('Footer social share', function( $ ){  
          // Bind social icon's events or whatever
        });
      </script>
    
  </footer>
  
  <script src="load/jquery/here"></script>
  <script src="load/jquery/plugins/here"></script>
  
  <script>
      Columbo.run($);
  </script>
</body>
</html>

```

#License
##The MIT License (MIT)

Copyright (c) 2013 Gábor Zsótér

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

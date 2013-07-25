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

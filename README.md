ColumboJS
=========

A simple inline-script collector to execute them later after dependencies has been loaded at footer.

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

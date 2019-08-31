# vanillajs-spa
This projects shows how one can make a simple blog (list > details) style single page app using only plain javascript.
No frameworks or build tools are needed to run this.
But one will need a web server to serve the html and the js to the browser.

### Updates
- **2019-08-31** - commit **1**
  - Please ignore the previous commit message
    - I didn't know the hashtag symbol plus a number make a reference for a issue
    - I'm replace this hashtag  for 'commit' word
  - I'm still working on js load only when needed
    - This commits make few changes
      - it's just to not loose code
      - I have to move the project folder to another place
 
- **2019-08-30** - commit **2**
  - Dynamically inclusion of menu after import a js script
  - not working, in development

- **2019-08-30** - commit **1**
  - separation header and footer codes from app.js (header-footer.js)
    - to prevent reload of both after each hash change
  - About menu removed from html e js
    - for the next commit feature
  - changes on index.html because of two above
  - some refactoring (suggestions from jetbrains ide tips)
  
## License (MIT)
Copyright 2018, Rishav Sharan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Showcase of various design patterns in vanilla es5.

# Install
```bash
make
```

# Run
open `public/index.html` in your browser or run local http server:

```bash
cd public
python2 -m SimpleHTTPServer
```

Examples not depending on DOM could be loaded in node REPL:

```js
.load public/State/build.js
DesignPatterns.State.Test.run();
```
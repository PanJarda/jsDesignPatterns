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

Examples not depending on DOM could be loaded in node REPL like this:

```bash
> .load public/State/build.js
> DesignPatterns.State.Test.run();
Printer plugged in to network.
Printer turned on.
Printer warmed up.
Printer turned off
Printer unplugged.
```
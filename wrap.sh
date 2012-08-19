#!/bin/bash

VERSION="1.2.7-wepanlen"

cd build
mkdir production
mkdir development
mv $VERSION/*.min.js production
mv $VERSION/*/*.min.js production
mv $VERSION/*.js development
mv $VERSION/*/*.js development
rm -R $VERSION

## Build the Developer script
touch jquery.tools-wepanlen.js

## Insert the packaged version of jQuery
cat development/jquery*.js > jquery.tools-wepanlen.js
echo "" >> jquery.tools-wepanlen.js

## Ensure the plugins are loaded in the correct order
cat development/dateinput.js >> jquery.tools-wepanlen.js
cat development/overlay.js >> jquery.tools-wepanlen.js
cat development/overlay.apple.js >> jquery.tools-wepanlen.js
cat development/rangeinput.js >> jquery.tools-wepanlen.js
cat development/scrollable.js >> jquery.tools-wepanlen.js
cat development/scrollable.autoscroll.js >> jquery.tools-wepanlen.js
cat development/scrollable.navigator.js >> jquery.tools-wepanlen.js
cat development/tabs.js >> jquery.tools-wepanlen.js
cat development/tabs.slideshow.js >> jquery.tools-wepanlen.js
cat development/toolbox.expose.js >> jquery.tools-wepanlen.js
cat development/toolbox.flashembed.js >> jquery.tools-wepanlen.js
cat development/toolbox.history.js >> jquery.tools-wepanlen.js
cat development/toolbox.mousewheel.js >> jquery.tools-wepanlen.js
cat development/tooltip.js >> jquery.tools-wepanlen.js
cat development/tooltip.dynamic.js >> jquery.tools-wepanlen.js
cat development/tooltip.slide.js >> jquery.tools-wepanlen.js
cat development/validator.js >> jquery.tools-wepanlen.js

## Build the Production script
touch jquery.tools-wepanlen.min.js

## Insert the packaged version of jQuery
cat production/jquery*.min.js > jquery.tools-wepanlen.min.js
echo "" >> jquery.tools-wepanlen.min.js

## Ensure the plugins are loaded in the correct order
cat production/dateinput.min.js >> jquery.tools-wepanlen.min.js
cat production/overlay.min.js >> jquery.tools-wepanlen.min.js
cat production/overlay.apple.min.js >> jquery.tools-wepanlen.min.js
cat production/rangeinput.min.js >> jquery.tools-wepanlen.min.js
cat production/scrollable.min.js >> jquery.tools-wepanlen.min.js
cat production/scrollable.autoscroll.min.js >> jquery.tools-wepanlen.min.js
cat production/scrollable.navigator.min.js >> jquery.tools-wepanlen.min.js
cat production/tabs.min.js >> jquery.tools-wepanlen.min.js
cat production/tabs.slideshow.min.js >> jquery.tools-wepanlen.min.js
cat production/toolbox.expose.min.js >> jquery.tools-wepanlen.min.js
cat production/toolbox.flashembed.min.js >> jquery.tools-wepanlen.min.js
cat production/toolbox.history.min.js >> jquery.tools-wepanlen.min.js
cat production/toolbox.mousewheel.min.js >> jquery.tools-wepanlen.min.js
cat production/tooltip.min.js >> jquery.tools-wepanlen.min.js
cat production/tooltip.dynamic.min.js >> jquery.tools-wepanlen.min.js
cat production/tooltip.slide.min.js >> jquery.tools-wepanlen.min.js
cat production/validator.min.js >> jquery.tools-wepanlen.min.js

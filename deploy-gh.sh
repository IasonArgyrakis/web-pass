#!/usr/bin/env sh

# abort on errors
set -e
echo "Deleting old"
rm -rf dist
# build
npm run build
echo "Build Completed"
git subtree push --prefix dist origin gh-pages
git checkout gh-pages
git push

echo "Completed"

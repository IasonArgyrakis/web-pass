#!/usr/bin/env sh

# abort on errors
set -e


echo "Deleting old"
rm -rf dist
echo "Build Started"
# build
npm run build
echo "Build Completed"
git add -A
git commit -m "Deployed to GitHub Pages"
git push

git subtree push --prefix dist origin gh-pages
git checkout gh-pages
git push -f
echo "Pushed to GitHub Page Completed"
git checkout master
echo "Back To master"

echo "Completed"

#!/usr/bin/env sh

mkdir temp_web

if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

npm run deploy:web
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/FatriFE/FatriVueUI.git && cd FatriVueUI
rm -rf *.js *.css *.map static
cp -rf ../../examples/fatri-vue-ui/** .
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin gh-pages
cd ../..
rm -rf temp_web

echo "DONE, Bye~"
exit 0









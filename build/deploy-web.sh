#! /bin/sh
mkdir temp_web
git config --global user.name "fatrife"
git config --global user.email "fatrife@aliyun.com"

if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

# release
if [ "$TRAVIS_TAG" ]; then

  # build site
  npm run deploy:build
  cd temp_web
  git clone --depth 1 -b gh-pages --single-branch https://$ROT_TOKEN@github.com/ElemeFE/element.git && cd element
  # build sub folder
  echo $TRAVIS_TAG

  SUB_FOLDER='2.13'
  mkdir $SUB_FOLDER
  rm -rf *.js *.css *.map static
  rm -rf $SUB_FOLDER/**
  cp -rf ../../examples/fatri-vue-ui/** .
  cp -rf ../../examples/fatri-vue-ui/** $SUB_FOLDER/
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..

  echo "build site DONE, Bye~"
  exit 0
fi

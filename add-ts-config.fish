#!/usr/bin/env fish

set GBT_PATH /Users/paul.gray/dev/gbt/result/bin/gbt
set ACTUAL_DEPS_PATH /Users/paul.gray/dev/actual-deps/result/bin/actual-deps
set REALPATH_PATH /nix/store/8d6h6q4jpd1z2cjf2lxcp9xpi6dbpz5g-coreutils-9.1/bin/realpath

set PACKAGE_DIRS ($GBT_PATH package-dirs)

set ROOT_DIR $PWD

set -l packages

for pkg in $PACKAGE_DIRS
  pushd $pkg
  # Get the package name
  set pkg_name (cat package.json | jq -r '.name')
  # get the relative directory of root directory form the package directory
  set rel_path ($REALPATH_PATH -s --relative-to="$PWD/" "$ROOT_DIR/tsconfig.json")

  echo "{\"extends\": \"$rel_path\", \"composite\": true}" > tsconfig.json
  echo "{\"path\": \"$pkg\"}," >> /Users/paul.gray/dev/canvas-lms/stuff

  
  popd
end


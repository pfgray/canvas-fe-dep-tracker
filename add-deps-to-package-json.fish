#!/usr/bin/env fish

set GBT_PATH /Users/paul.gray/dev/gbt/result/bin/gbt
set ACTUAL_DEPS_PATH /Users/paul.gray/dev/actual-deps/result/bin/actual-deps

set PACKAGE_DIRS ($GBT_PATH package-dirs)

# set PACKAGE_DIRS "/Users/paul.gray/dev/canvas-lms/ui/shared/conditional-release-cyoe-helper"

for pkg in $PACKAGE_DIRS
  pushd $pkg

  set -a declared_deps (cat package.json | jq -r "((.dependencies) // []) | to_entries[] | .key")
  set -a declared_deps (cat package.json | jq -r "((.devDependencies) // []) | to_entries[] | .key")
  set -a declared_deps (cat package.json | jq -r "((.peerDependencies) // []) | to_entries[] | .key")

  set -a actual_deps ($ACTUAL_DEPS_PATH "./**/*.js" "./**/*.ts" "./**/*.tsx")

  set -a missing_deps

  for a in $actual_deps
    set found false
    for d in $declared_deps
      if [ $a = $d ]
        set found true
        break;
      end
    end
    if [ $found = false ]
      set -a missing_deps $a
    end
  end

  set package_name (cat package.json | jq -r '.name')

  echo "Package $package_name ($pkg) is missing:"
  for d in $missing_deps
    echo "  $d"
  end

  # update package.json?
  /Users/paul.gray/dev/dep-tracker/add_deps.js $missing_deps > package.json.new
  mv package.json.new package.json
  
  set -e declared_deps
  set -e actual_deps
  set -e missing_deps

  popd
end






#!/usr/bin/env node
const fs = require('fs');

const versions = {
  "array-erase": "1.0.0",
  "@instructure/babel-plugin-themeable-styles": "7.19.0-canvas",
  "@instructure/babel-preset-pretranslated-format-message": "1.0.0",
  "@instructure/babel-preset-pretranslated-translations-package-format-message": "1.0.0",
  "backbone-identity-map": "1.0.0",
  "backbone-input-filter-view": "1.0.0",
  "backbone-input-view": "1.0.0",
  "bootstrap-dropdown": "1.0.0",
  "bootstrap-select": "1.0.0",
  "browser-sniffer": "1.0.0",
  "@instructure/browserslist-config-canvas-lms": "2.0.0",
  "@instructure/canvas-media": "1.3.0",
  "@instructure/canvas-planner": "1.0.16",
  "@instructure/canvas-rce": "5.6.1",
  "compose": "1.0.0",
  "convert-case": "1.0.0",
  "date-js": "1.0.0",
  "datetime-moment-parser": "1.0.0",
  "datetime": "1.0.0",
  "defer-promise": "1.0.0",
  "deparam": "1.0.0",
  "ember": "1.4.0",
  "escape-regex": "1.0.0",
  "force-screenreader-to-reparse": "1.0.0",
  "format-message-estree-util": "6.1.0",
  "@instructure/get-cookie": "1.0.0",
  "html-escape": "1.0.0",
  "intl-polyfills": "1.0.0",
  "jest-moxios-utils": "1.0.0",
  "jquery-fancy-placeholder": "1.0.0",
  "jquery-kyle-menu": "1.0.0",
  "jquery-pageless": "1.0.0",
  "jquery-popover": "1.0.0",
  "jquery-qtip": "1.0.0",
  "jquery-scroll-into-view": "1.0.0",
  "jquery-scroll-to-visible": "1.0.0",
  "jquery-selectmenu": "1.0.0",
  "jquery-sticky": "1.0.0",
  "jquery-tinypubsub": "1.0.0",
  "jquery-tree": "1.0.0",
  "jqueryui": "1.9.0-beta.1",
  "@instructure/js-utils": "1.0.0",
  "@instructure/k5uploader": "1.0.0",
  "link-header-parsing": "1.0.0",
  "lodash-underscore": "1.0.0",
  "make-promise-pool": "1.0.0",
  "mathml": "1.0.0",
  "obj-flatten": "1.0.0",
  "obj-select": "1.0.0",
  "obj-unflatten": "1.0.0",
  "old-copy-of-react-14-that-is-just-here-so-if-analytics-is-checked-out-it-doesnt-change-yarn.lock": "1.0.0",
  "parse-browser-info": "1.0.0",
  "persistent-array": "1.0.0",
  "prevent-default": "1.0.0",
  "query-string-encoding": "1.0.0",
  "react-dnd-test-backend": "1.0.0",
  "@instructure/ready": "1.0.0",
  "round": "1.0.0",
  "sanitize-html-with-tinymce": "1.0.0",
  "sanitize-url": "1.0.0",
  "shortid": "1.0.0",
  "slickgrid": "1.0.0",
  "str-pluralize": "1.0.0",
  "strip-tags": "1.0.0",
  "@instructure/translations": "1.0.0",
  "url-encoding": "1.0.0",
  "validated-apollo": "1.0.0",
  "with-breakpoints": "1.0.0",
  "@canvas/engine": "1.0.0",
  "@canvas/account-quota-settings-view": "1.0.0",
  "@canvas/add-people": "1.0.0",
  "@canvas/alerts": "1.0.0",
  "@canvas/announcements": "1.0.0",
  "@canvas/apollo": "1.0.0",
  "@canvas/assignments": "1.0.0",
  "@canvas/authenticity-token": "1.0.0",
  "@canvas/avatar-dialog-view": "1.0.0",
  "@canvas/avatar": "1.0.0",
  "@canvas/await-element": "1.0.0",
  "@canvas/axios": "1.0.0",
  "@canvas/backbone-collection-view": "1.0.0",
  "@canvas/backbone": "1.0.0",
  "@canvas/backoff-poller": "1.0.0",
  "@canvas/blueprint-courses": "1.0.0",
  "@canvas/brandable-css": "1.0.0",
  "@canvas/calendar-conferences": "1.0.0",
  "@canvas/calendar": "1.0.0",
  "@canvas/canvas-media-player": "1.0.0",
  "@canvas/color-picker": "1.0.0",
  "@canvas/combo-box": "1.0.0",
  "@canvas/conditional-release-cyoe-helper": "1.0.0",
  "@canvas/conditional-release-editor": "1.0.0",
  "@canvas/conditional-release-score": "1.0.0",
  "@canvas/conditional-release-stats": "1.0.0",
  "@canvas/confetti": "1.0.0",
  "@canvas/content-locks": "1.0.0",
  "@canvas/content-migrations": "1.0.0",
  "@canvas/content-sharing": "1.0.0",
  "@canvas/context-cards": "1.0.0",
  "@canvas/context-module-file-drop": "1.0.0",
  "@canvas/context-modules": "1.0.0",
  "@canvas/copy-to-clipboard-button": "1.0.0",
  "@canvas/copy-to-clipboard": "1.0.0",
  "@canvas/course-homepage": "1.0.0",
  "@canvas/courses": "1.0.0",
  "@canvas/create-course-modal": "1.0.0",
  "@canvas/dashboard-card": "1.0.0",
  "@canvas/date-group": "1.0.0",
  "@canvas/datetime-natural-parsing-instrument": "1.0.0",
  "@canvas/datetime": "1.0.0",
  "@canvas/day-substitution": "1.0.0",
  "@canvas/deep-linking": "1.0.0",
  "@canvas/dialog-base-view": "1.0.0",
  "@canvas/direct-sharing": "1.0.0",
  "@canvas/discussions": "1.0.0",
  "@canvas/do-fetch-api-effect": "1.0.0",
  "@canvas/doc-previews": "1.0.0",
  "@canvas/due-dates": "1.0.0",
  "@canvas/easy-student-view": "1.0.0",
  "@canvas/editor-toggle": "1.0.0",
  "@canvas/emoji": "1.0.0",
  "@canvas/enhanced-user-content": "1.0.0",
  "@canvas/error-boundary": "1.0.0",
  "@canvas/external-apps": "1.0.0",
  "@canvas/external-tools": "1.0.0",
  "@canvas/feature-flags": "1.0.0",
  "@canvas/files": "1.0.0",
  "@canvas/forms": "1.0.0",
  "@canvas/generate-pairing-code": "1.0.0",
  "@canvas/generic-error-page": "1.0.0",
  "@canvas/grade-summary": "1.0.0",
  "@canvas/gradebook-content-filters": "1.0.0",
  "@canvas/gradebook-menu": "1.0.0",
  "@canvas/grading-standard-collection": "1.0.0",
  "@canvas/grading-standards": "1.0.0",
  "@canvas/grading-status-pill": "1.0.0",
  "@canvas/grading": "1.0.0",
  "@canvas/graphql-query-mock": "1.0.0",
  "@canvas/group-modal": "1.0.0",
  "@canvas/groups": "1.0.0",
  "@canvas/handlebars-helpers": "1.0.0",
  "@canvas/hide-assignment-grades-tray": "1.0.0",
  "@canvas/i18n": "1.0.0",
  "@canvas/images": "1.0.0",
  "@canvas/immersive-reader": "1.0.0",
  "@canvas/infinite-scroll": "1.0.0",
  "@canvas/instui-bindings": "1.0.0",
  "@canvas/integrations": "1.0.0",
  "@canvas/jquery": "1.0.0",
  "@canvas/k5": "1.0.0",
  "@canvas/keyboard-nav-dialog": "1.0.0",
  "@canvas/keycodes": "1.0.0",
  "@canvas/lazy-load": "1.0.0",
  "@canvas/link-enrollment": "1.0.0",
  "@canvas/loading-image": "1.0.0",
  "@canvas/loading-indicator": "1.0.0",
  "@canvas/lock-icon": "1.0.0",
  "@canvas/lti": "1.0.0",
  "@canvas/mathquill": "1.0.0",
  "@canvas/media-comments": "1.0.0",
  "@canvas/media-recorder": "1.0.0",
  "@canvas/mediaelement": "1.0.0",
  "@canvas/message-attachments": "1.0.0",
  "@canvas/message-students-dialog": "1.0.0",
  "@canvas/message-students-modal": "1.0.0",
  "@canvas/mime": "1.0.0",
  "@canvas/modal": "1.0.0",
  "@canvas/module-sequence-footer": "1.0.0",
  "@canvas/modules": "1.0.0",
  "@canvas/move-item-tray": "1.0.0",
  "@canvas/multi-select": "1.0.0",
  "@canvas/network": "1.0.0",
  "@canvas/normalize-registration-errors": "1.0.0",
  "@canvas/notification-preferences-course": "1.0.0",
  "@canvas/notification-preferences": "1.0.0",
  "@canvas/notifications": "1.0.0",
  "@canvas/observer-picker": "1.0.0",
  "@canvas/outcome-content-view": "1.0.0",
  "@canvas/outcome-gradebook-grid": "1.0.0",
  "@canvas/outcome-sidebar-view": "1.0.0",
  "@canvas/outcomes": "1.0.0",
  "@canvas/pagination": "1.0.0",
  "@canvas/panda-pub-client": "1.0.0",
  "@canvas/panda-pub-poller": "1.0.0",
  "@canvas/permissions": "1.0.0",
  "@canvas/post-assignment-grades-tray": "1.0.0",
  "@canvas/progress": "1.0.0",
  "@canvas/pseudonyms": "1.0.0",
  "@canvas/publish-button-view": "1.0.0",
  "@canvas/publish-icon-view": "1.0.0",
  "@canvas/quiz-legacy-client-apps": "1.0.0",
  "@canvas/quiz-log-auditing": "1.0.0",
  "@canvas/quizzes": "1.0.0",
  "@canvas/rails-flash-notifications": "1.0.0",
  "@canvas/rce": "1.0.0",
  "@canvas/react-modal": "1.0.0",
  "@canvas/rubrics": "1.0.0",
  "@canvas/search-item-selector": "1.0.0",
  "@canvas/sections-tooltip": "1.0.0",
  "@canvas/sections": "1.0.0",
  "@canvas/select-content-dialog": "1.0.0",
  "@canvas/select-position": "1.0.0",
  "@canvas/sentry": "1.0.0",
  "@canvas/services": "1.0.0",
  "@canvas/shave": "1.0.0",
  "@canvas/signup-dialog": "1.0.0",
  "@canvas/sis": "1.0.0",
  "@canvas/speed-grader-link": "1.0.0",
  "@canvas/spinner": "1.0.0",
  "@canvas/stub-env": "1.0.0",
  "@canvas/student-group-filter": "1.0.0",
  "@canvas/svg-wrapper": "1.0.0",
  "@canvas/syllabus": "1.0.0",
  "@canvas/theme-editor": "1.0.0",
  "@canvas/timezone": "1.0.0",
  "@canvas/tinymce-equella": "1.0.0",
  "@canvas/tinymce-external-tools": "1.0.0",
  "@canvas/tour-pubsub": "1.0.0",
  "@canvas/trays": "1.0.0",
  "@canvas/tree-browser-view": "1.0.0",
  "@canvas/unread-badge": "1.0.0",
  "@canvas/upload-file": "1.0.0",
  "@canvas/upload-media-translations": "1.0.0",
  "@canvas/use-date-time-format-hook": "1.0.0",
  "@canvas/use-fetch-api-hook": "1.0.0",
  "@canvas/use-immediate-hook": "1.0.0",
  "@canvas/use-state-with-callback-hook": "1.0.0",
  "@canvas/user-settings": "1.0.0",
  "@canvas/user-sortable-name": "1.0.0",
  "@canvas/users": "1.0.0",
  "@canvas/util": "1.0.0",
  "@canvas/validated-apollo-mocked-provider": "1.0.0",
  "@canvas/wiki": "1.0.0",
}

const rawPackageJson = fs.readFileSync('package.json', 'utf-8')

const packageJson = JSON.parse(rawPackageJson)

const existingDeps = packageJson.dependencies || {}

const depsToAdd = process.argv.slice(2).filter(dep => packageJson.name !== dep)

depsToAdd.forEach(d => {
  existingDeps[d] = versions[d]
})

packageJson.dependencies = existingDeps;

console.log(JSON.stringify(packageJson, null, 2));
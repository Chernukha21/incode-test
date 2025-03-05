import {Issue} from "../types/types.ts";
import React from "react";

export const ISSUES = {
    "todo": [{
        "url": "https://api.github.com/repos/facebook/react/issues/32503",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/32503/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/32503/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/32503/events",
        "html_url": "https://github.com/facebook/react/issues/32503",
        "id": 2890532276,
        "node_id": "I_kwDOAJy2Ks6sSgW0",
        "number": 32503,
        "title": "Bug: Npm Start not working in react project using either Vite or C-R-A",
        "user": {
            "login": "Perspective2077",
            "id": 115461545,
            "node_id": "U_kgDOBuHNqQ",
            "avatar_url": "https://avatars.githubusercontent.com/u/115461545?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Perspective2077",
            "html_url": "https://github.com/Perspective2077",
            "followers_url": "https://api.github.com/users/Perspective2077/followers",
            "following_url": "https://api.github.com/users/Perspective2077/following{/other_user}",
            "gists_url": "https://api.github.com/users/Perspective2077/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Perspective2077/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Perspective2077/subscriptions",
            "organizations_url": "https://api.github.com/users/Perspective2077/orgs",
            "repos_url": "https://api.github.com/users/Perspective2077/repos",
            "events_url": "https://api.github.com/users/Perspective2077/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Perspective2077/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
        },
        "labels": [
            {
                "id": 155984160,
                "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                "name": "Status: Unconfirmed",
                "color": "d4c5f9",
                "default": false,
                "description": "A potential issue that we haven't yet confirmed as a bug"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2025-03-03T08:35:21Z",
        "updated_at": "2025-03-03T08:38:50Z",
        "closed_at": null,
        "author_association": "NONE",
        "sub_issues_summary": {
            "total": 0,
            "completed": 0,
            "percent_completed": 0
        },
        "active_lock_reason": null,
        "body": "<!--\n  Npm start not working in react project npx react-scripts start working fine but sometimes this also doesn't work i donno what is happening , btw it's in my friends laptop mine is working fine but i can't solve his problem... tried to uninstall node js.. tried all things i can find\n-->\n\nReact version: 19.0.0\n\n## Steps To Reproduce\n\n1. i donno it's just in my system\n2. i donno if this is right place also i don't have stack overflow nor you guys operate a discord server..\n\n<!--\n  Your bug will get fixed much faster if we can run your code and it doesn't\n  have dependencies other than React. Issues without reproduction steps or\n  code examples may be immediately closed as not actionable.\n-->\n\nLink to code example: \n\n<!--\n  Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a\n  repository on GitHub, or provide a minimal code example that reproduces the\n  problem. You may provide a screenshot of the application if you think it is\n  relevant to your bug report. Here are some tips for providing a minimal\n  example: https://stackoverflow.com/help/mcve.\n-->\n## The current Error it is showing\n\nPS F:\\projects\\Simple\\bonvoyage> npm start\n\nbonvoyage@0.1.0 start\nreact-scripts start\n\nPS F:\\projects\\Simple\\bonvoyage>\n\nIt is not showing the error just skipping everything\n## The Error when installing node_modules or creating a new react project\n\nnpm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.\nnpm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0\nnpm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained\nnpm warn deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.\nnpm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead\nnpm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility\nnpm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser \nnpm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported\nnpm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.\nnpm warn deprecated\nnpm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)\nnpm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.\nnpm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported\nnpm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead\nnpm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead\nnpm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead\nnpm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead\nnpm warn deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.\nnpm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.\nnpm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.\nnpm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.\nnpm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.\nnpm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.\nnpm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.       \nnpm warn cleanup Failed to remove some directories [\nnpm warn cleanup   [\nnpm warn cleanup     '\\\\\\\\?\\\\F:\\\\projects\\\\trail\\\\node_modules\\\\jest-watch-typeahead\\\\node_modules\\\\jest-watcher',\nnpm warn cleanup     [Error: EPERM: operation not permitted, rmdir 'F:\\projects\\trail\\node_modules\\jest-watch-typeahead\\node_modules\\jest-watcher'] {\nnpm warn cleanup       errno: -4048,\nnpm warn cleanup       code: 'EPERM',\nnpm warn cleanup       syscall: 'rmdir',\nnpm warn cleanup       path: 'F:\\\\projects\\\\trail\\\\node_modules\\\\jest-watch-typeahead\\\\node_modules\\\\jest-watcher'\nnpm warn cleanup     }\nnpm warn cleanup   ],\nnpm warn cleanup   [\nnpm warn cleanup     '\\\\\\\\?\\\\F:\\\\projects\\\\trail\\\\node_modules',\nnpm warn cleanup     [Error: EPERM: operation not permitted, rmdir 'F:\\projects\\trail\\node_modules\\clean-css'] {\nnpm warn cleanup       errno: -4048,\nnpm warn cleanup       code: 'EPERM',\nnpm warn cleanup       syscall: 'rmdir',\nnpm warn cleanup       path: 'F:\\\\projects\\\\trail\\\\node_modules\\\\clean-css'\nnpm warn cleanup     }\nnpm warn cleanup   ]\nnpm warn cleanup ]\nnpm error code ERR_INVALID_ARG_TYPE\nnpm error The \"file\" argument must be of type string. Received undefined\nnpm error A complete log of this run can be found in: C:\\Users\\user\\AppData\\Local\\npm-cache\\_logs\\2025-03-01T12_29_06_935Z-debug-0.log\nPS F:\\projects\\trail>  \n\n## The expected behavior\nI mean should install and start the project...?\n",
        "closed_by": null,
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/32503/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/32503/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/32502",
            "repository_url": "https://api.github.com/repos/facebook/react",
            "labels_url": "https://api.github.com/repos/facebook/react/issues/32502/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/react/issues/32502/comments",
            "events_url": "https://api.github.com/repos/facebook/react/issues/32502/events",
            "html_url": "https://github.com/facebook/react/issues/32502",
            "id": 2890177194,
            "node_id": "I_kwDOAJy2Ks6sRJqq",
            "number": 32502,
            "title": "Bug:",
            "user": {
                "login": "Cla3382",
                "id": 144075791,
                "node_id": "U_kgDOCJZsDw",
                "avatar_url": "https://avatars.githubusercontent.com/u/144075791?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Cla3382",
                "html_url": "https://github.com/Cla3382",
                "followers_url": "https://api.github.com/users/Cla3382/followers",
                "following_url": "https://api.github.com/users/Cla3382/following{/other_user}",
                "gists_url": "https://api.github.com/users/Cla3382/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Cla3382/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Cla3382/subscriptions",
                "organizations_url": "https://api.github.com/users/Cla3382/orgs",
                "repos_url": "https://api.github.com/users/Cla3382/repos",
                "events_url": "https://api.github.com/users/Cla3382/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Cla3382/received_events",
                "type": "User",
                "user_view_type": "public",
                "site_admin": false
            },
            "labels": [
                {
                    "id": 155984160,
                    "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                    "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                    "name": "Status: Unconfirmed",
                    "color": "d4c5f9",
                    "default": false,
                    "description": "A potential issue that we haven't yet confirmed as a bug"
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 0,
            "created_at": "2025-03-03T05:04:38Z",
            "updated_at": "2025-03-03T05:04:38Z",
            "closed_at": null,
            "author_association": "NONE",
            "sub_issues_summary": {
                "total": 0,
                "completed": 0,
                "percent_completed": 0
            },
            "active_lock_reason": null,
            "body": "<!--\n  Please provide a clear and concise description of what the bug is. Include\n  screenshots if needed. Please test using the latest version of the relevant\n  React packages to make sure your issue has not already been fixed.\n-->\n\nReact version:\n\n## Steps To Reproduce\n\n1.\n2.\n\n<!--\n  Your bug will get fixed much faster if we can run your code and it doesn't\n  have dependencies other than React. Issues without reproduction steps or\n  code examples may be immediately closed as not actionable.\n-->\n\nLink to code example:\n\n<!--\n  Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a\n  repository on GitHub, or provide a minimal code example that reproduces the\n  problem. You may provide a screenshot of the application if you think it is\n  relevant to your bug report. Here are some tips for providing a minimal\n  example: https://stackoverflow.com/help/mcve.\n-->\n\n## The current behavior\n\n\n## The expected behavior\n",
            "closed_by": null,
            "reactions": {
                "url": "https://api.github.com/repos/facebook/react/issues/32502/reactions",
                "total_count": 0,
                "+1": 0,
                "-1": 0,
                "laugh": 0,
                "hooray": 0,
                "confused": 0,
                "heart": 0,
                "rocket": 0,
                "eyes": 0
            },
            "timeline_url": "https://api.github.com/repos/facebook/react/issues/32502/timeline",
            "performed_via_github_app": null,
            "state_reason": null
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/32500",
            "repository_url": "https://api.github.com/repos/facebook/react",
            "labels_url": "https://api.github.com/repos/facebook/react/issues/32500/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/react/issues/32500/comments",
            "events_url": "https://api.github.com/repos/facebook/react/issues/32500/events",
            "html_url": "https://github.com/facebook/react/pull/32500",
            "id": 2889838830,
            "node_id": "PR_kwDOAJy2Ks6NE9PA",
            "number": 32500,
            "title": "During a Swipe Gesture Render a Clone Offscreen and Animate it Onscreen",
            "user": {
                "login": "sebmarkbage",
                "id": 63648,
                "node_id": "MDQ6VXNlcjYzNjQ4",
                "avatar_url": "https://avatars.githubusercontent.com/u/63648?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/sebmarkbage",
                "html_url": "https://github.com/sebmarkbage",
                "followers_url": "https://api.github.com/users/sebmarkbage/followers",
                "following_url": "https://api.github.com/users/sebmarkbage/following{/other_user}",
                "gists_url": "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/sebmarkbage/subscriptions",
                "organizations_url": "https://api.github.com/users/sebmarkbage/orgs",
                "repos_url": "https://api.github.com/users/sebmarkbage/repos",
                "events_url": "https://api.github.com/users/sebmarkbage/events{/privacy}",
                "received_events_url": "https://api.github.com/users/sebmarkbage/received_events",
                "type": "User",
                "user_view_type": "public",
                "site_admin": false
            },
            "labels": [
                {
                    "id": 196858374,
                    "node_id": "MDU6TGFiZWwxOTY4NTgzNzQ=",
                    "url": "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
                    "name": "CLA Signed",
                    "color": "e7e7e7",
                    "default": false,
                    "description": null
                },
                {
                    "id": 1775958285,
                    "node_id": "MDU6TGFiZWwxNzc1OTU4Mjg1",
                    "url": "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
                    "name": "React Core Team",
                    "color": "9149d1",
                    "default": false,
                    "description": "Opened by a member of the React Core Team"
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 1,
            "created_at": "2025-03-02T22:49:07Z",
            "updated_at": "2025-03-03T06:25:51Z",
            "closed_at": null,
            "author_association": "COLLABORATOR",
            "sub_issues_summary": {
                "total": 0,
                "completed": 0,
                "percent_completed": 0
            },
            "active_lock_reason": null,
            "draft": false,
            "pull_request": {
                "url": "https://api.github.com/repos/facebook/react/pulls/32500",
                "html_url": "https://github.com/facebook/react/pull/32500",
                "diff_url": "https://github.com/facebook/react/pull/32500.diff",
                "patch_url": "https://github.com/facebook/react/pull/32500.patch",
                "merged_at": null
            },
            "body": "This is really the essence mechanism of the `useSwipeTransition` feature.\r\n\r\nWe don't want to immediately switch to the destination state when starting a gesture. The effects remain mounted on the current state. We want the current state to be \"live\". This is important to for example allow a video to keeping playing while starting a swipe (think TikTok/Reels) and not stop until you've committed the action. The only thing that can be live is the \"new\" state. Therefore we treat the destination as the \"old\" state and perform a reverse animation from there.\r\n\r\nIdeally we could apply the old state to the DOM tree, take a snapshot and then revert it back in the mutation of `startViewTransition`. Unfortunately, the way `startViewTransition` was designed it always paints one frame of the \"old\" state which would lead this to cause a flicker.\r\n\r\nTo work around this, we need to create a clone of any View Transition boundary that might be mutated and then render that offscreen. That way we can render the \"current\" state on screen and the \"destination\" state offscreen for the screenshots. Being mutated can be either due to React doing a DOM mutation or if a child boundary resizes that causes the parent to relayout. We don't have to do this for insertions or deletions since they only appear on one side.\r\n\r\nThe worst case scenario is that we have to clone the whole root. That's what this first PR implements. We clone the container and if it's not absolutely positioned, we position it on top of the current one. If the container is `document` or `<html>` we instead clone the `<body>` tag since it's the only one we can insert a duplicate of. If the container is deep in the tree we clone just that even though technically we should probably clone the whole document in that case. We just keep the impact smaller. Ideally though we'd never hit this case. In fact, if we clone the document we issue a warning (always for now) since you probably should optimize this. In the future I intend to add optimizations when affected View Transition boundaries are absolutely positioned since they cannot possibly relayout the parent. This would be the ideal way to use this feature most efficiently but it still works without it.\r\n\r\nSince we render the \"old\" state outside the viewport, we need to then adjust the animation to put it back into the viewport. This is the trickiest part to get right while still preserving any customization of the View Transitions done using CSS. This current approach reapplies all the animations with adjusted keyframes.\r\n\r\nIn the case of an \"exit\" the pseudo-element itself is positioned outside the viewport but since we can't programmatically update the style of the pseudo-element itself we instead adjust all the keyframes to put it back into the viewport. If there is no animation on the group we add one.\r\n\r\nIn the case of an \"update\" the pseudo-element is positioned on the new state which is already inside the viewport. However, the auto-generated animation of the group has a starting keyframe that starts outside the viewport. In this case we need to adjust that keyframe.\r\n\r\nIn the future I might explore a technique that inserts stylesheets instead of mutating the animations. It might be simpler. But whatever hacks work to maximize the compatibility is best.",
            "closed_by": null,
            "reactions": {
                "url": "https://api.github.com/repos/facebook/react/issues/32500/reactions",
                "total_count": 0,
                "+1": 0,
                "-1": 0,
                "laugh": 0,
                "hooray": 0,
                "confused": 0,
                "heart": 0,
                "rocket": 0,
                "eyes": 0
            },
            "timeline_url": "https://api.github.com/repos/facebook/react/issues/32500/timeline",
            "performed_via_github_app": null,
            "state_reason": null
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/32499",
            "repository_url": "https://api.github.com/repos/facebook/react",
            "labels_url": "https://api.github.com/repos/facebook/react/issues/32499/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/react/issues/32499/comments",
            "events_url": "https://api.github.com/repos/facebook/react/issues/32499/events",
            "html_url": "https://github.com/facebook/react/pull/32499",
            "id": 2889805329,
            "node_id": "PR_kwDOAJy2Ks6NE24L",
            "number": 32499,
            "title": "[refactor] Add element type for Activity",
            "user": {
                "login": "rickhanlonii",
                "id": 2440089,
                "node_id": "MDQ6VXNlcjI0NDAwODk=",
                "avatar_url": "https://avatars.githubusercontent.com/u/2440089?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/rickhanlonii",
                "html_url": "https://github.com/rickhanlonii",
                "followers_url": "https://api.github.com/users/rickhanlonii/followers",
                "following_url": "https://api.github.com/users/rickhanlonii/following{/other_user}",
                "gists_url": "https://api.github.com/users/rickhanlonii/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/rickhanlonii/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/rickhanlonii/subscriptions",
                "organizations_url": "https://api.github.com/users/rickhanlonii/orgs",
                "repos_url": "https://api.github.com/users/rickhanlonii/repos",
                "events_url": "https://api.github.com/users/rickhanlonii/events{/privacy}",
                "received_events_url": "https://api.github.com/users/rickhanlonii/received_events",
                "type": "User",
                "user_view_type": "public",
                "site_admin": false
            },
            "labels": [
                {
                    "id": 196858374,
                    "node_id": "MDU6TGFiZWwxOTY4NTgzNzQ=",
                    "url": "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
                    "name": "CLA Signed",
                    "color": "e7e7e7",
                    "default": false,
                    "description": null
                },
                {
                    "id": 1775958285,
                    "node_id": "MDU6TGFiZWwxNzc1OTU4Mjg1",
                    "url": "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
                    "name": "React Core Team",
                    "color": "9149d1",
                    "default": false,
                    "description": "Opened by a member of the React Core Team"
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 1,
            "created_at": "2025-03-02T21:39:14Z",
            "updated_at": "2025-03-02T21:50:16Z",
            "closed_at": null,
            "author_association": "MEMBER",
            "sub_issues_summary": {
                "total": 0,
                "completed": 0,
                "percent_completed": 0
            },
            "active_lock_reason": null,
            "draft": false,
            "pull_request": {
                "url": "https://api.github.com/repos/facebook/react/pulls/32499",
                "html_url": "https://github.com/facebook/react/pull/32499",
                "diff_url": "https://github.com/facebook/react/pull/32499.diff",
                "patch_url": "https://github.com/facebook/react/pull/32499.patch",
                "merged_at": null
            },
            "body": "This PR separates Activity to it's own element type separate from Offscreen. The goal is to allow us to add Activity element boundary semantics during hydration similar to Suspense semantics, without impacting the Offscreen behavior in suspended children. ",
            "closed_by": null,
            "reactions": {
                "url": "https://api.github.com/repos/facebook/react/issues/32499/reactions",
                "total_count": 0,
                "+1": 0,
                "-1": 0,
                "laugh": 0,
                "hooray": 0,
                "confused": 0,
                "heart": 0,
                "rocket": 0,
                "eyes": 0
            },
            "timeline_url": "https://api.github.com/repos/facebook/react/issues/32499/timeline",
            "performed_via_github_app": null,
            "state_reason": null
        },],
    "inProgress": [{
        "url": "https://api.github.com/repos/facebook/react/issues/32440",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/32440/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/32440/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/32440/events",
        "html_url": "https://github.com/facebook/react/issues/32440",
        "id": 2867748678,
        "node_id": "I_kwDOAJy2Ks6q7l9G",
        "number": 32440,
        "title": "[Compiler Bug]: Cyclic dependencies when using the react-compiler and metro bundler can result in sometimes undefined hook imports",
        "user": {
            "login": "the-simian",
            "id": 954596,
            "node_id": "MDQ6VXNlcjk1NDU5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/954596?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/the-simian",
            "html_url": "https://github.com/the-simian",
            "followers_url": "https://api.github.com/users/the-simian/followers",
            "following_url": "https://api.github.com/users/the-simian/following{/other_user}",
            "gists_url": "https://api.github.com/users/the-simian/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/the-simian/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/the-simian/subscriptions",
            "organizations_url": "https://api.github.com/users/the-simian/orgs",
            "repos_url": "https://api.github.com/users/the-simian/repos",
            "events_url": "https://api.github.com/users/the-simian/events{/privacy}",
            "received_events_url": "https://api.github.com/users/the-simian/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
        },
        "labels": [
            {
                "id": 40929151,
                "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
                "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
                "name": "Type: Bug",
                "color": "b60205",
                "default": false,
                "description": null
            },
            {
                "id": 155984160,
                "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                "name": "Status: Unconfirmed",
                "color": "d4c5f9",
                "default": false,
                "description": "A potential issue that we haven't yet confirmed as a bug"
            },
            {
                "id": 180616330,
                "node_id": "MDU6TGFiZWwxODA2MTYzMzA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler",
                "name": "Component: Optimizing Compiler",
                "color": "bfdadc",
                "default": false,
                "description": null
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": {
            "login": "poteto",
            "id": 1390709,
            "node_id": "MDQ6VXNlcjEzOTA3MDk=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1390709?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/poteto",
            "html_url": "https://github.com/poteto",
            "followers_url": "https://api.github.com/users/poteto/followers",
            "following_url": "https://api.github.com/users/poteto/following{/other_user}",
            "gists_url": "https://api.github.com/users/poteto/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/poteto/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/poteto/subscriptions",
            "organizations_url": "https://api.github.com/users/poteto/orgs",
            "repos_url": "https://api.github.com/users/poteto/repos",
            "events_url": "https://api.github.com/users/poteto/events{/privacy}",
            "received_events_url": "https://api.github.com/users/poteto/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
        },
        "assignees": [
            {
                "login": "poteto",
                "id": 1390709,
                "node_id": "MDQ6VXNlcjEzOTA3MDk=",
                "avatar_url": "https://avatars.githubusercontent.com/u/1390709?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/poteto",
                "html_url": "https://github.com/poteto",
                "followers_url": "https://api.github.com/users/poteto/followers",
                "following_url": "https://api.github.com/users/poteto/following{/other_user}",
                "gists_url": "https://api.github.com/users/poteto/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/poteto/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/poteto/subscriptions",
                "organizations_url": "https://api.github.com/users/poteto/orgs",
                "repos_url": "https://api.github.com/users/poteto/repos",
                "events_url": "https://api.github.com/users/poteto/events{/privacy}",
                "received_events_url": "https://api.github.com/users/poteto/received_events",
                "type": "User",
                "user_view_type": "public",
                "site_admin": false
            }
        ],
        "milestone": null,
        "comments": 3,
        "created_at": "2025-02-21T02:39:40Z",
        "updated_at": "2025-02-21T18:05:42Z",
        "closed_at": null,
        "author_association": "NONE",
        "sub_issues_summary": {
            "total": 0,
            "completed": 0,
            "percent_completed": 0
        },
        "active_lock_reason": null,
        "body": "### What kind of issue is this?\n\n- [x] React Compiler core (the JS output is incorrect, or your app works incorrectly after optimization)\n- [ ] babel-plugin-react-compiler (build issue installing or using the Babel plugin)\n- [ ] eslint-plugin-react-compiler (build issue installing or using the eslint plugin)\n- [ ] react-compiler-healthcheck (build issue installing or using the healthcheck script)\n\n### Link to repro\n\nwill update \n\n### Repro steps\n\nThis particular issue can be difficult to reproduce. \n\nThe short version is that in some situations, when there is a cyclic dependency between two files using the metro bundler, when you enable the React compiler it can cause hooks to be imported as 'undefined'.\n\nTo reproduce this an expo Project is needed:\n\nbabel.config.js\n```\nmodule.exports = (api) => {\n  api.cache(true);\n\n  return {\n    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],\n    plugins: [\n      [\n        'babel-plugin-react-docgen-typescript',\n        {\n          exclude: 'node_modules',\n          include: 'components.*\\\\.tsx$',\n        },\n      ],\n    ],\n  };\n};\n```\n\nHere is an example babel config, aside from nativewind it is a basic setup:\n\napp.config.ts\n```ts\n  web: {\n    bundler: 'metro',\n    output: 'single',\n    favicon: './assets/images/favicon.png',\n  },\n  experiments: {\n    typedRoutes: true,\n    reactCompiler: true,\n  },\n```\nIn the experiements section, you'll want to setReactCompiler:true. You can see the issue when you use the web output of the expo project.\n\nIf you've enabled the compiler, you'll see additional output in the console:\n```sh\nExperimental React Compiler is enabled.\nStarting Metro Bundler\nwarning: Bundler cache is empty, rebuilding (this may take a minute)\n```\n\nYou should run the development build, and not expo go if possible.\n\n\nHere are the versions of critical dependencies that can reproduce the issue currently:\n\npackage.json\n```json\n  \"expo\": \"~52.0.36\",\n  \"react\": \"18.3.1\",\n  \"react-compiler-runtime\": \"^19.0.0-beta-21e868a-20250216\",\n  \"react-dom\": \"18.3.1\",\n```\nat the time of creating this issue, this should be the latest version of the react-compiler-runtime and also the latest version of expo 52, react is at 18.\n\n\nNow, to show some code that can express the issue:\n\n\nin one file you want to write a function that uses a hook , this may or may not be a hook or provider or just a simple function:\n\nexternal-function-file.tsx\n```tsx\nimport { useMyHook } from './SomeFile';\n\nexport function externalFunction() {\n  const { datum } = useMyHook();\n  return datum ;\n}\n```\n\nin the other file, you need to call this hook in some way, but you've also defined the same hook in this file\n\nSomeFile.tsx\n```tsx\n\ntype MyContext = { datum: string; }\n\nexport const myContext = createContext<MyContext | undefined>(undefined);\n\nexport useMyHook() {\n  const context = useContext(myContext);\n  return context;\n}\n\nexport function SomeComponent(){\n  const _datum = externalFunction();\n   return <View><Text>{_datum}</Text></View>\n}\n\n```\n\nThis is the gist of what can get a reliable break. You will see an error like:\n\n```sh\nUncaught Error\nuseMyHook is not a function\n```\n\nhowever, when you inspect the source code, its clearly defined (even in the source output in the browser), and also passes linters, such as eslint-plugin-react-compiler, as well as type checks in ts.\n\n\n### How often does this bug happen?\n\nSometimes\n\n### What version of React are you using?\n\n18.3.1\n\n### What version of React Compiler are you using?\n\n^19.0.0-beta-21e868a-20250216",
        "closed_by": null,
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/32440/reactions",
            "total_count": 2,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 2,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/32440/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },],
    "done": []
}

export const findAndRemoveIssue = (
    issues: Issue[],
    setIssues: React.Dispatch<React.SetStateAction<Issue[]>>,
    currentIssueId: number
): Issue | null => {
    const issueIndex = issues.findIndex((issue) => issue.id === currentIssueId);
    if (issueIndex === -1) return null; // Not found

    const [removedIssue] = issues.splice(issueIndex, 1);
    setIssues([...issues]); // Update state after removal
    return removedIssue;
};



export function saveIssuesToStorage(repoKey: string, issues: { todo: Issue[], inProgress: Issue[], done: Issue[] }) {
    localStorage.setItem(repoKey, JSON.stringify(issues));
}

export function getIssuesFromStorage(repoKey: string) {
    const savedData = localStorage.getItem(repoKey);
    return savedData ? JSON.parse(savedData) : null;
}
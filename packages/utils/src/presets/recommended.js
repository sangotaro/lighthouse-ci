/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

module.exports = {
  assertions: {
    // Flaky audits (warn)
    'bootup-time': ['warn', {}],
    'mainthread-work-breakdown': ['warn', {}],
    'critical-request-chains': ['warn', {}],
    'first-contentful-paint': ['warn', {minScore: 0.9}],
    'first-cpu-idle': ['warn', {minScore: 0.9}],
    'first-meaningful-paint': ['warn', {minScore: 0.9}],
    interactive: ['warn', {minScore: 0.9}],
    'speed-index': ['warn', {minScore: 0.9}],
    'max-potential-fid': ['warn', {minScore: 0.9}],
    'load-fast-enough-for-pwa': ['warn', {}],
    'time-to-first-byte': ['warn', {}],
    // Not useful diagnostic audits (off)
    'final-screenshot': ['off', {}],
    'js-libraries': ['off', {}],
    'main-thread-tasks': ['off', {}],
    'screenshot-thumbnails': ['off', {}],
    'network-requests': ['off', {}],
    'network-rtt': ['off', {}],
    'network-server-latency': ['off', {}],
    'user-timings': ['off', {}],
    diagnostics: ['off', {}],
    metrics: ['off', {}],
    // Flaky score but non-flaky details (error, maxLength)
    'efficient-animated-content': ['error', {maxLength: 0}],
    'offscreen-images': ['error', {maxLength: 0}],
    'render-blocking-resources': ['error', {maxLength: 0}],
    'unminified-css': ['error', {maxLength: 0}],
    'unminified-javascript': ['error', {maxLength: 0}],
    'unused-css-rules': ['error', {maxLength: 0}],
    'uses-long-cache-ttl': ['error', {maxLength: 0}],
    'uses-optimized-images': ['error', {maxLength: 0}],
    'uses-passive-event-listeners': ['error', {maxLength: 0}],
    'uses-rel-preconnect': ['error', {maxLength: 0}],
    'uses-rel-preload': ['error', {maxLength: 0}],
    'uses-responsive-images': ['error', {maxLength: 0}],
    'uses-text-compression': ['error', {maxLength: 0}],
    'uses-webp-images': ['error', {maxLength: 0}],
    // Non-flaky audits (error)
    'appcache-manifest': ['error', {}],
    'aria-allowed-attr': ['error', {}],
    'aria-required-attr': ['error', {}],
    'aria-required-children': ['error', {}],
    'aria-required-parent': ['error', {}],
    'aria-roles': ['error', {}],
    'aria-valid-attr-value': ['error', {}],
    'aria-valid-attr': ['error', {}],
    'audio-caption': ['error', {}],
    'button-name': ['error', {}],
    'color-contrast': ['error', {}],
    'content-width': ['error', {}],
    'definition-list': ['error', {}],
    'document-title': ['error', {}],
    'dom-size': ['error', {}],
    'duplicate-id': ['error', {}],
    'errors-in-console': ['error', {}],
    'external-anchors-use-rel-noopener': ['error', {}],
    'font-display': ['error', {}],
    'font-size': ['error', {}],
    'frame-title': ['error', {}],
    'geolocation-on-start': ['error', {}],
    'html-has-lang': ['error', {}],
    'html-lang-valid': ['error', {}],
    'http-status-code': ['error', {}],
    'image-alt': ['error', {}],
    'image-aspect-ratio': ['error', {}],
    'input-image-alt': ['error', {}],
    'installable-manifest': ['error', {}],
    'is-crawlable': ['error', {}],
    'is-on-https': ['error', {}],
    'layout-table': ['error', {}],
    'link-name': ['error', {}],
    'link-text': ['error', {}],
    'meta-description': ['error', {}],
    'meta-refresh': ['error', {}],
    'meta-viewport': ['error', {}],
    'no-document-write': ['error', {}],
    'no-vulnerable-libraries': ['error', {}],
    'notification-on-start': ['error', {}],
    'object-alt': ['error', {}],
    'offline-start-url': ['error', {}],
    'password-inputs-can-be-pasted-into': ['error', {}],
    'redirects-http': ['error', {}],
    'robots-txt': ['error', {}],
    'service-worker': ['error', {}],
    'splash-screen': ['error', {}],
    'tap-targets': ['error', {}],
    'td-headers-attr': ['error', {}],
    'th-has-data-cells': ['error', {}],
    'themed-omnibox': ['error', {}],
    'total-byte-weight': ['error', {}],
    'uses-http2': ['error', {}],
    'valid-lang': ['error', {}],
    'video-caption': ['error', {}],
    'video-description': ['error', {}],
    'without-javascript': ['error', {}],
    'works-offline': ['error', {}],
    accesskeys: ['error', {}],
    bypass: ['error', {}],
    canonical: ['error', {}],
    deprecations: ['error', {}],
    dlitem: ['error', {}],
    doctype: ['error', {}],
    hreflang: ['error', {}],
    label: ['error', {}],
    list: ['error', {}],
    listitem: ['error', {}],
    plugins: ['error', {}],
    redirects: ['error', {}],
    tabindex: ['error', {}],
    viewport: ['error', {}],
  },
};

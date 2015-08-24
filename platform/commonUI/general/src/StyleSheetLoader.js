/*****************************************************************************
 * Open MCT Web, Copyright (c) 2014-2015, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT Web is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT Web includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
/*global define*/

/**
 * This bundle provides various general-purpose UI elements, including
 * platform styling.
 * @namespace platform/commonUI/general
 */
define(
    [],
    function () {
        "use strict";

        /**
         * The StyleSheetLoader adds links to style sheets exposed from
         * various bundles as extensions of category `stylesheets`.
         * @memberof platform/commonUI/general
         * @constructor
         * @param {object[]} stylesheets stylesheet extension definitions
         * @param $document Angular's jqLite-wrapped document element
         */
        function StyleSheetLoader(stylesheets, $document) {
            var head = $document.find('head'),
                document = $document[0];

            // Procedure for adding a single stylesheet
            function addStyleSheet(stylesheet) {
                // Create a link element, and construct full path
                var link = document.createElement('link'),
                    path = [
                        stylesheet.bundle.path,
                        stylesheet.bundle.resources,
                        stylesheet.stylesheetUrl
                    ].join("/");

                // Initialize attributes on the link
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("href", path);

                // Append the link to the head element
                head.append(link);
            }

            // Add all stylesheets from extensions
            stylesheets.forEach(addStyleSheet);
        }

        return StyleSheetLoader;
    }
);

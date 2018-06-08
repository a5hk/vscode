/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { RawContextKey } from 'vs/platform/contextkey/common/contextkey';

export const OutlineViewFiltered = new RawContextKey('outlineFiltered', false);
export const OutlineViewFocused = new RawContextKey('outlineFocused', false);

export enum OutlineConfigKeys {
	'filterOnType' = 'outline.filterOnType',
	'navigateHighlights' = 'outline.navigateHighlights',
	'problemsEnabled' = 'outline.problems.enabled',
	'problemsColors' = 'outline.problems.colors',
	'problemsBadges' = 'outline.problems.badges'
}

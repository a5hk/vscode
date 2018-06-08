/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { CommandsRegistry } from 'vs/platform/commands/common/commands';
import { localize } from 'vs/nls';
import { IViewsService, ViewsRegistry, IViewDescriptor } from 'vs/workbench/common/views';
import { OutlinePanel } from './outlinePanel';
import { MenuRegistry } from 'vs/platform/actions/common/actions';
import { VIEW_CONTAINER } from 'vs/workbench/parts/files/common/files';
import { Registry } from 'vs/platform/registry/common/platform';
import { IConfigurationRegistry, Extensions as ConfigurationExtensions } from 'vs/platform/configuration/common/configurationRegistry';
import { OutlineConfigKeys } from 'vs/workbench/parts/outline/electron-browser/outline';

const _outlineDesc = <IViewDescriptor>{
	id: 'code.outline',
	name: localize('name', "Outline"),
	ctor: OutlinePanel,
	container: VIEW_CONTAINER,
	canToggleVisibility: true,
	hideByDefault: false,
	collapsed: true,
	order: 2,
	weight: 30
};

ViewsRegistry.registerViews([_outlineDesc]);

CommandsRegistry.registerCommand('outline.focus', accessor => {
	let viewsService = accessor.get(IViewsService);
	return viewsService.openView(_outlineDesc.id, true);
});

MenuRegistry.addCommand({
	id: 'outline.focus',
	category: localize('category.focus', "File"),
	title: localize('label.focus', "Focus on Outline")
});

Registry.as<IConfigurationRegistry>(ConfigurationExtensions.Configuration).registerConfiguration({
	'id': 'outline',
	'order': 117,
	'type': 'object',
	'properties': {
		[OutlineConfigKeys.filterOnType]: {
			'description': localize('outline.typeToFilter', "Defines if typing in the input-box filters or finds elements."),
			'type': 'boolean',
			'default': true
		},
		[OutlineConfigKeys.navigateHighlights]: {
			'description': localize('outline.navigateHighlights', "Only select highlighted elements (via filter or find) when navigating the tree"),
			'type': 'boolean',
			'default': true
		},
		[OutlineConfigKeys.problemsEnabled]: {
			'description': localize('outline.showProblem', "Show Errors & Warnings on Outline Elements."),
			'type': 'boolean',
			'default': true
		},
		[OutlineConfigKeys.problemsEnabled]: {
			'description': localize('outline.showProblem', "Show Errors & Warnings on Outline Elements."),
			'type': 'boolean',
			'default': true
		},
		[OutlineConfigKeys.problemsColors]: {
			'description': localize('outline.problem.colors', "Use colors for Errors & Warnings."),
			'type': 'boolean',
			'default': true
		},
		[OutlineConfigKeys.problemsBadges]: {
			'description': localize('outline.problems.badges', "Use badges for Errors & Warnings."),
			'type': 'boolean',
			'default': true
		}
	}
});

/**
 * Internal dependencies
 */
import EditorCanvas from './components/editor-canvas';
import { ExperimentalEditorProvider } from './components/provider';
import { lock } from './lock-unlock';
import { EntitiesSavedStatesExtensible } from './components/entities-saved-states';
import useBlockEditorSettings from './components/provider/use-block-editor-settings';
import PostPanelRow from './components/post-panel-row';
import PreviewDropdown from './components/preview-dropdown';
import PluginPostExcerpt from './components/post-excerpt/plugin';

export const privateApis = {};
lock( privateApis, {
	EditorCanvas,
	ExperimentalEditorProvider,
	EntitiesSavedStatesExtensible,
	PostPanelRow,
	PreviewDropdown,
	PluginPostExcerpt,

	// This is a temporary private API while we're updating the site editor to use EditorProvider.
	useBlockEditorSettings,
} );

import {
	BalloonEditor,
	Plugin,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Base64UploadAdapter,
	BlockQuote,
	BlockToolbar,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	ShowBlocks,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';
import {
	Comments,
	TrackChanges,
	TrackChangesData
} from 'ckeditor5-premium-features';

/**
 * Please update the following values with your actual tokens.
 * Instructions on how to obtain them: https://ckeditor.com/docs/trial/latest/guides/real-time/quick-start.html
 */
const LICENSE_KEY = 'VDZMRDFPeGsyTUhxUi9wM0s4VjVvclBPS05Ma1JxY0hhcDF0MXVYcDREOXo2OHJ1dGc9PS1NakF5TkRFeU1qaz0=';

/**
 * The `UsersIntegration` lets you manage user data and permissions.
 *
 * This is an essential feature when many users work on the same document.
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/users.html.
 */
class UsersIntegration extends Plugin {
	static get requires() {
		return ['Users'];
	}

	static get pluginName() {
		return 'UsersIntegration';
	}

	init() {
		const usersPlugin = this.editor.plugins.get('Users');

		// These are sample users for demonstration purposes.
		// In your integration make sure to provide user data from your data source.
		const users = [{
				id: 'user-1',
				name: 'Zee Croce'
			},
			{
				id: 'user-2',
				name: 'Mex Haddox'
			}
		];
		const me = users[0];

		for (const user of users) {
			usersPlugin.addUser(user);
		}

		usersPlugin.defineMe(me.id);
	}
}

/**
 * The `CommentsIntegration` lets you synchronize comments in the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-integration.html.
 */
class CommentsIntegration extends Plugin {}

/**
 * The `TrackChangesIntegration` lets you synchronize suggestions added to the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes-integration.html.
 */
class TrackChangesIntegration extends Plugin {}


const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'revisionHistory',
			'trackChanges',
			'comment',
			'commentsArchive',
			'|',
			'showBlocks',
			'findAndReplace',
			'|',
			'heading',
			'style',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'code',
			'removeFormat',
			'|',
			'specialCharacters',
			'horizontalLine',
			'link',
			'insertImage',
			'mediaEmbed',
			'insertTable',
			'highlight',
			'blockQuote',
			'codeBlock',
			'htmlEmbed',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent'
		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		AccessibilityHelp,
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		Base64UploadAdapter,
		BlockQuote,
		BlockToolbar,
		Bold,
		Code,
		CodeBlock,
		Comments,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		Mention,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		ShowBlocks,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		TrackChanges,
		TrackChangesData,
		Underline,
		Undo
	],
	extraPlugins: [UsersIntegration, CommentsIntegration, TrackChangesIntegration],
	balloonToolbar: ['comment', '|', 'bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
	blockToolbar: [
		'comment',
		'|',
		'fontSize',
		'fontColor',
		'fontBackgroundColor',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'insertImage',
		'insertTable',
		'|',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent'
	],
	comments: {
		editorConfig: {
			extraPlugins: [Autoformat, Bold, Italic, List, Mention],
			mention: {
				feeds: [{
					marker: '@',
					feed: [
						/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#comments-with-mentions */
					]
				}]
			}
		}
	},
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [{
			name: /^.*$/,
			styles: true,
			attributes: true,
			classes: true
		}]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData: '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [{
			marker: '@',
			feed: [
				/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
			]
		}]
	},
	placeholder: 'Type or paste your content here!',
	revisionHistory: {
		editorContainer: document.querySelector('#editor-container'),
		viewerContainer: document.querySelector('#editor-revision-history'),
		viewerEditorElement: document.querySelector('#editor-revision-history-editor'),
		viewerSidebarContainer: document.querySelector('#editor-revision-history-sidebar'),
		resumeUnsavedRevision: true
	},
	sidebar: {
		container: document.querySelector('#editor-annotations')
	},
	style: {
		definitions: [{
				name: 'Article category',
				element: 'h3',
				classes: ['category']
			},
			{
				name: 'Title',
				element: 'h2',
				classes: ['document-title']
			},
			{
				name: 'Subtitle',
				element: 'h3',
				classes: ['document-subtitle']
			},
			{
				name: 'Info box',
				element: 'p',
				classes: ['info-box']
			},
			{
				name: 'Side quote',
				element: 'blockquote',
				classes: ['side-quote']
			},
			{
				name: 'Marker',
				element: 'span',
				classes: ['marker']
			},
			{
				name: 'Spoiler',
				element: 'span',
				classes: ['spoiler']
			},
			{
				name: 'Code (dark)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-dark']
			},
			{
				name: 'Code (bright)',
				element: 'pre',
				classes: ['fancy-code', 'fancy-code-bright']
			}
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	}
};

configUpdateAlert(editorConfig);

BalloonEditor.create(document.querySelector('#editor'), editorConfig).then(editor => {
	editor.disableReadOnlyMode('feature-id');
});



/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
	if (configUpdateAlert.configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue, forbiddenValue) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	configUpdateAlert.configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'in order to receive full access to the Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}
}
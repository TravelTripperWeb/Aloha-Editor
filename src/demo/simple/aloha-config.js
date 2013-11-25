( function ( window, undefined ) {
	var Aloha = window.Aloha || ( window.Aloha = {} );


	Aloha.settings = {
		logLevels: { 'error': true, 'warn': true, 'info': true, 'debug': false, 'deprecated': false },
		errorhandling: false,
		ribbon: {enable: false},
		locale: 'en',
		//waitSeconds: 300, // This can be turned on to avoid requirejs timeouts if Aloha startup code needs to be debugged
		placeholder: {
			'#placeholder-test': '<img src="http://aloha-editor.org/logo/Aloha%20Editor%20HTML5%20technology%20class%2016.png" alt="Aloha Editor"/>&nbsp;Placeholder Image'
		},
		repositories: {
			linklist: {
				data: [
					{ name: 'BTM Support', url:'http://support.bluetrainmobile.com', type:'website', weight: 0.50 },
					
				]
			}
		},
		plugins: {
			format: {
				// all elements with no specific configuration get this configuration
				//config: [  'b', 'i', 'p', 'sub', 'sup', 'del', 'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'removeFormat' ],
				config: [  'b', 'i', 'p', 'title', 'h1', 'h2', 'h3', 'removeFormat' ],
				editables: {
					// no formatting allowed for title
					'#top-text': []
				}
			},
			list: {
				// all elements with no specific configuration get an UL, just for fun :)
				config: [ 'ul', 'ol' ],
				editables: {
					// Even if this is configured it is not set because OL and UL are not allowed in H1.
					//'#top-text': []
				}
			},
			listenforcer: {
				editables: [ '.aloha-enforce-lists' ]
			},
			link: {
				// all elements with no specific configuration may insert links
				config: [ 'a' ],
				hotKey: {
					// use ctrl+l instead of ctrl+k as hotkey for inserting a link
					//insertLink: 'ctrl+l'
				},
				editables: {
					// No links in the title.
					'#top-text': []
				},
				// all links that match the targetregex will get set the target
				// e.g. ^(?!.*aloha-editor.com).* matches all href except aloha-editor.com
				//targetregex: '^(?!.*aloha-editor.com).*',
				// this target is set when either targetregex matches or not set
				// e.g. _blank opens all links in new window
				//target: '_blank',
				// the same for css class as for target
				//cssclassregex: '^(?!.*aloha-editor.com).*',
				//cssclass: 'aloha',
				// use all resources of type website for autosuggest
				objectTypeFilter: ['website'],
				// handle change of href
				onHrefChange: function ( obj, href, item ) {
					var jQuery = Aloha.require( 'jquery' );
					if ( item ) {
						jQuery( obj ).attr( 'data-name', item.name );
					} else {
						jQuery( obj ).removeAttr( 'data-name' );
					}
				}
			},
							
			table: {
				// all elements with no specific configuration are not allowed to insert tables
				config: [ 'table' ],
				editables: {
					// Don't allow tables in top-text
					'#top-text': [ '' ]
				},
				summaryinsidebar: true,
					// [{name:'green', text:'Green', tooltip:'Green is cool', iconClass:'GENTICS_table GENTICS_button_green', cssClass:'green'}]
				tableConfig: [
					{ name: 'hor-minimalist-a' },
					{ name: 'box-table-a' },
					{ name: 'hor-zebra' },
				],
				columnConfig: [
					{ name: 'table-style-bigbold',  iconClass: 'aloha-button-col-bigbold' },
					{ name: 'table-style-redwhite', iconClass: 'aloha-button-col-redwhite' }
				],
				rowConfig: [
					{ name: 'table-style-bigbold',  iconClass: 'aloha-button-row-bigbold' },
					{ name: 'table-style-redwhite', iconClass: 'aloha-button-row-redwhite' }
				],
				cellConfig: [
					{ name: 'table-style-bigbold',  iconClass: 'aloha-button-row-bigbold' },
					{ name: 'table-style-redwhite', iconClass: 'aloha-button-row-redwhite' }
				],
				// allow resizing the table width (default: false)
				tableResize: true,
				// allow resizing the column width (default: false)
				colResize: true,
				// allow resizing the row height (default: false)
				rowResize: true
			},
			formatlesspaste :{
				formatlessPasteOption : true,
				strippedElements : [
				"em",
				"strong",
				"small",
				"s",
				"cite",
				"q",
				"dfn",
				"abbr",
				"time",
				"code",
				"var",
				"samp",
				"kbd",
				"sub",
				"sup",
				"i",
				"b",
				"u",
				"mark",
				"ruby",
				"rt",
				"rp",
				"bdi",
				"bdo",
				"ins",
				"del"]
			},
			'textcolor': {
				// configure a set of colors for all editables
				config: ['#FFEE00', 'rgb(255,0,0)', '#FFFF00', '#FFFFFF', 'greenborder'],
				editables: {
					// configure a different set of colors for editable #one
					'#top-text' : []
				}
			}
		},
		sidebar: {
			disabled: true
		}
	};
} )( window );

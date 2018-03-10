export default  {
  "$schema": "http://json-schema.org/draft-06/schema#",
	"title": "SiteScript",
	"description": "A SharePoint Site Script definition",
	"definitions": {
		"createSPList_setTitle": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setTitle" ]
				},
				"title": {
					"type": "string"
				}
			},
			"required": [ "verb", "title" ]
		},
		"createSPList_setDescription": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setDescription" ]
				},
				"description": {
					"type": "string"
				}
			},
			"required": [ "verb", "description" ]
		},
		"createSPList_addSPField": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addSPField" ]
				},
				"fieldType": {
					"enum": [ "Text", "Note", "Number", "Boolean", "User", "DateTime" ]
				},
				"displayName": {
					"type": "string"
				},
				"isRequired": {
					"type": "boolean"
				},
				"addToDefaultView": {
					"type": "boolean"
				}
			},
			"required": [ "verb", "fieldType", "displayName", "isRequired", "addToDefaultView" ]
		},
		"createSPList_deleteSPField": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "deleteSPField" ]
				},
				"displayName": {
					"type": "string"
				}
			},
			"required": [ "verb", "displayName" ]
		},
		"createSPList_addContentType": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addContentType" ]
				},
				"name": {
					"type": "string"
				}
			},
			"required": [ "verb", "name" ]
		},
		"createSPList_removeContentType": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "removeContentType" ]
				},
				"name": {
					"type": "string"
				}
			},
			"required": [ "verb", "name" ]
		},
		"createSPList_setSPFieldCustomFormatter": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setSPFieldCustomFormatter" ]
				},
				"fieldDisplayName": {
					"type": "string"
				},
				"formatterJSON": {
					"type": "object"
				}
			},
			"required": [ "verb", "fieldDisplayName", "formatterJSON" ]
		},
		"createSPList": {
			"type": "object",
			"description": "Create a SharePoint List script",
			"properties": {
				"verb": {
					"enum": [ "createSPList" ]
				},
				"listName": {
					"type": "string"
				},
				"templateType": {
					"type": "number"
				},
				"subactions": {
					"type": "array",
					"items": {
						"anyOf": [
							{ "type": "object", "$ref": "#/definitions/createSPList_setTitle" },
              { "type": "object", "$ref": "#/definitions/createSPList_setDescription" },
              { "type": "object", "$ref": "#/definitions/createSPList_addSPField" },
							{ "type": "object", "$ref": "#/definitions/createSPList_deleteSPField" },
							{ "type": "object", "$ref": "#/definitions/createSPList_addContentType" },
							{ "type": "object", "$ref": "#/definitions/createSPList_removeContentType" },
							{ "type": "object", "$ref": "#/definitions/createSPList_setSPFieldCustomFormatter" }
						]
					}
				}
			},
			"required":["verb","listName","templateType"]
		},
		"addNavLink": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "addNavLink" ]
				},
				"url": {
					"type": "string"
				},
				"displayName": {
					"type": "string"
				},
				"isWebRelative": {
					"type": "boolean"
				}
			},
			"required": [ "verb", "url", "displayName", "isWebRelative" ]
		},
		"applyTheme": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "applyTheme" ]
				},
				"themeName": {
					"type": "string"
				}
			},
			"required": [ "verb", "themeName" ]
		},
		"setSiteLogo": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "setSiteLogo" ]
				},
				"url": {
					"type": "string"
				}
			},
			"required": [ "verb", "url" ]
		},
		"joinHubSite": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "joinHubSite" ]
				},
				"hubSiteId": {
					"type": "string"
				}
			},
			"required": [ "verb", "hubSiteId" ]
		},
		"triggerFlow": {
			"type": "object",
			"properties": {
				"verb": {
					"enum": [ "triggerFlow" ]
				},
				"url": {
					"type": "string"
				},
				"name": {
					"type": "string"
				},
				"parameters": {
					"type": "object"
				}
			},
			"required": [ "verb", "url", "name", "parameters" ]
		}
	},
	"type": "object",
	"properties": {
		"actions": {
			"type": "array",
			"description": "The definition of the script actions",
			"items": {
				"anyOf": [
					{ "type": "object", "$ref": "#/definitions/createSPList" },
					{ "type": "object", "$ref": "#/definitions/addNavLink" },
					{ "type": "object", "$ref": "#/definitions/applyTheme" },
					{ "type": "object", "$ref": "#/definitions/setSiteLogo" },
					{ "type": "object", "$ref": "#/definitions/joinHubSite" },
					{ "type": "object", "$ref": "#/definitions/triggerFlow" }
				]
			}
		},
		"bindata": {
			"type": "object",
			"additionalProperties": false
		},
		"version": {
			"type": "number"
		}
	},
	"required": [
		"actions", "bindata", "version"
	]
};

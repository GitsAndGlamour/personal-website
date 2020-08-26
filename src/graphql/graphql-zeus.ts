/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["AWSDateTime"]: AliasType<{
	day?:true,
	month?:true,
	year?:true,
	hour?:true,
	minute?:true,
	second?:true,
	formatted?:true
		__typename?: true
}>;
	["Blog"]: AliasType<{
	id?:true,
	name?:true,
posts?: [{	filter?:ValueTypes["ModelPostFilterInput"],	sortDirection?:ValueTypes["ModelSortDirection"],	limit?:number,	nextToken?:string},ValueTypes["ModelPostConnection"]],
	createdAt?:ValueTypes["AWSDateTime"],
	updatedAt?:ValueTypes["AWSDateTime"]
		__typename?: true
}>;
	["Post"]: AliasType<{
	id?:true,
	title?:true,
	blogID?:true,
	blog?:ValueTypes["Blog"],
comments?: [{	content?:ValueTypes["ModelStringKeyConditionInput"],	filter?:ValueTypes["ModelCommentFilterInput"],	sortDirection?:ValueTypes["ModelSortDirection"],	limit?:number,	nextToken?:string},ValueTypes["ModelCommentConnection"]],
	createdAt?:ValueTypes["AWSDateTime"],
	updatedAt?:ValueTypes["AWSDateTime"]
		__typename?: true
}>;
	["Comment"]: AliasType<{
	id?:true,
	postID?:true,
	post?:ValueTypes["Post"],
	content?:true,
	createdAt?:ValueTypes["AWSDateTime"],
	updatedAt?:ValueTypes["AWSDateTime"]
		__typename?: true
}>;
	["ModelSortDirection"]:ModelSortDirection;
	["ModelBlogConnection"]: AliasType<{
	items?:ValueTypes["Blog"],
	nextToken?:true
		__typename?: true
}>;
	["ModelStringInput"]: {
	ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:ValueTypes["ModelAttributeTypes"],
	size?:ValueTypes["ModelSizeInput"]
};
	["ModelIDInput"]: {
	ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:ValueTypes["ModelAttributeTypes"],
	size?:ValueTypes["ModelSizeInput"]
};
	["ModelIntInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:ValueTypes["ModelAttributeTypes"]
};
	["ModelFloatInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:ValueTypes["ModelAttributeTypes"]
};
	["ModelBooleanInput"]: {
	ne?:boolean,
	eq?:boolean,
	attributeExists?:boolean,
	attributeType?:ValueTypes["ModelAttributeTypes"]
};
	["ModelSizeInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[]
};
	["ModelBlogFilterInput"]: {
	id?:ValueTypes["ModelIDInput"],
	name?:ValueTypes["ModelStringInput"],
	and?:(ValueTypes["ModelBlogFilterInput"] | undefined)[],
	or?:(ValueTypes["ModelBlogFilterInput"] | undefined)[],
	not?:ValueTypes["ModelBlogFilterInput"]
};
	["ModelAttributeTypes"]:ModelAttributeTypes;
	["Query"]: AliasType<{
getBlog?: [{	id:string},ValueTypes["Blog"]],
listBlogs?: [{	filter?:ValueTypes["ModelBlogFilterInput"],	limit?:number,	nextToken?:string},ValueTypes["ModelBlogConnection"]],
getPost?: [{	id:string},ValueTypes["Post"]],
listPosts?: [{	filter?:ValueTypes["ModelPostFilterInput"],	limit?:number,	nextToken?:string},ValueTypes["ModelPostConnection"]],
getComment?: [{	id:string},ValueTypes["Comment"]],
listComments?: [{	filter?:ValueTypes["ModelCommentFilterInput"],	limit?:number,	nextToken?:string},ValueTypes["ModelCommentConnection"]]
		__typename?: true
}>;
	["CreateBlogInput"]: {
	id?:string,
	name:string
};
	["UpdateBlogInput"]: {
	id:string,
	name?:string
};
	["DeleteBlogInput"]: {
	id?:string
};
	["Mutation"]: AliasType<{
createBlog?: [{	input:ValueTypes["CreateBlogInput"],	condition?:ValueTypes["ModelBlogConditionInput"]},ValueTypes["Blog"]],
updateBlog?: [{	input:ValueTypes["UpdateBlogInput"],	condition?:ValueTypes["ModelBlogConditionInput"]},ValueTypes["Blog"]],
deleteBlog?: [{	input:ValueTypes["DeleteBlogInput"],	condition?:ValueTypes["ModelBlogConditionInput"]},ValueTypes["Blog"]],
createPost?: [{	input:ValueTypes["CreatePostInput"],	condition?:ValueTypes["ModelPostConditionInput"]},ValueTypes["Post"]],
updatePost?: [{	input:ValueTypes["UpdatePostInput"],	condition?:ValueTypes["ModelPostConditionInput"]},ValueTypes["Post"]],
deletePost?: [{	input:ValueTypes["DeletePostInput"],	condition?:ValueTypes["ModelPostConditionInput"]},ValueTypes["Post"]],
createComment?: [{	input:ValueTypes["CreateCommentInput"],	condition?:ValueTypes["ModelCommentConditionInput"]},ValueTypes["Comment"]],
updateComment?: [{	input:ValueTypes["UpdateCommentInput"],	condition?:ValueTypes["ModelCommentConditionInput"]},ValueTypes["Comment"]],
deleteComment?: [{	input:ValueTypes["DeleteCommentInput"],	condition?:ValueTypes["ModelCommentConditionInput"]},ValueTypes["Comment"]]
		__typename?: true
}>;
	["ModelBlogConditionInput"]: {
	name?:ValueTypes["ModelStringInput"],
	and?:(ValueTypes["ModelBlogConditionInput"] | undefined)[],
	or?:(ValueTypes["ModelBlogConditionInput"] | undefined)[],
	not?:ValueTypes["ModelBlogConditionInput"]
};
	["ModelPostConnection"]: AliasType<{
	items?:ValueTypes["Post"],
	nextToken?:true
		__typename?: true
}>;
	["ModelPostFilterInput"]: {
	id?:ValueTypes["ModelIDInput"],
	title?:ValueTypes["ModelStringInput"],
	blogID?:ValueTypes["ModelIDInput"],
	and?:(ValueTypes["ModelPostFilterInput"] | undefined)[],
	or?:(ValueTypes["ModelPostFilterInput"] | undefined)[],
	not?:ValueTypes["ModelPostFilterInput"]
};
	["CreatePostInput"]: {
	id?:string,
	title:string,
	blogID:string
};
	["UpdatePostInput"]: {
	id:string,
	title?:string,
	blogID?:string
};
	["DeletePostInput"]: {
	id?:string
};
	["ModelPostConditionInput"]: {
	title?:ValueTypes["ModelStringInput"],
	blogID?:ValueTypes["ModelIDInput"],
	and?:(ValueTypes["ModelPostConditionInput"] | undefined)[],
	or?:(ValueTypes["ModelPostConditionInput"] | undefined)[],
	not?:ValueTypes["ModelPostConditionInput"]
};
	["ModelCommentConnection"]: AliasType<{
	items?:ValueTypes["Comment"],
	nextToken?:true
		__typename?: true
}>;
	["ModelCommentFilterInput"]: {
	id?:ValueTypes["ModelIDInput"],
	postID?:ValueTypes["ModelIDInput"],
	content?:ValueTypes["ModelStringInput"],
	and?:(ValueTypes["ModelCommentFilterInput"] | undefined)[],
	or?:(ValueTypes["ModelCommentFilterInput"] | undefined)[],
	not?:ValueTypes["ModelCommentFilterInput"]
};
	["CreateCommentInput"]: {
	id?:string,
	postID:string,
	content:string
};
	["UpdateCommentInput"]: {
	id:string,
	postID?:string,
	content?:string
};
	["DeleteCommentInput"]: {
	id?:string
};
	["ModelCommentConditionInput"]: {
	postID?:ValueTypes["ModelIDInput"],
	content?:ValueTypes["ModelStringInput"],
	and?:(ValueTypes["ModelCommentConditionInput"] | undefined)[],
	or?:(ValueTypes["ModelCommentConditionInput"] | undefined)[],
	not?:ValueTypes["ModelCommentConditionInput"]
};
	["ModelStringKeyConditionInput"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	between?:(string | undefined)[],
	beginsWith?:string
}
  }

export type PartialObjects = {
    ["AWSDateTime"]: {
		__typename?: "AWSDateTime";
			day?:number,
			month?:number,
			year?:number,
			hour?:number,
			minute?:number,
			second?:number,
			formatted?:string
	},
	["Blog"]: {
		__typename?: "Blog";
			id?:string,
			name?:string,
			posts?:PartialObjects["ModelPostConnection"],
			createdAt?:PartialObjects["AWSDateTime"],
			updatedAt?:PartialObjects["AWSDateTime"]
	},
	["Post"]: {
		__typename?: "Post";
			id?:string,
			title?:string,
			blogID?:string,
			blog?:PartialObjects["Blog"],
			comments?:PartialObjects["ModelCommentConnection"],
			createdAt?:PartialObjects["AWSDateTime"],
			updatedAt?:PartialObjects["AWSDateTime"]
	},
	["Comment"]: {
		__typename?: "Comment";
			id?:string,
			postID?:string,
			post?:PartialObjects["Post"],
			content?:string,
			createdAt?:PartialObjects["AWSDateTime"],
			updatedAt?:PartialObjects["AWSDateTime"]
	},
	["ModelSortDirection"]:ModelSortDirection,
	["ModelBlogConnection"]: {
		__typename?: "ModelBlogConnection";
			items?:(PartialObjects["Blog"] | undefined)[],
			nextToken?:string
	},
	["ModelStringInput"]: {
	ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:PartialObjects["ModelAttributeTypes"],
	size?:PartialObjects["ModelSizeInput"]
},
	["ModelIDInput"]: {
	ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:PartialObjects["ModelAttributeTypes"],
	size?:PartialObjects["ModelSizeInput"]
},
	["ModelIntInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:PartialObjects["ModelAttributeTypes"]
},
	["ModelFloatInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:PartialObjects["ModelAttributeTypes"]
},
	["ModelBooleanInput"]: {
	ne?:boolean,
	eq?:boolean,
	attributeExists?:boolean,
	attributeType?:PartialObjects["ModelAttributeTypes"]
},
	["ModelSizeInput"]: {
	ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[]
},
	["ModelBlogFilterInput"]: {
	id?:PartialObjects["ModelIDInput"],
	name?:PartialObjects["ModelStringInput"],
	and?:(PartialObjects["ModelBlogFilterInput"] | undefined)[],
	or?:(PartialObjects["ModelBlogFilterInput"] | undefined)[],
	not?:PartialObjects["ModelBlogFilterInput"]
},
	["ModelAttributeTypes"]:ModelAttributeTypes,
	["Query"]: {
		__typename?: "Query";
			getBlog?:PartialObjects["Blog"],
			listBlogs?:PartialObjects["ModelBlogConnection"],
			getPost?:PartialObjects["Post"],
			listPosts?:PartialObjects["ModelPostConnection"],
			getComment?:PartialObjects["Comment"],
			listComments?:PartialObjects["ModelCommentConnection"]
	},
	["CreateBlogInput"]: {
	id?:string,
	name:string
},
	["UpdateBlogInput"]: {
	id:string,
	name?:string
},
	["DeleteBlogInput"]: {
	id?:string
},
	["Mutation"]: {
		__typename?: "Mutation";
			createBlog?:PartialObjects["Blog"],
			updateBlog?:PartialObjects["Blog"],
			deleteBlog?:PartialObjects["Blog"],
			createPost?:PartialObjects["Post"],
			updatePost?:PartialObjects["Post"],
			deletePost?:PartialObjects["Post"],
			createComment?:PartialObjects["Comment"],
			updateComment?:PartialObjects["Comment"],
			deleteComment?:PartialObjects["Comment"]
	},
	["ModelBlogConditionInput"]: {
	name?:PartialObjects["ModelStringInput"],
	and?:(PartialObjects["ModelBlogConditionInput"] | undefined)[],
	or?:(PartialObjects["ModelBlogConditionInput"] | undefined)[],
	not?:PartialObjects["ModelBlogConditionInput"]
},
	["ModelPostConnection"]: {
		__typename?: "ModelPostConnection";
			items?:(PartialObjects["Post"] | undefined)[],
			nextToken?:string
	},
	["ModelPostFilterInput"]: {
	id?:PartialObjects["ModelIDInput"],
	title?:PartialObjects["ModelStringInput"],
	blogID?:PartialObjects["ModelIDInput"],
	and?:(PartialObjects["ModelPostFilterInput"] | undefined)[],
	or?:(PartialObjects["ModelPostFilterInput"] | undefined)[],
	not?:PartialObjects["ModelPostFilterInput"]
},
	["CreatePostInput"]: {
	id?:string,
	title:string,
	blogID:string
},
	["UpdatePostInput"]: {
	id:string,
	title?:string,
	blogID?:string
},
	["DeletePostInput"]: {
	id?:string
},
	["ModelPostConditionInput"]: {
	title?:PartialObjects["ModelStringInput"],
	blogID?:PartialObjects["ModelIDInput"],
	and?:(PartialObjects["ModelPostConditionInput"] | undefined)[],
	or?:(PartialObjects["ModelPostConditionInput"] | undefined)[],
	not?:PartialObjects["ModelPostConditionInput"]
},
	["ModelCommentConnection"]: {
		__typename?: "ModelCommentConnection";
			items?:(PartialObjects["Comment"] | undefined)[],
			nextToken?:string
	},
	["ModelCommentFilterInput"]: {
	id?:PartialObjects["ModelIDInput"],
	postID?:PartialObjects["ModelIDInput"],
	content?:PartialObjects["ModelStringInput"],
	and?:(PartialObjects["ModelCommentFilterInput"] | undefined)[],
	or?:(PartialObjects["ModelCommentFilterInput"] | undefined)[],
	not?:PartialObjects["ModelCommentFilterInput"]
},
	["CreateCommentInput"]: {
	id?:string,
	postID:string,
	content:string
},
	["UpdateCommentInput"]: {
	id:string,
	postID?:string,
	content?:string
},
	["DeleteCommentInput"]: {
	id?:string
},
	["ModelCommentConditionInput"]: {
	postID?:PartialObjects["ModelIDInput"],
	content?:PartialObjects["ModelStringInput"],
	and?:(PartialObjects["ModelCommentConditionInput"] | undefined)[],
	or?:(PartialObjects["ModelCommentConditionInput"] | undefined)[],
	not?:PartialObjects["ModelCommentConditionInput"]
},
	["ModelStringKeyConditionInput"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	between?:(string | undefined)[],
	beginsWith?:string
}
  }

export type AWSDateTime = {
	__typename?: "AWSDateTime",
	day:number,
	month:number,
	year:number,
	hour:number,
	minute:number,
	second:number,
	formatted:string
}

export type Blog = {
	__typename?: "Blog",
	id:string,
	name:string,
	posts?:ModelPostConnection,
	createdAt:AWSDateTime,
	updatedAt:AWSDateTime
}

export type Post = {
	__typename?: "Post",
	id:string,
	title:string,
	blogID:string,
	blog?:Blog,
	comments?:ModelCommentConnection,
	createdAt:AWSDateTime,
	updatedAt:AWSDateTime
}

export type Comment = {
	__typename?: "Comment",
	id:string,
	postID:string,
	post?:Post,
	content:string,
	createdAt:AWSDateTime,
	updatedAt:AWSDateTime
}

export enum ModelSortDirection {
	ASC = "ASC",
	DESC = "DESC"
}

export type ModelBlogConnection = {
	__typename?: "ModelBlogConnection",
	items?:(Blog | undefined)[],
	nextToken?:string
}

export type ModelStringInput = {
		ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:ModelAttributeTypes,
	size?:ModelSizeInput
}

export type ModelIDInput = {
		ne?:string,
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	contains?:string,
	notContains?:string,
	between?:(string | undefined)[],
	beginsWith?:string,
	attributeExists?:boolean,
	attributeType?:ModelAttributeTypes,
	size?:ModelSizeInput
}

export type ModelIntInput = {
		ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:ModelAttributeTypes
}

export type ModelFloatInput = {
		ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[],
	attributeExists?:boolean,
	attributeType?:ModelAttributeTypes
}

export type ModelBooleanInput = {
		ne?:boolean,
	eq?:boolean,
	attributeExists?:boolean,
	attributeType?:ModelAttributeTypes
}

export type ModelSizeInput = {
		ne?:number,
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number,
	between?:(number | undefined)[]
}

export type ModelBlogFilterInput = {
		id?:ModelIDInput,
	name?:ModelStringInput,
	and?:(ModelBlogFilterInput | undefined)[],
	or?:(ModelBlogFilterInput | undefined)[],
	not?:ModelBlogFilterInput
}

export enum ModelAttributeTypes {
	binary = "binary",
	binarySet = "binarySet",
	bool = "bool",
	list = "list",
	map = "map",
	number = "number",
	numberSet = "numberSet",
	string = "string",
	stringSet = "stringSet",
	_null = "_null"
}

export type Query = {
	__typename?: "Query",
	getBlog?:Blog,
	listBlogs?:ModelBlogConnection,
	getPost?:Post,
	listPosts?:ModelPostConnection,
	getComment?:Comment,
	listComments?:ModelCommentConnection
}

export type CreateBlogInput = {
		id?:string,
	name:string
}

export type UpdateBlogInput = {
		id:string,
	name?:string
}

export type DeleteBlogInput = {
		id?:string
}

export type Mutation = {
	__typename?: "Mutation",
	createBlog?:Blog,
	updateBlog?:Blog,
	deleteBlog?:Blog,
	createPost?:Post,
	updatePost?:Post,
	deletePost?:Post,
	createComment?:Comment,
	updateComment?:Comment,
	deleteComment?:Comment
}

export type ModelBlogConditionInput = {
		name?:ModelStringInput,
	and?:(ModelBlogConditionInput | undefined)[],
	or?:(ModelBlogConditionInput | undefined)[],
	not?:ModelBlogConditionInput
}

export type ModelPostConnection = {
	__typename?: "ModelPostConnection",
	items?:(Post | undefined)[],
	nextToken?:string
}

export type ModelPostFilterInput = {
		id?:ModelIDInput,
	title?:ModelStringInput,
	blogID?:ModelIDInput,
	and?:(ModelPostFilterInput | undefined)[],
	or?:(ModelPostFilterInput | undefined)[],
	not?:ModelPostFilterInput
}

export type CreatePostInput = {
		id?:string,
	title:string,
	blogID:string
}

export type UpdatePostInput = {
		id:string,
	title?:string,
	blogID?:string
}

export type DeletePostInput = {
		id?:string
}

export type ModelPostConditionInput = {
		title?:ModelStringInput,
	blogID?:ModelIDInput,
	and?:(ModelPostConditionInput | undefined)[],
	or?:(ModelPostConditionInput | undefined)[],
	not?:ModelPostConditionInput
}

export type ModelCommentConnection = {
	__typename?: "ModelCommentConnection",
	items?:(Comment | undefined)[],
	nextToken?:string
}

export type ModelCommentFilterInput = {
		id?:ModelIDInput,
	postID?:ModelIDInput,
	content?:ModelStringInput,
	and?:(ModelCommentFilterInput | undefined)[],
	or?:(ModelCommentFilterInput | undefined)[],
	not?:ModelCommentFilterInput
}

export type CreateCommentInput = {
		id?:string,
	postID:string,
	content:string
}

export type UpdateCommentInput = {
		id:string,
	postID?:string,
	content?:string
}

export type DeleteCommentInput = {
		id?:string
}

export type ModelCommentConditionInput = {
		postID?:ModelIDInput,
	content?:ModelStringInput,
	and?:(ModelCommentConditionInput | undefined)[],
	or?:(ModelCommentConditionInput | undefined)[],
	not?:ModelCommentConditionInput
}

export type ModelStringKeyConditionInput = {
		eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string,
	between?:(string | undefined)[],
	beginsWith?:string
}

export const AllTypesProps: Record<string,any> = {
	Blog:{
		posts:{
			filter:{
				type:"ModelPostFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sortDirection:{
				type:"ModelSortDirection",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			nextToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Post:{
		comments:{
			content:{
				type:"ModelStringKeyConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			filter:{
				type:"ModelCommentFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sortDirection:{
				type:"ModelSortDirection",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			nextToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ModelSortDirection: "enum",
	ModelStringInput:{
		ne:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		notContains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		beginsWith:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeExists:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeType:{
			type:"ModelAttributeTypes",
			array:false,
			arrayRequired:false,
			required:false
		},
		size:{
			type:"ModelSizeInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelIDInput:{
		ne:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		contains:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		notContains:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		beginsWith:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeExists:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeType:{
			type:"ModelAttributeTypes",
			array:false,
			arrayRequired:false,
			required:false
		},
		size:{
			type:"ModelSizeInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelIntInput:{
		ne:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		},
		attributeExists:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeType:{
			type:"ModelAttributeTypes",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelFloatInput:{
		ne:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"Float",
			array:true,
			arrayRequired:false,
			required:false
		},
		attributeExists:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeType:{
			type:"ModelAttributeTypes",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelBooleanInput:{
		ne:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeExists:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeType:{
			type:"ModelAttributeTypes",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelSizeInput:{
		ne:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ModelBlogFilterInput:{
		id:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelBlogFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelBlogFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelBlogFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelAttributeTypes: "enum",
	Query:{
		getBlog:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listBlogs:{
			filter:{
				type:"ModelBlogFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			nextToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getPost:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listPosts:{
			filter:{
				type:"ModelPostFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			nextToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getComment:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listComments:{
			filter:{
				type:"ModelCommentFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			nextToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CreateBlogInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateBlogInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeleteBlogInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Mutation:{
		createBlog:{
			input:{
				type:"CreateBlogInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelBlogConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateBlog:{
			input:{
				type:"UpdateBlogInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelBlogConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteBlog:{
			input:{
				type:"DeleteBlogInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelBlogConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createPost:{
			input:{
				type:"CreatePostInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelPostConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updatePost:{
			input:{
				type:"UpdatePostInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelPostConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deletePost:{
			input:{
				type:"DeletePostInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelPostConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createComment:{
			input:{
				type:"CreateCommentInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelCommentConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateComment:{
			input:{
				type:"UpdateCommentInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelCommentConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteComment:{
			input:{
				type:"DeleteCommentInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			condition:{
				type:"ModelCommentConditionInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ModelBlogConditionInput:{
		name:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelBlogConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelBlogConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelBlogConditionInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelPostFilterInput:{
		id:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blogID:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelPostFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelPostFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelPostFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreatePostInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		blogID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdatePostInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		blogID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeletePostInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelPostConditionInput:{
		title:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blogID:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelPostConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelPostConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelPostConditionInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelCommentFilterInput:{
		id:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		postID:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelCommentFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelCommentFilterInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelCommentFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreateCommentInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		postID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateCommentInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		postID:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DeleteCommentInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelCommentConditionInput:{
		postID:{
			type:"ModelIDInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		content:{
			type:"ModelStringInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		and:{
			type:"ModelCommentConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		or:{
			type:"ModelCommentConditionInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		not:{
			type:"ModelCommentConditionInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ModelStringKeyConditionInput:{
		eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		le:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		ge:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		between:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		beginsWith:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	AWSDateTime:{
		day:"Int",
		month:"Int",
		year:"Int",
		hour:"Int",
		minute:"Int",
		second:"Int",
		formatted:"String"
	},
	Blog:{
		id:"ID",
		name:"String",
		posts:"ModelPostConnection",
		createdAt:"AWSDateTime",
		updatedAt:"AWSDateTime"
	},
	Post:{
		id:"ID",
		title:"String",
		blogID:"ID",
		blog:"Blog",
		comments:"ModelCommentConnection",
		createdAt:"AWSDateTime",
		updatedAt:"AWSDateTime"
	},
	Comment:{
		id:"ID",
		postID:"ID",
		post:"Post",
		content:"String",
		createdAt:"AWSDateTime",
		updatedAt:"AWSDateTime"
	},
	ModelBlogConnection:{
		items:"Blog",
		nextToken:"String"
	},
	Query:{
		getBlog:"Blog",
		listBlogs:"ModelBlogConnection",
		getPost:"Post",
		listPosts:"ModelPostConnection",
		getComment:"Comment",
		listComments:"ModelCommentConnection"
	},
	Mutation:{
		createBlog:"Blog",
		updateBlog:"Blog",
		deleteBlog:"Blog",
		createPost:"Post",
		updatePost:"Post",
		deletePost:"Post",
		createComment:"Comment",
		updateComment:"Comment",
		deleteComment:"Comment"
	},
	ModelPostConnection:{
		items:"Post",
		nextToken:"String"
	},
	ModelCommentConnection:{
		items:"Comment",
		nextToken:"String"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  
define({ "api": [
  {
    "type": "post",
    "url": "https://apostlite-mongo.herokuapp.com/api/bible_study",
    "title": "Create Bible Study",
    "name": "CreateBibleStudy",
    "group": "BibleStudy",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "bible_Study",
            "description": "<p>The BibleStudy to create</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "\n{\n  study_number :1,\n  scriptures:[\n    \"mathew 5v11\",\n    \"john 11 v 35\"\n  ],\n  title :\"Something to describe the Bible study\",\n  content:\"Walking in a spirit filled life. Life that will cause you to impact in the lives of other. That is what the bible teaches and encourages.\",\n  questions:{\n    \"question one\", \"question two\", \"question three\"\n   }\n \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Do not provide Date with the request. Date is provided by default by the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/bible_study.js",
    "groupTitle": "BibleStudy"
  },
  {
    "type": "delete",
    "url": "https://apostlite-mongo.herokuapp.com/api/bible_study/{id}",
    "title": "Delete Bible Study",
    "name": "DeleteBibleStudy",
    "group": "BibleStudy",
    "description": "<p>To delete an object, you need to provide the unique id of the object.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns success if the delete was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Returns true if the delete was successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success response",
          "content": "{\n   'message':\"success\",\n    'status': \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "An",
            "description": "<p>error occured while adding the wing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: an error occured while adding the wing.",
          "content": "\n{\n   \"message\": \"an error occured while adding the bible_study\",\n   \"error\": \"the type  of error that occured\",\n    \"status\": \"false\"\n}",
          "type": "object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/bible_study.js",
    "groupTitle": "BibleStudy"
  },
  {
    "type": "put",
    "url": "https://apostlite-mongo.herokuapp.com/api/bible_study/{id}",
    "title": "Edit Bible Study",
    "name": "EditBibleStudy",
    "group": "BibleStudy",
    "parameter": {
      "fields": {
        "BibleStudy": [
          {
            "group": "BibleStudy",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The BibleStudy's unique id</p>"
          },
          {
            "group": "BibleStudy",
            "type": "object",
            "optional": false,
            "field": "bible_study",
            "description": "<ul> <li>The new bible_study to be replaced</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Data The new bible_study",
          "content": "\n{\n   study_number :1,\n   scriptures:[\n     \"mathew 5v11\",\n     \"john 11 v 35\"\n   ],\n   title :\"Something to describe the Bible study\",\n   content:\"Walking in a spirit filled life. Life that will cause you to impact in the lives of other. That is what the bible teaches and encourages.\",\n   questions:{\n     \"question one\", \"question two\", \"question three\"\n    }\n   \n }",
          "type": "json"
        }
      ]
    },
    "description": "<p>To update a Bible Study, please provide the new bible_study in a json object and parse it to the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/bible_study.js",
    "groupTitle": "BibleStudy"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/bible_study",
    "title": "Retrieve all Bible Study information",
    "name": "GetBibleStudy",
    "group": "BibleStudy",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "study_number",
            "description": "<p>The number of the Bible study</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "scriptures",
            "description": "<p>An array of all the scriptures contained in the bible study</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the bible study</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The actual content or materials of the Bible study</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "questions",
            "description": "<p>An array containing all the questions that can be asked about the Bible study</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date when the bible study was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the bible study.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   study_number :1,\n   scriptures:[]\n     \"mathew 5v11\",\n     \"john 11 v 35\"\n   ],\n   title :\"Something to describe the Bible study\",\n   content:\"Walking in a spirit filled life. Life that will cause you to impact in the lives of other. That is what the bible teaches and encourages.\",\n   questions:{\n     \"question one\", \"question two\", \"question three\"\n     },\n   createdAt:\"24-04-2018\"\n }\n \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/bible_study.js",
    "groupTitle": "BibleStudy"
  },
  {
    "type": "post",
    "url": "https://apostlite-mongo.herokuapp.com/api/news",
    "title": "Create News",
    "name": "CreateNews",
    "group": "News",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "bible_Study",
            "description": "<p>The News to create</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "\n{\n  'title' :\"SCC SUNDAY\",\n \n 'content' :\"Coming sunday is SCC sunday.There will be no service at CCB.Thank you\",    \n  \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Do not provide Date with the request. Date is provided by default by the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/news.js",
    "groupTitle": "News"
  },
  {
    "type": "delete",
    "url": "https://apostlite-mongo.herokuapp.com/api/news/{id}",
    "title": "Delete News",
    "name": "DeleteNews",
    "group": "News",
    "description": "<p>To delete an object, you need to provide the unique id of the object.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns success if the delete was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Returns true if the delete was successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success response",
          "content": "{\n   'message':\"success\",\n    'status': \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "An",
            "description": "<p>error occured while adding the News.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: an error occured while deleting the news.",
          "content": "\n{\n   \"message\": \"an error occured while adding the news\",\n   \"error\": \"the type  of error that occured\",\n    \"status\": \"false\"\n}",
          "type": "object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/news.js",
    "groupTitle": "News"
  },
  {
    "type": "put",
    "url": "https://apostlite-mongo.herokuapp.com/api/news/{id}",
    "title": "Edit News",
    "name": "EditNews",
    "group": "News",
    "parameter": {
      "fields": {
        "News": [
          {
            "group": "News",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The News' unique id</p>"
          },
          {
            "group": "News",
            "type": "object",
            "optional": false,
            "field": "bible_study",
            "description": "<ul> <li>The new news to be replaced</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Data The new news",
          "content": "\n{\n  \n   title :\"Something to describe the Bible study\",\n   content:\"Walking in a spirit filled life. Life that will cause you to impact in the lives of other. That is what the bible teaches and encourages.\",    \n   \n }",
          "type": "json"
        }
      ]
    },
    "description": "<p>To update a News, please provide the new bible_study in a json object and parse it to the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/news.js",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/news",
    "title": "Retrieve all News",
    "description": "<p>When found, the api will return every news record found in the database</p>",
    "name": "GetNews",
    "group": "News",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Headline or Title for the news</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The actual content of the news *</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date when the news was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the news.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   'title':\"Leavers' service\",\n  \n   content :\"You are being encourged to attend the leavers' service this sunday at ccb. come and be blessed.\", *   \n   createdAt:\"24-04-2018\",\n   updatedAt:\"30-30-2018\"\n } *  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/news.js",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "https://apostlite-mongo.herokuapp.com/api/program",
    "title": "Create Program",
    "name": "CreateProgram",
    "group": "Program",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "bible_Study",
            "description": "<p>The Program to create</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "\n{\n  'name':\"GRAB FOR KEEPS\",    \n  banner :\"images/grabs\", \n  theme:\"You chance to grab your life time partner\",\n  start_date:\"30-04-2018\",\n  end_date:  \"31-04-2018\",\n  createdAt: \"24-04-2018\",\n  updatedAt: \"30-30-2018\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Do not provide Date with the request. Date is provided by default by the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/programs.js",
    "groupTitle": "Program"
  },
  {
    "type": "delete",
    "url": "https://apostlite-mongo.herokuapp.com/api/program/{id}",
    "title": "Delete Program",
    "name": "DeleteProgram",
    "group": "Program",
    "description": "<p>To delete an object, you need to provide the unique id of the object.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns success if the delete was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Returns true if the delete was successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success response",
          "content": "{\n   'message':\"success\",\n    'status': \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "An",
            "description": "<p>error occured while adding the Program.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: an error occured while deleting the program.",
          "content": "\n{\n   \"message\": \"an error occured while adding the program\",\n   \"error\": \"the type  of error that occured\",\n    \"status\": \"false\"\n}",
          "type": "object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/programs.js",
    "groupTitle": "Program"
  },
  {
    "type": "put",
    "url": "https://apostlite-mongo.herokuapp.com/api/news/{id}",
    "title": "Edit Program",
    "name": "EditProgram",
    "group": "Program",
    "parameter": {
      "fields": {
        "News": [
          {
            "group": "News",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The program's  unique id</p>"
          },
          {
            "group": "News",
            "type": "object",
            "optional": false,
            "field": "program",
            "description": "<ul> <li>The new program to be replaced</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Data The new program",
          "content": "\n{\n  'name':\"GRAB FOR KEEPS\",    \n  banner :\"images/grabs\", \n  theme:\"You chance to grab your life time partner\",\n  start_date:\"30-04-2018\",\n  end_date:  \"31-04-2018\",\n  createdAt: \"24-04-2018\",\n  updatedAt: \"30-30-2018\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>To update a program, please provide the new bible_study in a json object and parse it to the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/programs.js",
    "groupTitle": "Program"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/program",
    "title": "Retrieve all Programs",
    "description": "<p>When found, the api will return every program record found in the database</p>",
    "name": "GetPrograms",
    "group": "Program",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Headline or Title for the program</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The actual content of the program</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date when the program was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the program.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   'name':\"GRAB FOR KEEPS\",    \n   banner :\"images/grabs\", \n   theme:\"You chance to grab your life time partner\",\n   start_date:\"30-04-2018\",\n   end_date:  \"31-04-2018\",\n   createdAt: \"24-04-2018\",\n   updatedAt: \"30-30-2018\"\n },\n{\n   'name':\"LEAVERS DINNER\",    \n   banner :\"images/leavers\", \n   theme:\"CREATING A LASTING MEMOERY\",\n   start_date:\"30-04-2018\",\n   end_date:  \"31-04-2018\",\n   createdAt: \"24-04-2018\",\n   updatedAt: \"30-30-2018\"\n } \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/programs.js",
    "groupTitle": "Program"
  },
  {
    "type": "post",
    "url": "https://apostlite-mongo.herokuapp.com/api/sermon",
    "title": "Create Sermon",
    "name": "CreateSermon",
    "group": "Sermon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "bible_Study",
            "description": "<p>The Sermon to create</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "\n{\n  'title':\"Leavers' service\",\n  'minister:\"Rev. Dr. J.E.T\",\n  'scriptures':[\n        \"Genesis 1v4\", \"Mathew 6:31\" , \"Mathew 5 v 8\"\n    ],\n  message :\"You are being encourged to attend the service' on sunday at ccb. come and be blessed.\", \n  banner:\"images/sermon/1.jpg\" \n  createdAt:\"24-04-2018\",\n  updatedAt:\"30-30-2018\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Do not provide Date with the request. Date is provided by default by the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/sermon.js",
    "groupTitle": "Sermon"
  },
  {
    "type": "delete",
    "url": "https://apostlite-mongo.herokuapp.com/api/sermon/{id}",
    "title": "Delete Sermon",
    "name": "DeleteSermon",
    "group": "Sermon",
    "description": "<p>To delete an object, you need to provide the unique id of the object.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns success if the delete was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Returns true if the delete was successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success response",
          "content": "{\n   'message':\"success\",\n    'status': \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "An",
            "description": "<p>error occured while adding the Sermon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: an error occured while deleting the sermon.",
          "content": "\n{\n   \"message\": \"an error occured while adding the sermon\",\n   \"error\": \"the type  of error that occured\",\n    \"status\": \"false\"\n}",
          "type": "object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/sermon.js",
    "groupTitle": "Sermon"
  },
  {
    "type": "put",
    "url": "https://apostlite-mongo.herokuapp.com/api/sermon/{id}",
    "title": "Edit Sermon",
    "name": "EditSermon",
    "group": "Sermon",
    "parameter": {
      "fields": {
        "Sermon": [
          {
            "group": "Sermon",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Sermon's unique id</p>"
          },
          {
            "group": "Sermon",
            "type": "object",
            "optional": false,
            "field": "bible_study",
            "description": "<ul> <li>The new sermon to be replaced</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Data The new sermon",
          "content": "\n{\n   'title':\"Leavers' service\",\n   'minister:\"Rev. Dr. J.E.T\",\n   'scriptures':[\n         \"Genesis 1v4\", \"Mathew 6:31\" , \"Mathew 5 v 8\"\n     ],\n   message :\"You are being encourged to attend the service' on sunday at ccb. come and be blessed.\", \n   banner:\"images/sermon/1.jpg\" \n  \n }",
          "type": "json"
        }
      ]
    },
    "description": "<p>To update a Sermon, please provide the new bible_study in a json object and parse it to the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/sermon.js",
    "groupTitle": "Sermon"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/sermon",
    "title": "Retrieve all Sermons",
    "description": "<p>When found, the api will return every sermon record found in the database</p>",
    "name": "GetSermon",
    "group": "Sermon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The Headline or Title for the sermon</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>The actual content of the sermon *</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date when the sermon was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the sermon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   'title':\"Leavers' service\",\n   'minister:\"Rev. Dr. J.E.T\",\n   'scriptures':[\n         \"Genesis 1v4\", \"Mathew 6:31\" , \"Mathew 5 v 8\"\n     ],\n   message :\"You are being encourged to attend the service' on sunday at ccb. come and be blessed.\", \n   banner:\"images/sermon/1.jpg\" \n   createdAt:\"24-04-2018\",\n   updatedAt:\"30-30-2018\"\n } \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/sermon.js",
    "groupTitle": "Sermon"
  },
  {
    "type": "post",
    "url": "https://apostlite-mongo.herokuapp.com/api/wing",
    "title": "Create a new wing",
    "name": "CreateWing",
    "group": "Wings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "wing",
            "description": "<p>The wing to create</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n   \"name\": \"name of the wing\",\n   \"slogan\": \"slogan of the wing\",\n    \"description\":\"write something to describe the wing\",\n    \"logoUrl\":\"an image or logo for the wing\" *     \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Do not provide Date with the request. Date is provided by default by the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/wings.js",
    "groupTitle": "Wings"
  },
  {
    "type": "delete",
    "url": "https://apostlite-mongo.herokuapp.com/api/wing/{id}",
    "title": "Delete a wing",
    "name": "DeleteWing",
    "group": "Wings",
    "description": "<p>To delete an object, you need to provide the unique id of the object.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Returns success if the delete was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Returns true if the delete was successful. { 'message':&quot;success&quot;, 'status': &quot;true&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "An",
            "description": "<p>error occured while adding the wing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: an error occured while adding the wing.",
          "content": "\n{\n   \"message\": \"an error occured while adding the wing\",\n   \"error\": \"the type  of error that occured\",\n    \"status\": \"false\"\n}",
          "type": "object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/wings.js",
    "groupTitle": "Wings"
  },
  {
    "type": "put",
    "url": "https://apostlite-mongo.herokuapp.com/api/wing/{id}",
    "title": "Edit a wing",
    "name": "EditWing",
    "group": "Wings",
    "parameter": {
      "fields": {
        "Wings": [
          {
            "group": "Wings",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Wing unique id</p>"
          },
          {
            "group": "Wings",
            "type": "object",
            "optional": false,
            "field": "wing",
            "description": "<ul> <li>The new wing to be replaced</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Data The new wing",
          "content": "\n{\n   \"name\": \"name of the wing\",\n   \"slogan\": \"slogan of the wing\",\n    \"description\":\"write something to describe the wing\",\n    \"logoUrl\":\"an image or logo for the wing\"     \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>To update a wing, please provide the new wing in a json object and parse it to the api.</p>",
    "version": "0.0.0",
    "filename": "api/routes/wings.js",
    "groupTitle": "Wings"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/wing/{id}",
    "title": "Retrieve  wing information",
    "description": "<p>Get information for only one wing using the wing id.This routes will always return one object if found.</p>",
    "name": "GetWing",
    "group": "Wings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique id of the wing you want information about.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the wings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slogan",
            "description": "<p>The slogan for the wings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the wing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>The logo of the wing</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>The date on which the wing was created in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the wing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   name :\"Organazing\",\n   slogan:\"E just dey biii\",\n   description :\"This is the central organizing wing of the union\",\n   logoUrl:\"images/logo.png\",\n   createdAt:\"24-04-2018\"\n }\n \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/wings.js",
    "groupTitle": "Wings"
  },
  {
    "type": "get",
    "url": "https://apostlite-mongo.herokuapp.com/api/wing",
    "title": "Retrieve all wings information",
    "name": "GetWings",
    "group": "Wings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the wings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slogan",
            "description": "<p>The slogan for the wings</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the wing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>The logo of the wing</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>The date on which the wing was created in the system</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date for the most current update of the wing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n {\n   name :\"Organazing\",\n   slogan:\"E just dey biii\",\n   description :\"This is the central organizing wing of the union\",\n   logoUrl:\"images/logo.png\",\n   createdAt:\"24-04-2018\"\n }\n \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>An error occured while fetching the records from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/wings.js",
    "groupTitle": "Wings"
  }
] });

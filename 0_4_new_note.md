sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET chrome-extension://cimiefiiaegbelhefglklhhakcgmhkai/page-script.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET 
https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [
    {
        "content": "",
        "date": "2024-01-31T00:18:35.293Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.323Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.357Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.384Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.414Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.443Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.472Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.501Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:18:35.537Z"
    },
    {
        "content": "A",
        "date": "2024-01-31T00:18:53.862Z"
    },
    {
        "content": "A",
        "date": "2024-01-31T00:19:08.144Z"
    },
    {
        "content": ",",
        "date": "2024-01-31T00:21:54.144Z"
    },
    {
        "content": "zzzzzzzzzzzzzzzxxxxxxxxxxxx",
        "date": "2024-01-31T00:29:11.524Z"
    },
    {
        "content": "rrrrrrrrrrrqqqqqqqqqqq",
        "date": "2024-01-31T00:29:20.452Z"
    },
    {
        "content": "sssasaaaaaaaaaaaaaaaaa",
        "date": "2024-01-31T00:31:18.948Z"
    },
    {
        "content": "fgdwdw",
        "date": "2024-01-31T00:33:32.018Z"
    },
    {
        "content": "oooooooooooooooooooooooooooo",
        "date": "2024-01-31T00:33:37.649Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:33:56.630Z"
    },
    {
        "content": "fggffgf",
        "date": "2024-01-31T00:34:21.989Z"
    },
    {
        "content": "",
        "date": "2024-01-31T00:42:35.519Z"
    },
    {
        "content": "Allnighter?",
        "date": "2024-01-31T00:46:16.106Z"
    },
    {
        "content": "hi",
        "date": "2024-01-31T00:49:48.642Z"
    },
    {
        "content": "note",
        "date": "2024-01-31T00:50:53.423Z"
    },
    {
        "content": "ds",
        "date": "2024-01-31T00:52:35.552Z"
    },
    {
        "content": "dffd",
        "date": "2024-01-31T01:00:12.965Z"
    },
    {
        "content": "kmk",
        "date": "2024-01-31T01:05:36.141Z"
    },
    {
        "content": "",
        "date": "2024-01-31T01:08:12.780Z"
    },
    {
        "content": "",
        "date": "2024-01-31T01:08:18.608Z"
    },
    {
        "content": "lalala",
        "date": "2024-01-31T01:09:22.045Z"
    },
    {
        "content": ".",
        "date": "2024-01-31T01:10:36.104Z"
    },
    {
        "content": "holaa",
        "date": "2024-01-31T01:15:28.303Z"
    },
    {
        "content": "holaaa",
        "date": "2024-01-31T01:24:24.245Z"
    },
    {
        "content": "Real",
        "date": "2024-01-31T01:42:47.619Z"
    },
    {
        "content": "test_note",
        "date": "2024-01-31T01:43:50.017Z"
    },
    {
        "content": "askii",
        "date": "2024-01-31T01:49:23.694Z"
    },
    {
        "content": "",
        "date": "2024-01-31T02:08:02.633Z"
    },
    {
        "content": "A por ese trabajo en programacion",
        "date": "2024-01-31T02:08:25.548Z"
    },
    {
        "content": "",
        "date": "2024-01-31T02:10:00.411Z"
    },
    {
        "content": "Papadopulus",
        "date": "2024-01-31T02:10:09.358Z"
    },
    {
        "content": "",
        "date": "2024-01-31T02:37:07.971Z"
    },
    {
        "content": "hola",
        "date": "2024-01-31T02:37:12.379Z"
    },
    {
        "content": "",
        "date": "2024-01-31T02:37:12.884Z"
    },
    {
        "content": "hey",
        "date": "2024-01-31T02:43:35.328Z"
    },
    {
        "content": "",
        "date": "2024-01-31T02:43:55.991Z"
    },
    {
        "content": "ewe",
        "date": "2024-01-31T02:47:08.857Z"
    },
    {
        "content": "hola",
        "date": "2024-01-31T02:52:10.934Z"
    },
    {
        "content": "hola",
        "date": "2024-01-31T03:04:11.196Z"
    },
    {
        "content": "A trabajar",
        "date": "2024-01-31T03:06:01.515Z"
    },
    {
        "content": " ",
        "date": "2024-01-31T03:06:52.757Z"
    },
    {
        "content": "qweqweq",
        "date": "2024-01-31T03:20:38.421Z"
    },
    {
        "content": "asd",
        "date": "2024-01-31T03:29:18.516Z"
    },
    {
        "content": "adfrf",
        "date": "2024-01-31T03:29:26.019Z"
    },
    {
        "content": "mahesh",
        "date": "2024-01-31T03:51:10.889Z"
    },
    {
        "content": "mahesh1",
        "date": "2024-01-31T03:52:32.693Z"
    },
    {
        "content": "hello",
        "date": "2024-01-31T04:15:30.514Z"
    },
    {
        "content": "",
        "date": "2024-01-31T04:50:43.743Z"
    },
    {
        "content": "yessss!",
        "date": "2024-01-31T05:26:13.191Z"
    },
    {
        "content": "Lets learn!",
        "date": "2024-01-31T05:27:11.805Z"
    },
    {
        "content": "Lets learn!",
        "date": "2024-01-31T05:27:48.941Z"
    },
    {
        "content": "New note",
        "date": "2024-01-31T05:42:51.876Z"
    },
    {
        "content": "a",
        "date": "2024-01-31T05:46:04.943Z"
    },
    {
        "content": "Uusi muikkari",
        "date": "2024-01-31T05:49:13.513Z"
    },
    {
        "content": "somebody is botting",
        "date": "2024-01-31T05:50:43.163Z"
    },
    {
        "content": "submit",
        "date": "2024-01-31T05:51:10.915Z"
    },
    {
        "content": "a",
        "date": "2024-01-31T05:52:36.462Z"
    },
    {
        "content": "a",
        "date": "2024-01-31T05:52:54.290Z"
    },
    {
        "content": "das",
        "date": "2024-01-31T05:53:11.604Z"
    },
    {
        "content": "",
        "date": "2024-01-31T05:57:02.230Z"
    },
    {
        "content": "mahesh dalle",
        "date": "2024-01-31T05:58:28.245Z"
    },
    {
        "content": "asdas",
        "date": "2024-01-31T06:08:49.606Z"
    },
    {
        "content": "dasd",
        "date": "2024-01-31T06:09:05.412Z"
    },
    {
        "content": "KANAK",
        "date": "2024-01-31T06:10:16.938Z"
    },
    {
        "content": "test",
        "date": "2024-01-31T06:24:17.182Z"
    },
    {
        "content": "kuthey tu",
        "date": "2024-01-31T06:28:43.944Z"
    },
    {
        "content": "test",
        "date": "2024-01-31T06:53:18.655Z"
    },
    {
        "content": "",
        "date": "2024-01-31T06:56:16.105Z"
    },
    {
        "content": "tae",
        "date": "2024-01-31T06:56:39.744Z"
    },
    {
        "content": "tae talaga",
        "date": "2024-01-31T06:56:59.547Z"
    },
    {
        "content": "inang yan",
        "date": "2024-01-31T06:58:16.910Z"
    },
    {
        "content": "muy bien y tu?",
        "date": "2024-01-31T07:01:58.731Z"
    },
    {
        "content": "",
        "date": "2024-01-31T07:03:59.830Z"
    },
    {
        "content": "it works!!",
        "date": "2024-01-31T07:10:05.594Z"
    },
    {
        "content": " ",
        "date": "2024-01-31T07:10:11.742Z"
    },
    {
        "content": "Woah",
        "date": "2024-01-31T07:10:59.205Z"
    },
    {
        "content": "nice",
        "date": "2024-01-31T07:11:02.384Z"
    },
    {
        "content": "",
        "date": "2024-01-31T07:11:06.350Z"
    },
    {
        "content": "text",
        "date": "2024-01-31T07:14:22.692Z"
    },
    {
        "content": "kissa",
        "date": "2024-01-31T07:16:46.686Z"
    },
    {
        "content": "kissa",
        "date": "2024-01-31T07:19:08.846Z"
    },
    {
        "content": "hdk`",
        "date": "2024-01-31T07:24:21.081Z"
    },
    {
        "content": "note 101",
        "date": "2024-01-31T07:24:39.968Z"
    },
    {
        "content": "656+2",
        "date": "2024-01-31T07:28:21.593Z"
    },
    {
        "content": "another",
        "date": "2024-01-31T07:35:44.971Z"
    },
    {
        "content": "test",
        "date": "2024-01-31T07:37:14.838Z"
    },
    {
        "content": "sadge",
        "date": "2024-01-31T07:39:43.766Z"
    },
    {
        "content": "I DECLARE BANKRUPTCY!!!",
        "date": "2024-01-31T07:43:30.954Z"
    },
    {
        "content": "test",
        "date": "2024-01-31T07:48:50.156Z"
    },
    {
        "content": "",
        "date": "2024-01-31T07:49:30.098Z"
    },
    {
        "content": "",
        "date": "2024-01-31T07:54:16.133Z"
    },
    {
        "content": "Ovie",
        "date": "2024-01-31T08:17:58.042Z"
    }
]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
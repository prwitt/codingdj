{
    "version": "0.1.0",
    "configurations": [
        {
            "name": "Launch localhost with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost/mypage.html",
            "webRoot": "${workspaceRoot}/app/files",
            "sourceMaps": true
        },
        {
            "name": "Launch index.html (without sourcemaps)",
            "type": "chrome",
            "request": "launch",
            "file": "${workspaceRoot}/index.html"
        },
    ]
}

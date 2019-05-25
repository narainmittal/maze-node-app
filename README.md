# maze-node-app
This is an express.js applicaiton which exposes apis to generate and solve random maze grids.

The project is currently live at https://maze-node-app.narainmittal.now.sh Thanks to [Zeit](https://zeit.co/)

## Dev Server

If you are using [Zeit Now](https://zeit.co/now), just run ```now dev```

Otherwise, uncomment below lines in ```index.js``` and run ```node index.js```

```
//http.createServer(app).listen(80);	module.exports = app; 
//https.createServer({}, app).listen(443);
```

## API


```/create``` 
Generates a maze. 

Sample request:
```
{
"rows": 3,
"cols": 3
}

```
Sample response:

```
{
    "rows": 3,
    "cols": 3,
    "blocks": [
        [
            {
                "x": 0,
                "y": 0,
                "dir": 7,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 0,
                "y": 1,
                "dir": 3,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 0,
                "y": 2,
                "dir": 9,
                "downWall": false,
                "rightWall": true
            }
        ],
        [
            {
                "x": 1,
                "y": 0,
                "dir": 5,
                "downWall": false,
                "rightWall": false
            },
            {
                "x": 1,
                "y": 1,
                "dir": 11,
                "downWall": true,
                "rightWall": true
            },
            {
                "x": 1,
                "y": 2,
                "dir": 12,
                "downWall": false,
                "rightWall": true
            }
        ],
        [
            {
                "x": 2,
                "y": 0,
                "dir": 6,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 2,
                "y": 1,
                "dir": 3,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 2,
                "y": 2,
                "dir": 10,
                "downWall": true,
                "rightWall": true
            }
        ]
    ]
}

```

```/solve``` 
Finds if a path exsits from start to end. Sample request:

```
{
    "start": {
    	"x": 0,
    	"y": 0
    	
    },
    
    "end": {
    	"x": 2,
    	"y": 2
    },
    "rows": 3,
    "cols": 3,
    "blocks": [
        [
            {
                "x": 0,
                "y": 0,
                "dir": 7,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 0,
                "y": 1,
                "dir": 3,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 0,
                "y": 2,
                "dir": 9,
                "downWall": false,
                "rightWall": true
            }
        ],
        [
            {
                "x": 1,
                "y": 0,
                "dir": 5,
                "downWall": false,
                "rightWall": false
            },
            {
                "x": 1,
                "y": 1,
                "dir": 11,
                "downWall": true,
                "rightWall": true
            },
            {
                "x": 1,
                "y": 2,
                "dir": 12,
                "downWall": false,
                "rightWall": true
            }
        ],
        [
            {
                "x": 2,
                "y": 0,
                "dir": 6,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 2,
                "y": 1,
                "dir": 3,
                "downWall": true,
                "rightWall": false
            },
            {
                "x": 2,
                "y": 2,
                "dir": 10,
                "downWall": true,
                "rightWall": true
            }
        ]
    ]
}
```

Sample response:

```
[
    {
        "x": 0,
        "y": 0
    },
    {
        "x": 0,
        "y": 1
    },
    {
        "x": 0,
        "y": 2
    },
    {
        "x": 1,
        "y": 2
    },
    {
        "x": 2,
        "y": 2
    }
]
```


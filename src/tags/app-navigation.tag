<app-navigation>
    <a each={ links }
       href="#{ url }"
       class={ selected: parent.selectedId === url }>{ name }</a>

    <style>
        :scope {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            box-sizing: border-box;
            font-family: sans-serif;
            text-align: center;
            color: #666666;
            background: #333333;
            width: 50px;
            transition: width .2s;
        }
        :scope:hover {
            width: 60px;
        }
        a, a:visited {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 .8em;
            color: white;
            text-decoration: none;
            background: #444444;
        }
        a:hover {
            background: #666666;
        }
        a.selected {
            background: teal;
        }
    </style>

    <script>
        import AppNavigation from  './app-navigation.js';

        new AppNavigation(/*tag=*/this);
    </script>
</app-navigation>

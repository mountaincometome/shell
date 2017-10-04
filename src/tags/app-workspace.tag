<app-workspace>
    <header>
        <div id="control-panel">
            <span>The current mouse position:</span>
            <span id="debug-info"></span>
        </div>
        <h1>{ title }</h1>
        <p>{ body }</p>
    </header>

    <style>
        :scope {
            display: block;
            font-family: sans-serif;
            margin-right: 0;
            margin-bottom: 130px;
            margin-left: 50px;
            padding: 1em;
            text-align: center;
            color: #666666;
        }
        #control-panel {
            border: 1px solid #606060;
            background-color: e0d0e0;
        }
        ul {
            padding: 10px;
            list-style: none;
        }
        li {
            display: inline-block;
            margin: 5px;
        }
        a, a:visited {
            display: block;
            background: #f7f7f7;
            text-decoration: none;
            width: 150px;
            height: 150px;
            line-height: 150px;
            color: inherit;
        }
        a:hover {
            background: #eeeeee;
            color: #000000;
        }
        @media (min-width: 480px) {
            :scope {
                margin-right: 200px;
                margin-bottom: 0;
            }
        }
    </style>

    <script>
        import AppWorkspace from  './app-workspace.js';

        new AppWorkspace(/*tag=*/this);
    </script>
</app-workspace>

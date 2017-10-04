<app-help>
    <h2>Help</h2>
    <p>{ helptext }</p>

    <style>
        :scope {
            position: fixed;
            top: auto;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 130px;
            box-sizing: border-box;
            font-family: sans-serif;
            margin: 0;
            padding: 1em;
            text-align: center;
            color: #666666;
            background: #f7f7f7;
        }
        @media (min-width: 480px) {
            :scope {
                top: 0;
                right: 0;
                bottom: auto;
                left: auto;
                width: 200px;
                height: 100%;
            }
        }
    </style>

    <script>
        import AppHelp from  './app-help.js';

        new AppHelp(/*tag=*/this);
    </script>
</app-help>

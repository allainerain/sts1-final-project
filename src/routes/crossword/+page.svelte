<script>
    import CrosswordPuzzle from '../../components/crosswordPuzzle.svelte'
    import Background from '../../components/background.svelte'
    // import '/backgrounds/crossword/-background.jpg'

    // window.onload = function() {
    //     location.reload();
    // };
</script>

<body>
    <CrosswordPuzzle class='crossword-puzzle'/>
</body>

<style>
body {
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: url('/backgrounds/crossword-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

<script>
    import CrosswordPuzzle from '../../components/crosswordPuzzle.svelte'
    import Background from '../../components/background.svelte'


</script>

<body>
    <CrosswordPuzzle class='crossword-puzzle' sound="craft-island.mp3"/>
</body>

<style>
body {
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    /* background-image: url('/backgrounds/crossword-background.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

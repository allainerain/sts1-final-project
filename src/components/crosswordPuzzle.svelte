<script>
    import Crossword from "svelte-crossword";
    import crosswordData from "./crosswordData.json"

</script>

<div >

    <Crossword  data="{crosswordData}" />

</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

div {
    --xd-font: 'Pangolin';
    max-width: 960px;
    margin: 3rem auto;
    margin-bottom: 6rem;
  }

</style>
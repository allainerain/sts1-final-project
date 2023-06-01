<script>
    import { fade } from 'svelte/transition'
    import Cutscene from '../components/cutscene.svelte'
</script>

<div transition:fade="{{ duration: 1000}}" class = "main">
    <!-- <h1 class = "title"> Story Title </h1>
    <p class = "description"> Descripton something hello this is the group project by group 12 for our STS final project under Minimo Likha.</p>
    <a href="/scene-one">
        <button>Laro na!</button>
    </a> -->
    <Cutscene image="scene-one-cutscene.png" text="Laro na!" link="/scene-one"/>
</div>

<style>

/* .main{
    margin: 10%;
    padding: 10%;
    background-color: lightblue;
    text-align: center;
} */

/* .title{
    text-align: center;
} */

</style>
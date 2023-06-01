<script>
    import { fade } from 'svelte/transition'
    import Cutscene from '../../components/cutscene.svelte'
</script>

<div transition:fade="{{ duration: 1000}}" class = "main">
    <Cutscene image="scene-three-cutscene.png" text="Susunod" link="/scene-three"/>
</div>

<style>

</style>
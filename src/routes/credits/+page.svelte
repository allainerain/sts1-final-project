<script>
    import { fade } from 'svelte/transition'
    import Cutscene from '../../components/cutscene.svelte'
</script>

<div transition:fade="{{ duration: 1000}}" class = "main">
    <Cutscene image="credits.png" text="Balik sa Simula" link="/" message="Salamat sa paglalaro!" sound="another-arni.mp3"/>
</div>

<style>

</style>
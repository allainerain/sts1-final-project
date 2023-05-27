<script>
    import { sceneOneDialogues } from './scene-one-dialogues.js';
    import Scene from '../../components/scene.svelte'
    import { sceneCharacters } from './scene-characters.js'
</script>

<div class="background">
    <img src='/backgrounds/scene-one-background.png' alt='scene one background' />
</div>

<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneOneDialogues} nextScene='/scene-two' />

<style>
    .background {
        width: 100%;
        height: 70vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background-position: center top; /* Adjust the position here */
    }

    @media (max-width: 1000px) {
      .background {
        height: 75vh;
      }
    }

    .background img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>

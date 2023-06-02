<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import Background from '../../components/background.svelte'
    import { sceneCharacters } from './scene-characters.js'
    import { fade } from 'svelte/transition'
</script>

<section transition:fade="{{ duration: 1000}}">
  <Background background="scene-five-background.png"/>
  <Scene
    sceneCharacters={sceneCharacters}
    sceneDialogues={sceneDialogues}
    nextScene="/credits"
    sound="evolution-and-harmony.mp3"
  />
</section>

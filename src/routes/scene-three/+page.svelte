<script>
    import Scene from '../../components/scene.svelte';
    import { sceneThreeDialogues } from './scene-three-dialogues.js';
    import { tooltips } from './scene-three-tooltips.js';
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
</script>
  
  
<Background background="scene-one-background.png"/>

<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneThreeDialogues} nextScene="scene-four" {tooltips} />
  
  

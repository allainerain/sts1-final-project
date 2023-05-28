<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import { tooltips } from './scene-tooltips.js';
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
</script>
  
  
<Background background="scene-three-background.png"/>

<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene="scene-four" {tooltips} />
  
  

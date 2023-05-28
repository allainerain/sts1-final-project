<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import Background from '../../components/background.svelte'
    import { sceneCharacters } from './scene-characters.js'

    
  </script>
  
  <Background background="scene-two-background.png"/>
  <Scene
    sceneCharacters={sceneCharacters}
    sceneDialogues={sceneDialogues}
    nextScene="/credits"
  />
  


  

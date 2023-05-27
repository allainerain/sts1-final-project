<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import { tooltips } from './scene-tooltips.js';
    import Background from '../../components/background.svelte'
    import { sceneCharacters } from './scene-characters.js'

    
  </script>
  
  <Background background="scene-one-background.png"/>
  <Scene
    sceneCharacters={sceneCharacters}
    sceneDialogues={sceneDialogues}
    nextScene="/crossword"
    {tooltips}
  />
  


  

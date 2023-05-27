<script>
    import Scene from '../../components/scene.svelte';
    import { sceneFourDialogues } from './scene-four-dialogues.js';
    import { tooltips } from './scene-four-tooltips.js';
    import Background from '../../components/background.svelte'
    import { sceneCharacters } from './scene-characters.js'

    
  </script>
  
  <Background background="scene-one-background.png"/>
  <Scene
    sceneCharacters={sceneCharacters}
    sceneDialogues={sceneFourDialogues}
    nextScene="/crossword"
    {tooltips}
  />
  


  

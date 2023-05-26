<script>
    import Scene from '../../components/scene.svelte';
    import { sceneFourDialogues } from './scene-four-dialogues.js';
    import { tooltips } from './scene-four-tooltips.js';
    
  </script>
  
  <Scene
    sceneDialogues={sceneFourDialogues}
    nextScene="/scene-five"
    {tooltips}
  />
  
  

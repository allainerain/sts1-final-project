<script>
    import Scene from '../../components/scene.svelte';
    import { sceneThreeDialogues } from './scene-three-dialogues.js';
    import { tooltips } from './scene-three-tooltips.js';
    
  </script>
  
  <Scene
    sceneDialogues={sceneThreeDialogues}
    nextScene="scene-four"
    {tooltips}
  />
  
  

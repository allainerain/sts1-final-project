<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import { tooltips } from './scene-tooltips.js';
    import { sceneCharacters } from './scene-characters.js';
    import Background from '../../components/background.svelte';
    import { fade } from 'svelte/transition';
  
  </script>
  
    <section transition:fade="{{ duration: 1000 }}">
      <Background background="scene-three-background.png" />
      <Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene="scene-four" {tooltips} />
    </section>

  
  <style>
    
  </style>
  
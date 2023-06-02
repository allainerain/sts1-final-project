<script>
    import { onMount } from 'svelte';
  
    import { fade } from 'svelte/transition';
    import Cutscene from '../components/cutscene.svelte';

  </script>
  
  <div transition:fade="{{ duration: 1000 }}" class="main">
    <Cutscene image="scene-one-cutscene.png" sound="another-arni.mp3" text="Laro na!" link="/scene-one"/>
  </div>
  
  <style>
    /* Your styles here */
  </style>
  
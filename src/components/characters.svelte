<script>
    export let firstCharacter;
    export let secondCharacter;
    export let thirdCharacter;
  
    import { afterUpdate } from 'svelte';
  
    let firstSrc;
    let secondSrc;
    let thirdSrc;
  
    afterUpdate(() => {
      firstSrc = `/characters/${firstCharacter}`;
      secondSrc = `/characters/${secondCharacter}`;
      thirdSrc = `/characters/${thirdCharacter}`;
      console.log(firstSrc, secondSrc, thirdSrc);
    });
  </script>
  
  <style>
    .characters {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  
    .character-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .character-column img {
      max-width: 200px;
      max-height: 200px;
    }
  </style>
  
  <div class="characters">
    <div class="character-column">
      <img src={firstSrc} alt={firstCharacter} />
    </div>
    <div class="character-column">
      <img src={secondSrc} alt={secondCharacter} />
    </div>
    <div class="character-column">
      <img src={thirdSrc} alt={thirdCharacter} />
    </div>
  </div>
  
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

<style>
  .characters {
    display: flex;
    justify-content: space-between;
  }

  .character-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .character-column:first-child {
    margin-right: 0;
  }

  .character-column:last-child {
    margin-left: 0;
  }

  .character-column img {
    max-width: 50vw;
    max-height: 50vw;
    width: 100%; 
    height: auto; 
  }

  @media (max-width: 768px) {
    .character-column img {
      max-width: 70vw; 
      max-height: 70vw; 
    }
  }

  @media (max-width: 480px) {
    .character-column img {
      max-width: 90vw; 
      max-height: 90vw; 
    }
  }
</style>
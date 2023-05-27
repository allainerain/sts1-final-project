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
      max-width: 30vw;
      max-height: 30vw;
      /* transition: max-width 0.5s, max-height 0.5s; */
    }

    @media (max-width: 1500px) {
      .character-column img {
        max-width: 35vw;
        max-height: 35vw;
      }
    }
  
    @media (max-width: 1300px) {
      .character-column img {
        max-width: 40vw;
        max-height: 40vw;
      }
    }

    @media (max-width: 1000px) {
      .character-column img {
        max-width: 50vw;
        max-height: 50vw;
      }
    }
  
    @media (max-width: 700px) {
      .character-column img {
        max-width: 50vw;
        max-height: 50vw;
      }
    }
  
    @media (max-width: 400px) {
      .character-column img {
        max-width: 50vw;
        max-height: 50vw;
      }
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
  
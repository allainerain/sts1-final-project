<script>
  import { afterUpdate } from 'svelte';
  import Typewriter from 'svelte-typewriter';
  // import CrosswordPuzzle from './characters/manong-driver-happy.png';

  export let speaker;
  export let content;
  export let tooltips = [];
  export let character;

  let tooltipText = '';
  let finishedPrinting = false;

  function showTooltip(event, word) {
    const tooltip = tooltips.find(({ word: tooltipWord }) =>
      tooltipWord.toLowerCase() === word.toLowerCase()
    );
    if (tooltip) {
      tooltipText = tooltip.meaning;
      const tooltipElement = event.target.nextSibling;
      tooltipElement.style.top = `${event.clientY}px`;
      tooltipElement.style.left = `${event.clientX}px`;
    }
  }

  function hideTooltip() {
    tooltipText = '';
  }

  // TYPEWRITER EFFECT 
  function handleFinish() {
    finishedPrinting = true;
  }

  let contentArray = content.split(' ');
  let tooltipsExist = contentArray.some(word =>
    tooltips.find(({ word: tooltipWord }) => tooltipWord.toLowerCase() === word.toLowerCase())
  );

  afterUpdate(() => {
    const newContentArray = content.split(' ');
    if (contentArray.join(' ') !== newContentArray.join(' ')) {
      finishedPrinting = false;
      contentArray = newContentArray;
      tooltipsExist = contentArray.some(word =>
        tooltips.find(({ word: tooltipWord }) => tooltipWord.toLowerCase() === word.toLowerCase())
      );
    }
  });
</script>

<!-- <section> -->

  <div class="card">
    
    <div class="speaker">
      <h1>{speaker}</h1>
    </div>
  
    <div class="content">
      <!-- WITHOUT TYPEWRITER EFFECT -->
        <!-- <p>
          {#each content.split(/\b(\w+)\b/) as part, i}
            {#if i % 2 === 0}
              {part}
            {:else}
              {#if tooltips.find(({ word }) => word.toLowerCase() === part.toLowerCase())}
                <span
                  on:mouseenter={(event) => showTooltip(event, part)}
                  on:mouseleave={hideTooltip}
                  class="tooltip-word"
                >
                  {part}
                </span>
              {:else}
                {part}
              {/if}
            {/if}
          {/each}
        </p> -->
  
      <!-- WITH TYPEWRITER EFFECT -->
      {#if !finishedPrinting}
      <div class="content">
        <p> <Typewriter on:done={handleFinish}>{content}</Typewriter> </p>
      </div>
      {:else}
        <div class="content">
          <p>
            {#if tooltipsExist}
              {#each contentArray as word, i}
                {#if tooltips.find(({ word: tooltipWord }) => tooltipWord.toLowerCase() === word.toLowerCase())}
                  <span
                    on:mouseenter={(event) => showTooltip(event, word)}
                    on:mouseleave={hideTooltip}
                    class="tooltip-word"
                  >
                    {word}{' '}
                  </span>
                {:else}
                  {word}{' '}
                {/if}
              {/each}
            {:else}
              {#each contentArray as word, i}
                {word}{' '}
              {/each}
            {/if}
          </p>
        </div>
      {/if}
  
      {#if tooltipText}
        <div class="tooltip">{tooltipText}</div>
      {/if}
    </div>
  </div>
<!-- </section> -->


<style>
 
  .card {
    text-align: left;
    bottom:0;
    left:0;
    margin:0;
    padding:50px 100px 50px 100px;
    display: block;
    width:100%;
    height: 40%;
    background-color: black;
  }


  .tooltip-word {
    text-decoration: underline;
    cursor: pointer;
  }

  .tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 0.5em;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 9999;
  }

  img{
    height: 100px;
  }
</style>

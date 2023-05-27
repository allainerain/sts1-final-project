<script>
  import { afterUpdate } from 'svelte';
  import Typewriter from 'svelte-typewriter';

  export let speaker;
  export let content;
  export let tooltips = [];

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

<div class="card">
  <div class="speaker">
    <h1>{speaker}</h1>
  </div>

  {#if !finishedPrinting}
    <div class="content">
      <p>

        <Typewriter on:done={handleFinish}>{content}</Typewriter>
      </p>
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

<style>
  .card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin: 0 0 1em 0;
    text-align: center;
  }

  .speaker {
    /* border: 1px solid #aaa;
        border-radius:2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1); */
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
</style>

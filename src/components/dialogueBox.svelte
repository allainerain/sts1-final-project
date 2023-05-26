<!-- <script>
    export let speaker;
    export let content;
</script>

<div class="card">
    <div class = "speaker">
        <h1>{speaker}</h1>
    </div>
    
    <div class = "content">
        <p>{content}</p>
    </div>
</div>
  
<style>
    .card {
      width: 300px;
      border: 1px solid #aaa;
      border-radius: 2px;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
      padding: 1em;
      margin: 0 0 1em 0;
      text-align: center;
    }
    .speaker{
        /* border: 1px solid #aaa;
        border-radius:2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1); */
    }
</style> -->

<script>
  export let speaker;
  export let content;
  export let tooltips = [];

  let tooltipText = '';

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
</script>

<div class="card">
  <div class="speaker">
    <h1>{speaker}</h1>
  </div>

  <div class="content">
    <p>
      {#each content.split(/\b(\w+(?:-\w+)*)\b/g) as word}
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
    </p>
  </div>

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

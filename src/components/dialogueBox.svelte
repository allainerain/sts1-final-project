<script>
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
</style>
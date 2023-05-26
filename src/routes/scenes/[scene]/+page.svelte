<script>
    export let data;

</script>

<h1> Scene </h1>
<ul>
	{#each data.scenes as { sceneName, body }}
		<li><a href="/blog/{sceneName}">{sceneName}</a></li>
	{/each}
</ul>

<style>

</style>
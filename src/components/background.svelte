<script>
    export let background;
    import { afterUpdate } from 'svelte';

    let backgroundSrc;

    afterUpdate(() => {
        backgroundSrc = `/backgrounds/${background}`;
    });

</script>

<div class="background">
    <img src={backgroundSrc} alt='scene one background' />
</div>

<style>
    .background {
        width: 100%;
        height: 80vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background-position: center top; /* Adjust the position here */
    }

    @media (max-width: 1000px) {
      .background {
        height: 75vh;
      }
    }

    .background img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>
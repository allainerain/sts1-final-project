<script>
    export let background;
    import { afterUpdate } from 'svelte';

    let backgroundSrc;

    afterUpdate(() => {
        backgroundSrc = `/backgrounds/${background}`;
    });

</script>

<section>
    <div class="background">
        <img src={backgroundSrc} alt='scene one background' />
    </div>
</section>

<style>
    section{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: black;
    }
    .background {
        width: 100%;
        height: 80vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background-position: center top; /* Adjust the position here */
    }

    .background img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1500px) {
        .background {
        max-width: 82vw;
        margin: 0 8vw 0 8vw;
        }
    }


    @media (min-width: 1700px) {
      .background {
        max-width: 80vw;
        margin: 0 10vw 0 10vw;
      }
    }
</style>
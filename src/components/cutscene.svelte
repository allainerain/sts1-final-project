<script>
    export let image;
    export let text;
    export let link;

    import { afterUpdate } from 'svelte';

    let imageSrc;

    afterUpdate(() => {
        imageSrc = `/backgrounds/${image}`;
    });

</script>

<section class="card">
    <div class="image-wrapper">
        <img src={imageSrc} alt={imageSrc}/>
    </div>
    <div class="button-wrapper">
        <a href={link}>
            <button>{text}</button>
        </a>
    </div>
</section>

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .card {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: black;
    }

    .image-wrapper {
        flex-grow: 1;
    }

    .button-wrapper {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 10px;
    }

    button {
        font-family: 'Pangolin', cursive;
        font-size: x-large;
        background-color: rgb(239, 239, 239);
        box-shadow: none;
        border: 0px;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 10px;
        cursor: pointer;
        width: 200px;
    }

    @media (min-width: 1500px) {
        .card {
            max-width: 82vw;
            margin: 0 8vw;
        }

    }

    @media (min-width: 1700px) {
        .card {
            max-width: 80vw;
            margin: 0 10vw;
        }

    }
</style>

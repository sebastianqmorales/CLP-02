<script>
  export let props;
</script>

{#each props as props, index}
  {#if index % 2 === 0}
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={props.icon} alt={props.title} />
        <div>
          <h1 class="text-5xl font-bold">{props.title}</h1>
          <p class="py-6">
            {props.content}
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  {:else}
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={props.icon} alt={props.title} />
        <div>
          <h1 class="text-5xl font-bold">{props.title}</h1>
          <p class="py-6">
            {props.content}
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  {/if}
{/each}

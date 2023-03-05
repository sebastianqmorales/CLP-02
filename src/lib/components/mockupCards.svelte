<script>
  export let props;
</script>

<div class="flex flex-col items-center">
  <h1 class="text-6xl font-bold">Own the platform</h1>
  <p class="py-6">
    We give you the tools to own your social media feed. Build the experience
    you want, own your data and avoid platform bias.
  </p>
</div>
{#each props as props, index}
  {#if index % 2 === 0}
    <div class="hero bg-base-100">
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
    <div class="hero bg-base-100">
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

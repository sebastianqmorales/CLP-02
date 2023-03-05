<script>
  export let props;

  import CheckIcon from "$lib/assets/CheckIcon.svg";
</script>

<div class="flex flex-col items-center">
  <h1 class="text-6xl font-bold">Own the platform</h1>
  <p class="py-6 text-xl">
    We give you the tools to own your social media feed. Build the experience
    you want, own your data and avoid platform bias.
  </p>
</div>
{#each props as props, index}
  {#if index % 2 === 0}
    <div class="bg-base-100 py-8">
      <div class="lg:flex flex-row-reverse justify-between items-center">
        <img class="basis-2/5" src={props.icon} alt={props.title} />
        <div class="px-10">
          <img class="mb-5" src={props.topIcon} alt={props.title} />
          <h1 class="text-5xl font-bold">{props.title}</h1>
          <p class="py-6 text-lg">
            {props.content}
          </p>
          {#each props.iconDescription as description}
            <div class="flex gap-4 items-center my-4">
              <img src={CheckIcon} alt="Check Icon" />
              <div class="text-lg">{description}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <div class="bg-base-100 py-8">
      <div class="lg:flex  justify-between items-center">
        <img class="basis-2/5" src={props.icon} alt={props.title} />
        <div class="px-10">
          <img class="mb-5" src={props.topIcon} alt={props.title} />
          <h1 class="text-5xl font-bold">{props.title}</h1>
          <p class="py-6 text-lg">
            {props.content}
          </p>
          {#each props.iconDescription as description}
            <div class="flex gap-4 items-center my-4">
              <img src={CheckIcon} alt="Check Icon" />
              <div class="text-lg">{description}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/each}

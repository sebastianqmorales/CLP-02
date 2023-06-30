<script>
  export let props;

  import CheckIcon from "$lib/assets/CheckIcon.svg";
</script>

<div class="flex flex-col items-center">
  <h1 class="text-4xl md:text-6xl font-bold text-center">Own the platform</h1>
  <p class="text-[#475467] py-6 px-5 text-xl text-center">
    We give you the tools to own your social media feed. Build the experience
    you want, own your data and avoid platform bias.
  </p>
</div>
{#each props as props, index}
  {#if index % 2 === 0}
    <div class="md:flex flex-row-reverse justify-between items-center py-20">
      <img
        class="h-[600px] w-auto md:h-[400px] md:w-auto xl:h-[700px] xl:w-auto"
        src={props.icon}
        alt={props.title}
      />
      <div class="flex flex-col py-5 md:px-10">
        <img
          class="mb-5 self-center md:self-start"
          src={props.topIcon}
          alt={props.title}
        />
        <h1
          class="text-center md:text-left text-3xl md:text-5xl px-5 font-bold"
        >
          {props.title}
        </h1>
        <p class="text-[#475467] text-center md:text-left py-6 px-5 text-lg">
          {props.content}
        </p>
        {#each props.iconDescription as description}
          <div class="flex gap-4 md:gap-2 items-center my-4 px-5 md:px-0">
            <img src={CheckIcon} alt="Check Icon" />
            <div class="text-[#475467] text-lg">{description}</div>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div class="md:flex justify-between items-center py-20">
      <img class="basis-2/5" src={props.icon} alt={props.title} />
      <div class="flex flex-col py-5 md:px-10">
        <img
          class="mb-5 self-center md:self-start"
          src={props.topIcon}
          alt={props.title}
        />
        <h1
          class="text-center md:text-left text-3xl md:text-5xl px-5 font-bold"
        >
          {props.title}
        </h1>
        <p class="text-[#475467] text-center md:text-left py-6 px-5 text-lg">
          {props.content}
        </p>
        {#each props.iconDescription as description}
          <div class="flex gap-4 md:gap-2 items-center my-4 px-5 md:px-0">
            <img src={CheckIcon} alt="Check Icon" />
            <div class="text-[#475467] text-lg">{description}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
{/each}

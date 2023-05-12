<script>
  import { each } from "svelte/internal";
  import marketingBadge from "$lib/assets/marketing-badge.svg";
  import devBadge from "$lib/assets/dev-badge.svg";
  import remoteIcon from "$lib/assets/remote-icon.svg";
  import partimeIcon from "$lib/assets/part-time-icon.svg";

  export let props;
</script>

{#each props as props, index}
  <div class="flex flex-col my-10">
    <div
      class="card md:w-[700px] border-solid border-b-[1px] border-t-[1px] border-neutrals rounded-none drop-shadow-lg self-center"
    >
      <div class="card-body px-0 gap-4">
        <div class="flex flex-row gap-4">
          <h2 class="card-title text-left">{props.jobTitle}</h2>
          {#if props.jobTitle === "Marketing Specialist"}
            <img
              class="h-5 w-auto self-center"
              src={marketingBadge}
              alt="marketing badge"
            />
          {:else}
            <img
              class="h-5 w-auto self-center"
              src={devBadge}
              alt="marketing badge"
            />
          {/if}
        </div>
        <p>
          {props.jobExcerpt}
        </p>
        <div class="flex flex-row justify-between">
          <!-- <button class="btn btn-primary">Learn more</button> -->
          <div class="flex flex-row gap-4">
            <img
              class="h-5 w-auto self-center"
              src={remoteIcon}
              alt="remote icon"
            />
            <img
              class="h-5 w-auto self-center"
              src={partimeIcon}
              alt="part time icon"
            />
          </div>

          <label
            for={`job-modal-${index}`}
            class="p-3 rounded-md text-primary font-bold tracking-wide text-md cursor-pointer hover:bg-primary hover:text-white"
            >Learn more</label
          >
        </div>
      </div>
    </div>
  </div>

  <input type="checkbox" id={`job-modal-${index}`} class="modal-toggle" />
  <div class="modal">
    <div class="modal-box flex flex-col gap-4">
      <label
        for={`job-modal-${index}`}
        class="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="jobTitle text-center text-xl font-semibold">
        {props.jobTitle}
      </div>
      <div class="Cuatex-description text-center text-lg pt-4">
        {props.description}
      </div>
      <div>
        <div class="font-bold">Culture</div>
        <ul class="list-disc pl-8">
          <li>
            Speak openly with the co-founders and be part of a transparent team.
          </li>
          <li>Encouraging and iterating ideas.</li>
        </ul>
      </div>
      <div>
        <div class="font-bold">What you will do</div>
        <ul class="list-disc pl-8">
          {#each props.jobWork as work}
            <li>
              {work}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <div class="font-bold">What skills do you need?</div>
        <ul class="list-disc pl-8">
          {#each props.jobSkills as skill}
            <li>
              {skill}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <div class="font-bold">Additional info</div>
        {#each props.info as info}
          <div>
            {info}
          </div>
        {/each}
      </div>
      <div>
        <div class="font-bold">Application</div>
        <div class="description">
          Please apply for this position by filling out the following form:
        </div>
        <a class="appLink" href={props.applicationLink}>
          Click this link to fill out the application form.
        </a>
        <div class="description">
          We will contact you soon if you fit the criteria for this role. Thank
          you!
        </div>
      </div>
    </div>
  </div>
{/each}

<style>
  .appLink {
    color: #fe7b43;
  }

  .appLink:hover {
    text-decoration: underline #fe7b43;
  }
</style>

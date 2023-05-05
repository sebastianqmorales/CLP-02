<script>
  import { each } from "svelte/internal";

  export let props;
</script>

{#each props as props, index}
  <div class="flex flex-col my-10">
    <div
      class="card w-96 border-solid border-[1px] border-[#fe7b43] drop-shadow-lg self-center"
    >
      <div class="card-body items-center text-center">
        <h2 class="card-title">{props.jobTitle}</h2>
        <p>
          {props.description}
        </p>
        <div class="card-actions justify-end">
          <!-- <button class="btn btn-primary">Learn more</button> -->
          <label
            for={`job-modal-${index}`}
            class=" border border-primary p-3 rounded-md bg-primary text-white text-sm cursor-pointer"
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
        Cuatex is all about giving users control over their internet experience
        and ending platform manipulation and bias. We want to bridge the gap
        between data miners and users, giving users the chance to control their
        data and earn their data dignity. Our vision is to democratize the
        internet, increase participation in the internet economy, and empower
        users to take responsibility for their online experience.
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

<script>
  import LinkedInIcon from "$lib/assets/LinkedInIcon.svg";
</script>

<div class="card w-96 border-solid border-[1px] border-neutral drop-shadow-lg">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Fullstack software engineer</h2>
    <p>
      We are looking for a Fullstack engineer that is passionate about their
      industry.
    </p>
    <div class="card-actions justify-end">
      <!-- <button class="btn btn-primary">Learn more</button> -->
      <label
        for="my-modal"
        class=" border border-primary p-3 rounded-md bg-primary text-white text-sm cursor-pointer"
        >Learn more</label
      >
    </div>
  </div>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <label
      for="my-modal"
      class="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label
    >
    <form
      class="flex flex-col gap-5"
      name="email"
      method="POST"
      netlify-honeypot="nbot-field"
      data-netlify="true"
    >
      <p class="self-center text-xl font-bold">Be part of the new internet.</p>
      <input type="hidden" name="form-name" value="email" />
      <input
        name="name"
        id="name"
        class="input input-bordered w-full mt-10"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        id="email"
        class="input input-bordered w-full"
        type="text"
        placeholder="example@gmail.com"
      />
      <textarea
        name="details"
        id="details"
        rows="5"
        class="textarea textarea-bordered w-full"
        type="text"
        placeholder="Any feedback would be greatly appreciated."
      />
      <input
        for="my-modal"
        type="submit"
        class="btn btn-primary text-white w-[50%] self-center"
        value="Submit"
      />
    </form>
  </div>
</div>

<div class="hero min-h-screen bg-base-100 py-0 lg:py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <h1 class="text-6xl font-bold">Careers page coming soon</h1>
      <p class="pb-6 pt-3 text-2xl flex">
        In the mean time <a
          class="linkedin-link"
          href="https://www.linkedin.com/company/cuatex"
        >
          follow us on LinkedIn
          <img src={LinkedInIcon} alt="linked in icon" />
        </a>
        or feel free to leave us some feedback.
      </p>
      <form
        class="flex flex-col gap-5"
        name="email"
        method="POST"
        netlify-honeypot="nbot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="email" />
        <input
          name="name"
          id="name"
          class="input input-bordered w-full mt-10"
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          id="email"
          class="input input-bordered w-full"
          type="text"
          placeholder="example@gmail.com"
        />
        <textarea
          name="details"
          id="details"
          rows="5"
          class="textarea textarea-bordered w-full"
          type="text"
          placeholder="Any feedback would be greatly appreciated."
        />
        <input
          for="my-modal"
          type="submit"
          class="btn btn-primary text-white w-[50%] self-center"
          value="Submit"
        />
      </form>
    </div>
  </div>
</div>

<style>
  .linkedin-link {
    display: flex;
    gap: 13px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .linkedin-link:hover {
    text-decoration: underline;
    text-decoration-color: #fe7b43;
  }
</style>

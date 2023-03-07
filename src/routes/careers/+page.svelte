<div class="hero min-h-screen bg-base-100 py-0 lg:py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <h1 class="text-6xl font-bold">Coming soon</h1>
      <p class="pb-6 pt-3 text-2xl">
        In the mean time, feel free to leave us some feedback.
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
          class="btn btn-primary  text-white w-[50%] self-center"
          value="Submit"
        />
      </form>
    </div>
  </div>
</div>

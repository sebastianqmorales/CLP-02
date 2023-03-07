<script>
</script>

<div class="flex flex-col gap-4 justify-center py-20 mt-5 bg-[#F9FAFB]">
  <h1 class="text-5xl font-bold text-center">Sign up for our beta</h1>
  <p class="px-5 pb-10 pt-3 text-center">
    Reserve your username and receive a creator discount.
  </p>
  <div class="flex gap-4 justify-center">
    <!-- <button class="btn btn-primary">Learn more</button> -->
    <!-- <button class="btn btn-primary text-white">Get Started</button> -->
    <label for="my-modal" class="btn btn-primary text-white">Get started</label>
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
        class="btn btn-primary  text-white w-[50%] self-center"
        value="Submit"
      />
    </form>
  </div>
</div>

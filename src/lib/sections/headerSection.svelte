<script>
  import Mockup from "$lib/assets/MacbookPro16mockup.svg";
  import Mockup2 from "$lib/assets/HomePageMockup.svg";
</script>

<div class="hero min-h-screen bg-base-100 py-0 lg:py-10">
  <div class="hero-content text-center flex flex-col gap-12">
    <div class="max-w-6xl">
      <h1 class="text-4xl md:text-6xl font-bold">
        Own the internet, own your mind.
      </h1>
      <p class="text-[#475467] pb-6 pt-3 text-2xl">
        Powerful content algorithm, voting, moderation and monetization. Take
        charge of your feed - and finally control your mind.
      </p>
      <!-- <button class="btn btn-primary text-white">Sign up</button> -->
      <label for="my-modal" class="btn btn-primary text-white">Sign up</label>
    </div>
    <div class="mockup-window border border-base-300">
      <div class="border-t border-base-300">
        <img src={Mockup2} alt="mockup" />
      </div>
    </div>
  </div>
</div>

<!-- Modal popup -->
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

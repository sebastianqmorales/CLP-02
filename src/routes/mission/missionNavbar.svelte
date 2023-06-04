<script>
  import CuatexLogo from "$lib/assets/CuatexFullLogo.svg";

  let screenWidth;
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/careers">Careers</a></li>
        <li><a href="/mission">Mission</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/creators">Creators</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <!-- <a
        class=" border border-primary p-3 rounded-md bg-primary  text-white text-sm"
        >SIGN UP</a
      > -->
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

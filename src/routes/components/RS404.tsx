import RandomBackgroundDots from "./RandomBackgroundDots";
import { Link } from '@solidjs/router';

function RightSection() {
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
  <div class="px-4 py-5 my-5 text-center">
    <RandomBackgroundDots />
    <h1 class="display-5 fw-bold text-white">404</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-white">Page not found</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link href="/" type="button" class="btn btn-primary px-4 gap-3">Go to homepage</Link>
      </div>
    </div>
  </div>
</div>
    );
}

export default RightSection;
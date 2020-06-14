import { Testimonial } from "components/Testimoral";
import { DummyTexts } from "constants/DummyTexts";

export const AVATAR = "/resources/images/avatar/avatar.jpg";
export const JOSEPH = "/resources/images/avatar/joseph.webp";

export const MainTestimoral = () => (
  <div className="main-testimoral">
    <p>WHAT OUR CUSTOMERS ARE SAYING</p>
    <div className="main-testimoral-slide flex">
      <Testimonial
        comment={DummyTexts.REVIEW_1}
        avatar={JOSEPH}
        name={"JOSEPH DINGMAN"}
        role={"General Customer"}
      />
      <Testimonial
        comment={DummyTexts.REVIEW_2}
        avatar={AVATAR}
        name={"ERIC RUBIO"}
        role={"General Customer"}
      />
    </div>
  </div>
);

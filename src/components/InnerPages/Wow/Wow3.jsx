import Image from "next/image";
import interactive_bar from "../../../../images/interactive_bar.jpg";
import wow1 from "../../../../images/wow1.png";
import wow2 from "../../../../images/wow2.jpg";

import wow7 from "../../../../images/wow7.jpg";
export default function Wow3() {
  return (
    <div className="container">
      <div>
        <div
          className="d-flex justify-content-between gap-20 mt-100 "
          style={{ margin: "50px 0px" }}
        >
          <div>
            <Image style={{ width: "600px" }} src={interactive_bar} alt="" />
            <p style={{ padding: "30px" }}>
              Createabit interactive projection system can be projected on the
              normal floor, wall or window with any desired effect. It will show
              attractive effects by detecting people's actions on the projection
              screen. We provide professional service, tailored to your effects.
              We can even supply multiple display technology to make two or
              three projection sizes look like one projection image without any
              light gaps.
            </p>
          </div>
          <div>
            <h3>Benefits</h3>
            <p>
              Excite your customers with interactive bars Create a unique
              talking point environment where customers order more Keep
              customers engaged and entertained with games or ads in other areas
              and increase Revenue by up to 20% Increase revenues by renting
              your bar as media outlet
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-between gap-20 mt-100 "
          style={{ margin: "50px 0px" }}
        >
          <Image style={{ width: "600px" }} src={wow1} alt="" />
          <p style={{ padding: "30px" }}>
            Createabit interactive projection system can be projected on the
            normal floor, wall or window with any desired effect. It will show
            attractive effects by detecting people's actions on the projection
            screen. We provide professional service, tailored to your effects.
            We can even supply multiple display technology to make two or three
            projection sizes look like one projection image without any light
            gaps.
          </p>
        </div>
        <div
          className="d-flex justify-content-between gap-20"
          style={{ margin: "50px 0px" }}
        >
          <Image style={{ width: "600px" }} src={wow2} alt="" />
          <p style={{ padding: "30px" }}>
            Createabit interactive projection system can be projected on the
            normal floor, wall or window with any desired effect. It will show
            attractive effects by detecting people's actions on the projection
            screen. We provide professional service, tailored to your effects.
            We can even supply multiple display technology to make two or three
            projection sizes look like one projection image without any light
            gaps.
          </p>
        </div>
        <div
          className="d-flex justify-content-between gap-20"
          style={{ margin: "50px 0px" }}
        >
          <Image style={{ width: "600px" }} src={wow7} alt="" />
          <div style={{ padding: "30px" }}>
            <h3>Advantage:</h3>
            <li>Exciting to play and watch</li>
            <li> Move your body to play it’s magic!</li>
            <li>Easy and safe to use - It’s a complete virtual experience</li>
            <li>Large number of effects available</li>
            <li>Customer will never get bored</li>
            <li>Customizable to your needs</li>
            <li>Brand it, personalize it, build and design your own effects</li>
          </div>
        </div>
      </div>
    </div>
  );
}

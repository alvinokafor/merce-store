import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Instagram from '/assets/icons/instagram.svg'
import Facebook from '/assets/icons/facebook.svg'
import Twitter from '/assets/icons/twitter.svg'

export default function Promotions() {
  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="mb-8">
        <SectionTitle
          titleText="Get more customers!"
          titleColor="bg-uranian-blue"
        />
      </div>

      <p className="text-sonic-silver font-medium">
        50% of new customers explore products because the author sharing the
        work on the social media network. Gain your earnings right now! 🔥
      </p>

      <div className="mt-6 md:mt-4 flex items-center justify-between">
        <button className="promotion-btn">
            <img src={Facebook} alt="facebook" />
            <span className="promotion-btn-text">Facebook</span>
        </button>
        <button className="promotion-btn">
            <img src={Twitter} alt="twitter" />
            <span className="promotion-btn-text">Twitter</span>
        </button>
        <button className="promotion-btn">
            <img src={Instagram} alt="instagram" />
            <span className="promotion-btn-text">Instagram</span>
        </button>
      </div>

    </section>
  );
}

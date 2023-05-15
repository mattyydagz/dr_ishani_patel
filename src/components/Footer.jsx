import { tab, facebook, instagram, linkedin, linktree } from "../assets";
import { clinics } from "../constants";
import styles from "../style";

const ClinicDetails = ({
  title,
  book,
  address,
  location,
  phone,
  hours1,
  hours2,
  hours3,
  maps,
  img,
}) => (
  <div className="bg-primary mx-[6rem] pt-5 rounded-[10px]">
    <div className="flex flex-col justify-center items-center">
      <a
        className="flex flex-row"
        title="Book here."
        href={book}
        target="_blank"
      >
        <h4 className="font-regular font-normal text-[22px]">{title}</h4>
        <img src={tab} alt="freeicon" className="ml-2" />
      </a>
      <p className="font-regular font-normal text-[16px]">{address}</p>
      <p className="font-regular font-normal text-[16px]">{location}</p>
      <a href={`tel:${phone}`}>
        <p className="font-regular font-normal text-[16px]">{phone}</p>
      </a>
      <p className="font-regular font-normal text-[16px]">{hours1}</p>
      <p className="font-regular font-normal text-[16px]">{hours2}</p>
      <p className="font-regular font-normal text-[16px]">{hours3}</p>
      <a
        href={maps}
        className="w-[250px] h-[250px] rounded-[10px]"
        target="_blank"
      >
        <img
          src={img}
          alt="maps"
          className="mt-5 w-[100%] h-[100%] rounded-[10px] box-shadow-full service-card"
        />
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <section className={`grid grid-row-2 gap-8 ${styles.paddingY}`}>
      <div className="grid grid-cols-2 w-full">
        {clinics.map((clinic, index) => (
          <ClinicDetails key={clinic.id} {...clinic} index={index} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-[50px]">
        <a
          href="https://www.facebook.com/ishani.patel.7161"
          target="_blank"
          className="w-[32px] h-[32px] m-3"
        >
          <img
            src={facebook}
            alt="facebook"
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/drishanipatel.nd/"
          target="_blank"
          className="w-[32px] h-[32px] m-3"
        >
          <img
            src={instagram}
            alt="instagram"
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dr-ishani-patel-nd-708a38211/"
          target="_blank"
          className="w-[32px] h-[32px] m-3"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
        <a
          href="https://linktr.ee/drpatel.nd"
          target="_blank"
          className="w-[32px] h-[32px] m-3"
        >
          <img
            src={linktree}
            alt="linktree"
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;

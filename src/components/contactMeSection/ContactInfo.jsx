import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="pratappadhy2005@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+61 450 991 127" Image={FiPhone} />
      <SingleInfo text="Melbourne, Australia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

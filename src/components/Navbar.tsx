import React from "react";
import { gilda } from "@/lib/fonts";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="container py-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center text-oxfordblue">
            <div className={`text-2xl font-bold uppercase ${gilda.className}`}>
              somename
            </div>
            <div className={`font-bold uppercase ${gilda.className}`}>
              school
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 text-sm">
            <div className="hidden lg:flex flex-row items-center gap-4">
              <div className="flex flex-row items-center space-x-2">
                <Phone size={"20px"} />
                <div className="font-bold">+256 781147096</div>
              </div>
              <div>
                <Input type="search" placeholder="Search" />
              </div>
            </div>
            <div className="hidden lg:flex flex-row items-center text-oxfordblue">
              <Link className="font-bold" href={"/"}>
                Home
              </Link>
              <Link className="font-bold ml-6" href={"about"}>
                About
              </Link>
              <Link className="font-bold ml-6" href={"academics"}>
                Academics
              </Link>
              {/* <Link className="font-bold ml-6" href={""}>
                Students
              </Link> */}
              <Link className="font-bold ml-6" href={"parentsandguardians"}>
                Parents & Guardians
              </Link>
              <Link className="font-bold ml-6" href={"facultyandstaff"}>
                Faculty & Staff
              </Link>
              <Link className="font-bold ml-6" href={"contact"}>
                Contact
              </Link>
            </div>
            <div className="lg:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

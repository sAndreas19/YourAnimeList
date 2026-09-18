"use client";

import Link from "next/link";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-cards border-t border-primary/20 mt-auto">
      <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <h2 className="font-display font-bold text-2xl text-primary tracking-widest">
            YOUR ANIME LIST
          </h2>
          <p className="text-sm tracking-wide text-gray-400">
            © {currentYear} by{" "}
            <span className="font-bold text-white">sAndreas19</span>. All rights
            reserved.
          </p>
        </div>

        <div className="text-sm text-gray-400 text-center">
          <p>
            Built with <span className="text-primary font-bold">Next.js</span> &{" "}
            <span className="text-primary font-bold">Tailwind CSS</span>
          </p>
          <p className="italic text-xs mt-1">
            Challenge-Based Learning Project
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com/sAndreas19"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"
          >
            <GithubLogoIcon size={32} weight="fill" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hasan-lumbantoruan"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"
          >
            <LinkedinLogoIcon size={32} weight="fill" />
          </Link>
          <Link
            href="https://www.instagram.com/hasan_shb_"
            target="_blank"
            className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1"
          >
            <InstagramLogoIcon size={32} weight="fill" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

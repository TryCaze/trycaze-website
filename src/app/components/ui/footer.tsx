import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image"
import { useTranslations } from "next-intl";

export function FloatingDockDemo() {

  const t = useTranslations('Footer')

  const links = [
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-white" />
      ),
      href: "https://www.youtube.com/channel/UCICryVYQ_DfYHtulmoUAv3A",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-white" />
      ),
      href: "https://www.instagram.com/trycaze/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white" />
      ),
      href: "https://twitter.com/TryCaze",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white" />
      ),
      href: "https://github.com/TryCaze",
    },
  ];
  return (
    <>
    <section className="py-10 bg-slate-900 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div>
            <section>
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">{t('title')}</h2>
                        <a href="#" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                        Have questions?
                        </a>
                    </div>
                </div>
                    <div className="container mx-auto 2xl:px-12">
                        <div className="flex justify-center items-center mt-5">
                            <Image src="images/logo.svg" alt="logo" width={200} height={150} />
                        </div>
                    </div>
                </section>
        </div>

        <hr className="mt-16 mb-10 border-slate-600" />

        <div className="flex flex-wrap items-center justify-between">

            <ul className="flex items-center space-x-3 md:order-3">
                <div className="flex items-center justify-center w-full">
                    <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                    />
                </div>
            </ul>

            <p className="w-full mt-8 text-sm text-center text-white md:mt-0 md:w-auto md:order-2">© Copyright 2025, All Rights Reserved by TryCaze</p>
        </div>
    </div>
</section>

    </>
  );
}

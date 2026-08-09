import { useT } from "@features/i18n";

import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";

export function AboutSection() {
  const t = useT();

  return (
    <section
      className="scrollAnimated flex flex-col max-w-lg text-center justify-center items-center content-center"
      id="about"
    >
      <div className="group/avatar relative flex items-center justify-center mb-8">
        <div className="absolute -inset-1 animate-[spin_3s_linear_infinite] rounded-full bg-linear-to-tr from-black via-white to-black opacity-75 blur-xs transition-all duration-500 group-hover/avatar:opacity-100 group-hover/avatar:blur-sm" />

        <Avatar className="size-50 transition-transform duration-500 group-hover/avatar:scale-95">
          <AvatarImage alt="User story" src="/assets/avatar.webp" />
          <AvatarFallback>NH</AvatarFallback>
        </Avatar>
      </div>

      <h1 className="scrollAnimated text-4xl font-bold">{t("common.name")}</h1>
      <p className="scrollAnimated text-lg text-neutral-500 pt-3 leading-5">
        {t("common.description")}
      </p>
    </section>
  );
}
